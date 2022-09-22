import './App.css';
import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id: "1", title: "samsung", body: "great phone", done: false},
    {id: "2", title: "apple", body: "overpriced", done: false},
    {id: "3", title: "huawei", body: "china phone", done: false},
  ]);


  const addPost = (newPost) => {
      setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (selectedSort) => {
    setPosts([...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])));
  }

  const toggle = (id) => {
    setPosts([...posts].map((post) => post.id === id ? {...post, done: !post.done} : {...post}));
  }

  return (
    <div className="App">
      <PostForm sort={sortPosts} add={addPost} />
        {
            posts.length !== 0
                ? <PostList toggle={toggle} posts={posts} remove={removePost} />
                : <div>No Posts</div>
        }
    </div>
  );
}

export default App;
