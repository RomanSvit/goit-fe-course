import React from "react";

const Profile = ({ user }) => {
  const { name, avatar, location, tag, stats } = user;
  return (
    <div classNameName="profile">
      <div classNameName="description">
        <img
          src={avatar}
          alt={name}
          className="avatar"
        />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}
export default Profile;
