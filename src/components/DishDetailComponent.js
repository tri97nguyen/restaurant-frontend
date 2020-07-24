import React, {Component} from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap"

export function DishDetailFromDishID({match, dishes, comments}) {
    const dishId = parseInt(match.params.dishId,10)
    const dish = dishes.filter(dish => dish.id === dishId)[0]
    const dishComments = comments.filter(comment => comment.dishId === dishId)
    return <DishCommentsDetail selectedDish={dish} selectedComments={dishComments}/>
}

function DishCommentsDetail({selectedDish, selectedComments}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <RenderDish selectedDish={selectedDish}/>
                </div>
                <div className="col-12 col-md-5">
                    <RenderComments selectedComments={selectedComments} />
                </div>
            </div>
        </div>
    )
    
}   

function RenderComments({selectedComments}) {
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
            comments
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