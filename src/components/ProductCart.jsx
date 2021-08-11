import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonQuantity from './ButtonQuantity';

class ProductCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { product } = this.props;
    this.setProduct(product);
  }

    setProduct = (product) => (this.setState({ product }))

    render() {
      const { product } = this.state;
      return (
        <>
          <section data-testid="shopping-cart-product-name">
            {product.title}
          </section>
          <article>
            <ButtonQuantity />
          </article>
        </>
      );
    }
}

ProductCart.propTypes = {
  product: PropTypes.shape({}).isRequired,
};

export default ProductCart;
