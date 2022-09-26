import React from "react"
import "../../App.css"
import AuthService from "../../services/auth.service";
import ProfileNavBar from "../../Components/NavBars/ProfileNavBar";
import Buttons from "../../Components/Utiles/Butttons";

const DonarPage = () => {
  const currentUser = AuthService.getCurrentUser();
  
  return (
    <>
      <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
      <ProfileNavBar currentUser={currentUser}></ProfileNavBar>
        {currentUser ? (
        <div className="min-h-screen greenBg mt-20 p-20 flex flex-row">
            <div className="bg-white rounded-2xl lg:basis-2/5 p-16">
                <Buttons.Switch text1={"Única vez"} text2={"Mensual"}/>
            </div>
        </div>
            ) : (
        <></>
    )} 
    </div> 
    </>
  );
};
export default DonarPage;