import React, { useState, useEffect } from "react";
import { getFullProperty } from "./accountFunction";
import "./account.css"

const Account = () => {
  const [accounts, setAccounts] = useState([]);
  const [sortCategory, setSortCategory] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const loadAccounts = () => {
    getFullProperty()
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
    const valueA = a[sortCategory].toLowerCase();
    const valueB = b[sortCategory].toLowerCase();

    console.log(valueA)
    console.log(valueB)

    if (sortOrder === "asc") {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });

  const filteredAccounts = searchTerm
    ? sortedAccounts.filter(account =>
      account.name.toLowerCase().includes(searchTerm) ||
      account.email.toLowerCase().includes(searchTerm)
    )
    : sortedAccounts;

  return (
    <div>
      <div className="dashboard-header">
        <div className="select-container">
          <select id="categorySelect" onChange={(e) => handleSort(e.target.value)}>
            <option value="name">Name</option>
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
            placeholder="Search for name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th> ID</th>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("email")}>Email</th>
            <th> Phone Number</th>
            <th> Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredAccounts.map(account => (
            <tr key={account.userId}>
              <td>{account.userId}</td>
              <td>{account.name}</td>
              <td>{account.email}</td>
              <td>{account.phoneNumber}</td>
              <td>{account.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Account;
