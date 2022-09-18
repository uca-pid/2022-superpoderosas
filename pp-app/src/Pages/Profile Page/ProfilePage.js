import React from "react";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom"
import ProfileNavBar from "../../Components/NavBar/ProfileNavBar.js"

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
      <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
        <ProfileNavBar></ProfileNavBar> 
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
    </div> 
    </>
  );
};
export default Profile;