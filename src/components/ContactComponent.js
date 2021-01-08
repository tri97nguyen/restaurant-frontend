import React, { Component } from "react"
import { findDOMNode } from "react-dom"
import { Breadcrumb, BreadcrumbItem, FormGroup, Label, Input, Col, Row, Button, FormFeedback } from "reactstrap"
import { Link } from "react-router-dom"
import { Control, Form, Errors } from "react-redux-form"

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            checkbox: false,
            contactPrefer: '',
            message: '',
            formValid: {
                firstname: false,
                lastname: false,
                telnum: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateData = this.updateData.bind(this)
        this.handlingButton = this.handlingButton.bind(this)
        this.formValidation = this.formValidation.bind(this)
        this.handlingInputChange = this.handlingInputChange.bind(this)
    }

    resetFeedbackForm() {
        this.setState({
            firstname: '',
            lastname: '',
            telnum: '',
            checkbox: false,
            contactPrefer: '',
            message: '',
            formValid: {
                firstname: false,
                lastname: false,
                telnum: false
            }
        })
    }

    handlingInputChange(event) {
        this.updateData(event)
        this.formValidation(event)
    }

    handleSubmit = values => {
        Contact.prototype.resetFeedbackForm()
        // resetFeedbackForm()
        alert(JSON.stringify(values))
    }

    formValidation(e) {
        const target = e.target
        const name = target.name
        const value = name === "checkbox" ? target.checked : target.value
        const alphabetOnlyReg = /^[A-Za-z]+$/
        const numberOnlyReg = /^[0-9]*$/
        const node = findDOMNode(this)
        const formFeedBack = node.querySelector(`#${name}Feedback`)



        if (name === "firstname") {
            if (alphabetOnlyReg.test(value)) {
                formFeedBack.innerHTML = ""
                target.classList.remove("is-invalid")
                target.classList.add("is-valid")
                this.setState(prevState => {
                    let formValid = { ...prevState.formValid }
                    formValid[name] = true
                    return { formValid }
                })
            } else {
                formFeedBack.innerHTML = 'First name should contain only character a-z'
                target.classList.add("is-invalid")
                target.classList.remove("is-valid")
                this.setState(prevState => {
                    let formValid = { ...prevState.formValid }
                    formValid[name] = false
                    return { formValid }
                })
            }
        }
        else if (name === "lastname") {
            if (alphabetOnlyReg.test(value)) {
                formFeedBack.innerHTML = ""
                target.classList.remove("is-invalid")
                target.classList.add("is-valid")
                this.setState(prevState => {
                    let formValid = { ...prevState.formValid }
                    formValid[name] = true
                    return { formValid }
                })
            } else {
                formFeedBack.innerHTML = 'Last name should contain only character a-z'
                target.classList.add("is-invalid")
                target.classList.remove("is-valid")
                this.setState(prevState => {
                    let formValid = { ...prevState.formValid }
                    formValid[name] = false
                    return { formValid }
                })
            }
        }
        else if (name === "telnum") {
            if (numberOnlyReg.test(value)) {
                formFeedBack.innerHTML = ""
                target.classList.remove("is-invalid")
                target.classList.add("is-valid")
                this.setState(prevState => {
                    let formValid = { ...prevState.formValid }
                    formValid[name] = true
                    return { formValid }
                })
            } else {
                formFeedBack.innerHTML = 'Tel. Number should be 0-9'
                target.classList.add("is-invalid")
                target.classList.remove("is-valid")
                this.setState(prevState => {
                    let formValid = { ...prevState.formValid }
                    formValid[name] = false
                    return { formValid }
                })
            }
        }
        console.log(`object values are ${Object.values(this.state.formValid)}`)
        console.log(Object.values(this.state.formValid).every(ele => ele === true))

    }

    updateData = event => {
        const target = event.target
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = target.name

        let obj_ = {}
        obj_[name] = value
        this.setState(obj_)
        // this.setState(
        //     {[name]: value}
        // )
    }

    handlingButton(e) {
        const buttonElement = e.target
        console.log(`button element is ${buttonElement}`)
        buttonElement.addEventListener('click', () => alert('i am alive'))
        buttonElement.addEventListener('click', (ev) => { ev.target.innerText = "Hide!" })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <Button onClick={this.handlingButton}>Hello World</Button>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Local Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-md-1">
                        <h5>Map Of Our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                {/* <ControlledForm 
                formInput={this.state} 
                handlingOnChange={this.handlingInputChange} 
                handlingFormSubmit={this.handlingFormSubmit} 
                
                /> */}

                <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="firstname" md={2}>First Name</Label>
                        <Col md={10}>
                            <Control.text model=".firstname" id="firstname" name="firstname"
                                placeholder="First Name"
                                className="form-control"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="lastname" md={2}>Last Name</Label>
                        <Col md={10}>
                            <Control.text model=".lastname" id="lastname" name="lastname"
                                placeholder="Last Name"
                                className="form-control"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                        <Col md={10}>
                            <Control.text model=".telnum" id="telnum" name="telnum"
                                placeholder="Tel. Number"
                                className="form-control"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Control.text model=".email" id="email" name="email"
                                placeholder="Email"
                                className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{ size: 6, offset: 2 }}>
                            <div className="form-check">
                                <Label check>
                                    <Control.checkbox model=".agree" name="agree"
                                        className="form-check-input"
                                    /> {' '}
                                    <strong>May we contact you?</strong>
                                </Label>
                            </div>
                        </Col>
                        <Col md={{ size: 3, offset: 1 }}>
                            <Control.select model=".contactType" name="contactType"
                                className="form-control">
                                <option>Tel.</option>
                                <option>Email</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="message" md={2}>Your Feedback</Label>
                        <Col md={10}>
                            <Control.textarea model=".message" id="message" name="message"
                                rows="12"
                                className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="primary">
                                Send Feedback
                            </Button>
                        </Col>
                    </Row>
                </Form>


            </div>

        )
    }

}



function ControlledForm(props) {
    return (
        <Form onSubmit={props.handlingFormSubmit}>
            <FormGroup row>
                <Label for="firstname" className="col-md-2">First Name</Label>
                <Col sm={7}>
                    <p>{props.formInput.firstname}</p>
                    <Input type="text" id="firstname" name="firstname" onChange={props.handlingOnChange} />
                    <FormFeedback tag='p' id="firstnameFeedback"></FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="lastname" className="col-md-2">Last Name</Label>
                <Col sm={7}>
                    <p>{props.formInput.lastname}</p>
                    <Input type="text" id="lastname" name="lastname" onChange={props.handlingOnChange} />
                    <FormFeedback tag='p' id="lastnameFeedback"></FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label type="number" for="telnum" className="col-md-2">Tel. Number</Label>
                <Col sm={7}>
                    <p>{props.formInput.telnum}</p>
                    <Input id="telnum" name="telnum" onChange={props.handlingOnChange} />
                    <FormFeedback tag='p' id="telnumFeedback"></FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>

                <Col md={{ size: 3, offset: 2 }}>
                    <FormGroup check>
                        <Label for="checkbox">
                            <p>{`${props.formInput.checkbox}`}</p>
                            <Input type="checkbox" id="checkbox" name="checkbox" onChange={props.handlingOnChange} />
                            Do you want contact?
                        </Label>
                    </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                    <FormGroup>
                        <p>{props.formInput.contactPrefer}</p>
                        <Input type="select" name="contactPrefer" id="contactPrefer" onChange={props.handlingOnChange}>
                            <option>Tel.</option>
                            <option>Email</option>
                        </Input>
                    </FormGroup>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label htmlFor="message" md={2}>Your Feedback</Label>
                <Col md={7}>
                    <p>{props.formInput.message}</p>
                    <Input type="textarea" id="message" name="message"
                        rows="12"
                        value={null}
                        onChange={props.handlingOnChange}
                    ></Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Col md={{ size: 3, offset: 2 }}>
                    <Button>Submit</Button>
                </Col>
            </FormGroup>


        </Form>
    )
}











