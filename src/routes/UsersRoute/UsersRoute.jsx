import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";
import Loading from "../../components/Loading";

import {URL_USERS} from "../../consts/Consts";

const UsersRoute = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(URL_USERS)
      .then(result => result.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container" data-testid="users-route">
      {
        loading ? 
          <Loading /> :
          <UsersList users={users} />
      }
    </div>
  );
};

export default UsersRoute;
