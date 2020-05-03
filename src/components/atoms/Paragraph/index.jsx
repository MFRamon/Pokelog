import styled from 'styled-components';

const Paragragh = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: ${({ big }) => (big ? '2.6rem' : '0.9375rem')};
  font-family: 'Affogato Regular';
  margin: 1.25rem 1.5rem;

  @media (min-width: 1024px) {
    font-size: ${({ big }) => (big ? '3.4rem' : '0.9375rem')};
    font-family: 'Affogato Regular';
    margin: 1.25rem 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: ${({ big }) => (big ? '2.4rem' : '0.9375rem')};
    margin: 1.25rem 1.5rem;
  }
`;

export default Paragragh;
