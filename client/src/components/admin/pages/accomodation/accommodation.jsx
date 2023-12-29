import React, { useState, useEffect } from "react";
import { getAllAccommodation } from "./accommodationFunction";
import "./accommodation.css"
import { useNavigate } from "react-router-dom";

const Accommodation = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [sortCategory, setSortCategory] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const navigate = useNavigate();

  const loadAccommodations = () => {
    getAllAccommodation()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setAccommodations(data);
        }
      })
      .catch((error) => {
        console.error("Error loading accommodations:", error);
      });
  };

  useEffect(() => {
    loadAccommodations();
  }, []);

  const handleSort = (category) => {
    if (sortCategory === category) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCategory(category);
      setSortOrder("asc");
    }
  };

  const sortedAccommodations = accommodations.sort((a, b) => {
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

  const filteredAccommodations = searchTerm
    ? sortedAccommodations.filter((accommodation) =>
        accommodation.name.toLowerCase().includes(searchTerm)
      )
    : sortedAccommodations;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredAccommodations.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="dashboard-header">
        <div className="select-container">
          <select id="categorySelect" onChange={(e) => handleSort(e.target.value)}>
            <option value="id">ID</option>
            <option value="name">Name</option>
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
            placeholder="Search for name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      <table className="accommodation-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}> ID</th>
            <th onClick={() => handleSort("name")}>Name</th>
            <th> DestID</th>
            <th> Price Per Night</th>
            <th> Price Currency</th>
            <th> Address</th>
            <th> Telephone</th>
            <th> Contact Email</th>
            <th> Description</th>
            <th> Addition Info</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(accommodation => (
            <tr key={accommodation.id}>
              <td>{accommodation.id}</td>
              <td>{accommodation.name}</td>
              <td>{accommodation.destId}</td>
              <td>{accommodation.pricePerNight}</td>
              <td>{accommodation.priceCurrency}</td>
              <td>{accommodation.address}</td>
              <td>{accommodation.telephone}</td>
              <td>{accommodation.contactEmail}</td>
              <td>{accommodation.description}</td>
              <td>{accommodation.additionInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button-admin">
        <button className="btn btn-primary" onClick={ () => navigate("/admin/accommodation/add-accommodation")}>
          Add Accommodation
        </button>
      </div>

      <ul className="pagination">
        {Array.from({ length: Math.ceil(filteredAccommodations.length / itemsPerPage) }).map(
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

export default Accommodation;
