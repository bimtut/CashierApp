import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Homepage from '../src/pages/homepage'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Modal from 'react-responsive-modal'
import Navbar from '../src/components/navbar'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addItemshow: true

    }
  }
  render() {
    return (
      <div className="App" >
        <Router>
          <Switch>
            <Route exact path={'/'}>
              {/* <Navbar /> */}
              <Homepage />
              {/* <button>telalalala</button> */}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
