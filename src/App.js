import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import PrimarySearchAppBar from "./Home";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={PrimarySearchAppBar} />
  </Switch>
);

export default App;
