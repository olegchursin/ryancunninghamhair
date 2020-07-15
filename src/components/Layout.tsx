import Footer from './Footer';
import Header from './Header';
import './styles.css';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

const Layout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </>
    )}
  />
);

export default Layout;
