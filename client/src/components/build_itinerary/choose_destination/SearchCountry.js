import "./SearchCountry.css"
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

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
  );
}
