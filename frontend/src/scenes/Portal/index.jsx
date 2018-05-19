import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

// load global css first before loading components that have their own css references
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

import MainNav from './components/MainNav';
import Footer from './components/Footer';

import Dashboard from './scenes/Dashboard';
import Profile from './scenes/Profile';
import Transactions from './scenes/Transactions';

class Portal extends Component {
    render() {
        return (
            <div>
                <MainNav />

                <main role="main" className="container">
                    <Switch>
                        <Route path={`${this.props.match.url}/dashboard`} component={Dashboard}/>
                        <Route path={`${this.props.match.url}/profile`} component={Profile}/>
                        <Route path={`${this.props.match.url}/transactions`} component={Transactions}/>

                        {/* 404 route, default if none of the above routes are satisfied */}
                        <Redirect to="/404"/>
                    </Switch>

                    <Footer/>
                </main>
            </div>
        );
    }
}

export default Portal;