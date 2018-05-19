import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import AccountSelectorForm from './components/AccountSelectorForm';
import TransactionsDisplay from './components/TransactionsDisplay';

class Transactions extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            accounts: [],
            transactions: {
                deposit: [],
                withdrawal: []
            },
            selectedAccountId: null
        };

        this.onHandleAccountChange = this.onHandleAccountChange.bind(this);
    }

    componentDidMount() {
        // set accounts data
        this.setState({
            accounts: Array.from(Array(13).keys()).map((value, index) => {
                return {
                    id: 'ff2e0edc-5aac-11e8-9c2d-fa7ae01bbebc',
                    name: `Account ${index}`,
                    currency: 'EURO',
                    balance: Math.round(Math.random() * 10000000)
                }
            })
        }, () => {
            this.onHandleAccountChange(this.state.accounts[0].id);

            // fetch transactions here
        });
    }

    onHandleAccountChange(accountId) {
        this.setState({
            selectedAccountId: accountId
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
                        <TransactionsDisplay transactions={this.state.transactions}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Transactions;