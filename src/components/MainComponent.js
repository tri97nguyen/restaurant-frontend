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
import { addComment, fetchDishes, fetchComments, fetchPromotion } from '../redux/actionCreator'
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes()) },
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromotion: () => {dispatch(fetchPromotion())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
})


class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes()
    this.props.fetchComments()
    this.props.fetchPromotion()
  }
  


  render() {
    return (
      <div className="App"> 
        <Header/>
        <Switch>
          <Route path="/home" component={()=> <Home dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]} 
                                                    dishesLoading={this.props.dishes.isLoading}
                                                    dishesErrMess={this.props.dishes.errMess}

                                                    promotion={this.props.promotions} 
                                                    leader={this.props.leaders.filter(leader => leader.featured)[0]}
                                                     />}/>
          <Route exact path="/menu" component={() => <Menu  dishes={this.props.dishes} />} />
          {/* <Route path="/menu/:dishId" component={match => <DishDetail selectedDish={this.props.dishes.dishes.filter(dish => dish.id === match.dishId)[0]}/>} /> */}
          <Route path="/menu/:dishId" component={(props) => <DishDetailFromDishID match={props.match} dishes={this.props.dishes.dishes} isLoading={this.props.dishes.isLoading} errMess={this.props.dishes.errMess} comments={this.props.comments.comments} addComment={this.props.addComment} />} />
          <Route exact path="/contactus" component={() => { return <Contact resetFeedbackForm={this.props.resetFeedbackForm} /> }} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))