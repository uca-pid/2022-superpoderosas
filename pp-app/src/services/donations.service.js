import axios from "axios";
const API_URL = "http://localhost:8080/api/payment/";
const generateTransaction = (userId, amount, paymentDay, type) => {
  return axios.post(API_URL + "createTransaction", {
    userId, 
    amount, 
    paymentDay, 
    type
  });
};
const generateSubscription = (userId, amount, type, frequency, lastPaymentDat, nextPaymentDay) => {
  return axios.post(API_URL + "createSubscription", {
    userId, 
    amount, 
    type,
    frequency, 
    lastPaymentDat, 
    nextPaymentDay
  });
};
const getSubscription = async (userId) => {
  const response = await axios.post(API_URL + "getSubscription", {
    userId,
  });
  if (response.data.id) {
    console.log(response.data);
  }
  return response.data;
}

const DonationService = {
  generateTransaction,
  generateSubscription,
  getSubscription
}
export default DonationService;