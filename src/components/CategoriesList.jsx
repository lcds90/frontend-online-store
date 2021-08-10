import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryId: '',
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleClick = ({ target: { name, value } }) => {
    const { getQueryValue } = this.props;
    this.setState({
      [name]: value,
    }, () => {
      const { state } = this;
      getQueryValue(name, state[name]);
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        <ul>
          {categories.map(({ id, name }) => (
            <li key={ id }>
              <label htmlFor={ `input-${id}` }>
                <input
                  id={ `input-${id}` }
                  type="radio"
                  data-testid="category"
                  name="categoryId"
                  value={ id }
                  onClick={ this.handleClick }
                />
                {name}
              </label>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

CategoriesList.propTypes = {
  getQueryValue: PropTypes.func.isRequired,
};

export default CategoriesList;
