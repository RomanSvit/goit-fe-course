import React from "react";
import style from "./Profile.module.css";
import PropTypes from "prop-types";
​
const Profile = ({ user }) => {
  const { name, tag, avatar, location, stats } = user;
  console.log(name);
  return (
    <>
      <div className={style.profile}>
        <div className="description">
          <img src={avatar} alt={name} className="avatar" />
          <p className="name">{name}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
​
        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity"> {stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity"> {stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity"> {stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
​
export default Profile;
​
Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object
  })
};