import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAdd from './ButtonAdd';

class ProductCard extends React.Component {
  render() {
    const { product: { id, title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/${id}` } data-testid="product-detail-link">
          { title }
          <img src={ thumbnail } alt="" />
          {price}
        </Link>
        <ButtonAdd id={ id } testId="product-add-to-cart">Add</ButtonAdd>
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
