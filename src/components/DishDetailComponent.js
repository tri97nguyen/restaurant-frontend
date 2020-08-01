import React, {Component} from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from "reactstrap"
import CommentForm from "./CommentFormComponent"
import { Loading } from "./LoadingComponent"

export function DishDetailFromDishID({match, dishes, comments, addComment, isLoading, errMess}) {
    if (isLoading) return <Loading></Loading>
    if (errMess) return <h1>{errMess}</h1>
    const dishId = parseInt(match.params.dishId,10)
    console.log(`dishId is ${dishId}`)
    const dish = dishes.filter(dish => dish.id === dishId)[0]
    const dishComments = comments.filter(comment => comment.dishId === dishId)
    return <DishCommentsDetail selectedDish={dish} selectedComments={dishComments} addComment={addComment} dishId={dishId}/>
}

function DishCommentsDetail({selectedDish, selectedComments, addComment, dishId}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <RenderDish selectedDish={selectedDish}/>
                </div>
                <div className="col-12 col-md-5">
                    <RenderComments selectedComments={selectedComments} addComment={addComment} dishId={dishId}/>
                </div>
            </div>
        </div>
    )
    
}   

function RenderComments({selectedComments, addComment, dishId}) {
    console.log(selectedComments)
    if (selectedComments) {
        const comments = selectedComments.map(comment => {
            return (
                <div key={comment.id} className="m-2">
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            )
        })
        return (
            <React.Fragment>
                {comments}
                
                <CommentForm addComment={addComment} dishId={dishId}></CommentForm>
            </React.Fragment>
            
        )
    } else {
        return <div></div>
    }
}

const RenderDish = ({selectedDish}) =>{
    if (selectedDish) {
        return (

            <Card>
                <CardImg src={selectedDish.image} top/>
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