import React from "react";
import { useFetch } from "../../Components/CustomHook/useFetch";
import FacilitiesDetails from "../../Components/FacilitiesDetails/FacilitiesDetails";
import "./Facilities.scss";
function Facilities() {
  const url = "http://62.74.232.210:4566/healthmonitor/facilities";
  const { patients, loading } = useFetch(url);

  return (
    <div className="facilities">
      {loading === false ? <FacilitiesDetails Data={patients} /> : null}
    </div>
  );
}

export default Facilities;
