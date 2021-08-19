import React from 'react';
import { CartProduct } from '../../components';
import arrEstados from '../../data/states';
import { Container } from './styles';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complemento: '',
      numero: 0,
      cityName: '',
      disabled: true,
      payment: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  checkDisable = () => {
    const { fullName,
      cpf,
      email,
      phone,
      cep,
      address,
      complemento,
      numero,
      cityName,
      payment,
    } = this.state;
    if (
      fullName !== ''
      || cpf !== 0
      || email !== ''
      || phone !== ''
      || cep !== ''
      || address !== ''
      || complemento !== '' || numero !== 0 || cityName !== '' || payment !== '') {
      this.setState({
        disabled: false,
      });
    }
  }

  render() {
    const local = JSON.parse(localStorage.getItem('cartList'));
    const { fullName,
      cpf,
      email,
      phone,
      cep,
      address,
      complemento,
      numero,
      cityName,
      disabled,
    } = this.state;
    return (
      <Container>
        {local.map((product) => (<CartProduct
          key={ product.title }
          product={ product }
        />))}
        <form
          method="get"
          uk-grid="true"
          style={ { alignItems: 'baseline' } }
        >
          <label className="uk-margin uk-width-1-4" htmlFor="inputName">
            <input
              id="inputName"
              type="text"
              placeholder="Nome completo"
              data-testid="checkout-fullname"
              name="fullName"
              value={ fullName }
              onChange={ this.handleChange }
              required
              className="uk-form-large"
            />
          </label>
          <label className="uk-margin uk-width-1-4" htmlFor="inputCPF">
            <input
              type="text"
              id="inputCPF"
              placeholder="CPF"
              maxLength="11"
              data-testid="checkout-cpf"
              name="cpf"
              value={ cpf }
              onChange={ this.handleChange }
              required
              className=" uk-form-large"
            />
          </label>
          <label className="uk-margin uk-width-1-4" htmlFor="inputEmail">
            <input
              type="email"
              id="inputEmail"
              placeholder="Email"
              data-testid="checkout-email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              required
              className=" uk-form-large"
            />
          </label>
          <label className="uk-margin uk-width-1-4" htmlFor="inputTelefone">
            <input
              type="text"
              id="inputTelefone"
              placeholder="Telefone"
              data-testid="checkout-phone"
              name="phone"
              value={ phone }
              onChange={ this.handleChange }
              required
              className=" uk-form-large"
            />
          </label>
          <label className="uk-margin uk-width-1-4" htmlFor="inputCEP">
            <input
              type="text"
              id="inputCEP"
              placeholder="CEP"
              data-testid="checkout-cep"
              name="cep"
              value={ cep }
              onChange={ this.handleChange }
              required
              className="uk-form-large"
            />
          </label>
          <label className="uk-margin uk-width-1-4" htmlFor="inputEndereço">
            <input
              type="text"
              id="inputEndereço"
              placeholder="Endereço"
              data-testid="checkout-address"
              name="address"
              value={ address }
              onChange={ this.handleChange }
              className="uk-form-large"
            />
          </label>
          <label className="uk-margin uk-width-1-4" htmlFor="inputComplemento">
            <input
              type="text"
              id="inputComplemento"
              placeholder="Complemento"
              name="complemento"
              value={ complemento }
              onChange={ this.handleChange }
              className=" uk-form-large"
            />
          </label>
          <label className="uk-margin uk-width-1-4" htmlFor="inputNumero">
            <input
              type="number"
              id="inputNumero"
              placeholder="Numero"
              name="numero"
              value={ numero }
              onChange={ this.handleChange }
              className="uk-form-large"
            />
          </label>
          <label className="uk-margin uk-width-1-2" htmlFor="inputCidade">
            <input
              type="text"
              id="inputCidade"
              placeholder="Cidade"
              name="cityName"
              value={ cityName }
              onChange={ this.handleChange }
              className="uk-input "
            />
          </label>
          <label className="uk-margin uk-width-1-2" htmlFor="inputSelect">
            <select
              name="stateSelect"
              id="inputSelect"
              onChange={ this.handleChange }
              onClick={ this.checkDisable }
              className="uk-select"
            >
              {arrEstados.map((estado) => (
                <option
                  key={ estado }
                  name="stateName"
                  value={ estado }
                >
                  { estado }
                </option>))}
            </select>
          </label>
          <h3 className="uk-margin uk-width-1-6">Boleto</h3>
          <label className="uk-margin uk-width-1-6" htmlFor="radioBoleto">
            Boleto
            <input
              type="radio"
              name="payment"
              id="radioBoleto"
              onChange={ this.handleChange }
              value="boleto"
              className="uk-radio"
            />
          </label>
          <h3 className="uk-margin uk-width-1-6">Cartão de Credito</h3>
          <label className="uk-margin uk-width-1-6" htmlFor="radioCartao">
            Elo
            <input
              type="radio"
              name="payment"
              id="radioCartao"
              onChange={ this.handleChange }
              value="elo"
              className="uk-radio"
            />
          </label>
          <label className="uk-margin uk-width-1-6" htmlFor="radioCartao">
            MasterCard
            <input
              type="radio"
              name="payment"
              id="radioCartao"
              onChange={ this.handleChange }
              value="masterCard"
              className="uk-radio"
            />
          </label>
          <label className="uk-margin uk-width-1-6" htmlFor="radioCartao">
            Visa
            <input
              type="radio"
              name="payment"
              id="radioCartao"
              onChange={ this.handleChange }
              value="visa"
              className="uk-radio"
            />
          </label>
          <button
            className="uk-button-primary uk-width-1-1"
            id="button"
            type="submit"
            disabled={ disabled }
          >
            Confirmar
          </button>
        </form>
      </Container>
    );
  }
}

export default Checkout;
