import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsTable from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <TransactionsTable
            transactions={[]}
            currency=""
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});