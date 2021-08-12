import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      quantity: 1,
    };
  }

  componentDidMount() {
    const { product } = this.props;
    this.setProduct(product);
  }

  setProduct = (product) => (this.setState({ product }))

  handleClick = ({ target: { name } }) => {
    const { quantity } = this.state;
    if (name === 'minus') {
      if (quantity === 1) return;
      this.setState((prevProps) => ({
        quantity: prevProps.quantity - 1,
      }));
    }

    if (name === 'plus') {
      this.setState((prevProps) => ({
        quantity: prevProps.quantity + 1,
      }));
    }
  }

  buttonQuantity = () => {
    const { quantity } = this.state;
    return (
      <article>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          name="minus"
          onClick={ this.handleClick }
        >
          -
        </button>
        <div data-testid="shopping-cart-product-quantity">
          {quantity}
        </div>
        <button
          data-testid="product-increase-quantity"
          name="plus"
          onClick={ this.handleClick }
          type="button"
        >
          +
        </button>
      </article>
    );
  }

  render() {
    const { product } = this.state;
    return (
      <>
        <section data-testid="shopping-cart-product-name">
          <h4>{product.title}</h4>
        </section>
        <article>
          {this.buttonQuantity()}
        </article>
      </>
    );
  }
}

ProductCart.propTypes = {
  product: PropTypes.shape({}).isRequired,
};

export default ProductCart;
