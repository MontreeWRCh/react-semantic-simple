import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,HashRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './containers/DefaultLayout/DefaultLaout';
import Login from './views/pages/Login';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          {/* <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} /> */}
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
