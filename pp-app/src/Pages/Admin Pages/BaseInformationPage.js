import React from "react";
import AuthService from "../../services/auth.service";
import AdminNavBar from "../../Components/NavBars/AdminNavBar";
import Table from "../../Components/Tables/Table";
import TransactionTableInformation from "../../Components/Tables/TransactionsTableInformation";

const BaseInformationPage = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <>
      <div className="space-y-20 mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
      <AdminNavBar currentUser={currentUser}></AdminNavBar>
      {currentUser ? (
        <div className="px-80">
        <Table startData={TransactionTableInformation.data} columns={TransactionTableInformation.columns}></Table>
        </div>
      ) : (
      <></>
    )}
    </div> 
    </>
  );
};
export default BaseInformationPage;