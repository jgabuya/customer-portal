import React, {Component} from 'react';
import {
    Collapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav,
    UncontrolledDropdown
} from 'reactstrap';

class MainNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark fixed="top" expand="md">
                    <div className="container">
                        <NavbarBrand href="/p/dashboard">Customer Portal</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />

                        <Collapse isOpen={this.state.isOpen} navbar>
                            {/* left menu */}
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/p/dashboard">Dashboard</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/p/transactions">Transactions</NavLink>
                                </NavItem>
                            </Nav>

                            {/* right menu */}
                            <Nav navbar className="ml-auto">
                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret>
                                        Account
                                    </DropdownToggle>

                                    <DropdownMenu>
                                        <DropdownItem href="/p/profile">Profile</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem href="/">Sign Out</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default MainNav;