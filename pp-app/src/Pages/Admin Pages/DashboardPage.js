import React from "react";
import AuthService from "../../services/auth.service";
import AdminNavBar from "../../Components/NavBars/AdminNavBar";
import { MonthlySubscriptionStateContextProvider } from "../../Context/MonthlySubscriptionStateContext";
import FilterDate from "../../Components/Dashboards/FilterDate";
import { OpenChartsContextProvider } from "../../Context/OpenChartsContext";
import DashboardSection from "../../Components/Dashboards/DashboardSection";

const DashboardPage = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <>
      <div className="space-y-20 mx-auto z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
      <AdminNavBar currentUser={currentUser}></AdminNavBar>
      {currentUser ? ( 
        <MonthlySubscriptionStateContextProvider>
        <OpenChartsContextProvider>
        <div className = "flex justify-between flex-row z-10 px-10 md:px-20 lg:px-80 greyBg darkGrayBorder space-y-1 md:space-y-3 lg:space-y-4 py-8 md:py-10 lg:py-16 mt-20">
              <div className="flex flex-col basis-8/10 flex z-10 ">
              <div className="flex font-Pop-SB tracking-[0.8px] text-[26px] md:text-[30px] lg:text-[32px] blackText">Dashboard</div>
              <div className="flex font-Pop-L blackText text-[18px] md:text-[20px] lg:text-[20px]">Herramienta de gestión de la información que monitoriza, analiza y muestra de manera visual los indicadores clave de desempeño (KPI), métricas y datos fundamentales acerca de las donaciones.</div>
              </div>
              <div className="basis-2/10 flex justify-end right-0">
                      <FilterDate></FilterDate>
              </div>
        </div>
        <DashboardSection></DashboardSection>
        </OpenChartsContextProvider>
        </MonthlySubscriptionStateContextProvider> 
      ) : (
      <></>
    )}
    </div> 
    </>
  );
};
export default DashboardPage;

