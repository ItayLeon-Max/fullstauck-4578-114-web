import { useState } from 'react';
import CommentModel from '../../../models/comment/Comment';
import Comment from '../comment/Comment';
import NewComment from '../new-comment/NewComment';
import commentsService from '../../../services/comments';

interface CommentsProps {
    comments: CommentModel[];
    postId: string;
    addComment(comment: CommentModel): void;
    removeComment(commentId: string): void;
}

export default function Comments(props: CommentsProps): JSX.Element {
    const { comments, postId, addComment } = props;

    const [currentComments, setCurrentComments] = useState(comments);

    const deleteComment = async (commentId: string) => {
        try {
            console.log(`Deleting comment with id: ${commentId}`);
            await commentsService.deleteComment(commentId);
            setCurrentComments((prevComments) =>
                prevComments.filter((comment) => comment.id !== commentId)
            );
        } catch (error) {
            console.error('Failed to delete comment', error);
            alert('Failed to delete comment');
        }
    };

    

    return (
        <div className="Comments">
            <div>
                total comments: {currentComments.length}
            </div>
            <div>
                <NewComment postId={postId} addComment={addComment} />
            </div>
            {currentComments.map((c) => (
                <Comment
                    key={c.id}
                    comment={c}
                    onDelete={deleteComment}
                />
            ))}
        </div>
    );
}