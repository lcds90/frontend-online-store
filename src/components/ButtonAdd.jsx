import React from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  handleClick = () => {
    const { id } = this.props;
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    const productExists = cartList.find((i) => i === id);
    this.setState({ disabled: true });
    if (productExists) return;
    cartList.push(id);
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }

  render() {
    const { testId, children } = this.props;
    const { disabled } = this.state;
    return (
      <button
        data-testid={ testId }
        onClick={ this.handleClick }
        type="submit"
        disabled={ disabled }
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
