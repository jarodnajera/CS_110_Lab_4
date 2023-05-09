import { useState } from "react";
import NewPost from "./NewPost";

const Comment = ({content}) => {
    const [votes, changeVotes] = useState(0);
    const [reply, changeReply] = useState(0);

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
                <button className="reply-btn">Reply</button>
            </div>
            <div className="reply-container" onClick={() => {changeReply(reply + 1); console.log(reply)}}>{reply === 1 ? <NewPost></NewPost> : ''}</div>
        </div>
        
    )
}

export default Comment;