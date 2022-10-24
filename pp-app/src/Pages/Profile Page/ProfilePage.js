import React from "react";
import AuthService from "../../services/auth.service";
import Settings from "../../Components/Settings/Settings";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <>
      <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">}
      {currentUser ? (
        <>
        <Settings></Settings>
        </>
      ) : (
        <></>
      )}
      </div> 
    </>
  );

};
export default Profile;