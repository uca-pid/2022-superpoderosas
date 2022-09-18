import React from "react";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
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
          <strong>{currentUser.name} {currentUser.lastname} Perfil</strong>
        </h3>
      </header>
      <p>
        <strong>Mail:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      <button onClick={logOut}>Cerrar Sesión</button>
    </div>) : (
      <></>
    )}
    </>
  );
};
export default Profile;