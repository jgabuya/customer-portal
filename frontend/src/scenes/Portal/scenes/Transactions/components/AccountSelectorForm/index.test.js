import React from 'react';
import ReactDOM from 'react-dom';
import AccountSelectorForm from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AccountSelectorForm
            accounts={[]}
            onHandleChange={() => {}}
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});