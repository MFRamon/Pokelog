import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Control = styled.input`
  width: 81%;
  height: 50px;
  border-width: 0.063rem;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.05);
  padding: 0.8125rem 1.875rem;
  border-radius: 0.5rem;
  margin-left: 1.10rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
  background-color: ${({ theme }) => theme.inputBackground};
  font-size: 0.9375rem;
  font-family: 'Affogato Regular';
  
  ::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;


const Searchbar = ({ value, handleChange }) => (
  <Control
    value={value}
    onChange={handleChange}
    placeholder="Search for Pokemons"
    type="text"
  />
);

Searchbar.defaultProps = {
  value: '',
};

Searchbar.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string,
};

export default Searchbar;
