// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Homepage from '../src/pages/homepage'
import Login from './pages/login'
import History from './pages/history'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addItemshow: true

    }
  }
  render() {
    return (

      <Provider store={store}>

        <div>
          <Router>
            {/* <Switch> */}
            <Route exact path={'/'} component={Homepage} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/history'} component={History} />
            {/* </Switch> */}
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
