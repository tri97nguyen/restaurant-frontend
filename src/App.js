import React, { Component, useContext, createContext } from 'react'; //different
import Main from "./components/MainComponent"
import { BrowserRouter } from "react-router-dom"
import dishes from './shared/dishes'
import leaders from './shared/leaders'
import promotions from './shared/promotions'
import comments from './shared/comments'
import { firestore } from './firebase'
export const ContextProvider = createContext(null)
const store = { dishes, leaders, promotions, comments }
class App extends Component {

  render() {
    var nothing = firestore.collection('nothing')
    return (
      <ContextProvider.Provider value={store}>

        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>

      </ContextProvider.Provider>



    );
  }
}

export default App;