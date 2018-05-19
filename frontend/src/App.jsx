import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {ToastContainer} from 'react-toastify';

// load global css first before loading components that have their own css references
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Login from './scenes/Login';
import Portal from './scenes/Portal';
import NotFound from './scenes/NotFound';

class App extends Component {
    render() {
        return (
            <div>
                {/* Set header metadata */}
                <Helmet defaultTitle="Home"
                        titleTemplate="%s - Customer Portal">
                    <title>Home</title>
                </Helmet>

                <Router>
                    <Switch>
                        {/*
                                Taken from react-router docs:
                                The Route component is perhaps the most important component in React Router to
                                understand and learn to use well. Its most basic responsibility is to render some
                                UI when a location matches the route’s path.
                                https://reacttraining.com/react-router/web/api/Route
                            */}
                        <Route exact path="/" component={Login}/>
                        <Route path="/p" component={Portal}/>

                        {/* 404 route, default if none of the above routes are satisfied */}
                        <Route path="/404" component={NotFound}/>
                        <Redirect to="/404"/>
                    </Switch>
                </Router>

                {/* Toast container */}
                <ToastContainer />
            </div>
        );
    }
}

export default App;