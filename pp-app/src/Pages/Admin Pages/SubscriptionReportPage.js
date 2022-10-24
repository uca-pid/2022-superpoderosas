import React from "react";
import AuthService from "../../services/auth.service";
import UserNavBar from "../../Components/NavBars/UserNavBar";
import navigationOptions from "../../Components/NavBars/navigationOptions";
import Table from "../../Components/Tables/Table";
import SubscriptionTableInformation from "../../Components/Tables/SubscriptionTableInformation";
import Sidebar from "../../Components/Utiles/SideBar";
import { SelectionOnTableContexProvider } from "../../Context/SelectionsOnTable";
import AdminServices from "../../services/transactions.service";

const SubscriptionReportPage = () => {
  const getSubscriptionsForTable = (min, max) => AdminServices.getSubscriptions(min,max);
  const currentUser = AuthService.getCurrentUser();
  return (
    <SelectionOnTableContexProvider>
    <>
    <div className="space-y-20 mx-auto z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
      <UserNavBar navigation={navigationOptions.adminNavigation} currentUser={currentUser}/>
      {currentUser ? (
      <>
      <div className="almostWhiteBg">
        <Sidebar/>
        <div className = "z-10 px-10 md:px-20 lg:px-80 basis-1/3 lighterGreyBg darkGrayBorder space-y-2 md:space-y-3 lg:space-y-4 py-8 md:py-10 lg:py-12 mt-20">
          <div className="z-10 font-Pop-SB tracking-[0.8px] text-[26px] md:text-[30px] lg:text-[26px] blackText">Reporte Subscripciones</div>
          <div className="z-10 font-Pop-L blackText text-[18px] md:text-[20px] lg:text-[20px]">Reporte historico de las subscripciones</div>
        </div>
        <div className="px-80 mt-10">  
          <Table columns={SubscriptionTableInformation.columns} functionToLoadData={getSubscriptionsForTable}></Table>
        </div>
      </div>
      </>
      ) : (
      <></>
      )}
    </div> 
    </>
    </SelectionOnTableContexProvider>
  );
};
export default SubscriptionReportPage;