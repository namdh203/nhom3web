import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export default function SearchCountry() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchCountry("");
  }, []);

  function searchCountry(query) {
    axios.post("/destinations/search-country", { query }).then((response) => {
      setResults(response.data.results);
    });
  }

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <IoSearch />
        </InputGroup.Text>

        <Form.Floating>
          <Form.Control
            id="seachCountryTextField"
            type="text"
            placeholder="Pick your destination country"
            onChange={(e) => searchCountry(e.target.value)}
          />
          <label htmlFor="seachCountryTextField">
            Pick your destination country
          </label>
        </Form.Floating>
      </InputGroup>

      <ListGroup variant="flush">
        {results.map((result) => (
          <ListGroupItem
            action
            key={result.id}
            href={`/build-itinerary/choose-destination?country=${result.id}`}
          >
            {result.countryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}
