import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      comentario: [
        {
          email: '',
          stars: 1,
          comments: '',
        },
      ],
    };
  }

  handleChange = ({ target: { name, value } }) => {
    const { identifier } = this.props;
    // console.log({ target: { value } });
    this.setState({
      id: identifier,
      comentario: [{
        [name]: value,
      }],
    });
    console.log(this.state);
  };

  handleClick = () => {
    localStorage.setItem('comentario', JSON.stringify(this.state));
  }

  renderForm = () => (
    <form>
      <label htmlFor="inputForm">
        <input
          type="email"
          name="email"
          id="inputForm"
          placeholder="Email"
          onChange={ this.handleChange }
        />
      </label>
      <textarea
        data-testid="product-detail-evaluation"
        name="comments"
        id="areaInput"
        cols="30"
        rows="10"
        placeholder="Mensagem(opcional)"
        onChange={ this.handleChange }
      />
      <input
        type="number"
        name="stars"
        min="0"
        max="5"
        onChange={ this.handleChange }
      />
      <button type="submit" onClick={ this.handleClick }>AVALIAR</button>
    </form>
  )

  renderList = () => (
    <div>
      ola
      {/* {console.log(objs)} */}
    </div>
  )

  render() {
    return (
      <section>
        {this.renderForm()}
        {this.renderList()}
      </section>
    );
  }
}
Form.propTypes = {
  identifier: PropTypes.string.isRequired,
};

export default Form;
