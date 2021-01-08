import React, { Component, useContext, createContext } from 'react'; //different
import Main from "./components/MainComponent"
import { BrowserRouter } from "react-router-dom"
import dishes from './shared/dishes'
import leaders from './shared/leaders'
import promotions from './shared/promotions'


export const ContextProvider = createContext(null)
const store = { dishes, leaders, promotions }
class App extends Component {

  render() {
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