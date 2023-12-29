import React, { useState, useEffect } from "react";
import { getCustomerProperties } from "./accountFunction";
import "./account.css";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [accounts, setAccounts] = useState([]);
  const [sortCategory, setSortCategory] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const navigate = useNavigate();

  const loadAccounts = () => {
    getCustomerProperties()
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          setAccounts(data);
        }
      })
      .catch(error => {
        console.error('Error loading accounts:', error);
      });
  };

  useEffect(() => {
    loadAccounts();
  }, []);

  const handleSort = (category) => {
    if (sortCategory === category) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCategory(category);
      setSortOrder("asc");
    }
  };

  const sortedAccounts = accounts.sort((a, b) => {
    if (sortCategory === "id") {
      return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
    }
    const valueA = a[sortCategory].toLowerCase();
    const valueB = b[sortCategory].toLowerCase();

    if (sortOrder === "asc") {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });

  const filteredAccounts = searchTerm
    ? sortedAccounts.filter(account =>
      account.email.toLowerCase().includes(searchTerm)
    )
    : sortedAccounts;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAccounts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="dashboard-header">
        <div className="select-container">
          <select id="categorySelect" onChange={(e) => handleSort(e.target.value)}>
            <option value="id">ID</option>
            <option value="email">Email</option>
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
            placeholder="Search for email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>ID</th>
            <th>Role</th>
            <th>Name</th>
            <th>Card No</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th onClick={() => handleSort("email")}>Email</th>
            <th>Passport</th>

          </tr>
        </thead>
        <tbody>
          {currentItems.map(account => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.role}</td>
              <td>{account.customer ? account.customer.name : ''}</td>
              <td>{account.customer ? account.customer.cardNo : ''}</td>
              <td>{account.customer ? account.customer.address : ''}</td>
              <td>{account.customer ? account.customer.phoneNumber : ''}</td>
              <td>{account.email}</td>
              <td>{account.customer ? account.customer.passport : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button-admin">
        <button className="btn btn-primary" onClick={() => navigate("/admin/account/add-account")}>
          Add Account
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/admin/account/delete-account")}>
          Delete
        </button>
      </div>

      <ul className="pagination">
        {Array.from({ length: Math.ceil(filteredAccounts.length / itemsPerPage) }).map(
          (_, index) => (
            <li key={index} className={currentPage === index + 1 ? "active" : ""}>
              <button onClick={() => paginate(index + 1)}>{index + 1}</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Account;
