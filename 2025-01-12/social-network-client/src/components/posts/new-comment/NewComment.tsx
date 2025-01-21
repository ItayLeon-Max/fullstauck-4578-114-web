import { useForm } from 'react-hook-form';
import './NewComment.css';
import CommentDraft from '../../../models/comment/commentDraft';
import { useAppDispatch } from '../../../redux/hooks';
import { addComment as addCommentProfile} from '../../../redux/profileSlice';
import { addComment as addCommentFeed } from '../../../redux/feedSlice';
import { useState } from 'react';
import CommentService from '../../../services/auth-aware/comments';
import useService from '../../../hooks/useService';

interface NewCommentProps {
    postId: string;
}

export default function NewComment(props: NewCommentProps) {
    const { postId } = props;
    const { register, handleSubmit, formState, reset } = useForm<CommentDraft>();
    const dispatch = useAppDispatch();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const comments = useService(CommentService);

    async function submit(draft: CommentDraft) {
        try {
            setIsSubmitting(true);
            const newComment = await comments.create(postId, draft);  // שימוש ב-comments במקום CommentService
            reset();
            dispatch(addCommentProfile(newComment));
            dispatch(addCommentFeed(newComment));
        } catch (error) {
            console.error('Error adding comment:', error);
            alert('Failed to add comment');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="NewComment">
            <h2>New Comment</h2>
            <form onSubmit={handleSubmit(submit)}>
                <textarea
                    {...register('body', {
                        required: {
                            value: true,
                            message: 'Comment is required',
                        },
                        minLength: {
                            value: 20,
                            message: 'Comment must be at least 20 characters',
                        },
                    })}
                    placeholder="Enter your comment here"
                ></textarea>
                {formState.errors.body && (
                    <span className="error">{formState.errors.body.message}</span>
                )}
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding a comment...' : 'Add Comment'}
                </button>
            </form>
        </div>
    );
}