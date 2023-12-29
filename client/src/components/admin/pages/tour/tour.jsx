import React, { useState, useEffect } from "react";
import { getAllTour } from "./tourFunction";
import "./tour.css"
import { useNavigate } from "react-router-dom";

const Tour = () => {
  const [tours, setTours] = useState([]);
  const [sortCategory, setSortCategory] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const navigate = useNavigate();

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
    if (sortCategory === "id") {
      return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
    }
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTours.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="dashboard-header">
        <div className="select-container">
          <select id="categorySelect" onChange={(e) => handleSort(e.target.value)}>
            <option value="id">ID</option>
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
            <th onClick={() => handleSort("id")}> ID</th>
            <th>Destination IDs</th>
            <th onClick={() => handleSort("title")}>Title</th>
            <th> Description</th>
            <th> Duration</th>
            <th> Price</th>
            <th> Price Currency</th>
            <th> Addition Info</th>
            <th> Voting</th>
            <th onClick={() => handleSort("type")}>Type</th>
            <th> Demo Image</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(tour => (
            <tr key={tour.id}>
              <td>{tour.id}</td>
              <td>{tour.destIds.join(", ")}</td>
              <td>{tour.title}</td>
              <td>{tour.description}</td>
              <td>{tour.duration}</td>
              <td>{tour.price}</td>
              <td>{tour.priceCurrency}</td>
              <td>{tour.additionInfo}</td>
              <td>{tour.voting}</td>
              <td>{tour.type}</td>
              <td>{tour.demoImage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button-admin">
        <button className="btn btn-primary" onClick={ () => navigate("/admin/tour/add-tour")}>
          Add Tour
        </button>
      </div>

      <ul className="pagination">
        {Array.from({ length: Math.ceil(filteredTours.length / itemsPerPage) }).map(
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

export default Tour;
