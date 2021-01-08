import React, { useContext } from "react"
import { Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle } from "reactstrap"
import { Loading } from "./LoadingComponent"
import { BASE_URL } from "../shared/baseUrl";
import { ContextProvider } from '../App'

export default function Home(props) {
    var { dishes, promotions, leaders } = useContext(ContextProvider)
    var featureDish = dishes.filter(dish => dish.featured)[0]
    var featureLeader = leaders.filter(leader => leader.featured)[0]
    var featurePromotion = promotions.filter(promo => promo.featured)[0]
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-md">
                    <RenderCard item={featureDish} errMess={null} isLoading={null} />
                </div>
                <div className="col-12 col-md">
                    <RenderCard item={featureLeader} />

                </div>
                <div className="col-12 col-md">
                    <RenderCard item={featurePromotion}
                        isLoading={"error loading promotion"}
                        errMess={null}
                    />

                </div>

            </div>
        </div>
    )
}

const RenderCard = function ({ item, isLoading, errMess }) {
    console.log(`isLoading is ${isLoading}`)
    if (isLoading) return (<Loading></Loading>)
    if (errMess) return <h1>{errMess}</h1>
    return (
        <Card>
            <CardImg top src={BASE_URL + item.image} width="100%" />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardSubtitle>{item.designation}</CardSubtitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

