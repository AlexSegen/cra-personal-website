import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import MyWork from '../pages/MyWork';
import Toastme from '../pages/Toastme';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/mywork" component={MyWork} />
          <Route path="/toastme" component={Toastme} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;