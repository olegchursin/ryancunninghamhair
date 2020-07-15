import { StyledFullScreenWrapper } from './SharedStyledComponents';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';

interface IFullBackgroundProps {
  readonly className: string;
}

const FullBackground: React.FC<IFullBackgroundProps> = ({
  className,
  children
}) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "ryan-cunningham-hair.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  );

  // Single Image Data
  const imageData = desktop.childImageSharp.fluid;

  return (
    <StyledFullScreenWrapper>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#040e18`}
        title="Fullscreen Background"
        id="fullscreenbg"
        role="img"
        aria-label="Fullscreen Background"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </StyledFullScreenWrapper>
  );
};

const StyledFullBackground = styled(FullBackground)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledFullBackground;
