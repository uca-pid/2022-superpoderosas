import React from "react";
import AuthService from "../../services/auth.service";
import AdminNavBar from "../../Components/NavBars/AdminNavBar";
import PieChartModule from "../../Components/Dashboards/PieChartModule";
import BarChartModule from "../../Components/Dashboards/BarChartModule";
import TotalAmountModule from "../../Components/Dashboards/TotalAmountModule";
import { MonthlySubscriptionStateContextProvider } from "../../Context/MonthlySubscriptionStateContext";
import FilterDate from "../../Components/Dashboards/FilterDate";

const DashboardPage = () => {
  const currentUser = AuthService.getCurrentUser();

  const data=[
  {tittle: "Mes",options:[{ value: '1', label: 'Enero'},
  { value: 2, label: 'Febrero'},
  { value: 3, label: 'Marzo'},
  { value: 4, label: 'Abril'},
  { value: 5, label: 'Mayo'},
  { value: 6, label: 'Junio'},
  { value: 7, label: 'Julio'},
  { value: 8, label: 'Agosto'},
  { value: 9, label: 'Septiembre'},
  { value: 10, label: 'Octubre'},
  { value: 11, label: 'Noviembre'},
  { value: 12, label: 'Diciembre'}]
  },
  {tittle: "Año",options:[
  { value: 2021, label: '2021'},
  { value: 2022, label: '2022'},]
  }
  ];

  return (
    <>
      <div className="space-y-20 mx-auto z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
      <AdminNavBar currentUser={currentUser}></AdminNavBar>
      {currentUser ? ( 
        <MonthlySubscriptionStateContextProvider>

        <div className = "flex justify-between flex-row z-10 px-10 md:px-20 lg:px-80 greyBg darkGrayBorder space-y-1 md:space-y-3 lg:space-y-4 py-8 md:py-10 lg:py-16 mt-20">
              <div className="basis-8/10 flex z-10 font-Pop-SB tracking-[0.8px] text-[26px] md:text-[30px] lg:text-[32px] blackText">REPORTES</div>
              <div className="basis-2/10 flex justify-end right-0">
                      <FilterDate data={data}></FilterDate>
              </div>
        </div>

        <div className="px-5 md:px-20 lg:px-80 flex flex-col lg:flex-row w-full lg:space-x-10 space-y-10 lg:space-y-0"> 
                  <div className="lg:basis-1/2 flex flex-col space-y-10">
                    <div className="darkGrayBorder rounded-lg h-fit">
                      <PieChartModule data={data}></PieChartModule>
                    </div>
                  </div>

                  <div className="lg:basis-1/2 flex flex-col space-y-10 pb-10">
                    <div className="darkGrayBorder rounded-lg h-fit">
                      <TotalAmountModule data={data}></TotalAmountModule>
                    </div>
                    <div className="lg:basis-1/2 darkGrayBorder rounded-lg h-fit lg:mb-0"> 
                      <BarChartModule data={data}></BarChartModule> 
                    </div>
                  </div>
                  
        </div>

        </MonthlySubscriptionStateContextProvider>  
      ) : (
      <></>
    )}
    </div> 
    </>
  );
};
export default DashboardPage;

