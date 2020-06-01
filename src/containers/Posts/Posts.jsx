import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      { posts.length > 0 && 
        posts.map((post, index) => (
          <Post
            postInfo={post}
            userInfo={getUserHandler(post.userId)}
            key={index}
          />
        ))
      }
    </section>
  </div>
);

export default Posts;