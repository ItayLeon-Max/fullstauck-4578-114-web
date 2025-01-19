import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './EditComment.css';
import comments from '../../../services/comments';
import CommentDraft from '../../../models/comment/commentDraft';

interface EditCommentProps {
    commentId: string;
    currentBody: string;
    onSave: (updatedBody: string) => void;
    onCancel: () => void;
}

export default function EditComment(props: EditCommentProps): JSX.Element {
    const { commentId, currentBody, onSave, onCancel } = props;

    const { register, handleSubmit, formState } = useForm<CommentDraft>({
        defaultValues: { body: currentBody },
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data: CommentDraft) => {
        try {
            setIsSubmitting(true);
            const updatedComment = await comments.updateComment(commentId, data);
            onSave(updatedComment.body);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            alert('Failed to update comment.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="EditComment" onSubmit={handleSubmit(onSubmit)}>
            <textarea
                {...register('body', {
                    required: 'Body is required',
                    minLength: {
                        value: 10,
                        message: 'Comment must be at least 10 characters long.',
                    },
                })}
                placeholder="Edit your comment..."
            />
            {formState.errors.body && <span className="error">{formState.errors.body.message}</span>}
            <div className="edit-comment-actions">
                <button type="button" onClick={onCancel} className="cancel-button">
                    Cancel
                </button>
                <button type="submit" className="save-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : 'Save'}
                </button>
            </div>
        </form>
    );
}