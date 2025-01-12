import { useForm } from 'react-hook-form';
import './NewPost.css';
import PostDraft from '../../../models/post/PostDraft';
import profile from '../../../services/profile';
import Post from '../../../models/post/Post';

interface NewPostProps {
    addPost: (post: Post) => void
}
export default function NewPost(props: NewPostProps) {


    const { register, handleSubmit, reset }  = useForm<PostDraft>()

    async function submit(draft: PostDraft) {
        try{
            const newPost = await profile.create(draft)
            props.addPost(newPost)
            reset()
        }catch(e){
            alert(e)
        }
    }

    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder='Title' {...register('title')} />
                <textarea placeholder='Content' {...register('body')}></textarea>
                <button type='submit'>Add Post</button>
            </form>
        </div>
    )
}