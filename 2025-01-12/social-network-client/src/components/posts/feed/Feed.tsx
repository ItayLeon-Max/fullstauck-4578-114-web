import { useEffect } from 'react'
import './Feed.css'
import Post from '../post/Post'
import CommentModel from '../../../models/comment/Comment'
import useTitle from '../../../hooks/useTitle'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init, setHasNewPosts } from '../../../redux/feedSlice'
import FeedService from '../../../services/auth-aware/feed'
import useService from '../../../hooks/useService'

export default function Feed() {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.feed.posts)
    const hasNewPosts = useAppSelector(state => state.feed.hasNewPosts)

    const feed = useService(FeedService)

    useTitle('Feed')

    useEffect(() => {
        feed.getFeed()
            .then(posts => dispatch(init(posts)))
            .catch(alert)
    }, [dispatch])

    function addComment(comment: CommentModel): void {
        const postToAddCommentTo = posts.find(post => post.id === comment.postId)
        if(postToAddCommentTo){
            postToAddCommentTo.comments.unshift(comment)
        }
        dispatch(init([...posts]))
    }

    function handleReloadFeed() {
        dispatch(init([]))
        feed.getFeed()
            .then(posts => {
                dispatch(init(posts))
                dispatch(setHasNewPosts(false))
            })
            .catch(alert)
    }

    return (
        <div className='Feed'>
            {hasNewPosts && (
                <div className="alert">
                    You have new posts in your feed.
                    <button onClick={handleReloadFeed}>Reload Feed</button>
                </div>
            )}
            
            {posts.map(p => <Post 
                            key={p.id} 
                            post={p}
                            addComment={addComment}
                            isAllowActions={false}
                            ></Post>)}
        </div>
    )
}