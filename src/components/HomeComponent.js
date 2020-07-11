import React from "react"
import {Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle} from "reactstrap"


export default function Home(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-md">
                    <RenderCard item={props.dish}/>
                </div>
                <div className="col-12 col-md">
                    <RenderCard item={props.leader}/>

                </div>
                <div className="col-12 col-md">
                    <RenderCard item={props.promotion}/>

                </div>

            </div>
        </div>
    )
}

const RenderCard = function({item}) {
    return(
        <Card>
            <CardImg top src={item.image} width="100%" top/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardSubtitle>{item.designation}</CardSubtitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

