import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "./../Button/Button";
import { logout } from "../../Redux/features/User/UserSlice";
import "./Header.scss";
function Header(props) {
  const user = useSelector((state) => state.User.User);
  const dispatch = useDispatch();
  const history = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout(null));
    history({ pathname: "/" });
    localStorage.clear();
  };
  const handleHistory = (e) => {
    e.preventDefault();
    history({ pathname: "/homepage" });
  };
  if (!user) return null;
  return (
    <>
      <div className="header">
        <div className="wrap">
          <div className="name">
            {user ? (
              <span>
                <p>Hello,</p> <br />
                {user.username}
              </span>
            ) : null}
          </div>

          <Button className="material-symbols-outlined" onClick={handleHistory}>
            arrow_back
          </Button>
          <div className="logout">
            <Button className="logout-btn" onClick={logOut}>
              Log Out
            </Button>
          </div>
          <Link to="/registration" className="registration">
            Registration
          </Link>
          <Link to="/facilities" className="facilities">
            Facilities
          </Link>
        </div>
      </div>
      {props.children}
    </>
  );
}

export default Header;
