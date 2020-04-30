import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.main};
  text-align: center;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
  cursor: pointer;
  width: 240px;
  font-size: 0.9375rem;
  margin: 1.25rem 1.5rem;
  border-width: 0.063rem;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.05);
  padding: 0.8125rem 1.875rem;
  border-radius: 0.5rem;
  flex: 1 1 0%;
  transition: transform 0.2s ease 0s;
  font-family: 'Affogato Regular';

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.main};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 25px;
    transform: translate(0px, -2px);
    }

  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.main};
      box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 25px;
      transform: translate(0px, -2px);
    }
  }
`;


const Button = ({ onClick, children }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <ButtonContainer disabled={disabled} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};


Button.propTypes = {
  onClick: propTypes.func.isRequired,
};


export default Button;