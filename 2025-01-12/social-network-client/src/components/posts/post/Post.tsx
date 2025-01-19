import './Post.css';
import PostModel from '../../../models/post/Post';
import profileService from '../../../services/profile';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Comments from '../comments/Comments';
import CommentModel from '../../../models/comment/Comment';

interface PostProps {
    post: PostModel;
    isAllowActions?: boolean;
    remove?(id: string): void;
    addComment(comment: CommentModel): void;
}

export default function Post(props: PostProps): JSX.Element {

    const [post, setPost] = useState(props.post);
    console.log(post); // So that I don't get an error about the post variable because it is not really used but it is necessary to appear
    const { title, body, createdAt, id } = props.post;
    const { name } = props.post.user;
    const navigate = useNavigate();

    const { addComment, isAllowActions } = props;

    const [liked, setLiked] = useState(false);
    const [animateHeart, setAnimateHeart] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false); 

    async function deleteMe() {
        if (props.remove && confirm('Are you sure you want to delete this post?')) {
            try {
                setIsDeleting(true);
                await profileService.remove(id);
                props.remove(id);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (e) {
                alert('Failed to delete post');
            } finally {
                setIsDeleting(false); 
            }
        }
    }

    function toggleLike() {
        setLiked(!liked);
        setAnimateHeart(true);

        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));

        setTimeout(() => {
            setAnimateHeart(false);
        }, 500);
    }

    function editPost() {
        navigate(`/edit/${id}`);
    }

    function toggleComments() {
        setShowComments(!showComments);
    }

    function removeComment(commentId: string): void {
        const updatedComments = props.post.comments.filter((comment) => comment.id !== commentId);
        props.post.comments = updatedComments;
        setPost({ ...props.post }); 
    }

    return (
        <div className="Post">
            <h2>{title}</h2>
            <div>
                by {name} at {new Date(createdAt).toLocaleString()}
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            {isAllowActions && (
                <div className="actions">
                    <button
                        className={`like-button ${liked ? 'liked' : ''}`}
                        onClick={toggleLike}
                    >
                        <div className={`heart-animation ${animateHeart ? 'animate' : ''}`}></div>
                        {liked ? '👎 Unlike' : '👍 Like'}
                    </button>
                    <span className="like-count">{likeCount} {likeCount === 1 ? 'Like' : 'Likes'}</span>
                    <button className="comment-button" onClick={toggleComments}>
                        {showComments ? 'Hide Comments' : 'Show Comments'}
                    </button>
                    <button className="edit-button" onClick={editPost}>Edit</button>
                    <button
                        className="delete-button"
                        onClick={deleteMe}
                        disabled={isDeleting} 
                    >
                        {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>
                </div>
            )}
            {showComments && props.post?.comments && (
                <Comments
                    comments={props.post.comments}
                    postId={id}
                    addComment={addComment}
                    removeComment={removeComment}
                />
            )}
        </div>
    );
}

