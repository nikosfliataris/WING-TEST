import React, { useEffect, useState } from "react";
import "./SignIn.scss";
import Form from "./../../Components/FormInput/Input";
import Button from "../../Components/Button/Button";
import { login } from "../../Redux/features/User/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [UserName, setUserName] = useState();
  const [password, setPassword] = useState();
  const user = useSelector((state) => state.User.User);
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://62.74.232.210:4566/healthmonitor/users/login", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        username: "customer_admin",
        password: "healthmonitoring2021",
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(login(data)))
      .then(history({ pathname: "/homepage" }));
  };
  if (user) return history("/homepage");
  return (
    <div className="signin">
      <h3>Log In to Your Personal Account</h3>
      <form onSubmit={handleSubmit}>
        <Form
          name="userName"
          type="text"
          label="UserName"
          value={UserName}
          handleChange={(e) => setUserName(e.target.value)}
          required
        />
        <Form
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button>Log In</Button>
      </form>
    </div>
  );
}

export default SignIn;
