import "./ChooseDestination.css";
import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import SearchCountry from "./SearchCountry";
import ChooseDate from "./ChooseDate";
import SelectDestinations from "./SelectDestinations";

export default function ChooseDestination() {
  // const [searchText, setSearchText] = useState("");
  // const [showModal, setShowModal] = useState(false);
  // const [curDest, setCurDest] = useState("");
  // const [destinations, setDestinations] = useState([]);
  // const [startDate, setStartDate] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get("country");
  const date = searchParams.get("date");
  const duration = searchParams.get("duration");

  // const onChange = (date, dateString) => {
  //   setStartDate(dateString);
  // };

  // function handleSearch(e) {
  //   e.preventDefault();

  //   if (country === null) {
  //     axios
  //       .post("/destinations/search-country", { country: searchText })
  //       .then((response) => {
  //         const countryData = response.data;
  //         if (countryData.error) {
  //           setShowModal(true);
  //         } else {
  //           window.location.href = `/build-itinerary/choose-destination?country=${countryData.id}`;
  //         }
  //       });
  //   } else {
  //     axios
  //       .post("/destinations/search-destination", {
  //         destination: searchText,
  //         countryId: country,
  //       })
  //       .then((response) => {
  //         const destData = response.data;

  //         if (destData.error) {
  //           setShowModal(true);
  //         } else {
  //           window.location.href = `/build-itinerary/tour-recommendations?dest=${destData.id}`;
  //         }
  //       });
  //   }
  // }

  // function handleCloseModal() {
  //   setShowModal(false);
  // }

  // function addDestination() {
  //   setDestinations((currentDestinations) => {
  //     return [
  //       ...currentDestinations,
  //       {
  //         id: crypto.randomUUID(),
  //         dest: curDest,
  //       },
  //     ];
  //   });
  // }

  // function removeDestination(id) {
  //   setDestinations((currentDestinations) =>
  //     currentDestinations.filter((item) => item.id !== id)
  //   );
  // }

  return (
    <div className="container">
      <div style={{ height: "100px" }}></div>
      {country === null && <SearchCountry />}

      {country !== null && date === null && duration === null && <ChooseDate />}

      {country !== null && date !== null && duration !== null && (
        <SelectDestinations countryId={country} />
      )}

      {/* <form onSubmit={handleSearch}>
        <div className="input-group mb-3 search-input-group">
          <div className="form-floating">
            <input
              value={searchText}
              type="text"
              className="form-control"
              id="searchTextField"
              placeholder="Select the destination country"
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
            />
            <label htmlFor="searchTextField">
              Select the country you want to travel to
            </label>
          </div>
          <button className="btn btn-success" type="button" id="search-button">
            Search
          </button>
        </div>

        <div className="centered">
          <label htmlFor="select-duration">
            What's the duration of your holiday?&nbsp;
          </label>
          <Form.Select
            style={{ width: "30%" }}
            aria-label="Default select example"
            id="select-duration"
          >
            <option value="1">3-5 Days</option>
            <option value="2">6-8 Days</option>
            <option value="3">9-11 Days</option>
            <option value="4">12-15 Days</option>
          </Form.Select>
        </div>

        <div className="centered">
          <label htmlFor="departure-date-picker">
            Choose the departure date:&nbsp;
          </label>

          <Space direction="vertical" id="departure-date-picker">
            <LimitedDatePicker onChange={onChange} />
          </Space>
        </div>

        <div className="input-group mb-3 centered">
          <div className="form-floating">
            <input
              value={curDest}
              type="text"
              className="form-control"
              id="searchDest"
              placeholder="Select the destinations you want to travel to"
              onChange={(e) => setCurDest(e.target.value)}
              autoFocus
            />
            <label htmlFor="searchDest">
              Select the destinations you want to travel to
            </label>
          </div>
          <button
            className="btn btn-success"
            type="button"
            id="search-button"
            onClick={addDestination}
          >
            Select
          </button>
        </div>
      </form>

      <ul className="list-group">
        {destinations.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.dest}
            <button
              className="btn btn-outline-danger del-btn"
              onClick={() => removeDestination(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul> */}

      {/* <Modal show={showModal} onHide={handleCloseModal}>
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
      </Modal> */}
    </div>
  );
}
