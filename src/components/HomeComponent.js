import React, { useContext } from "react"
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap"
import { Loading } from "./LoadingComponent"

import { ContextProvider } from "../providers/provider"

export default function Home(props) {
  var { dishes, promotions, leaders } = useContext(ContextProvider)
  var featureDish = dishes && dishes.filter((dish) => dish.featured)[0]
  var featureLeader = leaders && leaders.filter((leader) => leader.featured)[0]
  var featurePromotion =
    promotions && promotions.filter((promo) => promo.featured)[0]
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
          <RenderCard item={featurePromotion} />
        </div>
      </div>
    </div>
  )
}

const RenderCard = function ({ item, isLoading, errMess }) {
  if (isLoading) return <Loading></Loading>
  if (errMess) return <h1>{errMess}</h1>
  if (item)
    return (
      <Card>
        <CardImg top src={item.image} width="100%" />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardSubtitle>{item.designation}</CardSubtitle>
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    )
  else return <></>
}
