import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import background from "../../assets/img/map.png";
import Container from "react-bootstrap/Container";
import "./ChooseDestinations.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SearchCountry() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const timerId = setTimeout(() => {
        searchCountry(searchQuery);
      }, 300);
      return () => clearTimeout(timerId);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  function searchCountry(query) {
    axios.post("/destinations/search-country", { query }).then((response) => {
      setResults(response.data.results);
      setSuggestionsVisible(true);
    });
  }

  function handleSuggestionClick(result) {
    setSearchQuery(result.countryName);
    setSuggestionsVisible(false);
    console.log("Selected Country:", result.countryName);
    navigate(`/build-itinerary/month?country=${result.id}`);
  }

  return (
    <Container
      className="full-screen-background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div style={{ height: "50px" }}></div>
      <Row className="row-cols-1">
        <Col className="d-flex justify-content-center mb-4 mt-2">
          <span>
            <Form.Label className="search-title-p1">What's</Form.Label>
            <Form.Label className="search-title-p2">your pick</Form.Label>
            <Form.Label className="search-title-p3">
              for your next vacation?
            </Form.Label>
          </span>
        </Col>
        <Col className="d-flex justify-content-center">
          <InputGroup className="mb-3 w-75">
            <InputGroup.Text>
              <IoSearch />
            </InputGroup.Text>

            <Form.Floating>
              <Form.Control
                id="searchCountryTextField"
                type="text"
                placeholder="Pick your destination country"
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSuggestionsVisible(true);
                }}
                value={searchQuery}
              />
              <label htmlFor="searchCountryTextField">
                Pick your destination country
              </label>
            </Form.Floating>
          </InputGroup>
        </Col>
        <Col className="d-flex justify-content-center">
          {suggestionsVisible && (
            <ListGroup variant="flush" className="suggestions-list w-75">
              {results.map((result) => (
                <ListGroupItem
                  action
                  key={result.id}
                  onClick={() => handleSuggestionClick(result)}
                  className="fs-5"
                  style={{ backgroundColor: "transparent" }}
                >
                  {result.countryName}
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
}
