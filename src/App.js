import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Cart, Details, Checkout } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/:id" render={ (props) => <Details { ...props } /> } />
        <Route exact path="/cart/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
