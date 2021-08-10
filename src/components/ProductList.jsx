import React from 'react';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [...props.products],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.setState({
        products: this.props.products,
      });
    }
  }

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

export default ProductList;
