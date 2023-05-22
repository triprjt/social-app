import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import UserList from "./UserList/UserList";
import ProfilePage from "./ProfilePage/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";
import initialUsers from "./initialUsers.js";

function SocialApp() {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || initialUsers
  );
  const location = useLocation();
  const handleFollow = (username) => {
    setUsers(
      users.map((user) => {
        if (user.username === username) {
          const updatedUser = { ...user, following: !user.following };

          // Update localStorage
          localStorage.setItem(username, JSON.stringify(updatedUser));

          return updatedUser;
        }
        return user;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes>
          <Route
            path="/"
            element={<UserList users={users} onFollow={handleFollow} />}
          />
          <Route
            path="/profile/:usernameParam"
            element={<ProfilePage users={users} onFollow={handleFollow} />}
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default SocialApp;
