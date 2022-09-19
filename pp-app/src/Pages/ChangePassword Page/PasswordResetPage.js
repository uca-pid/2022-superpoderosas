import "../../Components/LogInForm/LogIn.css";
import React from "react";
import ChangePasswordForm from "../../Components/ChangePasswordForms/ChangePasswordForm"
import "../ChangePassword Page/ChangePasswordPage.css"
import LoginOnlyNavBar from "../../Components/NavBar/LoginOnlyNavBar"

export default function RegistrationForm(props) {

  return (
    <>  
    <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 greenBg bg-cover min-h-screen bg-cover place-content-center">
    <LoginOnlyNavBar></LoginOnlyNavBar> 
    <ChangePasswordForm></ChangePasswordForm> 
    </div>
    </>
  )
}