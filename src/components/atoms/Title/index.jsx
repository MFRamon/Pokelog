import styled from 'styled-components';

const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 2.2rem;
  margin: 1.25rem 1.5rem;
  display: inline-block

  @media (min-width: 1024px) {
    font-size: 2.8rem;
  }
`;

export default Title;
