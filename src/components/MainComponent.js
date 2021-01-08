import React, { Component } from 'react'; //different
import '../App.css';
import "font-awesome/css/font-awesome.css"
import "bootstrap-social/bootstrap-social.css"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Menu from './MenuComponent'

import Home from "./HomeComponent"
import Contact from "./ContactComponent"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import { DishDetailFromDishID } from './DishDetailComponent'
import About from "./AboutComponent"




class Main extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route exact path="/menu" component={() => <Menu />} />
          {/* <Route path="/menu/:dishId" component={match => <DishDetail selectedDish={this.props.dishes.dishes.filter(dish => dish.id === match.dishId)[0]}/>} /> */}
          <Route path="/menu/:dishId" component={(props) => <DishDetailFromDishID match={props.match} />} />
          <Route exact path="/contactus" component={() => { return <Contact resetFeedbackForm={this.props.resetFeedbackForm} /> }} />
          <Route path="/about" component={() => <About leaders={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />

        {/* <Header/>
        <Menu  dishes={this.props.dishes} getSelectedDishID={dishID => this.onDishSelect(dishID)} />
        <DishDetail selectedDish={this.props.dishes.filter(dish => dish.id === this.props.selectedDishID)[0]}/>
        <Footer/> */}
      </div>
    );
  }
}

export default withRouter(Main)