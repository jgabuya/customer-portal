import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';
import moment from 'moment';

class TransactionsTable extends Component {
    renderItems() {
        return this.props.transactions.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.amount} {this.props.currency}</td>
                    <td>{moment.unix(item.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>Transaction Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderItems()}
                </tbody>
            </Table>
        )
    }
}

TransactionsTable.propTypes = {
    transactions: PropTypes.array.isRequired,
    currency: PropTypes.string.isRequired
};

export default TransactionsTable;