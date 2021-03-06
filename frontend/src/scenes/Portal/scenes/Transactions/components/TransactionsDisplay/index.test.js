import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsDisplay from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <TransactionsDisplay
            transactions={{
                deposit: [],
                withdrawal: []
            }}
            currency=""
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});