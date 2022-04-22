import React from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../CustomHook/useFetch";
import PreviewPatients from "../PreviewPatients/PreviewPatients";
import Spinner from "../Spinner/Spinner";
import "./Directory.scss";
function Directory() {
  const user = useSelector((state) => state.User.User);
  const url = `http://62.74.232.210:4566/healthmonitor/patients?user_id=${user.user_id}`;
  const { patients, loading } = useFetch(url);
  return (
    <div className="directory">
      {loading ? (
        <Spinner />
      ) : (
        patients.map((patient) => (
          <PreviewPatients patient={patient} key={user.user_id} />
        ))
      )}
    </div>
  );
}

export default Directory;
