import React from 'react';

// Feito por Guilherme.
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }

  handleChange = ({ target: { value } }) => {
    const { getStateValue } = this.props;
    this.setState({
      searchText: value,
    }, () => getStateValue(this.state.searchText));
  }

  render() {
    const { searchText } = this.state;
    return (
      <label data-testid="home-initial-message" htmlFor="searchbar">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          id="searchbar"
          value={ searchText }
          name="search"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default SearchBar;
