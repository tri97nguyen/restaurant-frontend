import React, { Component } from 'react'; //different
import '../App.css';
import "font-awesome/css/font-awesome.css"
import "bootstrap-social/bootstrap-social.css"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Menu from './MenuComponent'

import Home from "./HomeComponent"
import Contact from "./ContactComponent"
import {Switch, Route, Redirect, withRouter} from "react-router-dom"
import {DishDetailFromDishID} from './DishDetailComponent'
import About from "./AboutComponent"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  


  render() {
    return (
      <div className="App"> 
        <Header/>
        <Switch>
          <Route path="/home" component={()=> <Home dish={this.props.dishes.filter(dish => dish.featured)[0]} 
                                                    promotion={this.props.promotions.filter(promo => promo.featured)[0]} 
                                                    leader={this.props.leaders.filter(leader => leader.featured)[0]} />}/>
          <Route exact path="/menu" component={() => <Menu  dishes={this.props.dishes} />} />
          {/* <Route path="/menu/:dishId" component={match => <DishDetail selectedDish={this.props.dishes.filter(dish => dish.id === match.dishId)[0]}/>} /> */}
          <Route path="/menu/:dishId" component={props => <DishDetailFromDishID match={props.match} dishes={this.props.dishes} comments={this.props.comments}/>} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/about" component={() => <About leaders={this.props.leaders}/>} />
          <Redirect to="/home"/>
        </Switch>
        <Footer/>

        {/* <Header/>
        <Menu  dishes={this.props.dishes} getSelectedDishID={dishID => this.onDishSelect(dishID)} />
        <DishDetail selectedDish={this.props.dishes.filter(dish => dish.id === this.props.selectedDishID)[0]}/>
        <Footer/> */}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main))