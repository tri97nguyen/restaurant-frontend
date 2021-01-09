import React, { Component, useContext, createContext } from 'react'; //different
import Main from "./components/MainComponent"
import { BrowserRouter } from "react-router-dom"
import dishes from './shared/dishes'
import leaders from './shared/leaders'
import promotions from './shared/promotions'
import comments from './shared/comments'
import { firestore } from './firebase'
import Provider from './providers/provider'

class App extends Component {

  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;