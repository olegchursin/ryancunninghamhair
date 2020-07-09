import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const AstronautImage = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "ryan-cunningham-hair-v.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  );
  const image = placeholderImage.childImageSharp;
  return <Img fluid={image.fluid} style={{ borderRadius: `15px` }} />;
};
export default AstronautImage;
