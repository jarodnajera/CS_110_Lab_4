import { useState } from 'react';
import './App.css';
import NewPost from './NewPost';
import Comment from './Comment';

function App() {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="post-container">
          <div id="title">
            New Post
          </div>
          <NewPost addComment={addComment} />
        </div>
        <div className="comment-container">
          {comments.map((c) => (
            <Comment content={c} depth={1}></Comment>
          ))}
        </div>
      </header>
    </div>
    
  );
}

export default App;
