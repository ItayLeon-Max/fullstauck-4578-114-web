import CommentModel from '../../../models/comment/Comment'
import './Comment.css'

interface CommentProps {
    comment: CommentModel
}
export default function Comment(props: CommentProps): JSX.Element {

    const { user: { name }, body, createdAt} = props.comment

    const formattedDate = new Date(createdAt).toLocaleString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
    
    return (
        <div className='Comment'>
            <div>
                {name} said on {formattedDate}:
            </div>
            <div>
                {body}
            </div>
        </div>
    )
}