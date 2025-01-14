import { useEffect, useState } from 'react'
import './Profile.css'
import PostModel from '../../../models/post/Post'
import profile from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import Comment from '../../../models/comment/Comment'
import Loading from '../../common/loading/Loading'

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

    function addComment(comment: Comment): void {
        const postsWithNewComment = [...posts]
        const postToAddCommentTo = postsWithNewComment.find(post => post.id === comment.postId)
        if(postToAddCommentTo){
            postToAddCommentTo.comments.unshift(comment)
        }

        setPosts(postsWithNewComment)
    }

    return (
        <div className='Profile'>

        { posts.length === 0 && <Loading />}

        { posts.length > 0 && <>
            <NewPost 
                addPost={addPost} 
            />
            {posts.map(p =>
                <Post
                    key={p.id}
                    post={p}
                    isAllowActions={true}
                    remove={remove}
                    addComment={addComment}
                />
            )}
        </>}

    </div>
    )
}