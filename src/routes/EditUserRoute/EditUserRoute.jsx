import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import UserForm from "../../containers/UserForm";
import Loading from "../../components/Loading";

import {URL_FIND_USER_BY_ID} from "../../consts/Consts";

const EditUserRoute = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL_FIND_USER_BY_ID.replace(":id", id))
      .then(result => result.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  return (
    <div data-testid="edit-user-route">
      {
        loading ? 
          <Loading /> :
          <UserForm user={user} />
      }
    </div>
  );  
};

export default EditUserRoute;
