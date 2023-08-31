import styled from "styled-components";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

export const Footer = styled.nav`
  max-width: 1920px;
  align-self: center;
  position: relative;
  display: flex;
  flex-direction: row;
  background: var(--footer-background-color);
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  flex-direction: column;
  box-shadow: var(--box-shadow);
  margin-top: 50px;

  img {
    width: 125px;
    height: 125px;
    object-fit: contain;
  }

  .containerLinks {
    display: flex;
    gap: 20px;
    font-size: 18px;
    align-items: center;
    margin-bottom: 20px;

    a {
      transition: 0.3s;

      :hover {
        color: var(--font-color-hover) !important;
      }

      svg {
        width: 50px;
      }
    }
  }

  .copyright {
    margin-bottom: 50px;
  }
`;
