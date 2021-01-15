import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import UploadComponent from "../components/UploadComponent";
import Actor from "../components/Actor";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={UploadComponent} />
    <Route exact path="/actor" component={Actor} />
  </BrowserRouter>
);

export default App;
