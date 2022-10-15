import React from "react";
import AuthService from "../../services/auth.service";
import AdminNavBar from "../../Components/NavBars/AdminNavBar";
import PieChart from "../../Components/Dashboards/PieChart";
import DonationService from '../../services/donations.service'
import { useEffect } from "react";

const DashboardPage = () => {
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    DonationService.subscriptionsByMonth(10,2021).then(res=>{console.log(res);});
  }, [currentUser.id])

  return (
    <>
      <div className="space-y-20 mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
      <AdminNavBar currentUser={currentUser}></AdminNavBar>
      {currentUser ? (     
          <div className="px-40 mt-5 flex flex-col lg:flex-row w-full">
            <div className="lg:basis-1/2  flex flex-col space-y-10">
            <PieChart></PieChart> 
            </div>
          </div>
      ) : (
      <></>
    )}
    </div> 
    </>
  );
};
export default DashboardPage;