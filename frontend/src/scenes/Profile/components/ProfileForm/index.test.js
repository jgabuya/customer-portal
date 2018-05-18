import React from 'react';
import ReactDOM from 'react-dom';
import ProfileForm from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProfileForm />, div);
    ReactDOM.unmountComponentAtNode(div);
});
