import React from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const routes = [
  {
    route_path: '/',
    component: Home,
    exact: true
  },
  {
    route_path: '/about',
    component: About,
    exact: true
  }
];
export default class App extends React.Component {


  render() {
    const route = routes.map((value, key) => {
      return <Route key={key} exact={value.exact ? value.exact : false} component={value.component} path={value.route_path} />
    });

    return (
      <Router>
        {route}
      </Router>
    );
  }

}