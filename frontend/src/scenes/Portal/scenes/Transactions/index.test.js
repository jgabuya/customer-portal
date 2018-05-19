import React from 'react';
import ReactDOM from 'react-dom';
import Transactions from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Transactions />, div);
    ReactDOM.unmountComponentAtNode(div);
});
