import React, {useState} from 'react';

const PostForm = ({add, sort}) => {

    const [post, setPost] = useState({title: "", body: ""});
    const [selectedSort, setSelectedSort] = useState('title');

    const addPost = (e) => {
        e.preventDefault();
        const newPost = {
            title: post.title,
            body: post.body,
            id: Date.now(),
        }
        add(newPost);
        setPost({title: "", body: ""});
    }

    const select = (e) => {
        setSelectedSort(e.target.value);
        console.log(selectedSort);
        sort(selectedSort);
    }

    return (
        <div>
            <form>
                <input type="text" value={post.title}
                       onChange={(e) => setPost({...post, title: e.target.value})}/>
                <input type="text" value={post.body}
                       onChange={(e) => setPost({...post, body: e.target.value})}/>
            </form>
            <button onClick={addPost}>Добавить</button>

            <select value={selectedSort} onChange={select} name="" id="">
                <option value="title">По имени</option>
                <option value="body">По описанию</option>
            </select>
        </div>
    );
};

export default PostForm;