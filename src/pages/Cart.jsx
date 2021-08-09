import React from 'react';

// Feito por Lucas Lima.
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Seu carrinho está vazio',
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">{ message }</p>
      </div>
    );
  }
}

export default Cart;
