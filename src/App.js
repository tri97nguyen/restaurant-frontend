import React, { Component } from 'react'; //different
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand } from 'reactstrap';

    class App extends Component { //different
      render() {
        return ( //different
          // The rest of the file is the same
          <div className="App"> 
            <Navbar dark color="primary">
              <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
              </div>
            </Navbar>
          </div>
        );
    }
  }

    export default App;