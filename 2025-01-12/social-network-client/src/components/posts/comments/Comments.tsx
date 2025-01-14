
import CommentModel from '../../../models/comment/Comment'
import Comment from '../comment/Comment'
import NewComment from '../new-comment/NewComment'

interface CommentsProps {
    comments: CommentModel[]
    postId: string
    addComment(comment: CommentModel): void
}
export default function Comments(props: CommentsProps): JSX.Element {

    const { comments, postId, addComment} = props

    return (
        <div className='Comments'>
            <div>
                total comments: {comments.length}   
            </div>
            <div>
                <NewComment 
                    postId={postId}
                    addComment={addComment}
                />
            </div>
            {comments.map(c =>
                <Comment
                    key={c.id}
                    comment={c}
                />)
            }
        </div>
    )
}