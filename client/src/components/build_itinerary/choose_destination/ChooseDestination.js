import "./ChooseDestination.css";

import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ChooseDestination() {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleSearch(e) {
    e.preventDefault();

    axios
      .post("/destinations/search-by-name", {
        name: searchText,
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
              placeholder="Where do you want to go?"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <label htmlFor="searchTextField">Where do you want to go?</label>
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
          Sorry, we couldn't find the destination you were looking for. Please
          try searching for another destination.
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
