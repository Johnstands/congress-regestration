import React, { Component } from 'react';
import './App.css';
import './assets/css/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from "./view/Login";
import Base from './Base';
class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="container">
            <Route exact path="/" component={Login} />
            <Route path="/base" component={Base} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
