import { useParams } from 'react-router-dom';
import './EditPost.css';
import { useEffect } from 'react';
import profileService from '../../../services/profile';
import PostDraft from '../../../models/post/PostDraft';
import { useForm } from 'react-hook-form';
import ButtonLoading from '../../common/ButtonLoading/ButtonLoading';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { update } from '../../../redux/profileSlice';

export default function EditPost() {

    const { id } = useParams<'id'>()
    const {handleSubmit, register, formState, reset} = useForm<PostDraft>()
    const posts = useAppSelector(state => state.profile.posts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(id) {
            const post = posts.find(p => p.id === id)
            if (post) {
                reset(post)
            } else {
                profileService.getPost(id)
                    .then(reset)
                    .catch(alert)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                const updatedPost = await profileService.update(id, draft);
                dispatch(update(updatedPost)); 
                reset(updatedPost); 
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            alert('Failed to save changes');
        }
    }

    return (
        <div className="EditPost">
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit(submit)}>
                <input
                    type="text"
                    placeholder="Title"
                    {...register('title', {
                        required: {
                            value: true,
                            message: 'You must enter a title',
                        },
                        minLength: {
                            value: 10,
                            message: 'Title must be at least 10 characters',
                        },
                    })}
                />
                {formState.touchedFields.title && formState.errors.title && (
                    <span className="error">{formState.errors.title.message}</span>
                )}
                <textarea
                    placeholder="Content"
                    {...register('body', {
                        required: {
                            value: true,
                            message: 'You must enter a body',
                        },
                        minLength: {
                            value: 20,
                            message: 'Body must be at least 20 characters',
                        },
                    })}
                ></textarea>
                {formState.touchedFields.body && formState.errors.body && (
                    <span className="error">{formState.errors.body.message}</span>
                )}
                <button type="submit" disabled={formState.isSubmitting}>Update Post</button>
            </form>
            {formState.isSubmitting && <ButtonLoading />}
        </div>
    )
}