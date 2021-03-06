import React, { useEffect, useState } from "react";
import Rotas from "./rotas";
import "semantic-ui-css/semantic.min.css";
import "./styles/styles.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "assets/css/material-dashboard-react.css?v=1.9.0";
const hist = createBrowserHistory();

function Main() {
  return (
    <div className="Main">
      <Rotas />
    </div>
  );
}

export default Main;
