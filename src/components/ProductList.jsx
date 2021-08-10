import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [...props.products],
    };
  }

  componentDidUpdate(prevProps) {
    const { products } = this.props;
    if (prevProps.products !== products) this.setProducts(products);
  }

  setProducts = (products) => (this.setState({ products }))

  render() {
    const { products } = this.state;
    return (
      <div>
        <h3>Lista de Produtos</h3>
        {
          products.map((product) => (
            <ProductCard product={ product } key={ product.id } />
          ))
        }

      </div>
    );
  }
}

ProductList.defaultProps = {
  products: [],
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default ProductList;
