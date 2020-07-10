import React, { Component } from 'react'; //different
import '../App.css';
import "font-awesome/css/font-awesome.css"
import "bootstrap-social/bootstrap-social.css"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Menu from './MenuComponent'
import DishDetail from "./DishDetailComponent"
import {DISHES} from '../shared/dishes'
import Home from "./HomeComponent"
import {Switch, Route, Redirect} from "react-router-dom"

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDishID: null
    }
    this.onDishSelect = this.onDishSelect.bind(this)
  }


  render() {
    const HomePage = () => <Home/>

    return (
      <div className="App"> 
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu  dishes={this.state.dishes} />} />
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
