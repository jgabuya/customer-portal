import React, {Component} from 'react';
import {Col, Row, Table} from 'reactstrap';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import config from '../../config';

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
        const user = await axios.get(config.apiRoot + '/users');
        const accounts = await axios.get(config.apiRoot + '/accounts');

        // set state
        if (user.status === 200) {
            this.setState({
                user: user.data
            });
        }

        if (accounts.status === 200) {
            this.setState({
                accounts: accounts.data
            });
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
                        <h2>Welcome, {this.state.user.firstName} !</h2>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col>
                        <h5 className="mb-4">Accounts</h5>

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