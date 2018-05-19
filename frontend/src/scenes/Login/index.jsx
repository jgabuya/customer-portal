import React, {Component} from 'react';
import {Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Row} from 'reactstrap';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            isAuthenticated: false // nothing to do with actual authentication, but used for redirection
        };

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
                    <Redirect to="/p/dashboard"/>
                ) : (
                    <Container>
                        <Row className="mt-5">
                            <Col md={{size: 6, offset: 3}}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="text-center">Sign in to Customer Portal</CardTitle>

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
                    </Container>
                    )
                }
            </div>
        )
    }
}

export default Login;