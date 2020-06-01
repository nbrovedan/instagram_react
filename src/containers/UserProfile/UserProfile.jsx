import React from "react";
import { Link } from "react-router-dom";

import "./UserProfile.scss";

const UserProfile = ({ id, avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <img src={avatar} alt={name} />
            </div>

            <p className="user__name">
              <Link to={`/edituser/${id}`} className="user">
                {name}
              </Link>
              <span>@{username}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
