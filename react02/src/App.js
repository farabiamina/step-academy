import './App.css';
import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id: "1", title: "title 1", body: "description 1"},
    {id: "2", title: "title 2", body: "description 2"},
    {id: "3", title: "title 3", body: "description 3"},
  ]);


  const addPost = (newPost) => {
      setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm add={addPost} />
        {
            posts.length !== 0
                ? <PostList posts={posts} remove={removePost}/>
                : <div>No Posts</div>
        }
    </div>
  );
}

export default App;
