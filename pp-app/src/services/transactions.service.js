import axios from "axios";
const API_URL = "http://localhost:8080/api/payment/";
const getTransactions = (limit, offset) => {
  return axios.post(API_URL + "getTransactions", {
    limit,
    offset,
  });
};

const getSubscriptions = (limit, offset) => {
  return axios.post(API_URL + "getSubscriptions", {
    limit,
    offset,
  });
};

const getMonthlyIncome = (date) => {
  return axios.post(API_URL + "getMonthIncome", {
    date,
  });
};

const AdminServices = {
    getTransactions,
    getMonthlyIncome,
    getSubscriptions,
  }

export default AdminServices;
