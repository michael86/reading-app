import React from "react";
import MainNav from "./features/main-nav/MainNav";
import Landing from "./features/landing/Landing";
import ProgressPage from "./features/progress/ProgressPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
import { useSelector } from "react-redux";
function App() {
  const page = useSelector((state) => state.screen);

  return (
    <>
      <MainNav />
      {page.screen === 0 && <Landing />}
      {page.screen === 1 && <ProgressPage />}
    </>
  );
}

export default App;
