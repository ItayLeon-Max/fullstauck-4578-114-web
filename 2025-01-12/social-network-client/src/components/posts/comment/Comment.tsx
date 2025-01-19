import { useState } from 'react';
import CommentModel from '../../../models/comment/Comment';
import comments from '../../../services/comments';
import EditComment from '../editComment/EditComment';
import './Comment.css';

interface CommentProps {
    comment: CommentModel;
    postId: string;
    onDelete: () => void;
}

export default function Comment(props: CommentProps): JSX.Element {
    const { comment, onDelete } = props;
    const { user: { name }, body, createdAt, id } = comment;

    const formattedDate = new Date(createdAt).toLocaleString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [commentBody, setCommentBody] = useState(body);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this comment?')) {
            try {
                setIsDeleting(true);
                await comments.deleteComment(id);
                onDelete(); // Call the onDelete callback from props
            } catch (error) {
                console.error('Failed to delete comment:', error);
                alert('Failed to delete comment');
            } finally {
                setIsDeleting(false);
            }
        }
    };

    const toggleLike = () => {
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
        setLiked(!liked);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleSaveEdit = (updatedBody: string) => {
        setCommentBody(updatedBody);
        setIsEditing(false);
    };

    return (
        <div className="Comment">
            <div className="comment-header">
                <span className="comment-author">{name}</span>
                <span className="comment-date">on {formattedDate}</span>
            </div>
            <div className="comment-body">
                {isEditing ? (
                    <EditComment
                        commentId={id}
                        currentBody={commentBody}
                        onSave={handleSaveEdit}
                        onCancel={handleCancelEdit}
                    />
                ) : (
                    commentBody
                )}
            </div>
            {!isEditing && (
                <div className="comment-actions">
                    <button className={`action-button like-button ${liked ? 'liked' : ''}`} onClick={toggleLike}>
                        {liked ? 'Unlike' : 'Like'} ({likeCount})
                    </button>
                    <button className="action-button reply-button" onClick={handleEditClick}>
                        Edit
                    </button>
                    <button className="action-button delete-button" onClick={handleDelete} disabled={isDeleting}>
                        {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>
                </div>
            )}
        </div>
    );
}