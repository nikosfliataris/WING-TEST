import React, { lazy, Suspense } from "react";
import Spinner from "./Components/Spinner/Spinner";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import SignIn from "./Pages/SignIn/SignIn";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";
import WithAdmin from "./Components/HOC/withAdmin";
import Facilities from "./Pages/Facilities/Facilities";
const Registration = lazy(() => import("./Pages/Registration/Registration"));
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const PatientInfo = lazy(() => import("./Pages/PatientInfo/Info"));

function App() {
  const user = useSelector((state) => state.User.User);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <WithAdmin>
              <SignIn />
            </WithAdmin>
          }
        />
        <Route
          path="/homepage"
          element={
            <Suspense fallback={<Spinner />}>
              <Header>
                <HomePage />
              </Header>
            </Suspense>
          }
        />
        <Route
          path="/info/:ID"
          element={
            <Suspense fallback={<Spinner />}>
              <Header>
                <PatientInfo />
              </Header>
            </Suspense>
          }
        />
        <Route
          path="/registration"
          element={
            <Suspense fallback={<Spinner />}>
              <Header>
                <Registration />
              </Header>
            </Suspense>
          }
        />
        <Route
          path="/facilities"
          element={
            <Suspense fallback={<Spinner />}>
              <Header>
                <Facilities />
              </Header>
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
