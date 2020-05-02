import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.main};
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

const Layout = ({ children }) => (
  <Wrapper>
    <Main>{children}</Main>
  </Wrapper>
);


Layout.propTypes = {
  children: propTypes.node.isRequired,
};


export default Layout;
