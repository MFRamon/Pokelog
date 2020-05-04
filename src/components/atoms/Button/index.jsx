import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  color: ${({ theme }) => theme.buttonText};
  background-color: ${({ theme, backgroundColor }) => (backgroundColor ? theme.nextButton : theme.cardElevated)};
  text-align: center;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
  cursor: pointer;
  width: 240px;
  height: 50px;
  font-size: 0.9375rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-width: 0.063rem;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.05);
  padding: 0.8125rem 1.875rem;
  border-radius: 0.5rem;
  transition: transform 0.2s ease 0s;
  font-family: 'Affogato Regular';
  border-color: ${({ theme }) => theme.searchBorder};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.cardElevated};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 25px;
    transform: translate(0px, -2px);
    }
`;


const Button = ({ onClick, children, backgroundColor }) => (
  <ButtonContainer backgroundColor={backgroundColor} onClick={onClick}>
    {children}
  </ButtonContainer>
);

Button.defaultProps = {
  children: 'Default Text',
  backgroundColor: '',
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.node,
  backgroundColor: propTypes.string,
};


export default Button;
