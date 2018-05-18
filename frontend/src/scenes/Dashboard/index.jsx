import React, {Component} from 'react';
import {Col, Row, Table} from 'reactstrap';
import {Helmet} from 'react-helmet';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            accounts: []
        }
    }

    componentDidMount() {
        // set accounts data
        this.setState({
            accounts: Array.from(Array(13).keys()).map((value, index, array) => {
                return {
                    id: 'ff2e0edc-5aac-11e8-9c2d-fa7ae01bbebc',
                    name: `Account ${index}`,
                    currency: 'EURO',
                    balance: Math.round(Math.random() * 10000000)
                }
            })
        });
    }

    renderAccounts() {
        return this.state.accounts.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.balance}</td>
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
                        <h2>Welcome, user!</h2>
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