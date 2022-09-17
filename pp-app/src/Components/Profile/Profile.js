import React from "react";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  alert(currentUser)
  const navigate = useNavigate();
  const logOut = () => {
    AuthService.logout();

    navigate("/login");
    window.location.reload();
  };
  return (
    <>
    {currentUser ? (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.email}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.name}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.lastname}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      <button onClick={logOut}>Log Out</button>
    </div>) : (
      <></>
    )}
    </>
  );
};
export default Profile;