import axios from "axios"

export const createPaymentTransaction = newPayment => {
    return axios.post("/payments/createTransaction", {
        userId: newPayment.userId,
        payDate: newPayment.payDate,
        amount: newPayment.amount,
        currency: newPayment.currency,
        description: newPayment.description
    }).then(response => {
        console.log("Payment transaction created")
        return response.data;
    }).catch(error => {
        console.error("Error creating payment transaction:", error);
        throw error;
    });
}