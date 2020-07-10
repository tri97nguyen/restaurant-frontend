import React, { Component } from 'react'; //different
import Main from "./components/MainComponent"
import {BrowserRouter} from "react-router-dom"

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
          <Main />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;