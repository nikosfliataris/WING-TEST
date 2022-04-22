import React, { useState } from "react";
import "./Registration.scss";
import Form from "./../../Components/FormInput/Input";
import Button from "./../../Components/Button/Button";
import { login } from "../../Redux/features/User/UserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [facility_id, setFacilityID] = useState("");
  const [address_street, setAddressStreet] = useState("");
  const [address_number, setAddressNumber] = useState("");
  const [address_city, setAddressCity] = useState("");
  const [address_postalcode, setAddressPostalcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [amka, setAmka] = useState("");
  const [ext_patient, setExtPatient] = useState("");
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://62.74.232.210:4566/healthmonitor/patients", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        facility_id: facility_id,
        address_street: address_street,
        address_number: address_number,
        address_city: address_city,
        address_postalcode: address_postalcode,
        phonenumber: phoneNumber,
        sex: sex,
        age: age,
        amka: amka,
        ext_patient: ext_patient,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="registration">
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <Form
          name="FirstName"
          type="text"
          label="First Name"
          value={firstName}
          handleChange={(e) => setFirstName(e.target.value)}
          required
        />
        <Form
          name="LastName"
          type="text"
          label="LastName"
          value={lastName}
          handleChange={(e) => setLastName(e.target.value)}
          required
        />{" "}
        <Form
          name="email"
          type="email"
          label="E-mail"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <Form
          name="facility"
          type="number"
          label="Facility"
          value={facility_id}
          handleChange={(e) => setFacilityID(e.target.value)}
          required
        />{" "}
        <Form
          name="Address Street"
          type="text"
          label="Address Street"
          value={address_street}
          handleChange={(e) => setAddressStreet(e.target.value)}
          required
        />{" "}
        <Form
          name="Address Number"
          type="number"
          label="Address Number"
          value={address_number}
          handleChange={(e) => setAddressNumber(e.target.value)}
          required
        />{" "}
        <Form
          name="Address City"
          type="text"
          label="Address City"
          value={address_city}
          handleChange={(e) => setAddressCity(e.target.value)}
          required
        />{" "}
        <Form
          name="Address Postal Code"
          type="number"
          label="Post Code"
          value={address_postalcode}
          handleChange={(e) => setAddressPostalcode(e.target.value)}
          required
        />{" "}
        <Form
          name="Number"
          type="number"
          label="Phone Nummber"
          value={phoneNumber}
          handleChange={(e) => setPhoneNumber(e.target.value)}
          required
        />{" "}
        <Form
          name="Sex"
          type="text"
          label="Sex"
          value={sex}
          handleChange={(e) => setSex(e.target.value)}
          required
        />{" "}
        <Form
          name="Age"
          type="number"
          label="Age"
          value={age}
          handleChange={(e) => setAge(e.target.value)}
          required
        />{" "}
        <Form
          name="amka"
          type="number"
          label="AMKA"
          value={amka}
          handleChange={(e) => setAmka(e.target.value)}
          required
        />{" "}
        <Form
          name="Patient"
          type="boolean"
          label="Patient Ext"
          value={ext_patient}
          handleChange={(e) => setExtPatient(e.target.value)}
          required
        />
        <Button>Log In</Button>
      </form>
    </div>
  );
}

export default Registration;
