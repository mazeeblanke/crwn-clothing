import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const Hats = () => <h1>Mad oh</h1>

function App() {
  return (
    <Switch>
      <Route path="/shop/hats" component={Hats}></Route>
      <Route path="/" component={HomePage}></Route>
    </Switch>
  );
}

export default App;
