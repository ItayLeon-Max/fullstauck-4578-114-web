import { useState } from 'react';
import './Post.css';
import PostModel from '../../../models/post/Post';
import profileService from '../../../services/profile';
import Comments from '../comments/Comments';
import { useAppDispatch } from '../../../redux/hooks';
import { removePost, update } from '../../../redux/profileSlice';
import { motion } from 'framer-motion';

interface PostProps {
    post: PostModel;
    isAllowActions?: boolean;
    isNew?: boolean;
}

export default function Post(props: PostProps): JSX.Element {
    const { post, isAllowActions = false, isNew = false } = props;
    const dispatch = useAppDispatch();
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [draftTitle, setDraftTitle] = useState(post.title);
    const [draftBody, setDraftBody] = useState(post.body);

    async function deletePost() {
        if (confirm('Are you sure you want to delete this post?')) {
            try {
                setIsDeleting(true);
                await profileService.remove(post.id);
                dispatch(removePost(post.id));
            } catch (e) {
                alert(e);
            } finally {
                setIsDeleting(false);
            }
        }
    }

    async function saveEdit() {
        try {
            setIsDeleting(true); // הצגת מצב טעינה
            const updatedPost = await profileService.update(post.id, {
                title: draftTitle,
                body: draftBody,
            });
    
            dispatch(update(updatedPost)); 
            setDraftTitle(updatedPost.title);
            setDraftBody(updatedPost.body);
            setIsEditing(false); 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            alert('Failed to save post changes');
        } finally {
            setIsDeleting(false); 
        }
    }

    function toggleLike() {
        setLiked(!liked);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    }

    return (
        <motion.div
            className={`Post ${isNew ? 'new-post' : ''}`}
            initial={{ opacity: 0, scale: 0.8, rotate: -5, backgroundColor: '#f0f8ff' }}
            animate={{ opacity: 1, scale: 1, rotate: 0, backgroundColor: 'white' }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            {isEditing ? (
                <div className="edit-post-form">
                    <input
                        type="text"
                        value={draftTitle}
                        onChange={(e) => setDraftTitle(e.target.value)}
                        placeholder="Title"
                        className="edit-input"
                    />
                    <textarea
                        value={draftBody}
                        onChange={(e) => setDraftBody(e.target.value)}
                        placeholder="Content"
                        className="edit-textarea"
                    ></textarea>
                    <div className="actions">
                    <button onClick={saveEdit} className="save-button" disabled={isDeleting}>
                            {isDeleting ? <span className="spinner"></span> : 'Save'}
                    </button>
                        <button onClick={() => setIsEditing(false)} className="cancel-button">
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <h2>{post.title}</h2>
                    <div>
                        by {post.user.name} at {new Date(post.createdAt).toLocaleString()}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                    {isAllowActions && (
                        <div className="actions">
                            <button
                                className={`like-button ${liked ? 'liked' : ''}`}
                                onClick={toggleLike}
                            >
                                {liked ? '👎 Unlike' : '👍 Like'}
                            </button>
                            <span className="like-count">
                                {likeCount} {likeCount === 1 ? 'Like' : 'Likes'}
                            </span>
                            <button
                                className="comment-button"
                                onClick={() => setShowComments(!showComments)}
                            >
                                {showComments ? 'Hide Comments' : 'Show Comments'}
                            </button>
                            <button className="edit-button" onClick={() => setIsEditing(true)}>
                                Edit
                            </button>
                            <button
                                className="delete-button"
                                onClick={deletePost}
                                disabled={isDeleting}
                            >
                                {isDeleting ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    )}
                    {showComments && (
                        <Comments
                            comments={post.comments}
                            postId={post.id}
                            removeComment={() => {}}
                        />
                    )}
                </>
            )}
        </motion.div>
    );
}