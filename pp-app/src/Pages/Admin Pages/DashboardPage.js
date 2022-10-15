import React from "react";
import AuthService from "../../services/auth.service";
import AdminNavBar from "../../Components/NavBars/AdminNavBar";
import DonationService from '../../services/donations.service'
import { useEffect, useState } from "react";
import ChartModule from "../../Components/Dashboards/ChartModule";
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
      <div className="space-y-20 mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
      <AdminNavBar currentUser={currentUser}></AdminNavBar>
      {currentUser ? ( 
        <MonthlySubscriptionStateContextProvider>
          <div className="px-5 md:px-10 lg:px-80 flex sm:flex-row"> 
          <div className="mt-5 flex lg:flex-row flex-col w-full h-screen">
            <div className="lg:basis-1/2 sm:basis-8/10 flex flex-col">
              <div className="flex flex flex-row space-x-10">
                {/* <div className="flex">
                  <FilterDate tittle="Month" data={months}></FilterDate> 
                </div>
                <div className="flex">
                  <FilterDate tittle="Year" data={years}></FilterDate>
                </div> */}
              </div>
              <ChartModule data={data}></ChartModule>
            </div>
            <div className="lg:basis-1/2 sm:basis-2/10 flex justify-end">
                <div className="pt-8 flex flex-col">
                    <FilterDate data={data}></FilterDate>
                </div>
                <div className="flex">
                </div>
            <div>
          </div>
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