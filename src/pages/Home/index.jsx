import React from 'react';
import { CardProduct, CartIcon } from '../../components';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import style from './style.module.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      search: '',
      categoryId: '',
      renderList: false,
      productAdded: 0,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleAdd = () => {
    this.setState((prevState) => ({
      productAdded: prevState.productAdded + 1,
    }));
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
      <section>
        <label htmlFor="searchBar">
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
        <CartIcon />
      </section>
    );
  }

  renderCategories = () => {
    const { categories } = this.state;
    return (
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
    );
  }

  renderProductList = () => {
    const { products, renderList } = this.state;
    if (!renderList) {
      return (
        <section data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </section>
      );
    }

    return (
      <>
        <h3>Lista de Produtos</h3>
        <article className={ style.list }>
          {
            products.map((product) => (
              <CardProduct
                onAdded={ this.handleAdd }
                product={ product }
                key={ product.id }
              />
            ))
          }
        </article>
      </>
    );
  }

  render() {
    return (
      <main className={ style.main }>
        <header className={ style.header }>
          {this.renderHeader()}
          <aside className={ style.aside }>
            {this.renderCategories()}
          </aside>
        </header>
        <section className={ style.section }>
          {this.renderProductList()}
        </section>
      </main>
    );
  }
}

export default Home;
