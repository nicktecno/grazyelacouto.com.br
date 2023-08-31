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

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  max-width: 1920px;
  align-self: center;
  width: 100%;
`;

export const Container01 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--default-color-hover);
  justify-content: space-between;

  .containerData {
    flex-direction: column;
    display: flex;
    font-size: 30px;
    line-height: 50px;
    padding: 20px;

    span {
      margin-bottom: 20px;

      font-family: "Metal" !important;
    }

    .upperCase {
      font-weight: 400;
      text-transform: uppercase;
      font-family: "Cinzel" !important;
    }
  }

  img {
    object-fit: cover;
    width: auto;
    height: auto;
  }
`;
