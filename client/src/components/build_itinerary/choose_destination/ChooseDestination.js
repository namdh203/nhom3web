import "./ChooseDestination.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ChooseDestination() {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get("country");
  const type = country === null ? "country" : "destination";

  function handleSearch(e) {
    e.preventDefault();

    if (country === null) {
      axios
        .post("/destinations/search-country", { country: searchText })
        .then((response) => {
          const countryData = response.data;
          if (countryData.error) {
            setShowModal(true);
          } else {
            window.location.href = `/build-itinerary/choose-destination?country=${countryData.id}`;
          }
        });
    } else {
      axios
        .post("/destinations/search-destination", {
          destination: searchText,
          countryId: country,
        })
        .then((response) => {
          const destData = response.data;

          if (destData.error) {
            setShowModal(true);
          } else {
            window.location.href = `/build-itinerary/tour-recommendations?dest=${destData.id}`;
          }
        });
    }
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <div style={{ height: "51px" }}></div>

      <form onSubmit={handleSearch}>
        <div className="input-group mb-3 search-input-group">
          <div className="form-floating">
            <input
              value={searchText}
              type="text"
              className="form-control"
              id="searchTextField"
              placeholder={`Select the destination ${
                country === null ? "country" : "city"
              }`}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
            />
            <label htmlFor="searchTextField">
              Select the {type} you want to travel to
            </label>
          </div>
          <button className="btn btn-success" type="submit" id="search-button">
            Search
          </button>
        </div>
      </form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Destination not found</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sorry, we couldn't find the {type} you were looking for. Please try
          searching for another {type}.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
