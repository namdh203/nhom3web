import React, { useState, useEffect } from "react";
import { getAllTour } from "./tourFunction";
import "./tour.css"

const Tour = () => {
  const [tours, setTours] = useState([]);
  const [sortCategory, setSortCategory] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const loadTours = () => {
    getAllTour()
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          setTours(data);
        }
      })
      .catch(error => {
        console.error('Error loading Tours:', error);
      });
  };

  useEffect(() => {
    loadTours();
  }, []);

  const handleSort = (category) => {
    if (sortCategory === category) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCategory(category);
      setSortOrder("asc");
    }
  };

  const sortedTours = tours.sort((a, b) => {
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

  const filteredTours = searchTerm
    ? sortedTours.filter(tour =>
        tour.title.toLowerCase().includes(searchTerm) ||
        tour.type.toLowerCase().includes(searchTerm)
    )
    : sortedTours;

  return (
    <div>
      <div className="dashboard-header">
        <div className="select-container">
          <select id="categorySelect" onChange={(e) => handleSort(e.target.value)}>
            <option value="title">Title</option>
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
            placeholder="Search for title or type"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th> ID</th>
            <th onClick={() => handleSort("title")}>Title</th>
            <th> Description</th>
            <th> Duration</th>
            <th> Price</th>
            <th> Price Currency</th>
            <th> Addition Info</th>
            <th> Voting</th>
            <th onClick={() => handleSort("type")}>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredTours.map(tour => (
            <tr key={tour.id}>
              <td>{tour.id}</td>
              <td>{tour.title}</td>
              <td>{tour.description}</td>
              <td>{tour.duration}</td>
              <td>{tour.price}</td>
              <td>{tour.priceCurrency}</td>
              <td>{tour.additionInfo}</td>
              <td>{tour.voting}</td>
              <td>{tour.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Tour;
