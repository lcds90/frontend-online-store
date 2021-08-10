import React from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends React.Component {
  handleClick = () => {
    const { id } = this.props;
    const localObject = JSON.parse(localStorage.getItem('cartList')) || [];
    localObject.push(id);
    localStorage.setItem('cartList', JSON.stringify(localObject));
  }

  render() {
    const { testId, children } = this.props;
    return (
      <button
        data-testid={ testId }
        onClick={ this.handleClick }
        type="submit"
      >
        {children}
      </button>
    );
  }
}

ButtonAdd.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonAdd;
