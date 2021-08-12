import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  handleClick = () => {
    const { product } = this.props;
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    cartList.push(product);
    localStorage.setItem('cartList', JSON.stringify(cartList));
    this.setState({ disabled: true });
  }

  buttonAdd = () => {
    const { disabled } = this.state;
    return (
      <button
        data-testid="product-add-to-cart"
        onClick={ this.handleClick }
        type="button"
        disabled={ disabled }
      >
        Adicionar ao carrinho
      </button>
    );
  }

  render() {
    const { product: { id, title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/${id}` } data-testid="product-detail-link">
          { title }
          <img src={ thumbnail } alt="" />
          {price}
        </Link>
        {this.buttonAdd()}
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
