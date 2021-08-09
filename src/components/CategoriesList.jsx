import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
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
                  name="categories"
                  value={ name }
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
