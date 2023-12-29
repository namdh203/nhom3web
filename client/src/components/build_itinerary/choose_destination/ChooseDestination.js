import "./ChooseDestination.css";
import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import SearchCountry from "./SearchCountry";
import ChooseDate from "./ChooseDate";
import SelectDestinations from "./SelectDestinations";
import SetDuration from "./SetDuration";
import background from "../../../assets/img/map.png";

export default function ChooseDestination() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get("country");
  const date = searchParams.get("date");
  const duration = searchParams.get("duration");

  return (
    <div className="full-screen-background" style={{ backgroundImage: `url(${background})` }}>    
      <div class="row gx-5">
            <div class="col">
             <div class="p-3">
             </div>
            </div>
            <div class="col">
             <div class="p-3">
            
             </div>
            </div>
            <div class="col" >
             <div class="p-3">
             
             </div>
            </div>
            <div class="col">
             <div class="p-3">
                
             </div>
            </div>
        </div>
     <div className="container">
      <div style={{ height: "100px", width: "790px" }}></div>
      {country === null && <SearchCountry />}
      {country !== null  && duration === null  && date === null && <SetDuration />}
      {country !== null && date === null && duration !== null && <ChooseDate />}

      {country !== null && date !== null && duration !== null && (
        <SelectDestinations countryId={country} />
      )}
      </div>
    </div>

  );
}
