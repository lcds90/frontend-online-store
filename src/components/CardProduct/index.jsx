import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './style.module.css';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  handleClick = () => {
    const { product, onAdded } = this.props;
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    product.quantity = 1;
    cartList.push(product);
    localStorage.setItem('cartList', JSON.stringify(cartList));
    this.setState({ disabled: true });
    onAdded();
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
    const { product: { id, title, thumbnail, price, shipping } } = this.props;
    const freeShipping = shipping.free_shipping;
    return (
      <div className={ style.card } data-testid="product">
        { title }
        <span className={ style.imgCircle }>
          <img className={ style.img } src={ thumbnail } alt="" />
        </span>
        {price}
        { freeShipping && <p data-testid="free-shipping">FRETE GRÁTIS</p> }
        <Link to={ `/${id}` } data-testid="product-detail-link">
          Ver detalhes
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
    quantity: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  onAdded: PropTypes.func.isRequired,
};

export default ProductCard;
