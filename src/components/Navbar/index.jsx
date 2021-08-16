import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Nav } from './styles';

class Navbar extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Nav>
        <Link to="/">Home</Link>
        {children}
      </Nav>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Navbar;
