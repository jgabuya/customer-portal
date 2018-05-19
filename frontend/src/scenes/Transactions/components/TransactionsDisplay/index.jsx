import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Nav, NavItem, NavLink} from 'reactstrap';

class TransactionsDisplay extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            activeTab: 'deposit'
        };

        this.onToggleNav = this.onToggleNav.bind(this);
    }

    onToggleNav(activeTab) {
        this.setState({
            activeTab: activeTab
        });
    }

    render() {
        return (
            <div>
                <Nav pills>
                    <NavItem >
                        <NavLink active={this.state.activeTab === 'deposit'} onClick={() => {
                            this.onToggleNav('deposit')
                        }} href={`#deposit`}>
                            Deposit
                        </NavLink>
                    </NavItem>

                    <NavItem >
                        <NavLink active={this.state.activeTab === 'withdrawal'} onClick={() => {
                            this.onToggleNav('withdrawal')
                        }} href={`#withdrawal`}>
                            Withdrawal
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

TransactionsDisplay.propTypes = {
    transactions: PropTypes.object.isRequired
};

export default TransactionsDisplay;