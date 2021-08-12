import React from 'react';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      cpf: 0,
      email: '',
      telefone: 0,
      cep: 0,
      endereço: '',
      complemento: '',
      numero: 0,
      cityName: '',
      stateName: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { nome,
      cpf,
      email,
      telefone,
      cep,
      endereço,
      complemento,
      numero,
      cityName,
      stateName,
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
        <form action="" method="get">
          <label htmlFor="inputName">
            <input
              id="inputName"
              type="text"
              placeholder="Nome completo"
              data-testid="checkout-fullname"
              name="nome"
              value={ nome }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputCPF">
            <input
              type="number"
              id="inputCPF"
              placeholder="CPF"
              pattern="[0-9]{11}"
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
              type="tel"
              id="inputTelefone"
              placeholder="Telefone"
              pattern="\(\d{2,}\) \d{4,}\-\d{4}"
              data-testid="checkout-phone"
              name="telefone"
              value={ telefone }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputCEP">
            <input
              type="number"
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
              name="endereço"
              value={ endereço }
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
              name="Cidade"
              value={ cityName }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="inputSelect">
            <select
              name="stateSelect"
              id="inputSelect"
              onChange={ this.handleChange }
              value={ stateName }
            >
              {arrEstados.map((estado) => (
                <option
                  key={ estado }
                  name="stateName"
                  value={ stateName }
                >
                  { estado }
                </option>))}
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default Checkout;
