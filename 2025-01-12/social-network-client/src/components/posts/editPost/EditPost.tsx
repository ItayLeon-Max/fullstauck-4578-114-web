import { useParams } from 'react-router-dom';
import './EditPost.css';
import { useEffect, useState } from 'react';
import profile from '../../../services/auth-aware/profile';
import PostDraft from '../../../models/post/PostDraft';
import { useForm } from 'react-hook-form';
import ButtonLoading from '../../common/ButtonLoading/ButtonLoading';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { update } from '../../../redux/profileSlice';
import useService from '../../../hooks/useService';

export default function EditPost() {
    const { id } = useParams<'id'>();
    const { handleSubmit, register, formState, reset } = useForm<PostDraft>();
    const posts = useAppSelector(state => state.profile.posts);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const profileService = useService(profile);

    useEffect(() => {
        if (id) {
            const post = posts.find(p => p.id === id);
            if (post) {
                reset(post);
            } else {
                setIsLoading(true);
                profileService.getPost(id)
                    .then((post) => {
                        reset(post);
                    })
                    .catch((error) => {
                        console.error('Error fetching post:', error);
                        alert('Failed to fetch post details');
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            }
        }
    }, [id, posts, reset]);

    async function submit(draft: PostDraft) {
        if (!id) return;
        
        try {
            setIsLoading(true);
            const updatedPost = await profileService.update(id, draft);
            dispatch(update(updatedPost));
            reset(updatedPost);
            alert('Post updated successfully!');
        } catch (error) {
            console.error('Error updating post:', error);
            alert('Failed to save changes');
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <ButtonLoading />;
    }

    return (
        <div className="EditPost">
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        className="form-control"
                        {...register('title', {
                            required: {
                                value: true,
                                message: 'You must enter a title'
                            },
                            minLength: {
                                value: 10,
                                message: 'Title must be at least 10 characters'
                            }
                        })}
                    />
                    {formState.touchedFields.title && formState.errors.title && (
                        <span className="error">{formState.errors.title.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="body">Content</label>
                    <textarea
                        id="body"
                        className="form-control"
                        rows={10}
                        {...register('body', {
                            required: {
                                value: true,
                                message: 'Content is required'
                            },
                            minLength: {
                                value: 20,
                                message: 'Content must be at least 20 characters'
                            }
                        })}
                    />
                    {formState.touchedFields.body && formState.errors.body && (
                        <span className="error">{formState.errors.body.message}</span>
                    )}
                </div>

                <div className="actions">
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="update-button"
                    >
                        {isLoading ? 'Updating...' : 'Update Post'}
                    </button>
                </div>
            </form>
        </div>
    );
}