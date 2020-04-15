import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About';
import DashBoard from './pages/DashBoard';
import Exercises from './pages/Exercises';
import Banner from './pages/Banner';
import Tab from './pages/Tab';

import NavTrans from './components/NavTrans';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
        <NavTrans name="/" />
        <Home />
        </Route>

        <Route path="/about" exact>
        <NavTrans name="/about" />
        <About />
        </Route>

        <Route path="/dashboard" exact>
        <NavTrans name="/dashboard" />
        <DashBoard />
        </Route>

        <Route path="/exercises" exact>
        <NavTrans name="/exercises" />
        <Exercises />
        </Route>

        <Route path="/banner" exact>
        <NavTrans name="/banner" />
        <Banner />
        </Route>

        <Route path="/tab" exact>
        <NavTrans name="/tab" />
        <Tab />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
