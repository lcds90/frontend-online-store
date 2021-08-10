import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        { title }
        <img src={ thumbnail } alt="" />
        {price}
      </div>
    );
  }
}

export default ProductCard;
