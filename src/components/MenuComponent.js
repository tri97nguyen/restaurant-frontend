import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";


export default function Menu(props) {
    const menu = props.dishes.map(dish => {
        return (
            <div key={dish.id} className="col-12 col-md-5">
                <Card>
                    <CardImg src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )

    })
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    )
}

// export default class Menu extends Component {

//     constructor(props) {
//         super(props);
//         this.onDishSelect = this.onDishSelect.bind(this);
//         this.renderSelectedDish = this.renderSelectedDish.bind(this);
//     }

//     onDishSelect(dish) {
//         this.setState({selectedDish: dish});
//     }

//     renderSelectedDish() {
//         if (this.state.selectedDish === null) {return <div></div>;}
//         let dish = this.state.selectedDish;
//         return (
//             <div className="col-12">
//                 <Card>
//                     <CardImg top src={dish.image} alt={dish.name} ></CardImg>
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         )
//     }

//     render() {
//         const menu = this.props.dishes.map(dish => {
//             return (
                
//                 <div key={dish.id} className="col-12 col-md-5" >
//                     <Card onClick={() => this.props.something(dish.id)}>
//                         <CardImg top src={dish.image} alt={dish.name} ></CardImg>
//                         <CardBody>
//                             <CardTitle>{dish.name}</CardTitle>
//                             <CardText>{dish.description}</CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//             )
//         })
//         return (
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//             </div>
//         )
//     }
// }

