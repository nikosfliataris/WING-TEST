import React, { useEffect, useState } from "react";
import "./Info.scss";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Components/CustomHook/useFetch";
import LastValues from "../../Components/Details/LastValues/LastValues";
import PatientDetails from "./../../Components/Details/PatientDetails/PatientDetails";
import Values24 from "../../Components/Details/Values24/Values24";

function Info() {
  const { ID } = useParams();
  const [allinfo, setAllinfo] = useState([
    {
      id: 1,
      title: "Patient Info",
      url: `http://62.74.232.210:4566/healthmonitor/patients?patient_id=${ID}&details=true`,
    },
    {
      id: 2,
      title: "Last Values",
      url: `http://62.74.232.210:4566/healthmonitor/realmeasurements?patient_id=${ID}&detail=second&lastvalues=1`,
    },
    {
      id: 3,
      title: "24 HR Values",
      url: `http://62.74.232.210:4566/healthmonitor/realmeasurements?patient_id=${ID}&detail=hour&lastvalues=24`,
    },
  ]);
  const [urlValues, setUrlValues] = useState(
    `http://62.74.232.210:4566/healthmonitor/patients?patient_id=${ID}&details=true`
  );

  const { loading, patients } = useFetch(urlValues);
  const [filters, setfilters] = useState([
    {
      id: 1,
      title: "Patient Info",
      url: `http://62.74.232.210:4566/healthmonitor/patients?patient_id=${ID}&details=true`,
    },
  ]);

  useEffect(() => {
    const filterUrl = allinfo.filter((filtered) => filtered.url === urlValues);
    setfilters(filterUrl);
  }, [urlValues]);

  return (
    <div className="details">
      <div className="select-options">
        <select onChange={(e) => setUrlValues(e.target.value)}>
          {allinfo.map((info) => (
            <option key={info.id} value={info.url}>
              {info.title.toLocaleUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="patient-card">
        {filters[0].id === 1 ? (
          loading === false ? (
            <PatientDetails patients={patients} />
          ) : null
        ) : filters[0].id === 2 ? (
          loading === false ? (
            <LastValues patients={patients} />
          ) : null
        ) : filters[0].id === 3 ? (
          loading === false ? (
            <Values24 patients={patients} />
          ) : null
        ) : null}
      </div>
    </div>
  );
}

export default Info;
