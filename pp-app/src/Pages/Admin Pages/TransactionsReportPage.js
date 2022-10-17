import React from "react";
import AuthService from "../../services/auth.service";
import AdminNavBar from "../../Components/NavBars/AdminNavBar";
import Table from "../../Components/Tables/Table";
import TransactionTableInformation from "../../Components/Tables/TransactionsTableInformation";
import Sidebar from "../../Components/Utiles/SideBar";
import { SelectionOnTableContexProvider } from "../../Context/SelectionsOnTable";
import AdminServices from "../../services/transactions.service";

const TransactionReportPage = () => {
  const getTransactionsForTable = (min, max) => AdminServices.getTransactions(min,max);
  const currentUser = AuthService.getCurrentUser();
  return (
    <SelectionOnTableContexProvider>
    <>
    <div className="space-y-20 mx-auto z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
      <AdminNavBar currentUser={currentUser}></AdminNavBar>
      {currentUser ? (
      <>
      <div className="almostWhiteBg">
        <Sidebar/>
        <div className = "z-10 px-10 md:px-20 lg:px-80 basis-1/3 lighterGreyBg darkGrayBorder space-y-2 md:space-y-3 lg:space-y-4 py-8 md:py-10 lg:py-12 mt-20">
          <div className="z-10 font-Pop-SB tracking-[0.8px] text-[26px] md:text-[30px] lg:text-[26px] blackText">Reporte Transacciones</div>
          <div className="z-10 font-Pop-L blackText text-[18px] md:text-[20px] lg:text-[20px]">Reporte historico de las transacciones realizadas</div>
        </div>
        <div className="px-80 mt-10">  
          <Table columns={TransactionTableInformation.columns} functionToLoadData={getTransactionsForTable}></Table>
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
export default TransactionReportPage;