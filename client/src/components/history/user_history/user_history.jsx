import React, { useState, useEffect } from "react";
import { getAllPayment } from "./HistoryFunction";
import "./user_history.css";
// import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

const Tour = () => {
  const [payments, setPayments] = useState([]);
  const [sortCategory, setSortCategory] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [payDesc, setPayDesc] = useState("");
  const [openModal, setOpenModal] = useState(true);
  const [descClicked, setDescClicked] = useState(false);

  // const navigate = useNavigate();

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
          setPayments(data);
        }
      })
      .catch((error) => {
        console.error("Error loading Payments:", error);
      });
  };

  useEffect(() => {
    loadPayments();
  }, []);

  const handleSort = (category) => {
    if (sortCategory === category) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCategory(category);
      setSortOrder("asc");
    }
  };

  const sortedPayments = payments.sort((a, b) => {
    if (sortCategory === "id" || sortCategory === "amount") {
      return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
    }
    const valueA = a[sortCategory].toLowerCase();
    const valueB = b[sortCategory].toLowerCase();

    console.log(valueA);
    console.log(valueB);

    if (sortOrder === "asc") {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });

  const filteredPayments = searchTerm
    ? sortedPayments.filter((payment) => {
        console.log(payment);
        console.log(payment);
        return false;
        // payment.title.toLowerCase().includes(searchTerm) ||
        //   payment.type.toLowerCase().includes(searchTerm);
      })
    : sortedPayments;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPayments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {descClicked ? (
        <div>
          <Modal
            open={openModal}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}
            zIndex="2000"
          >
            <p className="pay-info">
              <span className="pay-label">Tour Id:</span>{" "}
              <span className="pay-desc">{JSON.parse(payDesc).tourId}</span>
            </p>
            <p className="pay-info">
              <span className="pay-label">Card Type:</span>{" "}
              <span className="pay-desc">{JSON.parse(payDesc).cardType}</span>
            </p>
            <p className="pay-info">
              <span className="pay-label">Card Number:</span>{" "}
              <span className="pay-desc">{JSON.parse(payDesc).cardNumber}</span>
            </p>
            <p className="pay-info">
              <span className="pay-label">Expiry:</span>{" "}
              <span className="pay-desc">{JSON.parse(payDesc).expiry}</span>
            </p>
            <p className="pay-info">
              <span className="pay-label">Holder Name:</span>{" "}
              <span className="pay-desc">{JSON.parse(payDesc).holderName}</span>
            </p>
            <p className="pay-info">
              <span className="pay-label">CVV:</span>{" "}
              <span className="pay-desc">{JSON.parse(payDesc).cvv}</span>
            </p>
          </Modal>
        </div>
      ) : (
        ""
      )}
      <div className="dashboard-header">
        <div className="select-container">
          <select
            id="categorySelect"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="id">ID</option>
            <option value="payDate">PayDate</option>
            <option value="amount">Amount</option>
          </select>
        </div>

        <div className="sort-container">
          <label htmlFor="sortOrder">Sort Order:</label>
          <select id="sortOrder" onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search for title or type"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <table className="tour-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}> ID</th>
            <th onClick={() => handleSort("payDate")}>Pay Date</th>
            <th onClick={() => handleSort("amount")}>Amount</th>
            <th> Price Currency</th>
            <th> Description</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.payDate}</td>
              <td>{payment.amount}</td>
              <td>{payment.currency}</td>
              <td
                onClick={() => {
                  setPayDesc(payment.description);
                  setDescClicked(true);
                  if (openModal === false) {
                    setOpenModal(true);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                {payment.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className="button-admin">
        <button className="btn btn-primary" onClick={() => navigate("/admin/tour/add-tour")}>
          Add Tour
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/admin/tour/delete-tour")}>
          Delete
        </button>
      </div> */}

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
