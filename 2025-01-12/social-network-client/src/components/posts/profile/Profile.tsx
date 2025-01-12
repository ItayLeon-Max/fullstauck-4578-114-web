import { useEffect, useState } from 'react'
import './Profile.css'
import PostModel from '../../../models/post/Post'
import profile from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'

export default function Profile(): JSX.Element {

    useEffect(() => {
        document.title = 'Profile'
    }, [])

    // posts: Post[]
    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        // useEffect disallows the callback function to be async
        // so we either use then:
        profile.getProfile()
            .then(setPosts)
            .catch(alert)
    }, [])

    function remove(id: string): void {
        // remove the post from the state
        const index = posts.findIndex(p => p.id === id)
        if(index > -1){
            posts.splice(index, 1)
            setPosts([...posts])
        }
    }

    function addPost(post: PostModel): void {
        setPosts([post, ...posts])
    }

    return (
        <div className='Profile'>
            <NewPost addPost={addPost} />
            {posts.map(p => 
                        <Post 
                            key={p.id} 
                            post={p}
                            remove={remove}
                            isAllowActions={false}
                            >
                            </Post>)}
        </div>
    )
}