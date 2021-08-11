import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

/*     handleSubmit = () => {
      const { props: { onSubmit }, state: { quantity } } = this;
      onSubmit(quantity);
    } */

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

    render() {
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
}

/* ButtonQuantity.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}; */

export default ButtonQuantity;
