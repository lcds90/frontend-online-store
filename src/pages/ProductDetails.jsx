import React from 'react';
import PropTypes from 'prop-types';

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

  render() {
    const { product: { title } } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">
          {title}
        </h2>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default ProductDetails;
