import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckUser } from "./Utility";

const UseAdminAuth = (props) => {
  const User = useSelector((state) => state.User.User);
  const history = useNavigate();
  useEffect(() => {
    if (!CheckUser(User)) {
      history("/");
    }
  }, [User]);
  return props;
};
export default UseAdminAuth;
