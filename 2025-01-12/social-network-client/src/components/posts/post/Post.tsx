import './Post.css'
import PostModel from '../../../models/post/Post'
import profileService from '../../../services/profile'
import { useState } from 'react'

interface PostProps {
    post: PostModel
    isAllowActions?: boolean
    remove? (id: string): void
}

export default function Post(props: PostProps): JSX.Element {
    const { title, body, createdAt, id } = props.post
    const { name } = props.post.user

    const [liked, setLiked] = useState(false)
    const [animateHeart, setAnimateHeart] = useState(false)
    const [likeCount, setLikeCount] = useState(0)

    async function deleteMe() {
        if (props.remove && confirm('Are you sure you want to delete this post?')) {
            try {
                await profileService.remove(id)
                props.remove(id)
            } catch (e) {
                alert(e)
            }
        }
    }

    function toggleLike() {
        setLiked(!liked)
        setAnimateHeart(true)

        setLikeCount((prev) => (liked ? prev - 1 : prev + 1))

        setTimeout(() => {
            setAnimateHeart(false)
        }, 500)
    }

    return (
        <div className="Post">
        <div>{title}</div>
        <div>
            by {name} at {createdAt}
        </div>
        <div>{body}</div>
        <div className="actions">
            <button
                className={`like-button ${liked ? 'liked' : ''}`}
                onClick={toggleLike}
            >
                <div className={`heart-animation ${animateHeart ? 'animate' : ''}`}>
                    ❤️
                </div>
                {liked ? 'Unlike' : 'Like'}
            </button>
            <span className="like-count">{likeCount} {likeCount === 1 ? 'Like' : 'Likes'}</span>
            <button className="comment-button">Comment</button>
            <button className="share-button">Share</button>
            <button className="delete-button" onClick={deleteMe}>
                Delete
            </button>
        </div>
    </div>
    )
}