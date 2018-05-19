import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';

class TransactionsTable extends Component {
    renderItems() {
        return this.props.transactions.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.transactionId}</td>
                    <td>{item.amount}</td>
                    <td>{item.date}</td>
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
    transactions: PropTypes.array.isRequired
};

export default TransactionsTable;