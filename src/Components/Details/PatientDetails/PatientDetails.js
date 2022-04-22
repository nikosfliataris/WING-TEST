import React from "react";
import "./PatientDetails.scss";
function Details({ patients }) {
  const {
    address_city,
    address_number,
    address_postalcode,
    address_street,
    age,
    email,
    facility,
    firstname,
    lastname,
    medicalpersonnel,
    patient_id,
    pending_alerts,
    phonenumber,
    sex,
  } = patients[0];

  return (
    <div className="patientDetails">
      <div className="wrap">
        <div className="personal-info">
          <h3>Personal Info</h3>
          <p>
            First Name LastName:{" "}
            <strong>
              {firstname} {lastname}
            </strong>
          </p>
          <p>
            Address:{" "}
            <strong>
              {address_street} {address_number} {address_city}
              {address_postalcode}
            </strong>
          </p>
          <p>
            Patient ID:<strong>{patient_id}</strong>{" "}
          </p>
          <p>
            Tel: <strong>{phonenumber}</strong>
          </p>
          <p>
            Sex: <strong>{sex}</strong>
          </p>
          <p>
            Email: <strong>{email}</strong>
          </p>
          <p>
            Age: <strong>{age}</strong>
          </p>
        </div>
        <div className="condition">
          <h3>Conditions</h3>
          {patients[0].conditions?.map((item) => (
            <p>
              Condition:<strong>{item}</strong>
            </p>
          ))}
          <p>
            Pending Alerts: <strong>{pending_alerts}</strong>
          </p>
        </div>
        <div className="facility">
          <h3>Facility Hosting</h3>
          <p>
            Facility ID: <strong>{facility?.facility_id}</strong>{" "}
          </p>
          <p>
            Name: <strong>{facility?.facility_name}</strong>
          </p>
          <p>
            Address: <strong>{facility?.facility_address}</strong>
          </p>
        </div>
        <div className="medicalpersonnel">
          <details>
            <summary style={{ color: "rgb(84, 84, 204)" }}>
              Medical Personnel
            </summary>
            {medicalpersonnel?.map((person) => (
              <div className="summary-item">
                <p className="first-name">
                  First Name: <strong>{person.firstname}</strong>
                </p>
                <p className="last-name">
                  Last Name: <strong>{person.lastname}</strong>
                </p>
                <p className="email">
                  Email: <strong>{person.email}</strong>
                </p>
                <p className="address">
                  Address: <strong>{person.address}</strong>
                </p>
                <p className="hospital">
                  Hospital: <strong>{person.hospitals}</strong>
                </p>
                {person.specialty ? (
                  <p className="speciality">
                    Specialty: <strong>{person.specialty}</strong>
                  </p>
                ) : (
                  <p>
                    Medical Person ID:{" "}
                    <strong>{person.medicalperson_id}</strong>
                  </p>
                )}
              </div>
            ))}
          </details>
        </div>
      </div>
    </div>
  );
}

export default Details;
