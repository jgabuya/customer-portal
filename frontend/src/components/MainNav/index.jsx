import React, {Component} from 'react';
import {
    Button,
    Collapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    Navbar,
    NavbarToggler,
    NavbarBrand,
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
                        <NavbarBrand href="/">EQX</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />

                        <Collapse isOpen={this.state.isOpen} navbar>
                            {/* left menu */}
                            <Nav navbar>
                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret>
                                        Listing
                                    </DropdownToggle>

                                    <DropdownMenu>
                                        <DropdownItem href="/investor/listing/subscriptions">My Subscriptions</DropdownItem>
                                        <DropdownItem href="/investor/listing/cipo/list">CIPOs</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret>
                                        Trading
                                    </DropdownToggle>

                                    <DropdownMenu>
                                        <DropdownItem href="/investor/trading/markets">Markets</DropdownItem>
                                        <DropdownItem href="/investor/trading/watchlist">Watchlist</DropdownItem>
                                        <DropdownItem href="/investor/trading/portfolio">Portfolio</DropdownItem>
                                        <DropdownItem href="/investor/trading/orders">Orders</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret>
                                        Funding
                                    </DropdownToggle>

                                    <DropdownMenu>
                                        <DropdownItem href="/investor/funding/deposit">Deposit</DropdownItem>
                                        <DropdownItem href="/investor/funding/withdrawal">Withdrawal</DropdownItem>
                                        <DropdownItem href="/investor/funding/conversion">Funds Conversion</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>

                            {/* search bar */}
                            <Form inline className="mr-auto ml-auto mt-2 mt-md-0">
                                <InputGroup className="input-group">
                                    <Input type="text" placeholder="Search for..." />
                                    <InputGroupAddon addonType="append">
                                        <Button>Go!</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>

                            {/* right menu */}
                            <Nav navbar>
                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret>
                                        Account
                                    </DropdownToggle>

                                    <DropdownMenu>
                                        <DropdownItem href="/investor/settings">Settings</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem href="/auth/logout">Sign Out</DropdownItem>
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