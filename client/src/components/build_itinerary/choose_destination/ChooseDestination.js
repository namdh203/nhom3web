import "./ChooseDestination.css";
import { useLocation } from "react-router-dom";
import SearchCountry from "./SearchCountry";
import ChooseDate from "./ChooseDate";
import SelectDestinations from "./SelectDestinations";

export default function ChooseDestination() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get("country");
  const date = searchParams.get("date");
  const duration = searchParams.get("duration");

  return (
    <div className="container">
      <div style={{ height: "100px" }}></div>
      {country === null && <SearchCountry />}

      {country !== null && date === null && duration === null && <ChooseDate />}

      {country !== null && date !== null && duration !== null && (
        <SelectDestinations countryId={country} date={date} duration={duration}/>
      )}
    </div>
  );
}
