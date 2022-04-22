import React from "react";
import { useNavigate } from "react-router-dom";
import "./LastValues.scss";
function LastValues({ patients }) {
  const history = useNavigate();
  if (patients.patient_id != 11) {
    return "No Values for this patient return to the Homepage";
  }
  const { bloodpressure, heart_rate, patient_id, temperature } = patients;
  return (
    <div className="lastvalues">
      <div className="wrap">
        <div className="bloodpressure">
          <h3 className="title">Blood Pressure</h3>
          <p>
            Patient ID: <strong>{patient_id}</strong>
          </p>
          <p>
            Blood Pressure:
            <strong>
              {bloodpressure[0].dia_blood_pressure}/
              {bloodpressure[0].sys_blood_pressure}
            </strong>
          </p>
          <p>
            Time: <strong>{bloodpressure[0].timestamp}</strong>
          </p>
        </div>
        <div className="heartrate">
          <h3>Heart Rate</h3>
          <p>
            Heart Rate: <strong>{heart_rate[0].heart_rate}</strong>
          </p>
          <p>
            Time:<strong>{heart_rate[0].timestamp}</strong>
          </p>
        </div>
        <div className="temperature">
          <h3>Temperature</h3>
          <p>
            Temperature: <strong>{temperature[0].temperature}</strong>
          </p>
          <p>
            Time:<strong>{temperature[0].timestamp}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LastValues;
