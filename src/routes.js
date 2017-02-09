import React from 'react';
import {Router, Route,  IndexRedirect} from 'react-router';

import { createHistory, useBasename } from "history";
const browserHistory = useBasename(createHistory)({
    basename: "/"
});

import App from './components/mainApp.jsx';
import Register from './components/register.jsx';
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';

// Routes
const Routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Register} />
    </Route>

    <Route component={Main}>
      <Route path="home" component={Home} />
    </Route>

  </Router>
);

export default Routes;
