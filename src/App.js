import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-and-signup/sign-in-and-signup.component';
import { auth } from '../src/firebase/firebase.utils'

class App extends Component {
  constructor () {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user)
    })
  }

  render () {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/shop" component={Shop}></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/signin" component={SignInAndUpPage}></Route>
        </Switch>
      </>
    );
  }
}

export default App;