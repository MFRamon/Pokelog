import React from 'react';
import styled from 'styled-components';

const Control = styled.input`
  width: 72%;
  height: 50px;
  border-width: 0.063rem;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.05);
  padding: 0.8125rem 1.875rem;
  border-radius: 0.5rem;
  margin: 1.25rem 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
  background-color: ${({ theme }) => theme.inputBackground};
  font-size: 0.9375rem;
  font-family: 'Affogato Regular';
  border-color: ${({ theme }) => theme.searchBorder};

  

  ::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;


const Searchbar = () => (
  <Control placeholder="Search for Pokemons" type="text" />
);

export default Searchbar;
