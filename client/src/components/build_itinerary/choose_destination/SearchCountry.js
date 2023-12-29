import "./SearchCountry.css"
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Container from "react-bootstrap/Container";

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
    navigate(`/build-itinerary/choose-destination?country=${result.id}`);

  }

  return (
<<<<<<< HEAD
    <div>
      <span className="search-title">
        <Form.Label className="search-title-p1">
          What's
        </Form.Label>
        <Form.Label className="search-title-p2">
           your pick 
        </Form.Label>
        <Form.Label className="search-title-p3">
           for your next vacation?
        </Form.Label>
      </span>

      <div id="searchContainer">
        <InputGroup className="mb-3">
          <InputGroup.Text className="IoSearch">
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
      </div>
      
      {suggestionsVisible && (
        <ListGroup variant="flush" className="suggestions-list">
          {results.map((result) => (
            <ListGroupItem
              action
              key={result.id}
              onClick={() => handleSuggestionClick(result)}
            >
              {result.countryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
=======
    <Container className="ps-md-5 pe-md-5">
      <h2 className="mb-5">
        What's <i>your pick</i> for your next vacation?
      </h2>

      <InputGroup size="lg" className="mb-3">
        <InputGroup.Text>
          <IoSearch />
        </InputGroup.Text>

        <Form.Floating>
          <Form.Control
            id="seachCountryTextField"
            type="text"
            placeholder="Pick your destination country"
            onChange={(e) => searchCountry(e.target.value)}
            size="lg"
          />
          <label className="fs-6" htmlFor="seachCountryTextField">
            Pick your destination country
          </label>
        </Form.Floating>
      </InputGroup>

      <ListGroup variant="flush">
        {results.map((result) => (
          <ListGroupItem
            action
            key={result.id}
            href={`/build-itinerary/month?country=${result.id}`}
            className="fs-4"
          >
            {result.countryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
>>>>>>> c69e987198a117130a839de379311d8f0db338ba
  );
}
