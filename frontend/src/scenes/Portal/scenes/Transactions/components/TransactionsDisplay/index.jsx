import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import TransactionsTable from './components/TransactionsTable/index';

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

                <TabContent activeTab={this.state.activeTab} className="mt-4">
                    <TabPane tabId="deposit">
                        <TransactionsTable currency={this.props.currency} transactions={this.props.transactions.deposit}/>
                    </TabPane>

                    <TabPane tabId="withdrawal">
                        <TransactionsTable currency={this.props.currency} transactions={this.props.transactions.withdrawal}/>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

TransactionsDisplay.propTypes = {
    transactions: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired
};

export default TransactionsDisplay;