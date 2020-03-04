import React from "react";
import "./App.css";
// import router
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/main/Routes";

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
