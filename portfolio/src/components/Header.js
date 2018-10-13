import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import {NavLink as RRNavLink} from "react-router-dom"

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this)

        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div className="mb-2 align-content-center align-items-center">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={RRNavLink} to="/" activeClassName="active">Portfolio</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-2" navbar>
                            <NavItem accessKey={1}>
                                <NavLink tag={RRNavLink} to="/" activeClassName="active" exact={true}>Home</NavLink>
                            </NavItem>
                            <NavItem accessKey={2}>
                                <NavLink tag={RRNavLink} to="/my_works" activeClassName="active" exact={true}>My Works</NavLink>
                            </NavItem>
                            <NavItem accessKey={3}>
                                <NavLink tag={RRNavLink} to="/contact" activeClassName="active">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}