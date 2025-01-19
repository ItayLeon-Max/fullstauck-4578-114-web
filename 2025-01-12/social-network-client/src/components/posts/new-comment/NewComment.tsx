import { useForm } from 'react-hook-form';
import './NewComment.css';
import CommentDraft from '../../../models/comment/commentDraft';
import CommentService from '../../../services/comments';
import Comment from '../../../models/comment/Comment';
import { useState } from 'react';

interface NewCommentProps {
    postId: string;
    addComment(comment: Comment): void;
}

export default function NewComment(props: NewCommentProps): JSX.Element {
    const { postId, addComment } = props;

    const { register, handleSubmit, formState, reset } = useForm<CommentDraft>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function submit(draft: CommentDraft) {
        try {
            setIsSubmitting(true);
            const newComment = await CommentService.create(postId, draft);
            reset();
            addComment(newComment);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
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
                <span>{formState.errors.body?.message}</span>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding a comment...' : 'Add Comment'}
                </button>
            </form>
        </div>
    );
}