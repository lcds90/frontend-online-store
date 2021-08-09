import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      search: '',
      categoryValue: '',
    }
  }

  handleChangeText = (value) => {
    this.setState({
      search: value,
    });
  }

  handleChangeCat = (value) => {
    this.setState({
      categoryValue: value,
    });
  }

  render() {
    return (
      <div>
        <SearchBar getStateValue={ this.handleChangeText }/>
        <CategoriesList getStateValue={ this.handleChangeCat } />
        <Link data-testid="shopping-cart-button" to="/cart" />
        <ProductList search={ this.state.search } category={ this.state.categoryValue }/>
      </div>
    );
  }
}

export default Home;
