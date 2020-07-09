import { Link } from 'gatsby';
import React from 'react';

import RCHLogo from '../images/rch-logo-wh.svg';
import styled from 'styled-components';

const Logo = styled.img`
  width: 350px;
  margin-block-start: 40px;
`;

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    width: '100vw',
    top: 0,
    left: 0,
    zIndex: 1
  }
};

const Header = ({ siteTitle }) => (
  <header style={styles.header}>
    <Link to="/">
      <Logo src={RCHLogo} alt={siteTitle} />
    </Link>
  </header>
);

export default Header;
