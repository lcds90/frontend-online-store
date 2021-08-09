import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryValue: '',
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleChange = ({ target: { value } }) => {
    const { getStateValue } = this.props;
    this.setState({
      categoryValue: value,
    }, () => getStateValue(this.state.categoryValue));
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        <ul>
          {categories.map(({ id, name }) => (
            <li key={ id } onChange={ this.handleChange }>
              <label htmlFor={ `input-${id}` }>
                <input
                  id={ `input-${id}` }
                  type="radio"
                  data-testid="category"
                  name="category"
                  value={ id }
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

export default CategoriesList;
