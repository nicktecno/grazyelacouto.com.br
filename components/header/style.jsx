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

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--header-color, #ffffff);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  z-index: 1000;
`;

export const Header = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;

  ${customMedia.lessThan("tablet")`
    height: 64px;
    padding: 0 1.25rem;
  `}

  .logoLink {
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
      height: 56px;
      width: auto;
      max-width: 150px;
      object-fit: contain;

      ${customMedia.lessThan("tablet")`
        height: 44px;
        max-width: 120px;
      `}
    }
  }

  .containerLinks {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
    font-size: 16px;
    font-family: var(--ui-font, "DM Sans", system-ui, sans-serif);

    ${customMedia.lessThan("notebook")`
      gap: 16px;
      font-size: 14px;
    `}

    ${customMedia.lessThan("tablet")`
      display: none !important;
    `}

    a {
      text-decoration: none;
      color: var(--header-font-color, #292929);
      font-weight: 500;
      letter-spacing: 0.03em;
      position: relative;
      padding: 0.4rem 0;
      transition: color 0.25s ease;

      &:hover {
        color: #5e1f2e !important;
      }

      &.active {
        color: #5e1f2e !important;
        font-weight: 700;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #5e1f2e;
          border-radius: 2px;
        }
      }
    }
  }
`;

export const MenuToggle = styled.button`
  display: none;

  ${customMedia.lessThan("tablet")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    gap: 5px;
    z-index: 1002;
    -webkit-tap-highlight-color: transparent;

    span {
      display: block;
      width: 22px;
      height: 2px;
      background: #1a1617;
      border-radius: 2px;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
      transform-origin: center;
    }

    ${(p) =>
      p.$open &&
      `
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }
      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    `}
  `}
`;

export const Backdrop = styled.div`
  display: none;

  ${customMedia.lessThan("tablet")`
    display: block;
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    height: calc(100vh - 64px);
    background: rgba(16, 14, 12, 0.45);
    backdrop-filter: blur(2px);
    z-index: 998;
    opacity: ${(p) => (p.$open ? "1" : "0")};
    visibility: ${(p) => (p.$open ? "visible" : "hidden")};
    pointer-events: ${(p) => (p.$open ? "auto" : "none")};
    transition: opacity 0.25s ease, visibility 0.25s ease;
  `}
`;

export const MobileDrawer = styled.div`
  display: none;

  ${customMedia.lessThan("tablet")`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    max-height: calc(100vh - 64px);
    overflow-y: auto;
    background: #ffffff;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
    border-bottom: 2px solid #5e1f2e;
    z-index: 999;
    transform: translateY(${(p) => (p.$open ? "0" : "-8px")});
    opacity: ${(p) => (p.$open ? "1" : "0")};
    visibility: ${(p) => (p.$open ? "visible" : "hidden")};
    pointer-events: ${(p) => (p.$open ? "auto" : "none")};
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, visibility 0.25s ease;
  `}
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;

  .mobileLink {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    text-decoration: none;
    color: #1a1617;
    font-family: var(--ui-font, "DM Sans", system-ui, sans-serif);
    font-size: 1.05rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    transition: background 0.2s ease, color 0.2s ease;

    &:hover,
    &:active {
      background: rgba(94, 31, 46, 0.05);
      color: #5e1f2e;
    }

    &.active {
      color: #5e1f2e;
      font-weight: 700;
      background: rgba(94, 31, 46, 0.04);
      border-left: 4px solid #5e1f2e;
    }

    .arrow {
      font-size: 1.3rem;
      line-height: 1;
      color: rgba(0, 0, 0, 0.25);
      transition: transform 0.2s ease, color 0.2s ease;
    }

    &:hover .arrow,
    &.active .arrow {
      color: #5e1f2e;
      transform: translateX(3px);
    }
  }
`;

export const MobileFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 1.5rem 1.75rem;
  background: #faf9f7;
  gap: 0.25rem;

  span {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: #5e1f2e;
    letter-spacing: 0.04em;
  }

  small {
    font-family: var(--ui-font, "DM Sans", sans-serif);
    font-size: 0.75rem;
    color: #777;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }
`;
