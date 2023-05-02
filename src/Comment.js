const Comment = ({comment}) => {
    return (
        <div className="comment">
            <div id="comment-username">{comment.username}</div>
            <div id="comment-post">{comment.post}</div>
        </div>
    )
}

export default Comment;