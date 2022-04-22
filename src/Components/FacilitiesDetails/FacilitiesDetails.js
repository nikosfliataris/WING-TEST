import React from "react";
import "./FacilitiesDetails.scss";
function FacilitiesDetails({ Data }) {
  const { facility_address, facility_id, facility_name } = Data[0];
  return (
    <div className="facilitiesdetails">
      <div className="wrap" key={facility_id}>
        <h3>{facility_name.toUpperCase()}</h3>
        <p>
          Name: <strong>{facility_name}</strong>
        </p>
        <p>
          Address: <strong>{facility_address}</strong>
        </p>
      </div>
    </div>
  );
}

export default FacilitiesDetails;
