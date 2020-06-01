import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../../assets/img/instagram-logo.svg";

import "./Topbar.scss";

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <div className="topbar__logo">
        <Link to="/">
          <LogoSvg />
        </Link>
      </div>
      <div className="topbar__group">
        <button className="topbar__icon">
          <Link to="/users">
            <i className="fa fa-users" aria-hidden="true"></i>Usuários
          </Link>
        </button>
        <button className="topbar__icon">
          <Link to="/newuser">
          <i className="fa fa-user-plus" aria-hidden="true"></i>Novo usuário
          </Link>
        </button>
      </div>
    </div>
  </header>
);

export default Topbar;
