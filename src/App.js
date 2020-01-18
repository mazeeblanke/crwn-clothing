import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <Switch>
      <Route path="/shop" component={Shop}></Route>
      <Route path="/" component={HomePage}></Route>
    </Switch>
  );
}

export default App;