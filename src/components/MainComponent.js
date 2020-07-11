import React, { Component } from 'react'; //different
import '../App.css';
import "font-awesome/css/font-awesome.css"
import "bootstrap-social/bootstrap-social.css"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Menu from './MenuComponent'
import {DISHES} from '../shared/dishes'
import {LEADERS} from '../shared/leaders'
import {COMMENTS} from '../shared/comments'
import {PROMOTIONS} from '../shared/promotions'
import Home from "./HomeComponent"
import Contact from "./ContactComponent"
import {Switch, Route, Redirect} from "react-router-dom"

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      comments: COMMENTS,
      promotions: PROMOTIONS

    }
  }


  render() {
    return (
      <div className="App"> 
        <Header/>
        <Switch>
          <Route path="/home" component={()=> <Home dish={this.state.dishes.filter(dish => dish.featured)[0]} 
                                                    promotion={this.state.promotions.filter(promo => promo.featured)[0]} 
                                                    leader={this.state.leaders.filter(leader => leader.featured)[0]} />}/>
          <Route exact path="/menu" component={() => <Menu  dishes={this.state.dishes} />} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home"/>
        </Switch>
        <Footer/>

        {/* <Header/>
        <Menu  dishes={this.state.dishes} getSelectedDishID={dishID => this.onDishSelect(dishID)} />
        <DishDetail selectedDish={this.state.dishes.filter(dish => dish.id === this.state.selectedDishID)[0]}/>
        <Footer/> */}
      </div>
    );
  }
}
