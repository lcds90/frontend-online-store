import React from 'react';
import { Link } from 'react-router-dom';
import { CardProduct } from '../../components';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      search: '',
      categoryId: '',
      renderList: false,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  setRadioValueAsState = ({ target: { value } }) => {
    this.setState({ categoryId: value }, () => {
      this.fetchList();
    });
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  fetchList = async () => {
    const { categoryId, search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(categoryId, search);
    this.setState({ products: results, renderList: true });
  }

  renderHeader = () => {
    const { search } = this.state;
    return (
      <>
        <label htmlFor="searchBar">
          Pesquisar
          <input
            data-testid="query-input"
            id="searchBar"
            value={ search }
            name="search"
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.fetchList }
        >
          Pesquisar

        </button>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
      </>
    );
  }

  renderCategories = () => {
    const { categories } = this.state;
    return (
      <aside>
        <ul>
          {categories.map(({ id, name }) => (
            <li key={ id }>
              <label htmlFor={ `input-${id}` }>
                <input
                  id={ `input-${id}` }
                  type="radio"
                  data-testid="category"
                  name="categoryId"
                  value={ id }
                  onClick={ this.setRadioValueAsState }
                />
                {name}
              </label>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  renderProductList = () => {
    const { products, renderList } = this.state;

    if (!renderList) {
      return (
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      );
    }

    return (
      <section>
        <h3>Lista de Produtos</h3>
        {
          products.map((product) => (
            <CardProduct product={ product } key={ product.id } />
          ))
        }
      </section>
    );
  }

  render() {
    return (
      <main>
        {this.renderHeader()}
        {this.renderCategories()}
        {this.renderProductList()}
      </main>
    );
  }
}

export default Home;
