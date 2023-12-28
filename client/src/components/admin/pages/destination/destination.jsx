import React, { useState, useEffect } from "react";
import { getAllDestination } from "./destinationFunction";
import "./destination.css";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [sortCategory, setSortCategory] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const loadDestinations = () => {
    getAllDestination()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setDestinations(data);
        }
      })
      .catch((error) => {
        console.error("Error loading destinations:", error);
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

    console.log(valueA);
    console.log(valueB);

    if (sortOrder === "asc") {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });

  const filteredDestinations = searchTerm
    ? sortedDestinations.filter((destination) =>
        destination.name.toLowerCase().includes(searchTerm)
      )
    : sortedDestinations;

  return (
    <div>
      <div className="dashboard-header">
        <div className="select-container">
          <select
            id="categorySelect"
            onChange={(e) => handleSort(e.target.value)}
          >
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

      <table className="destination-table">
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
          {filteredDestinations.map((destination) => (
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
    </div>
  );
};

export default Destination;
