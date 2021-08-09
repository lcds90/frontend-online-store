import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api'
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: this.props.search,
      category: this.props.category,
    }
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList = () => {
    /* const { search, category } = this.props;
    this.setState({ query: search, idCategory: category }, async () => {
        const { query, idCategory } = this.state;
        const { results } = await getProductsFromCategoryAndQuery(idCategory, query);
        this.setState({ results });
    }) */
  }

  render() {
    const {results} = this.state;
    const { search, category } = this.props;
    return (
      <div>
        <h3>Lista de Produtos</h3>
        <p>{search}</p>
        <p>{category}</p>
        {
        results.map((result) => (
          <ProductCard key={result.id} />
        ))
        }
        
      </div>
    );
  }
}

export default ProductList;
