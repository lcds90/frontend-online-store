import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      searchText: value,
    });
  }

  render() {
    const { searchText } = this.state;
    return (
      <label data-testid="home-initial-message" htmlFor="searchbar">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          id="searchbar"
          value={ searchText }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default SearchBar;
