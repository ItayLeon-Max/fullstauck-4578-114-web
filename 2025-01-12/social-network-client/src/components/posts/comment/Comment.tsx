import { useState } from 'react';
import CommentModel from '../../../models/comment/Comment';
import EditComment from '../editComment/EditComment';
import './Comment.css';

interface CommentProps {
    comment: CommentModel
    onDelete(commentId: string): void;
}

export default function Comment(props: CommentProps): JSX.Element {
    const { user: { name }, body, createdAt, id } = props.comment;
    const { onDelete } = props;

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

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this comment?')) {
            onDelete(id);
        }
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
                    <button className="action-button delete-button" onClick={handleDelete} >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}