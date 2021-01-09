import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap"
import CommentForm from "./CommentFormComponent"
import { Loading } from "./LoadingComponent"
import { BASE_URL } from "../shared/baseUrl";
import { ContextProvider } from '../providers/provider'


export function DishDetailFromDishID({ match, commentsErrMess, isLoading, errMess }) {
    // if (isLoading) return <Loading></Loading>
    // if (errMess) return <h1>{errMess}</h1>
    var { dishes, comments } = useContext(ContextProvider)
    const dishId = match.params.dishId
    const dish = dishes && dishes.filter(dsh => dsh.id == dishId)[0]
    const dishComments = comments && comments.filter(comment => {
        return comment.dishRef.id === dishId
    })
    return <DishCommentsDetail selectedDish={dish}
        selectedComments={dishComments}
        dishId={dishId}
        commentsErrMess={commentsErrMess}
    />
}

function DishCommentsDetail({ selectedDish, selectedComments, dishId, commentsErrMess }) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <RenderDish selectedDish={selectedDish} />
                </div>
                <div className="col-12 col-md-5">
                    <RenderComments selectedComments={selectedComments} dishId={dishId} commentsErrMess={commentsErrMess} />
                </div>
            </div>
        </div>
    )

}

function RenderComments({ selectedComments, dishId, commentsErrMess }) {

    if (commentsErrMess) return <h1>{commentsErrMess}</h1>
    if (selectedComments) {
        const comments = selectedComments.map(comment => {
            return (
                <div key={comment.id} className="m-2">
                    <p>{comment.comment}</p>
                    <p>{comment.author} -- {new Date(comment.date._seconds * 1000).toLocaleDateString("en-US")}</p>
                    {/* <p>-- {comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p> */}
                </div>
            )
        })
        return (
            <React.Fragment>
                {comments}

                <CommentForm dishId={dishId}></CommentForm>
            </React.Fragment>

        )
    } else {
        return <div></div>
    }
}

const RenderDish = ({ selectedDish }) => {
    if (selectedDish) {
        return (

            <Card>
                <CardImg src={BASE_URL + selectedDish.image} top />
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>

        )
    }
    else return <div></div>

}

// class DishDetailClass extends Component {


//     renderComment(selectedDish) {
//         if (selectedDish) {
//             let cmts = selectedDish.comments.map(cmt => {
//                 return (
//                     <div key={cmt.id} className="m-2">
//                         <p>{cmt.comment}</p>
//                         <p>-- {cmt.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</p>
//                     </div>
//                 )
//             })
//             return cmts
//         }
//         else {
//             return <div></div>
//         }


//     }

//     renderDetailDish(selectedDish) {
//         if (selectedDish) {

//             return (
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12 col-md-5">

//                         </div>
//                         <div className="col-12 col-md-5">
//                             <h1>Comments</h1>
//                             {this.renderComment(selectedDish)}
//                         </div>
//                     </div>
//                 </div>



//             )
//         } else {
//             return (
//                 <div></div>
//             )
//         }
//     }

//     render() {
//         return this.renderDetailDish(this.props.selectedDish)

//     }
// }