import styled from 'styled-components';

const Aside = styled.aside`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 60rem;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 30vw;
    background-color: blue;
  }
`;

export default Aside;
