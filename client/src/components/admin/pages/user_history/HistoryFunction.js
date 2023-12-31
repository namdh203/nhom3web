import axios from "axios";

export const getAllPayment = () => {
  return axios
    .post("/payments/admin/getPaymentHistory")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching customer data:", error);
      throw error;
    });
};
