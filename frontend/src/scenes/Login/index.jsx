import React, {Component} from 'react';
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Row} from 'reactstrap';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            isAuthenticated: false
        }

        this.onHandleFormSubmit = this.onHandleFormSubmit.bind(this);
    }

    onHandleFormSubmit(e) {
        e.preventDefault();

        this.setState({
            isAuthenticated: true
        });
    }

    render() {
        return (
            <div>
                {this.state.isAuthenticated === true ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <Row className="mb-5 mt-5">
                        <Col md={{size: 6, offset: 3}}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="text-center">Please sign in</CardTitle>

                                    <hr/>

                                    <Row className="mt-5 mb-4">
                                        <Col md={{size: 8, offset: 2}}>
                                            <Form onSubmit={this.onHandleFormSubmit}>
                                                <FormGroup>
                                                    <Input type="username" name="username" id="username" required
                                                           placeholder="Enter your username"/>
                                                </FormGroup>

                                                <FormGroup>
                                                    <Button block color="success">Sign in</Button>
                                                </FormGroup>
                                            </Form>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                )}
            </div>
        )
    }
}

export default Login;