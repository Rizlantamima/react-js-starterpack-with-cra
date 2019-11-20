import React from 'react';
import routes from './routes';
import ErrorHandler from './Pages/ErrorHandler/ErrorHandler';
import { createBrowserHistory } from "history";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

export default class App extends React.Component {

  render() {
    const browserHistory = createBrowserHistory();

    const route = routes.map((value, key) => {
      return <Route key={key} exact={value.exact ? value.exact : false} component={value.component} path={value.route_path} />
    });

    return (
      <div>
        <Router history={browserHistory} >
          <ErrorHandler>
            {route}
          </ErrorHandler>
        </Router>
      </div>
    );
  }

}