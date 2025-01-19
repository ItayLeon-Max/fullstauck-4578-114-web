import { useForm } from 'react-hook-form';
import './NewComment.css';
import CommentDraft from '../../../models/comment/commentDraft';
import CommentService from '../../../services/comments';
import { useAppDispatch } from '../../../redux/hooks';
import { addComment as addCommentProfile} from '../../../redux/profileSlice'
import { addComment as addCommentFeed } from '../../../redux/feedSlice'
import { useState } from 'react';

interface NewCommentProps {
    postId: string;
}

export default function NewComment(props: NewCommentProps) {
    const { postId } = props

    const { 
        register, 
        handleSubmit, 
        formState, 
        reset 
    } = useForm<CommentDraft>()  

    const dispatch = useAppDispatch()

    async function submit(draft: CommentDraft) {
        try {
            const newComment = await CommentService.create(postId, draft)
            reset()
            dispatch(addCommentProfile(newComment))
            dispatch(addCommentFeed(newComment))
        } catch (e) {
            alert(e)
        }
    }

    const [isSubmitting] = useState<boolean>(false)

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
