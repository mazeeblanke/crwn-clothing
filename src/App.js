import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-and-signup/sign-in-and-signup.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

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

    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })

      } 

      setCurrentUser({
        currentUser: userAuth
      })

   })
  }

  render () {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/shop" component={Shop}></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/signin" component={SignInAndUpPage}></Route>
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);