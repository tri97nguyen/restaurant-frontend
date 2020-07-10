import React, {Component} from "react";
import {Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, NavItem, Nav} from "reactstrap";
import {NavLink} from "react-router-dom"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }
    toggleNavbar() {
        this.setState({isOpen: !this.state.isOpen})
        console.log(`state is ${this.state.isOpen}`)
    }
    render() {
        return(
            <React.Fragment>
                <Navbar dark color="primary" expand="md">
                <div className="container">
                    <NavbarBrand href="/" className="mr-auto">Ristorante Con Fusion</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg">Home</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg">Menu</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about"><span className="fa fa-info fa-lg">About Us</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg">Contact Us</span></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
    
        )
    }
}

export default Header