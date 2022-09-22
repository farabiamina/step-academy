import React from 'react';

const PostItem = ({post, index, remove, toggle}) => {

    const removePost = () => {
        remove(post);
    }

    const togglePost = () => {
        toggle(post.id);
    }

    return (
        <div className="post-item">
            <div>
                <p><b>{index}</b> {post.title}</p>
                <p>{post.body}</p>
            </div>
            <button onClick={togglePost}>{post.done ? "Done" : "Undone"}</button>
            <button onClick={removePost}>Удалить</button>
        </div>
    );
};

export default PostItem;