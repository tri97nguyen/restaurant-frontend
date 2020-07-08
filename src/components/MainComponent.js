import React, { Component } from 'react'; //different
import '../App.css';
import {Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent'
import DishDetail from "./DishDetailComponent"
import {DISHES} from '../shared/dishes'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDishID: null
    }
    this.onDishSelect = this.onDishSelect.bind(this)
  }
  
  onDishSelect(dishID) {
    this.setState({selectedDishID: dishID});
    
  }

  render() {
    return (
      <div className="App"> 
        <Navbar dark color="primary" onClick={() => alert("confusing!")}>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>


        <Menu  dishes={this.state.dishes} something={dishID => this.onDishSelect(dishID)} />
        <DishDetail selectedDish={this.state.dishes.filter(dish => dish.id === this.state.selectedDishID)[0]}/>
      </div>
    );
  }
}
