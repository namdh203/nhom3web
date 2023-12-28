import React, { useState, useEffect } from "react";
import { getAllDestination } from "./destinationFunction";
import "./destination.css"
import { useNavigate } from "react-router-dom";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [sortCategory, setSortCategory] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const navigate = useNavigate();

  const loadDestinations = () => {
    getAllDestination()
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          setDestinations(data);
        }
      })
      .catch(error => {
        console.error('Error loading destinations:', error);
      });
  };

  useEffect(() => {
    loadDestinations();
  }, []);

  const handleSort = (category) => {
    if (sortCategory === category) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCategory(category);
      setSortOrder("asc");
    }
  };

  const sortedDestinations = destinations.sort((a, b) => {
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

  const filteredDestinations = searchTerm
    ? sortedDestinations.filter(destination =>
        destination.name.toLowerCase().includes(searchTerm)
    )
    : sortedDestinations;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredDestinations.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="dashboard-header">
        <div className="select-container">
          <select id="categorySelect" onChange={(e) => handleSort(e.target.value)}>
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

      <table>
        <thead>
          <tr>
            <th> ID</th>
            <th onClick={() => handleSort("name")}>Name</th>
            <th> CountryID</th>
            <th> Description</th>
            <th> Addition Info</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(destination => (
            <tr key={destination.id}>
              <td>{destination.id}</td>
              <td>{destination.name}</td>
              <td>{destination.countryId}</td>
              <td>{destination.description}</td>
              <td>{destination.additionInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button-admin">
        <button className="btn btn-primary" onClick={ () => navigate("/admin/destination/add-destination")}>
          Add Destination
        </button>
        <button className="btn btn-primary" onClick={ () => navigate("/admin/destination/delete-destination")}>
          Delete
        </button>
      </div>

      <ul className="pagination">
        {Array.from({ length: Math.ceil(filteredDestinations.length / itemsPerPage) }).map(
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

export default Destination;
