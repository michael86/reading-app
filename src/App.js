import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import MainNav from "./features/main-nav/MainNav";
import Landing from "./features/landing/Landing";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
function App() {
  return (
    <>
      <MainNav />
      <Landing />
    </>
  );
}

export default App;
