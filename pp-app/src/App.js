import Profile from './Pages/UserHomePage/ProfilePage';
import LoginPage from './Pages/Registration-Autentification.js/LoginPage';
import ChangePasswordPage from './Pages/ChangeViaMailPasswordPages/PasswordResetEmailPage';
import PasswordResetPage from './Pages/ChangeViaMailPasswordPages/PasswordResetPage';
import React from "react";
import AuthService from './services/auth.service';
import { Routes, Route } from "react-router-dom";
import RegistrationPage from './Pages/Registration-Autentification.js/RegistrationPage';
import DonarPage from './Pages/Donations/Donar';
import BaseInformationPage from './Pages/Admin Pages/BaseInformationPage';
import DashboardPage from './Pages/Admin Pages/DashboardPage';
//a la ruta de /profile estaría bueno ponerle /home en ambos casos

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path={"/"} element={<LoginPage />} />
          <Route exact path={"/login"} element={<LoginPage />} />
          <Route exact path={"/signup"} element={<RegistrationPage/>} />
          <Route exact path="/ChangePasswordPage" element={<ChangePasswordPage />} />
          <Route exact path="/resetPassword/:token" element={<PasswordResetPage />} />
          <Route exact path="/profile" element={<Profile />} />
          {(AuthService.getCurrentUser()) ?
          (
          (isAdmin())  ?
          <>
          <Route exact path="/inicio" element={<BaseInformationPage></BaseInformationPage>} />
          <Route exact path="/donaciones" element={<BaseInformationPage></BaseInformationPage>} />
          <Route exact path="/reportes" element={<DashboardPage></DashboardPage>} />
          </>
          :
          <>
          <Route exact path="/inicio" element={<Profile />} />
          <Route exact path="/donar" element={<DonarPage/>} />
          </>
          )
          : <></>
          }
        </Routes> 
      </div>   
    </>
  );

  function isAdmin() {
    return JSON.stringify((AuthService.getCurrentUser()).roles) === JSON.stringify(["ROLE_ADMIN"]);
  }
}