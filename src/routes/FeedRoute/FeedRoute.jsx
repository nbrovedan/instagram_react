import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Posts from '../../containers/Posts';
import Loading from '../../components/Loading';

import {URL_STORIES, URL_USERS, URL_USER_POST} from '../../consts/Consts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserById = (userId) => users.find((user) => user.id === userId);

  useEffect(() => {
    fetch(URL_USERS)
      .then((res) => res.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    fetch(URL_STORIES)
      .then((res) => res.json())
      .then(data => setStories(data));      
  }, [users]);  

  useEffect(() => {
    const getPosts = async () => {
      const promises = users.map(async (user, index) => {
        const request = await fetch(URL_USER_POST.replace(":id", user.id));
        return await request.json();
      });
      const result = await Promise.all(promises);
      return result.reduce((newPosts, post) => newPosts.concat(post), []);
    }

    setLoading(true);
    getPosts()
      .then(result => setPosts([...posts, ...result]))
      .then(() => setLoading(false));      
  }, [users]);

  return (
    <div data-testid="feed-route">
      {
      (users.length > 0 && stories.length > 0) && (
        <Stories
          stories={stories}
          getUserHandler={getUserById}
        />
      )}

      {loading
        ? (<Loading />)
        : (
          <Posts
            posts={posts}
            getUserHandler={getUserById}
          />)
      }
    </div>
  );
};

export default FeedRoute;
