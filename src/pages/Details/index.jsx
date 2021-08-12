import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Comments } from '../../components';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const fetchResult = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const results = await fetchResult.json();
    this.setState({
      product: results,
    });
  }

  handleClickQtd = ({ target: { name } }) => {
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
          onClick={ this.handleClickQtd }
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

  handleClickAdd = () => {
    const { product } = this.state;
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    cartList.push(product);
    localStorage.setItem('cartList', JSON.stringify(cartList));
    this.setState({ disabled: true });
  }

  buttonAdd = () => {
    const { disabled } = this.state;
    return (
      <button
        data-testid="product-detail-add-to-cart"
        onClick={ this.handleClickAdd }
        type="button"
        disabled={ disabled }
      >
        Adicionar ao carrinho
      </button>
    );
  }

  render() {
    const { product: { title } } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <h2 data-testid="product-detail-name">
          {title}
        </h2>
        {this.buttonQuantity()}
        {this.buttonAdd()}
        <Comments identifier={ id } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
