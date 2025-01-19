import { useState } from 'react';
import CommentModel from '../../../models/comment/Comment';
import Comment from '../comment/Comment';
import NewComment from '../new-comment/NewComment';

interface CommentsProps {
    comments: CommentModel[];
    postId: string;
    removeComment(commentId: string): void;
}

export default function Comments(props: CommentsProps): JSX.Element {
    const { comments, postId } = props;

    const [currentComments ] = useState(comments);


    

    return (
        <div className="Comments">
            <div>
                total comments: {currentComments.length}
            </div>
            <div>
                <NewComment
                 postId={postId}
                 />
            </div>
            {currentComments.map((c) => (
                <Comment
                    key={c.id}
                    comment={c}
                />
            ))}
        </div>
    );
}