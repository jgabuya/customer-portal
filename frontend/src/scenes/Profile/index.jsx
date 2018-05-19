import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import {toast} from 'react-toastify';
import ProfileForm from './components/ProfileForm';
import axios from 'axios';
import config from '../../config';

class Profile extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            id: '',
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: ''
        };

        this.onHandleFormSubmit = this.onHandleFormSubmit.bind(this);
    }

    async componentDidMount() {
        try {
            const user = await axios.get(config.apiRoot + '/users');

            this.setState({
                ...user.data
            });
        } catch(err) {
            toast.error(err.toString());
        }
    }

    async onHandleFormSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        try {
            const result = await axios.post(config.apiRoot + '/users', {
                email: data.get('email'),
                firstName: data.get('firstName'),
                lastName: data.get('lastName'),
                phone: data.get('phone'),
                address: data.get('address')
            });

            toast.success(result.data.message);
        } catch(err) {
            toast.error(err.response.data.message);
        }
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
                        {this.state.id.length > 0 &&
                            <ProfileForm {...this.state} onHandleSubmit={this.onHandleFormSubmit} />
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Profile;