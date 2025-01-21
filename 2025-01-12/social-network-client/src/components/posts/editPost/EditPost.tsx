import { useParams } from 'react-router-dom';
import './EditPost.css';
import { useEffect, useState, useRef } from 'react';
import profileService from '../../../services/profile';
import PostDraft from '../../../models/post/PostDraft';
import { useForm } from 'react-hook-form';
import ButtonLoading from '../../common/ButtonLoading/ButtonLoading';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { update } from '../../../redux/profileSlice';

export default function EditPost() {
    const { id } = useParams<'id'>();
    const { handleSubmit, register, formState, reset } = useForm<PostDraft>();
    const posts = useAppSelector(state => state.profile.posts);
    const dispatch = useAppDispatch();
    const [content, setContent] = useState('');
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(id) {
            const post = posts.find(p => p.id === id);
            if (post) {
                reset(post);
                setContent(post.body);
            } else {
                profileService.getPost(id)
                    .then((post) => {
                        reset(post);
                        setContent(post.body);
                    })
                    .catch(alert);
            }
        }
    }, [id, posts, reset]);

    const formatText = (command: string, value?: string) => {
        document.execCommand(command, false, value);
        if (editorRef.current) {
            setContent(editorRef.current.innerHTML);
            editorRef.current.focus();
        }
    };

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                const updatedPost = await profileService.update(id, {
                    ...draft,
                    body: content
                });
                dispatch(update(updatedPost));
                reset(updatedPost);
                setContent(updatedPost.body);
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
                <div className="edit-title-section">
                    <input
                        type="text"
                        placeholder="Title"
                        className="title-input"
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
                </div>
                
                <div className="editor-container">
                    <div className="toolbar">
                        <button type="button" onClick={() => formatText('bold')} className="tool-button">
                            B
                        </button>
                        <button type="button" onClick={() => formatText('italic')} className="tool-button">
                            I
                        </button>
                        <button type="button" onClick={() => formatText('underline')} className="tool-button">
                            U
                        </button>
                        <span className="divider">|</span>
                        <button type="button" onClick={() => formatText('justifyLeft')} className="tool-button">
                            ←
                        </button>
                        <button type="button" onClick={() => formatText('justifyCenter')} className="tool-button">
                            ≡
                        </button>
                        <button type="button" onClick={() => formatText('justifyRight')} className="tool-button">
                            →
                        </button>
                    </div>
                    <div
                        ref={editorRef}
                        className="edit-content"
                        contentEditable={true}
                        dangerouslySetInnerHTML={{ __html: content }}
                        onInput={(e) => setContent(e.currentTarget.innerHTML)}
                        role="textbox"
                        aria-label="Content editor"
                    />
                </div>

                <div className="actions">
                    <button 
                        type="submit" 
                        disabled={formState.isSubmitting}
                        className="update-button"
                    >
                        {formState.isSubmitting ? 'Updating...' : 'Update Post'}
                    </button>
                </div>
            </form>
            {formState.isSubmitting && <ButtonLoading />}
        </div>
    );
}