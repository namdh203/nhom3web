import React, { useState, useEffect } from "react";
import { getAllTransportation } from "./transportationFunction";
import "./transportation.css";
import { useNavigate } from "react-router-dom";

const Transportation = () => {
  const [transportations, setTransportations] = useState([]);
  const [sortCategory, setSortCategory] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const navigate = useNavigate();

  const loadTransportations = () => {
    getAllTransportation()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setTransportations(data);
        }
      })
      .catch((error) => {
        console.error("Error loading transportations:", error);
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
    if (sortCategory === "id") {
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

  const filteredTransportations = searchTerm
    ? sortedTransportations.filter((transportation) =>
        transportation.type.toLowerCase().includes(searchTerm)
      )
    : sortedTransportations;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransportations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="dashboard-header">
        <div className="select-container">
          <select
            id="categorySelect"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="id">ID</option>
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

      <table className="transportation-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("type")}> ID</th>
            <th> Destination IDs</th>
            <th onClick={() => handleSort("type")}>Type</th>
            <th> Addition Info</th>
            <th> Demo Image</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((transportation) => (
            <tr key={transportation.id}>
              <td>{transportation.id}</td>
              <td>{transportation.destIds.join(", ")}</td>
              <td>{transportation.type}</td>
              <td>{transportation.additionInfo}</td>
              <td>{transportation.demoImage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button-admin">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/admin/transportation/add-transportation")}
        >
          Add Transportation
        </button>
        <button className="btn btn-primary" onClick={ () => navigate("/admin/transportation/delete-transportation")}>
          Delete
        </button>
      </div>

      <ul className="transport-pagination">
        {Array.from({
          length: Math.ceil(filteredTransportations.length / itemsPerPage),
        }).map((_, index) => (
          <li key={index} className={currentPage === index + 1 ? "active" : ""}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transportation;
