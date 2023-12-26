import React, { useState, useEffect } from "react";
import { getAllTransportation } from "./transportationFunction";
import "./transportation.css"

const Transportation = () => {
  const [transportations, setTransportations] = useState([]);
  const [sortCategory, setSortCategory] = useState("type");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const loadTransportations = () => {
    getAllTransportation()
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          setTransportations(data);
        }
      })
      .catch(error => {
        console.error('Error loading transportations:', error);
      });
  };

  useEffect(() => {
    loadTransportations();
  }, []);

  const handleSort = (category) => {
    if (sortCategory === category) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCategory(category);
      setSortOrder("asc");
    }
  };

  const sortedTransportations = transportations.sort((a, b) => {
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

  const filteredTransportations = searchTerm
    ? sortedTransportations.filter(transportation =>
        transportation.type.toLowerCase().includes(searchTerm)
    )
    : sortedTransportations;

  return (
    <div>
      <div className="dashboard-header">
        <div className="select-container">
          <select id="categorySelect" onChange={(e) => handleSort(e.target.value)}>
            <option value="type">Type</option>
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
            placeholder="Search for type"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th> ID</th>
            <th onClick={() => handleSort("type")}>Type</th>
            <th> Addition Info</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransportations.map(transportation => (
            <tr key={transportation.id}>
              <td>{transportation.id}</td>
              <td>{transportation.type}</td>
              <td>{transportation.additionInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transportation;
