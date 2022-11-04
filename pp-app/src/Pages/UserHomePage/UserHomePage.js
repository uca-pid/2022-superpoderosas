import React from "react";
import AuthService from "../../services/auth.service";
import UserNavBar from "../../Components/NavBars/UserNavBar";
import navigationOptions from "../../Components/NavBars/navigationOptions";
import { CurrentUserContextProvider} from "../../Context/CurrentUserContext";
import UserInformationSection from "../../Components/Profile/UserInformationSection";
import CopyLinkSection from "../../Components/Profile/CopyLinkSection";
import MilestonesProgress from "../../Components/Profile/MilestonesProgress";

const UserHome = () => {
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
        <UserNavBar navigation={navigationOptions.adminNavigation} currentUser={currentUser}/>
          :
        <UserNavBar navigation={navigationOptions.userNavigation} currentUser={currentUser}/>}
        <CurrentUserContextProvider>

          <UserInformationSection></UserInformationSection>
          
          <div className="flex flex-row px-10 md:px-32 space-x-20">
            <div className="basis-2/3">
              <MilestonesProgress/>
            </div>
            <div className="basis-1/3">
              <CopyLinkSection/>
            </div>
          </div>
        
        </CurrentUserContextProvider>
        </>
      ) : (
      <></>

    )}
    </div> 
    </>
  );
};
export default UserHome;