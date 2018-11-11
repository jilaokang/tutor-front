import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import App from "../pages/index";
import Signup from "../pages/signup";
import Home from "../pages/home";
import Recurit from "../pages/recruit";
import Wanted from "../pages/wanted";
import Decrypt from "../pages/decrypt";

import HomeHome from "../pages/home/index";
import HomeMe from "../pages/home/me";
import HomeRecruit from "../pages/home/recruit";
import HomeWanted from "../pages/home/wanted";

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={Signup} />
      <Route path="/recruit" component={Recurit} />
      <Route path="/wanted" component={Wanted} />
      <Route path="/home" component={Home} />
      <Route path="/decrypt" component={Decrypt} />
      <Route path="/home/home" component={HomeHome} />
      <Route path="/home/me" component={HomeMe} />
      <Route path="/home/recruit" component={HomeRecruit} />
      <Route path="/home/wanted" component={HomeWanted} />
    </div>
  </BrowserRouter>
);

export default Routes;
