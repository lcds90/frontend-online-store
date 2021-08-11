import React from 'react';
import { ProductCart } from '../components';

// Feito por Lucas Lima.
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Seu carrinho está vazio',
      products: [],
    };
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const productsId = JSON.parse(localStorage.getItem('cartList')) || [];
    productsId.forEach(async (id) => {
      const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
      const product = await response.json();
      this.setState((prevState) => ({
        products: [...prevState.products, product],
      }));
    });
  }

  render() {
    const { message, products } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">{ message }</p>
        <div>
          {
            products.map((product) => (
              <ProductCart key={ product.title } product={ product } />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Cart;
