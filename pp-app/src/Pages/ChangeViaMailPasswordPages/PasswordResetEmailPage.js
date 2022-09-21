import "../../Fonts/Poppins-Bold.ttf"
import VerifyEmailForm from "../../Components/Forms/PasswordModificationForms/PasswordModificationsViaEmail/VerifyEmailForm"
import "../../App.css"
import React from 'react';
import LoginOnlyNavBar from "../../Components/NavBars/LoginOnlyNavBar"

export default function ChangePasswordPage() {

  return (
    <>
    <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 greenBg bg-cover min-h-screen bg-cover place-content-center">
        <LoginOnlyNavBar></LoginOnlyNavBar> 
        <VerifyEmailForm></VerifyEmailForm>
      </div> 
   </>
  )
}