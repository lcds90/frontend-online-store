import React from 'react';

// Feito por Guilherme.
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    const { getQueryValue } = this.props;
    this.setState({
      [name]: value,
    }, () => {
      const { state } = this;
      getQueryValue(name, state[name]);
    });
  }

  render() {
    const { search } = this.state;
    return (
      <label data-testid="home-initial-message" htmlFor="searchBar">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          data-testid="query-input"
          id="searchBar"
          value={ search }
          name="search"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default SearchBar;
