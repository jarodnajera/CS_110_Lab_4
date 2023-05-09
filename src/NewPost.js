import { useState } from "react";

const NewPost = ({addComment}) => {
    const [username, changeUsername] = useState('');
    const [post, changePost] = useState('');
    const [btn_enabled, changeBtnEnabled] = useState(true);
    const savePost = () => {
        addComment({
            username: username,
            post: post
        })
    }
    const handle_username_btn = e => {
        changeUsername(e.target.value);
        changeBtnEnabled(username === '' || post === '');
        console.log(username);
    }
    const handle_post_btn = e => {
        changePost(e.target.value);
        changeBtnEnabled(username === '' || post === '');
    }

    return (
        <div className="new-post">
            <input id="post-username" type="text" placeholder="Name..." value={username} onChange={handle_username_btn}></input>
            <textarea id="post-content" type="text" placeholder="Write a new post..." value={post} onChange={handle_post_btn} />
            <div id="submit-btn-container">
                <button id="submit-btn" disabled={btn_enabled} onClick={savePost}>Submit</button>
            </div>
        </div>
    )
}

export default NewPost;