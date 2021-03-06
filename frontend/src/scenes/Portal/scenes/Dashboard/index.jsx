import React, {Component} from 'react';
import {Button, Col, Row, Table} from 'reactstrap';
import {Helmet} from 'react-helmet';
import {toast} from 'react-toastify';
import axios from 'axios';
import config from '../../../../config';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            user: {},
            accounts: []
        };
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
        } catch(err) {
            toast.error(err.toString());
        }
    }

    renderAccounts() {
        return this.state.accounts.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.balance.toLocaleString()}</td>
                    <td>{item.currency}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div>
                {/* Set header metadata */}
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>

                <Row>
                    <Col>
                        <h2>Welcome, {this.state.user.firstName}!</h2>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col>
                        <h5 className="mb-4 float-left">Accounts</h5>

                        <Button color="outline-primary" href="/p/transactions" className="float-right">View transactions</Button>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col>
                        <Table striped hover responsive>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Balance</th>
                                <th>Currency</th>
                            </tr>
                            </thead>

                            <tbody>
                            {this.renderAccounts()}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;