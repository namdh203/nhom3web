import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";

export default function SelectDestinations() {
  const [query, setQuery] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const url = new URL(window.location);
  const countryId = url.searchParams.get("country");
  const date = url.searchParams.get("date");
  const min = url.searchParams.get("min");
  const max = url.searchParams.get("max");

  useEffect(() => {
    searchDestination("");
  }, []);

  useEffect(() => {
    if (itinerary.length !== 0) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setShowModal(false);
    }
  }, [itinerary]);

  function searchDestination() {
    axios
      .post("/destinations/search-destination", { query, countryId })
      .then((response) => {
        setDestinations(response.data.results);
      });
  }

  function addItineraryDest(dest) {
    setItinerary((current) => {
      if (current.find((d) => d.id === dest.id) !== undefined) return current;
      return [...current, dest];
    });
  }

  function removeItineraryDest(id) {
    setItinerary((current) => current.filter((dest) => dest.id !== id));
  }

  function buildItinerary() {
    const itiList = [];
    itinerary.forEach((iti) => {
      itiList.push(iti.id);
    });
    const arrayString = itiList.join(",");

    const url =
      "/tour-customize?itiList=" +
      encodeURIComponent(arrayString) +
      `&date=${date}` +
      `&min=${min}&max=${max}`;
    window.location.href = url;
  }

  return (
    <Container fluid="sm">
      <div style={{ height: "50px" }}></div>
      <Row className="mb-4">
        <InputGroup>
          <InputGroup.Text>
            <IoSearch />
          </InputGroup.Text>

          <Form.Floating>
            <Form.Control
              id="searchDestinationTextField"
              type="text"
              placeholder="Find a destination"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                searchDestination(e.target.value);
              }}
            />
            <label htmlFor="searchDestinationTextField">
              Find a destination
            </label>
          </Form.Floating>
        </InputGroup>
      </Row>

      <Row>
        <h5 className="mb-3 text-center">
          {query === "" && "Or, start with these popular choices"}
          {query !== "" && `Destinations matching "${query}..."`}
        </h5>
      </Row>

      <Row className="gy-3 mb-3 row-cols-1" sm={2} md={3} lg={4}>
        {destinations.map(
          (dest) =>
            itinerary.find((d) => d.id === dest.id) === undefined && (
              <Col key={dest.id}>
                <Card className="h-100" key={dest.id}>
                  <Card.Img variant="top" src={dest.demoImage} />
                  <Card.Body>
                    <Card.Title>{dest.name}</Card.Title>
                    <Card.Text>{dest.additionInfo}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="success"
                      onClick={() => addItineraryDest(dest)}
                    >
                      Add to Itinerary
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            )
        )}
      </Row>

      <div className="position-fixed top-100 start-50 translate-middle ">
        <Alert variant="dark" transition show={showAlert}>
          <p className="mb-0">{itinerary.length} destinations added!</p>
          <hr />
          <Button
            className="me-2"
            variant="secondary"
            onClick={() => setShowModal(true)}
          >
            Edit
          </Button>
          <Button variant="success" onClick={() => buildItinerary()}>
            Build Itinerary
          </Button>
        </Alert>

        <div style={{ height: "150px" }}></div>
      </div>

      <div style={{ height: "200px" }}></div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Destinations you will visit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="gy-3 row-cols-1">
            {itinerary.map((dest) => (
              <Col key={dest.id}>
                <Card>
                  <Row className="g-0">
                    <Col md={4}>
                      <img
                        className="img-fluid rounded-start"
                        src={dest.demoImage}
                        alt={dest.name}
                      />
                    </Col>
                    <Col md={7}>
                      <Card.Body>
                        <Card.Title>{dest.name}</Card.Title>
                        <Card.Text>
                          {dest.additionInfo.substring(0, 20)}
                          {dest.additionInfo.length > 20 ? "..." : ""}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                    <Col
                      className="d-flex flex-column justify-content-center"
                      md={1}
                    >
                      <CloseButton
                        onClick={() => removeItineraryDest(dest.id)}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
