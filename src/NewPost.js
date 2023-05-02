import { useState } from "react";

const NewPost = ({addComment}) => {
    const [username, changeUsername] = useState('');
    const [post, changePost] = useState('');
    const savePost = () => {
        addComment({
            username: username,
            post: post
        })
    }
    return (
        <div className="new-post">
            <input type="text" value={username} onChange={e => changeUsername(e.target.value)}/>
            <input type="text" value={post} onChange={e => changePost(e.target.value)} />
            <button onClick={savePost}>Submit</button>
        </div>
    )
}

export default NewPost;