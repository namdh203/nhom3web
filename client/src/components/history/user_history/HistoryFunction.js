import axios from "axios";

export const getAllPayment = (id) => {
  return axios
    .post("/payments/getAllPayment", {
      id: id,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching customer data:", error);
      throw error;
    });
};

export function reformatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return formattedDate;
}
