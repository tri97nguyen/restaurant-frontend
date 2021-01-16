import React, { Component } from "react"
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap"
import { NavLink, Link } from "react-router-dom"
import { auth, provider } from "../firebase"
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      modalIsOpen: false,
    }
    this.usernameInput = React.createRef()
    this.passwordInput = React.createRef()
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginWithGoogle = this.loginWithGoogle.bind(this)
  }

  async loginWithGoogle(e) {
    e.preventDefault()
    var user = await auth.signInWithRedirect(provider)
    console.log(user)
  }

  toggleNavbar() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  toggleModal() {
    this.setState((prevState) => {
      return { modalIsOpen: !prevState.modalIsOpen }
    })
  }

  handleSubmit(e) {
    const username = this.usernameInput.current.value
    const password = this.passwordInput.current.value
    alert(`username is ${username}\npassword is ${password}`)
    e.preventDefault()
  }
  render() {
    return (
      <React.Fragment>
        <Modal
          size="md"
          isOpen={this.state.modalIsOpen}
          toggle={this.toggleModal}
        >
          <ModalHeader>Sign In</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Col md={{ size: 2 }}>
                  <Label for="username">Username</Label>
                </Col>
                <Col md={{ size: 8, offset: 1 }}>
                  <Input
                    innerRef={this.usernameInput}
                    type="text"
                    id="username"
                    name="username"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 2 }}>
                  <Label for="password">Password</Label>
                </Col>
                <Col md={{ size: 8, offset: 1 }}>
                  <Input
                    innerRef={this.passwordInput}
                    type="password"
                    id="password"
                    name="password"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 3 }}>
                  <Button className="mr-1">Sign In</Button>
                  <Button onClick={this.toggleModal}>Cancel</Button>
                </Col>
              </FormGroup>
            </Form>
            <Button color="danger" onClick={this.loginWithGoogle}>
              Log in with google
            </Button>
          </ModalBody>
        </Modal>

        <Navbar dark color="primary" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" to="/home" tag={Link}>
              Ristorante Con Fusion
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg">Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg">Menu</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg">About Us</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg">Contact Us</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Button color="success" onClick={this.toggleModal}>
                Sign In
              </Button>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    )
  }
}

export default Header
