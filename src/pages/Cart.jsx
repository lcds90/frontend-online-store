import React from 'react';

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
              <p
                key={ product.id }
                data-testid="shopping-cart-product-name"
              >
                {product.title}
                <span data-testid="shopping-cart-product-quantity">1</span>
              </p>))
          }
        </div>
      </div>
    );
  }
}

export default Cart;
