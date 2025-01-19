// Post.tsx
import { useState } from 'react';
import './Post.css';
import PostModel from '../../../models/post/Post';
import profileService from '../../../services/profile';
import { useNavigate } from 'react-router-dom';
import Comments from '../comments/Comments';
import { useAppDispatch } from '../../../redux/hooks';
import { removePost } from '../../../redux/profileSlice';
import { motion } from 'framer-motion';

interface PostProps {
    post: PostModel;
    isAllowActions?: boolean;
    isNew?: boolean;
}

export default function Post(props: PostProps): JSX.Element {
    const { post, isAllowActions = false, isNew = false } = props;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    async function deletePost() {
        if(confirm('Are you sure you want to delete this post?')) {
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

    function toggleLike() {
        setLiked(!liked);
        setLikeCount(prev => liked ? prev - 1 : prev + 1);
    }

    return (
        <motion.div 
            className={`Post ${isNew ? 'new-post' : ''}`}
            initial={{ opacity: 0, scale: 0.8, rotate: -5, backgroundColor: '#f0f8ff' }}
            animate={{ opacity: 1, scale: 1, rotate: 0, backgroundColor: 'white' }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
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
                    <button 
                        className="edit-button"
                        onClick={() => navigate(`/edit/${post.id}`)}
                    >
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
        </motion.div>
    );
}