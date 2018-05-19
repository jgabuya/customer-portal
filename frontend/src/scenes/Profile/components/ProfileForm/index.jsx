import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Form, FormGroup, FormText, Input, Label} from 'reactstrap';

class ProfileForm extends Component {
    render() {
        return (
            <Form onSubmit={this.props.onHandleSubmit}>
                <FormGroup row>
                    <Label for="customerId" md={3}>Customer Id</Label>

                    <Col sm={9}>
                        <Input type="text" name="customerId" id="customerId" value={this.props.customerId} placeholder="Customer Id" disabled />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="email" md={3}>Email Address</Label>

                    <Col sm={9}>
                        <Input type="email" name="email" id="email" value={this.props.email} onChange={() => {}} required placeholder="Email Address" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="firstName" md={3}>First Name</Label>

                    <Col sm={9}>
                        <Input type="text" name="firstName" id="firstName" value={this.props.firstName} onChange={() => {}} required placeholder="First Name" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="lastName" md={3}>Last Name</Label>

                    <Col sm={9}>
                        <Input type="text" name="lastName" id="lastName" value={this.props.lastName} onChange={() => {}} required placeholder="Last Name" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="phone" md={3}>Phone Number</Label>

                    <Col sm={9}>
                        <Input type="text" name="phone" id="phone" value={this.props.phone} onChange={() => {}} required placeholder="Phone Number" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="address" md={3}>Address</Label>

                    <Col sm={9}>
                        <Input type="textarea" name="address" id="address" value={this.props.address} onChange={() => {}} required placeholder="Address" />
                        <FormText>
                            For the sake of brevity, this field will also accept City, Province/State, and Country for now
                        </FormText>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={{ size: 3, offset: 3 }}>
                        <Button color="primary" block>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

ProfileForm.propTypes = {
    customerId: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    onHandleSubmit: PropTypes.func.isRequired
};

export default ProfileForm;