import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import UploadComponent from "../components/UploadComponent";
import ActorComponent from "../components/ActorComponent";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={UploadComponent} />
    <Route exact path="/actor" component={ActorComponent} />
  </BrowserRouter>
);

export default App;
