import CommentModel from '../../../models/comment/Comment';
import Comment from '../comment/Comment';
import NewComment from '../new-comment/NewComment';

interface CommentsProps {
    comments: CommentModel[];
    postId: string;
    removeComment(commentId: string): void;
}

export default function Comments(props: CommentsProps): JSX.Element {
    const { comments, postId, removeComment } = props;

    return (
        <div className="Comments">
            <div>
                total comments: {comments.length}
            </div>
            <div>
                <NewComment postId={postId} />
            </div>
            {comments.map((c) => (
                <Comment
                    key={c.id}
                    comment={c}
                    postId={postId}
                    onDelete={() => removeComment(c.id)}
                />
            ))}
        </div>
    );
}