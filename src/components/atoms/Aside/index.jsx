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
    width: 35vw;
    background-color: ${({ theme }) => theme.rightLayout};
    box-shadow: rgba(0, 0, 0, 0.20) 0px 4px 25px;
    border-width: 0.063rem;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.05);
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`;

export default Aside;
