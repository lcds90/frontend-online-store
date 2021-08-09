import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CategoriesList />
        <Link data-testid="shopping-cart-button" to="/cart" />
      </div>
    );
  }
}

export default Home;
