import axios from "axios";
const API_URL = "http://localhost:8080/api/payment/";
const getTransactions = (offset) => {
  return axios.post(API_URL + "getTransactions", {
    offset,
  });
};

const AdminServices = {
    getTransactions,
  }
export default AdminServices;
