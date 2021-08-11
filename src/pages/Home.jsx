import React from 'react';
import { Link } from 'react-router-dom';
import { CategoriesList, SearchBar, ProductList } from '../components';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      search: '',
      categoryId: '',
    };
  }

  getQueryValue = (name, value) => {
    this.setState({ [name]: value });
  }

  fetchList = async () => {
    const { categoryId, search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(categoryId, search);
    this.setState({ results });
  }

  render() {
    const { results } = this.state;
    return (
      <main>
        <SearchBar getQueryValue={ this.getQueryValue } />
        <CategoriesList
          fetchCategory={ this.fetchList }
          getQueryValue={ this.getQueryValue }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.fetchList }
        >
          Pesquisar

        </button>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <ProductList products={ results } />
      </main>
    );
  }
}

export default Home;
