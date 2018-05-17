import React, {Component} from "react";
import {Link, BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Helmet} from "react-helmet";

// load global css first before loading components that have their own css references
import './App.css';

import Login from './scenes/Login';
import Dashboard from './scenes/Dashboard';
import Profile from './scenes/Profile';
import NotFound from "./scenes/NotFound";
import Transactions from "./scenes/Transactions";

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
                    <MainNav />

                    <main role="main" className="container">
                        {/*
                            Define routes using react-router. Throughout the whole app, we are using Dynamic instead of
                            Static Routing, aka "routing that takes place as your app is rendering, not in a
                            configuration or convention outside of a running app". Head over to the following link for more
                            info: https://reacttraining.com/react-router/web/guides/philosophy
                        */}

                        <Switch>
                            {/*
                                Taken from react-router docs:
                                The Route component is perhaps the most important component in React Router to
                                understand and learn to use well. Its most basic responsibility is to render some
                                UI when a location matches the route’s path.
                                https://reacttraining.com/react-router/web/api/Route
                            */}
                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/transactions" component={Transactions}/>
                            <Route path="/login" component={Login}/>

                            {/* 404 route, default if none of the above route/crumbroutes are satisfied */}
                            <Route path="/404" component={NotFound}/>
                            <Redirect to="/404"/>
                        </Switch>

                        <footer>
                            <hr/>

                            <div className="row">
                                <div className="col-md-12">
                                    &copy; {new Date().getFullYear()} EQX
                                </div>
                            </div>
                        </footer>
                    </main>
                </Router>
            </div>
        );
    }
}

export default App;