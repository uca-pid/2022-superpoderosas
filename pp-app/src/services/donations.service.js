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
const generateSubscription = (userId, amount, type, frequency, nextPaymentDate) => {
  return axios.post(API_URL + "createSubscription", {
    userId,
    amount,
    type,
    frequency,
    nextPaymentDate
  });
};

const modifySubscription = (userId, amount, frequency, nextPaymentDate) => {
  return axios.post(API_URL + "modifySubscription", {
    userId,
    amount,
    frequency,
    nextPaymentDate
  });
};

const getSubscription = async (userId) => {
  try {
    const response = await axios.post(API_URL + "getSubscription", {
      userId,
    });
    return response;
  } catch (e) {
      console.log(e);
  }
}

const DonationService = {
  generateTransaction,
  generateSubscription,
  getSubscription,
  modifySubscription
}
export default DonationService;