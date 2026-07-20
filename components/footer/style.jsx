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
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--footer-background-color);
  width: 100%;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  box-shadow: var(--box-shadow);
  margin-top: 0;

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
