import styled from 'styled-components';

const Title = styled.h2`
  color: ${({ theme, primaryColor }) => (primaryColor ? theme.primaryColor : theme.textColor)};
  font-size: ${({ big }) => (big ? '2.6rem' : '2.2rem')};
  margin: 1.25rem 1.5rem;

  @media (min-width: 1024px) {
    font-size: ${({ big }) => (big ? '3.4rem' : '2.8rem')};
  }

  @media (max-width: 320px) {
    font-size: ${({ big }) => (big ? '2.4rem' : '2.4rem')};
  }
`;

export default Title;
