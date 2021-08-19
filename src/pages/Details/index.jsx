import React from 'react';
import PropTypes from 'prop-types';
import { CartIcon, Comments, Navbar } from '../../components';
import { ButtonsContainer, CarouselImages, Container, Description, Div,
  ContainerProduct, Title, FreeShipping, DivCarousel, ImageCarousel, Buy, Quantity, Avaliable, Price } from './styles';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      shipping: false,
      quantity: 1,
      availableQuantity: '',
      notAvaliable: false,
      description: 'Carregando descrição',
    };
  }

  componentDidMount() {
    this.fetchProduct();
    this.fetchDescription();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const fetchResult = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const results = await fetchResult.json();
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    const foundProduct = cartList.find((p) => p.id === id);
    this.setState({
      product: results,
      shipping: results.shipping.free_shipping,
      availableQuantity: 5,
      disabled: !!foundProduct,
    });
  }

  fetchDescription = async () => {
    const { match: { params: { id } } } = this.props;
    const fetchResult = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
    const results = await fetchResult.json();
    this.setState({
      description: results.plain_text,
    });
  }

  checkAvaliable = () => {
    const { quantity, availableQuantity } = this.state;
    if (quantity === availableQuantity) {
      this.setState({ notAvaliable: true });
      return;
    }
    this.setState({ notAvaliable: false });
  }

  handleClickQtd = ({ target: { name } }) => {
    const { quantity: number } = this.state;
    if (name === 'minus') {
      if (number === 1) return;
      this.setState((prevProps) => ({
        quantity: prevProps.quantity - 1,
      }), this.checkAvaliable);
    }

    if (name === 'plus') {
      this.setState((prevProps) => ({
        quantity: prevProps.quantity + 1,
      }), this.checkAvaliable);
    }
  }

  buttonQuantity = () => {
    const { quantity, notAvaliable } = this.state;
    return (
      <>
        <Quantity
          data-testid="product-decrease-quantity"
          type="button"
          name="minus"
          onClick={ this.handleClickQtd }
        >
          -
        </Quantity>
        <div data-testid="shopping-cart-product-quantity">
          {quantity}
        </div>
        <Quantity
          data-testid="product-increase-quantity"
          name="plus"
          onClick={ this.handleClickQtd }
          type="button"
          disabled={ notAvaliable }
        >
          +
        </Quantity>
      </>
    );
  }

  handleClickAdd = () => {
    const { product, quantity } = this.state;
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    product.quantity = quantity;
    cartList.push(product);
    localStorage.setItem('cartList', JSON.stringify(cartList));
    this.setState({ disabled: true });
  }

  buttonAdd = () => {
    const { disabled } = this.state;
    return (
      <Buy
        data-testid="product-detail-add-to-cart"
        onClick={ this.handleClickAdd }
        type="button"
        disabled={ disabled }
      >
        <span aria-label="Comprar Item" role="img">🛍️ Comprar Item</span>
      </Buy>
    );
  }

  render() {
    const { product: { title, pictures, price },
      description, shipping, availableQuantity } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <Container>
        <Navbar>
          <CartIcon />
        </Navbar>
        <ContainerProduct>
          <Div>
            <Title data-testid="product-detail-name">
              {title}
            </Title>
            <CarouselImages width="200px" dynamicHeight={ false } infiniteLoop autoPlay showIndicators={ false } showThumbs={ false }>
              {
                pictures && pictures.map(
                  (p) => (
                    <DivCarousel key={ p.id }>
                      <ImageCarousel src={ p.url } alt={ `Foto do produto ${title}` } />
                    </DivCarousel>),
                )
              }
            </CarouselImages>
            {shipping && <FreeShipping data-testid="free-shipping">FRETE GRÁTIS</FreeShipping>}
            <Avaliable>
              {availableQuantity && ` Quantidade disponivel: ${availableQuantity}`}
            </Avaliable>
            <ButtonsContainer>
              {this.buttonQuantity()}
              {this.buttonAdd()}
            </ButtonsContainer>
          </Div>
          <Description>
            {description}
          </Description>
          <Price>
            {price && `R$ ${price}`}
          </Price>
        </ContainerProduct>
        <Comments identifier={ id } />
      </Container>
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
