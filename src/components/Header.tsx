import RCHLogo from '../images/rch-logo-wh.svg';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  width: 350px;
  margin-block-start: 40px;
`;

interface IStyles {
  [key: string]: React.CSSProperties;
}

const styles: IStyles = {
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

interface IFooterProps {
  readonly siteTitle: string;
}

const Header: React.FC<IFooterProps> = ({ siteTitle }) => (
  <header style={styles.header}>
    <Link to="/">
      <Logo src={RCHLogo} alt={siteTitle} />
    </Link>
  </header>
);

export default Header;
