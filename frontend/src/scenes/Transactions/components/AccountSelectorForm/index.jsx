import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Input, Label} from 'reactstrap';

class AccountSelectorForm extends Component {
    renderAccountsDropdown() {
        return this.props.accounts.map((item, index) => {
            return (
                <option key={index} value={item.id}>
                    {item.name} (Bal: {item.balance}, Cur: {item.currency})
                </option>
            )
        });
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Select Account</Label>
                    <Input type="select" name="select" id="exampleSelect">
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