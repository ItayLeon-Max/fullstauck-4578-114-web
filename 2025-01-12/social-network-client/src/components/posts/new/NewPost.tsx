import { useForm } from 'react-hook-form';
import './NewPost.css';
import PostDraft from '../../../models/post/PostDraft';
import profile from '../../../services/profile';
import { useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { newPost } from '../../../redux/profileSlice';

export default function NewPost() {
    const { register, handleSubmit, reset, formState } = useForm<PostDraft>({
        mode: 'onTouched',
    });

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();

    async function submit(draft: PostDraft) {
        try {
            setIsLoading(true);
            const newPostFromServer = await profile.create(draft);
            const postWithNew = { ...newPostFromServer, isNew: true };
            dispatch(newPost(postWithNew));
            reset();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            alert('Failed to add post');
        } finally {
            setIsLoading(false);
            reset();
        }
    }

    return (
        <div className="NewPost">
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
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding a post...' : 'Add Post'}
                </button>
            </form>
        </div>
    );
}