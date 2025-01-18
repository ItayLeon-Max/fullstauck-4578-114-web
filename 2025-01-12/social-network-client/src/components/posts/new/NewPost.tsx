import { useForm } from 'react-hook-form';
import './NewPost.css';
import PostDraft from '../../../models/post/PostDraft';
import profile from '../../../services/profile';
import Post from '../../../models/post/Post';
import ButtonLoading from '../../common/ButtonLoading/ButtonLoading';
import { useState } from 'react';

interface NewPostProps {
    addPost: (post: Post) => void;
}

export default function NewPost(props: NewPostProps) {
    const { register, handleSubmit, reset, formState } = useForm<PostDraft>({
        mode: 'onTouched',
    });

    const [isLoading, setIsLoading] = useState(false);

    async function submit(draft: PostDraft) {
        try {
            setIsLoading(true);
            const newPost = await profile.create(draft);
            props.addPost(newPost);
            reset();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            alert('Failed to add post');
        } finally {
            setIsLoading(false);
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
                    {isLoading ? <ButtonLoading /> : 'Add Post'}
                </button>
            </form>
        </div>
    );
}