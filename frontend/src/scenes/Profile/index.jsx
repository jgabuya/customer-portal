import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';

import ProfileForm from './components/ProfileForm';

class Profile extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            customerId: '',
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: ''
        };

        this.onHandleFormSubmit = this.onHandleFormSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            customerId: '792c02b1-e230-4946-83bd-d4588095b501',
            email: 'sherlock@mail.com',
            firstName: 'Sherlock',
            lastName: 'Holmes',
            phone: '223-222-2222',
            address: '221B Baker Street, London, UK'
        })
    }

    onHandleFormSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);

        console.log(data.get('email'));
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h2>Profile</h2>
                        <hr/>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col md={{ size: 10, offset: 1 }}>
                        <ProfileForm {...this.state} onHandleSubmit={this.onHandleFormSubmit} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Profile;