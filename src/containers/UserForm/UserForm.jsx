import React, { useState, useEffect } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import {PROFILE_PLACEHOLDER, URL_USERS, URL_FIND_USER_BY_ID} from "../../consts/Consts";

import "./UserForm.scss";

const UserForm = ({user}) => {
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [sucess, setSucess] = useState(false);

  useEffect(() => {
    if(user){
      setId(user.id);
      setName(user.name);
      setAvatar(user.avatar);
      setUsername(user.username);
      setEmail(user.email);      
    }
  },[]);

  const handleChangeName = (event) => {
    const { value } = event.target;

    setName(value);
  };

  const handleChangeAvatar = (event) => {
    const { value } = event.target;

    setAvatar(value);
  };

  const handleChangeUsername = (event) => {
    const { value } = event.target;

    setUsername(value);
  };

  const handleChangeEmail = (event) => {
    const { value } = event.target;

    setEmail(value);
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const user = JSON.stringify({
      name,
      avatar,
      username,
      email,
    });

    const URL = id ? URL_FIND_USER_BY_ID.replace(":id", id) : URL_USERS;
    const METHOD = id ? "PUT" : "POST";

    fetch(URL, {
      method: METHOD,
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    }).then(() => setSucess(true));
  };


  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
            <div className="user__thumb">
                {avatar
                  ? <img src={avatar} alt="" />
                  : <img src={PROFILE_PLACEHOLDER} alt="" />
                }
              </div>

              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}              
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              placeholder="Anakin Skywalker"
              onChange={(event) => handleChangeName(event)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={username}
              placeholder="aanakin@1980"
              onChange={(event) => handleChangeUsername(event)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="vader.darth@dark.com"
              onChange={(event) => handleChangeEmail(event)}
            />

            <label>
              Imagem do usuário (use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              value={avatar}
              placeholder="https://..."
              onChange={(event) => handleChangeAvatar(event)}
            />

            <button type="button" onClick={(event) => handleAddUser(event)}>
              Salvar
            </button>
          </div>
        </div>
      </section>
      {sucess && (<SuccessMessage />)}
    </React.Fragment>
  );
};

export default UserForm;
