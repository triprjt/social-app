import { Link } from "react-router-dom";
import Jane from "../Image/Jane.jpg";
import John from "../Image/John.jpg";
import "./UserList.scss";
import "bootstrap/dist/css/bootstrap.min.css";
function UserList({ users, onFollow }) {
  return (
    <ul className="list-unstyled shadow-sm">
      {users.map((user, index) => (
        <li className="user-list-item shadow-sm" key={index}>
          <div className="card user-card">
            <img
              src={user.imageUrl}
              alt="Card image"
              className="user-image img-left mb-3"
            />

            <div className="card-body rounded">
              <h5 className="card-title ">{user.name}</h5>
              <p className="card-text text-dark">
                {user.connections} connections
              </p>
              <div className="d-flex">
                <Link
                  to={`/profile/${user.username}`}
                  className="btn btn-primary"
                >
                  View Profile
                </Link>
                <button
                  className="btn btn-secondary"
                  onClick={() => onFollow(user.username)}
                >
                  {user.following ? "Unfollow" : "Follow"}
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
