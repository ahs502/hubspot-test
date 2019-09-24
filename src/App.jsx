import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ListingPage from "./pages/listing";
import NewFeaturePage from "./pages/new-feature";

const App = () => (
  <Router>
    <Route path="/listing" component={ListingPage}></Route>
    <Route path="/new-feature" exact component={NewFeaturePage}></Route>
    <Redirect to="/listing"></Redirect>
  </Router>
);

export default App;
