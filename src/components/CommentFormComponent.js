import React, { Component } from "react"
import { ContextProvider } from '../providers/provider'
import { Modal, ModalBody, Button, Label, FormGroup } from "reactstrap"
import { firestore } from "../firebase"

export default class CommentForm extends Component {
    static contextType = ContextProvider

    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
            rating: NaN,
            comment: "",
            author: ""
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    toggleModal() {
        this.setState(prevState => {
            return ({ isModalOpen: !prevState.isModalOpen })
        })
    }

    handleChange(e) {
        var { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.toggleModal()
        var { dishId } = this.props
        var { comment, author, rating } = this.state
        var newComment = { comment, author, rating, date: new Date(), dishRef: firestore.doc(`dishes/${dishId}`) }

        firestore.collection('comments').add(newComment)
            .then(docRef => docRef.get())
            .then(value => console.log(value.data()))

        // console.log(JSON.stringify(value))
        // postComment(this.props.dishId, value.rating, value.customerName, value.comment)
    }

    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup row className="mr-2 ml-2">
                                <Label htmlFor="customerName">Your Name</Label>
                                <input type="text" model=".customerName" id="customerName" name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.author}
                                />

                            </FormGroup>

                            <FormGroup row className="mr-2 ml-2">
                                <Label htmlFor="rating">Rating</Label>
                                <select
                                    value={this.state.rating}
                                    onChange={this.handleChange}
                                    model=".rating" id="rating" name="rating" placeholder="Rating" className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </FormGroup>

                            <FormGroup row className="mr-2 ml-2">
                                <Label htmlFor="comment">Comment</Label>
                                <textarea value={this.state.comment}
                                    onChange={this.handleChange}
                                    model=".comment" id="comment" name="comment" className="form-control"
                                />
                                <Button type="submit" className="mt-2" color="primary">Submit</Button>
                            </FormGroup>


                        </form>
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