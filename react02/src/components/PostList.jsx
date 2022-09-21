import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, remove}) => {
    return (
        <div>
            {posts.map((post, index) =>
                <PostItem post={post} index={index+1} remove={remove} />
            )}
        </div>
    );
};

export default PostList;