import { useForm } from 'react-hook-form';
import './NewComment.css';
import CommentDraft from '../../../models/comment/commentDraft';
import CommentService from '../../../services/comments';
import Comment from '../../../models/comment/Comment';

interface NewCommentProps {
    postId: string;
    addComment(comment: Comment): void
}
export default function NewComment(props: NewCommentProps): JSX.Element {

    const {postId, addComment} = props;

    const {register, handleSubmit, formState, reset} = useForm<CommentDraft>();

    async function submit(draft: CommentDraft) {
        try {
            const newComment = await CommentService.create(postId, draft);
            reset();
            addComment(newComment);
        } catch (error) {
            alert('Failed to add comment');
        }
    }

    return (
        <div className="NewComment">
            <h2>New Comment</h2>
            <form onSubmit={handleSubmit(submit)}>
                <textarea {...register('body', {
                    required: {
                        value: true,
                        message: 'Comment is required'
                    },
                    minLength: {
                        value: 20,
                        message: 'Comment must be at least 20 characters'
                    }
                })} placeholder="Enter your comment here"></textarea>
                <span>{formState.errors.body?.message}</span>
                <button>Add Comment</button>
            </form>
        </div>
    )
}