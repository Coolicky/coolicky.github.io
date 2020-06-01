import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Copyright from "../components/Copyright";
import CardApis from "../api/CardApi";
import CardsGrid from "../components/CardsGrid";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "../components/Main";
import SignIn from "../components/SignIn";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <SignIn />
            </Route>
            <Route path="/secret">
              <p>secret page here</p>
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
