import { useParams } from "react-router-dom";
import Jane from "../Image/Jane.jpg";
import John from "../Image/John.jpg";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./ProfilePage.scss";

const ProfilePage = ({ users, onFollow }) => {
  const { usernameParam } = useParams();
  console.log("username: " + usernameParam + "users: " + users);
  const user = users.find((user) => user.username === usernameParam);
  console.log("user in profile page:  " + user);
  //   const user = users.find((user) => user.username === username);

  return (
    <div className="container profile-container">
      <div className="row justify-content-start align-items-center">
        <div className="col-12 col-sm-4 text-center">
          <img
            src={user.imageUrl}
            className="img-fluid rounded-circle mb-3"
            alt={user.name}
          />
          <div className="username-connections">
            <h2>{user.name}</h2>
            <p>{user.connections} connections</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-start align-items-center">
        <div className="col-12 col-sm-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p id="bio">{user.bio}</p>
            <button
              className="btn btn-primary"
              onClick={() => onFollow(user.username)}
            >
              {user.following ? "Unfollow" : "Follow"}
            </button>
          </div>
          <hr />
        </div>
      </div>
      <div className="row justify-content-start align-items-center">
        <div className="col-12 col-md-8">
          <h5 className="mt-5 ">Posts</h5>
          {user.posts.map((post, index) => (
            <div className="post mt-3" key={index}>
              <h6>{post.title}</h6>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
