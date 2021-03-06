import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import {toast} from 'react-toastify';
import AccountSelectorForm from './components/AccountSelectorForm/index';
import TransactionsDisplay from './components/TransactionsDisplay/index';
import axios from 'axios';
import config from '../../../../config';

class Transactions extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            accounts: [],
            selectedAccountIndex: null
        };

        this.onHandleAccountChange = this.onHandleAccountChange.bind(this);
    }

    async componentDidMount() {
        try {
            const user = await axios.get(config.apiRoot + '/users');

            this.setState({
                user: user.data
            });
        } catch(err) {
            toast.error(err.toString());
        }

        try {
            const accounts = await axios.get(config.apiRoot + '/accounts');

            this.setState({
                accounts: accounts.data
            });

            this.onHandleAccountChange(0);
        } catch(err) {
            toast.error(err.toString());
        }
    }

    onHandleAccountChange(index) {
        this.setState({
            selectedAccountIndex: index
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h2>Transactions</h2>
                        <hr/>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col md={3}>
                        <AccountSelectorForm accounts={this.state.accounts} onHandleChange={this.onHandleAccountChange}/>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col>
                        {this.state.selectedAccountIndex !== null &&
                            <div>
                                <h5 className="mb-4">Showing transactions for <span className="text-muted">{this.state.accounts[this.state.selectedAccountIndex].name}</span></h5>

                                <TransactionsDisplay transactions={this.state.accounts[this.state.selectedAccountIndex].transactions} currency={this.state.accounts[this.state.selectedAccountIndex].currency} />
                            </div>
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Transactions;