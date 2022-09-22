import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, remove, toggle}) => {
    return (
        <div>
            {posts.map((post, index) =>
                <PostItem toggle={toggle} key={post.id} post={post} index={index+1} remove={remove} />
            )}
        </div>
    );
};

export default PostList;