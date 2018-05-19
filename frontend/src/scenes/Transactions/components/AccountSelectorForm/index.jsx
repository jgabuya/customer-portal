import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Input, Label} from 'reactstrap';

class AccountSelectorForm extends Component {
    constructor(props) {
        super(props);

        this.onHandleChange = this.onHandleChange.bind(this);
    }

    renderAccountsDropdown() {
        return this.props.accounts.map((item, index) => {
            return (
                <option key={index} value={index}>
                    {item.name} ({item.balance.toLocaleString()} {item.currency})
                </option>
            )
        });
    }

    onHandleChange(e) {
        this.props.onHandleChange(e.target.value);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="accountSelect">Select Account</Label>
                    <Input type="select" name="select" id="accountSelect" onChange={this.onHandleChange}>
                        {this.renderAccountsDropdown()}
                    </Input>
                </FormGroup>
            </Form>
        )
    }
}

AccountSelectorForm.propTypes = {
    accounts: PropTypes.array.isRequired,
    onHandleChange: PropTypes.func.isRequired
};

export default AccountSelectorForm;