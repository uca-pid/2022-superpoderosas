import React from "react";
import AuthService from "../../services/auth.service";
import Settings from "../../Components/Settings/Settings";
import ProfileNavBar from "../../Components/NavBars/ProfileNavBar";
import AdminNavBar from "../../Components/NavBars/AdminNavBar";
import { CurrentUserContextProvider} from "../../Context/CurrentUserContext";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const isAdmin = () => {
    return JSON.stringify((AuthService.getCurrentUser()).roles) === JSON.stringify(["ROLE_ADMIN"]);
  };
  return (
    <>
      <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
      {(currentUser) ? (
      <>
      {(isAdmin())  ?
          <AdminNavBar currentUser={currentUser}></AdminNavBar>
          :
        <ProfileNavBar currentUser={currentUser}></ProfileNavBar>}
        <CurrentUserContextProvider>
        <Settings></Settings>
        </CurrentUserContextProvider>
        </>
      ) : (
      <></>

    )}
    </div> 
    </>
  );
};
export default Profile;