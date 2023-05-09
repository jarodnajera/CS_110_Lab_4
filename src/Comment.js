import { useState } from "react";
import NewPost from "./NewPost";

const Comment = ({content, depth}) => {
    const [votes, changeVotes] = useState(0);
    const [reply, changeReply] = useState(false);
   
    const addReply = (reply) => {
        content.replies.push(reply);
        changeReply(!reply);
    }
    

    return (
        <div className="comment-wrapper">
            <div className="comment-vote-container">
                <div className="comment-content">
                    <div className="comment-username">{content.username}</div>
                    <div className="comment-post">{content.post}</div>
                </div>
                <div className="vote-btn">
                    <button className="up-vote" onClick={() => changeVotes(votes + 1)}>↑</button>
                    <div className="votes">{votes}</div>
                    <button className="down-vote" onClick={() => changeVotes(votes - 1)}>↓</button>
                </div>
            </div>
            <div className="reply-btn-container">
                {depth < 3 ? <button className="reply-btn" onClick={() => {changeReply(!reply)}}>Reply</button>: ''}
            </div>
            <div className="reply-container">
                {reply === true ? <NewPost addComment={addReply}></NewPost> : ''}
                {content.replies.map((r) => (
                    <Comment content={r} depth={depth + 1}></Comment>
                ))}
            </div>
        </div>
        
    )
}

export default Comment;