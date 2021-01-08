import React, { Component } from "react"
import { LocalForm, Control, Errors } from "react-redux-form"
import { Modal, ModalBody, Button, Row, Col, Label, FormGroup } from "reactstrap"

const minLength = len => val => val && val.length >= len
const maxLength = len => val => val && val.length <= len
const required = val => val && val.length

export default class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }

    toggleModal() {
        this.setState(prevState => {
            return ({ isModalOpen: !prevState.isModalOpen })
        })
    }

    formSubmit(value) {
        this.toggleModal()
        // console.log(JSON.stringify(value))
        postComment(this.props.dishId, value.rating, value.customerName, value.comment)
    }

    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalBody>
                        <LocalForm onSubmit={value => this.formSubmit(value)}>
                            <FormGroup row className="mr-2 ml-2">
                                <Label htmlFor="customerName">Your Name</Label>
                                <Control.text model=".customerName" id="customerName" name="customerName"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={
                                        { required1: required, minLength2: minLength(3), maxLength3: maxLength(15) }
                                    }
                                />
                                <Errors
                                    className="text-danger"
                                    show="touched"
                                    model=".customerName"
                                    messages={
                                        {
                                            required1: "Name cannot be blank",
                                            minLength2: "minimum length is 3",
                                            maxLength3: "maximum length is 15"
                                        }
                                    }

                                />
                            </FormGroup>

                            <FormGroup row className="mr-2 ml-2">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" placeholder="Rating" className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </FormGroup>

                            <FormGroup row className="mr-2 ml-2">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" className="form-control" />
                                <Button type="submit" className="mt-2" color="primary">Submit</Button>
                            </FormGroup>


                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button outline color="primary" onClick={this.toggleModal}>Submit Comment</Button>

            </React.Fragment>
        )
    }
}

function postComment(obj) {
    alert("post comment")
    console.log(obj)
}