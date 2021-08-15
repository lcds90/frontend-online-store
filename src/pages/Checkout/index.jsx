import React from 'react';
import { CartProduct } from '../../components';

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
    } = this.state;
    if (
      fullName !== ''
      || cpf !== 0
      || email !== ''
      || phone !== ''
      || cep !== ''
      || address !== '' || complemento !== '' || numero !== 0 || cityName !== '') {
      this.setState({
        disabled: false,
      });
      // console.log(this.state);
    }
  }

  /* checkDisable = () => {
    this.setState({
      disabled: false,
    });
  } */

  render() {
    const local = JSON.parse(localStorage.getItem('cartList'));
    // console.log(local);
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
    const arrEstados = [
      'Estado',
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espirito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso do Sul',
      'Mato Grosso',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ];
    return (
      <section>
        {local.map((product) => (<CartProduct
          key={ product.title }
          product={ product }
        />))}
        <form
          /* onSubmit={ every ? this.submitDefault : this.submitDefault } */
          action=""
          method="get"
        >
          <label htmlFor="inputName">
            <input
              id="inputName"
              type="text"
              placeholder="Nome completo"
              data-testid="checkout-fullname"
              name="fullName"
              value={ fullName }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="inputCPF">
            <input
              type="text"
              id="inputCPF"
              placeholder="CPF"
              maxLength="11"
              data-testid="checkout-cpf"
              name="cpf"
              value={ cpf }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputEmail">
            <input
              type="email"
              id="inputEmail"
              placeholder="Email"
              data-testid="checkout-email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputTelefone">
            <input
              type="text"
              id="inputTelefone"
              placeholder="Telefone"
              data-testid="checkout-phone"
              name="phone"
              value={ phone }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputCEP">
            <input
              type="text"
              id="inputCEP"
              placeholder="CEP"
              data-testid="checkout-cep"
              name="cep"
              value={ cep }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputEndereço">
            <input
              type="text"
              id="inputEndereço"
              placeholder="Endereço"
              data-testid="checkout-address"
              name="address"
              value={ address }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputComplemento">
            <input
              type="text"
              id="inputComplemento"
              placeholder="Complemento"
              name="complemento"
              value={ complemento }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputNumero">
            <input
              type="number"
              id="inputNumero"
              placeholder="Numero"
              name="numero"
              value={ numero }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputCidade">
            <input
              type="text"
              id="inputCidade"
              placeholder="Cidade"
              name="cityName"
              value={ cityName }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputSelect">
            <select
              name="stateSelect"
              id="inputSelect"
              onChange={ this.handleChange }
              onClick={ this.checkDisable }
              // value={ stateName }
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
          <button id="button" type="button" disabled={ disabled }>
            clicar
          </button>
        </form>
      </section>
    );
  }
}

export default Checkout;
