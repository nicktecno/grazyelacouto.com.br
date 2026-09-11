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

export const Header = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  background: var(--header-color);
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-shadow: var(--box-shadow);

  img {
    width: 125px;
    height: 125px;
    object-fit: contain;

    ${customMedia.lessThan("mobile")`
      width: 80px;
      height: 80px;
    `}
  }

  .containerLinks {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    font-size: 18px;
    font-family: var(--ui-font, "DM Sans", system-ui, sans-serif);

    ${customMedia.lessThan("tablet")`
      gap: 14px;
      font-size: 15px;
    `}

    ${customMedia.lessThan("mobile")`
      gap: 10px;
      font-size: 12px;
    `}

    ${customMedia.lessThan("ipobre")`
      gap: 6px;
      font-size: 10px;
    `}

    a {
      transition: 0.3s;
      font-weight: 500;
      letter-spacing: 0.04em;

      :hover {
        color: var(--font-color-hover) !important;
      }
    }
  }
`;
