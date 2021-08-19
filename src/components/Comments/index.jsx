import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Comment, CommentSection,
  FormUserComment, UsersAvaliations, FormStyle } from './styles';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      stars: 1,
      comment: '',
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { target: { name, value } } = e;

    this.setState({
      [name]: value,
    });
  };

  handleForm = (e) => {
    e.preventDefault();
    const comments = JSON.parse(localStorage.getItem('comentarios')) || [];
    const { identifier } = this.props;
    this.setState({ id: identifier }, () => {
      comments.push(this.state);
      localStorage.setItem('comentarios', JSON.stringify(comments));
    });
  }

  renderForm = () => {
    const { email, stars, comment } = this.state;
    return (
      <FormStyle onSubmit={ this.handleForm }>
        <caption>Deixe sua avaliação</caption>
        <label htmlFor="inputForm">
          <input
            type="email"
            name="email"
            id="inputForm"
            placeholder="Email"
            onChange={ this.handleChange }
            className="uk-input"
            value={ email }
          />
        </label>
        <textarea
          data-testid="product-detail-evaluation"
          name="comment"
          id="areaInput"
          cols="30"
          rows="10"
          placeholder="Mensagem (opcional) "
          onChange={ this.handleChange }
          className="uk-textarea"
          value={ comment }

        />
        <input
          type="number"
          name="stars"
          min="0"
          max="5"
          onChange={ this.handleChange }
          className="uk-input"
          value={ stars }
        />
        <button className="uk-button uk-button-secondary uk-width-1-1" type="submit">AVALIAR</button>
      </FormStyle>
    );
  }

  renderList = () => {
    const { identifier } = this.props;
    const getComments = JSON.parse(localStorage.getItem('comentarios')) || [];
    const comments = getComments.filter((c) => c.id === identifier);
    if (comments.length === 0) return (<CommentSection>Sem avaliações disponíveis</CommentSection>);
    return (
      <CommentSection>
        {comments.map(({ comment, email, stars }, i) => (
          <Comment
            key={ i }
          >
            {`Usuário ${email}`}
            <ReactStars count={ stars } color="#FFD700" />
            <p>
              {comment}
            </p>
          </Comment>))}
      </CommentSection>
    );
  }

  render() {
    return (
      <>
        <FormUserComment>
          {this.renderForm()}
        </FormUserComment>
        <UsersAvaliations>
          {this.renderList()}
        </UsersAvaliations>
      </>
    );
  }
}

export default Form;
