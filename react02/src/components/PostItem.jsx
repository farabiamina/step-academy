import React from 'react';

const PostItem = ({post, index, remove}) => {

    const removePost = () => {
        remove(post);
    }

    return (
        <div className="post-item">
            <div>
                <p><b>{index}</b> {post.title}</p>
                <p>{post.body}</p>
            </div>
            <button onClick={removePost}>Удалить</button>
        </div>
    );
};

export default PostItem;