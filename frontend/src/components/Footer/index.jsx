import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <footer>
                <hr/>

                <Row>
                    <Col md="12">
                        &copy; {new Date().getFullYear()} Customer Portal
                    </Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;