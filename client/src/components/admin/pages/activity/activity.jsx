import React, { useState, useEffect } from "react";
import { getAllActivity } from "./activityFunction";
import "./activity.css";
import { useNavigate } from "react-router-dom";

const Activity = () => {
  const [activitys, setActivitys] = useState([]);
  const [sortCategory, setSortCategory] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const navigate = useNavigate();

  const loadActivitys = () => {
    getAllActivity()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setActivitys(data);
        }
      })
      .catch((error) => {
        console.error("Error loading activitys:", error);
      });
  };

  useEffect(() => {
    loadActivitys();
  }, []);

  const handleSort = (category) => {
    if (sortCategory === category) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCategory(category);
      setSortOrder("asc");
    }
  };

  const sortedActivitys = activitys.sort((a, b) => {
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

  const filteredActivitys = searchTerm
    ? sortedActivitys.filter((activity) =>
        activity.name.toLowerCase().includes(searchTerm)
      )
    : sortedActivitys;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredActivitys.slice(
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

      <table className="activity-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}> ID</th>
            <th onClick={() => handleSort("name")}>Name</th>
            <th> DestID</th>
            <th> Type</th>
            <th> Description</th>
            <th> Addition Info</th>
            <th> Demo Image</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.name}</td>
              <td>{activity.destId}</td>
              <td>{activity.type}</td>
              <td>{activity.description}</td>
              <td>{activity.additionInfo}</td>
              <td>{activity.demoImage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button-admin">
        <button
          className="btn btn-primary activity-button"
          onClick={() => navigate("/admin/activity/add-activity")}
        >
          Add Activity
        </button>
        <button className="btn btn-primary" onClick={ () => navigate("/admin/activity/delete-activity")}>
          Delete
        </button>
      </div>

      <ul className="activity-pagination">
        {Array.from({
          length: Math.ceil(filteredActivitys.length / itemsPerPage),
        }).map((_, index) => (
          <li key={index} className={currentPage === index + 1 ? "active" : ""}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activity;
