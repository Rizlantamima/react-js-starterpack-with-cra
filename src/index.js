import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import {
    Router,
    Route,
} from "react-router-dom";

import routes from './config/routes';
import ErrorHandler from './Pages/ErrorHandler/ErrorHandler';


const App = () => {
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
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
