import styled from 'styled-components';

const Paragragh = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.9375rem;
  font-family: 'Affogato Regular';
  margin: 1.25rem 1.5rem;

  @media (min-width: 1024px) {
    font-size: 0.9375rem;
    font-family: 'Affogato Regular';
    margin: 1.25rem 1.5rem;
  }
`;

export default Paragragh;
