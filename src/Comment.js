import { useState } from "react";

const Comment = ({content}) => {
    const [votes, changeVotes] = useState(0);

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
        </div>
        
    )
}

export default Comment;