import React from 'react';
import ReactDOM from 'react-dom';
import ProfileForm from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ProfileForm
            customerId="792c02b1-e230-4946-83bd-d4588095b501"
            email="sherlock@mail.com"
            firstName="Sherlock"
            lastName="Holmes"
            phone="223-222-2222"
            address="221B Baker Street, London, UK"
            onHandleSubmit={() => {}}
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
