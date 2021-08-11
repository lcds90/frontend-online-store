import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Cart } from './pages';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/:id" render={ (props) => <ProductDetails { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
