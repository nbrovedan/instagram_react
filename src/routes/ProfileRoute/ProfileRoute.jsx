import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";
import Loading from "../../components/Loading";

import {URL_FIND_USER_BY_NAME, URL_USER_POST} from '../../consts/Consts';

const ProfileRoute = () => {
  const { username } = useParams();
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL_FIND_USER_BY_NAME.replace(":name", username))
      .then(result => result.json())
      .then(data => setUser(data.shift()));
  }, []);

  useEffect(() => {
    if(user){
      fetch(URL_USER_POST.replace(":id", user.id))
        .then(result => result.json())
        .then(data => {
          setPosts(data)
          setLoading(false);
        });
    }
  }, [user]);

  return (
    <div data-testid="profile-route">
      {
        user &&
        <UserProfile
          id={user.id}
          name={user.name}
          avatar={user.avatar}
          username={user.username}
          email={user.email}
        />
      }

      {
        loading ? 
          <Loading /> :
          <UserPosts
            posts={posts} />
      }
    </div>
  );
};

export default ProfileRoute;
