import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link data-testid="shopping-cart-button" to="/cart" />
      </div>
    );
  }
}

export default Home;
