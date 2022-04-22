import React from "react";
import { useNavigate } from "react-router-dom";
import "./PreviewPatients.scss";
function PreviewPatients({ patient }) {
  const history = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    history(`/info/${patient.patient_id}`);
  };
  return (
    <div className="card">
      <div className="wrap">
        <div className="name">
          <h3>
            {patient.firstname} {patient.lastname}
          </h3>

          <i className="fa-solid fa-person"></i>
        </div>
        <div className="option">
          <h3>Patient_ID </h3>
          <p>{patient.patient_id}</p>
        </div>
        <div className="option">
          <h3>Heart Rate</h3>
          <p>{patient.heart_rate}</p>
        </div>
        <div className="option">
          <h3>
            {patient.z_accel
              ? "Z Accel"
              : patient.sys_blood_pressure
              ? "Sys Blood Pressure"
              : patient.oxygen_saturation
              ? "Oxygen Saturation"
              : patient.dia_blood_pressure
              ? "Dia Blood pressure"
              : "Pending Alerts "}
          </h3>
          <p>
            {patient.z_accel
              ? `${patient.z_accel} m/s`
              : patient.sys_blood_pressure
              ? `${patient.sys_blood_pressure} bps`
              : patient.oxygen_saturation
              ? `${patient.oxygen_saturation} m/s`
              : patient.dia_blood_pressure
              ? `${patient.dia_blood_pressure} m/s`
              : `${patient.pending_alerts} `}
          </p>
        </div>
        <button className="btn" onClick={handleClick}>
          See more
        </button>
      </div>
    </div>
  );
}

export default PreviewPatients;
