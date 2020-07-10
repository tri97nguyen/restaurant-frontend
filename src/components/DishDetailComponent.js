import React, {Component} from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap"

export default function DishDetail(props) {
    if (props.selectedDish) {
        return (<RenderDish selectedDish={props.selectedDish}/>)
    } else {
        return <div></div>
    }  
}   

function Comment(props) {
    if (props.selectedDish) {
        const comments = props.selectedDish.comments.map(comment => {
            return (
                <div key={comment.id} className="m-2">
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            )
        })
        return comments
    } else {
        return <div></div>
    }
}

const RenderDish = ({selectedDish}) =>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <Card>
                        <CardImg src={selectedDish.image} top/>
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5">
                    <Comment selectedDish={selectedDish}/>
                </div>
            </div>

        </div>
    )
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