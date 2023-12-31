import React, { useState, useEffect } from "react";
import { getAllPayment, reformatDate } from "./HistoryFunction";
import "./user_history.css";
import { Modal } from "antd";

const itemsPerPage = 8;
const Tour = () => {
  const [payments, setPayments] = useState([]);
  const [sortCategory, setSortCategory] = useState("payDate");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [openModal, setOpenModal] = useState(true);
  const [descriptionClicked, setDescriptionClicked] = useState(false);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [indexOfLastItem, setIndexOfLastItem] = useState(0);
  const [indexOfFirstItem, setIndexOfFirstItem] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const loadPayments = () => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    getAllPayment(userId)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setPayments(
            data.map((payment) => ({
              ...payment,
              payDate: reformatDate(payment.payDate),
            }))
          );
        }
      })
      .catch((error) => {
        console.error("Error loading Payments:", error);
      });
  };

  const toggleSortOrder = () => {
    setSortOrder((current) => (current === "asc" ? "desc" : "asc"));
  };

  const headerClicked = (col) => {
    if (sortCategory !== col) setSortCategory(col);
    else toggleSortOrder();
  };

  useEffect(() => {
    loadPayments();
  }, []);

  useEffect(() => {
    setPayments((currentItems) =>
      [...currentItems].sort((a, b) => {
        if (sortCategory === "id") {
          return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
        } else if (sortCategory === "amount") {
          return sortOrder === "asc"
            ? a.amount - b.amount
            : b.amount - a.amount;
        }
        const valueA = a[sortCategory].toLowerCase();
        const valueB = b[sortCategory].toLowerCase();

        if (sortOrder === "asc") {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      })
    );
  }, [sortCategory, sortOrder, payments]);

  useEffect(() => {
    setFilteredPayments(
      searchTerm
        ? payments.filter(
            (payment) =>
              payment.payDate.includes(searchTerm) ||
              (payment.amount + "").includes(searchTerm) ||
              payment.id + "" === searchTerm
          )
        : payments
    );
  }, [searchTerm, payments]);

  useEffect(() => {
    setIndexOfLastItem(currentPage * itemsPerPage);
    setIndexOfFirstItem(indexOfLastItem - itemsPerPage);
    setCurrentItems(filteredPayments.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, filteredPayments, indexOfLastItem, indexOfFirstItem]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {descriptionClicked ? (
        <div>
          <Modal
            open={openModal}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}
            zIndex="2000"
          >
            <p className="pay-info">
              <span className="pay-label">Card Type:</span>{" "}
              <span className="pay-desc">
                {JSON.parse(payments[selectedPayment].description).cardType}
              </span>
            </p>
            <p className="pay-info">
              <span className="pay-label">Card Number:</span>{" "}
              <span className="pay-desc">
                {JSON.parse(payments[selectedPayment].description).cardNumber}
              </span>
            </p>
            <p className="pay-info">
              <span className="pay-label">Expiry:</span>{" "}
              <span className="pay-desc">
                {JSON.parse(payments[selectedPayment].description).expiry}
              </span>
            </p>
            <p className="pay-info">
              <span className="pay-label">Holder Name:</span>{" "}
              <span className="pay-desc">
                {JSON.parse(payments[selectedPayment].description).holderName}
              </span>
            </p>
            <p className="pay-info">
              <span className="pay-label">CVV:</span>{" "}
              <span className="pay-desc">
                {JSON.parse(payments[selectedPayment].description).cvv}
              </span>
            </p>
          </Modal>
        </div>
      ) : (
        ""
      )}
      <div className="dashboard-header">
        <div className="select-container">
          <label htmlFor="categorySelect">Sort by: </label>
          <select
            id="categorySelect"
            onChange={(e) => setSortCategory(e.target.value)}
            value={sortCategory}
          >
            <option value="id">ID</option>
            <option value="payDate">Pay Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>

        <div className="sort-container">
          <label htmlFor="sortOrder">Sort Order:</label>
          <select
            id="sortOrder"
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search for id, pay date or amount"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <table className="tour-table">
        <thead>
          <tr>
            <th
              onClick={() => headerClicked("id")}
              className="sortable-colhead"
            >
              {" "}
              ID
            </th>
            <th
              onClick={() => headerClicked("payDate")}
              className="sortable-colhead"
            >
              Pay Date
            </th>
            <th
              onClick={() => headerClicked("amount")}
              className="sortable-colhead"
            >
              Amount
            </th>
            <th> Price Currency</th>
            <th> Description</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((payment, index) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.payDate}</td>
              <td>{payment.amount}</td>
              <td>{payment.currency}</td>
              <td
                onClick={() => {
                  setSelectedPayment(index);
                  setDescriptionClicked(true);
                  if (openModal === false) {
                    setOpenModal(true);
                  }
                }}
                style={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  color: "green",
                }}
              >
                View payment detail
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="history-pagination">
        {Array.from({
          length: Math.ceil(filteredPayments.length / itemsPerPage),
        }).map((_, index) => (
          <li key={index} className={currentPage === index + 1 ? "active" : ""}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tour;
