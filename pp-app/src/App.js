import Profile from './Components/Profile/Profile';
import IntroductionPage from './Pages/Introduction Page/IntroductionPage';
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AuthService from "./services/auth.service";
import BoardUser from "./Components/Example/BoardUser";
import BoardAdmin from "./Components/Example/BoardAdmin";
import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";

export default function App() {
/*   const [showAdminBoard, setShowAdminBoard] = useState(false); //nos va a permitir mostrar la pagina que corresp a usuario o a admin
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  }, []);
  const logOut = () => {
    AuthService.logout();
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  }; */
  
  return (
    <>  
       {/*  Probar que no sepuede saltar el log in por la barra de navegacion */}
      <div>
        <Routes>
          <Route exact path={"/"} element={<IntroductionPage />} />
          <Route exact path={"/login"} element={<IntroductionPage />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} /> 
          <Route path="/admin" element={<BoardAdmin />} />
        </Routes> 
      </div>   
       {/* <AuthVerify logOut={logOut}/> */}
    </>
  );
}