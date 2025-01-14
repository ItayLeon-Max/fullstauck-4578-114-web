import { useNavigate, useParams } from 'react-router-dom';
import './EditPost.css';
import { useEffect } from 'react';
import profileService from '../../../services/profile';
import PostDraft from '../../../models/post/PostDraft';
import { useForm } from 'react-hook-form';
export default function EditPost() {

    const { id } = useParams<'id'>()
    const {handleSubmit, register, formState, reset} = useForm<PostDraft>()
    const navigate = useNavigate()

    useEffect(() => {
        if(id){
            profileService.getPost(id)
            .then(reset)
            .catch(alert)
        }
    },)

    async function submit(draft: PostDraft) {
        try{
            const {title, body} = draft
            await profileService.update(id!, {title, body})
            navigate('/profile')

        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="EditPost">
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
            <button type="submit">Update Post</button>
        </form>
    </div>
    )
}