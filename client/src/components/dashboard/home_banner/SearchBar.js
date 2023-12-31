import "./home_banner.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <InputGroup
      className="mb-3 search-bar"
      onClick={() => {
        window.location.href = "/build-itinerary/country";
      }}
      style={{ cursor: "pointer" }}
    >
      <InputGroup.Text id="search-icon">
        <IoSearch />
      </InputGroup.Text>

      <FormControl
        placeholder="Where do you want to go?"
        aria-label="Where do you want to go?"
        id="search-field"
        style={{ cursor: "pointer" }}
      />
    </InputGroup>
  );
}
