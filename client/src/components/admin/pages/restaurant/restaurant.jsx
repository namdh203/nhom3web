import React, { useState, useEffect } from "react";
import { getAllRestaurant } from "./restaurantFunction";
import "./restaurant.css";
import { useNavigate } from "react-router-dom";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [sortCategory, setSortCategory] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const navigate = useNavigate();

  const loadRestaurants = () => {
    getAllRestaurant()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setRestaurants(data);
        }
      })
      .catch((error) => {
        console.error("Error loading restaurants:", error);
      });
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  const handleSort = (category) => {
    if (sortCategory === category) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCategory(category);
      setSortOrder("asc");
    }
  };

  const sortedRestaurants = restaurants.sort((a, b) => {
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

  const filteredRestaurants = searchTerm
    ? sortedRestaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm)
      )
    : sortedRestaurants;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRestaurants.slice(
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

      <table className="restaurant-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}> ID</th>
            <th onClick={() => handleSort("name")}>Name</th>
            <th> DestID</th>
            <th> Address</th>
            <th> Telephone</th>
            <th> Description</th>
            <th> Addition Info</th>
            <th> Demo Image</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.id}</td>
              <td>{restaurant.name}</td>
              <td>{restaurant.destId}</td>
              <td>{restaurant.address}</td>
              <td>{restaurant.telephone}</td>
              <td>{restaurant.description}</td>
              <td>{restaurant.additionInfo}</td>
              <td>{restaurant.demoImage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button-admin">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/admin/dining/add-restaurant")}
        >
          Add Dining Place
        </button>
        <button
          className="btn btn-primary"
          onClick={ () => navigate("/admin/dining/delete-restaurant")}>
          Delete
        </button>
      </div>

      <ul className="restaurant-pagination">
        {Array.from({
          length: Math.ceil(filteredRestaurants.length / itemsPerPage),
        }).map((_, index) => (
          <li key={index} className={currentPage === index + 1 ? "active" : ""}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
