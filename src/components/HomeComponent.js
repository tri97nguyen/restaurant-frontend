import React from "react"
import {Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle} from "reactstrap"
import { Loading } from "./LoadingComponent"
import { BASE_URL } from "../shared/baseUrl";

export default function Home(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-md">
                    <RenderCard item={props.dish} errMess={props.dishesErrMess} isLoading={props.dishesLoading}/>
                </div>
                <div className="col-12 col-md">
                    <RenderCard item={props.leader}/>

                </div>
                <div className="col-12 col-md">
                    <RenderCard item={props.promotion.promotion.filter(promo => promo.featured)[0]} 
                                isLoading={props.promotion.isLoading}
                                errMess={props.promotion.errMess}
                                />

                </div>

            </div>
        </div>
    )
}

const RenderCard = function({item, isLoading, errMess}) {
    console.log(`isLoading is ${isLoading}`)
    if (isLoading) return (<Loading></Loading>)
    if (errMess) return <h1>{errMess}</h1>
    return(
        <Card>
            <CardImg top src={BASE_URL + item.image} width="100%" top/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardSubtitle>{item.designation}</CardSubtitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

