import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect } from "react";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function Values24({ patients }) {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Sys Bloob Pressure",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [],
      },
      {
        label: "Dia Bloob Pressure",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [],
      },
      {
        label: "Heart Rate",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: [],
      },
      {
        label: "Temperature",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(61, 125, 127)",
        data: [],
      },
    ],
  });
  if (patients.patient_id != 11) {
    return "No Values for this patient return to the Homepage";
  }
  for (let a = 0; a < patients.bloodpressure.length; a++) {
    data.labels.push(patients.bloodpressure[a].timestamp);
  }

  for (let i = 0; i < data.datasets.length; i++) {
    switch (i) {
      case 0:
        for (let j = 0; j < patients.bloodpressure.length; j++) {
          data.datasets[i].data.push(
            patients.bloodpressure[j].sys_blood_pressure
          );
        }
        break;
      case 1:
        for (let l = 0; l < patients.bloodpressure.length; l++) {
          data.datasets[i].data.push(
            patients.bloodpressure[l].dia_blood_pressure
          );
        }
        break;
      case 2:
        for (let n = 0; n < patients.heart_rate.length; n++) {
          data.datasets[i].data.push(patients.heart_rate[n].heart_rate);
        }
        break;
      case 3:
        for (let p = 0; p < patients.temperature.length; p++) {
          data.datasets[i].data.push(patients.temperature[p].temperature);
        }
    }
  }

  return (
    <CDBContainer>
      <h3 className="mt-5">Line chart</h3>
      <Line data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
}

export default Values24;
