import Profile from './Pages/Profile Page/ProfilePage';
import LoginPage from './Pages/Registration-Autentification.js/LoginPage';
import ChangePasswordPage from './Pages/ChangePassword Page/PasswordResetEmailPage';
import PasswordResetPage from './Pages/ChangePassword Page/PasswordResetPage';
import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from './Pages/Registration-Autentification.js/RegistrationPage';

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
       {/*  Probar que no sepuede saltar el Iniciar Sesión por la barra de navegacion */}
      <div>
        <Routes>
          <Route exact path={"/"} element={<LoginPage />} />
          <Route exact path={"/login"} element={<LoginPage />} />
          <Route exact path={"/signup"} element={<RegistrationPage/>} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/ChangePasswordPage" element={<ChangePasswordPage />} />
          <Route exact path="/resetPassword/:token" element={<PasswordResetPage />} />
        </Routes> 
      </div>   
       {/* <AuthVerify logOut={logOut}/> */}
    </>
  );
}