import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const media = generateMedia({
  tablet: "768px",
  mobile: "480px",
});

export const PageWrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  background: radial-gradient(circle at 50% 12%, #FAF4E5 0%, #EDE4CD 60%, #E3D7BF 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem 1rem 4rem;
  overflow-x: hidden;
  font-family: var(--atelier-ui, "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);

  ${media.lessThan("tablet")`
    background: #FAF7EA;
    padding: 0 0 3rem;
  `}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #FAF7EA;
  margin: 0 auto;
  border-radius: 36px;
  overflow: hidden;
  border: 1px solid rgba(86, 51, 36, 0.12);
  box-shadow: 0 24px 60px -10px rgba(87, 36, 67, 0.16), 0 6px 20px rgba(86, 51, 36, 0.06);

  ${media.lessThan("tablet")`
    max-width: 100%;
    min-height: 100vh;
    border-radius: 0;
    border: none;
    box-shadow: none;
    padding-bottom: max(2rem, env(safe-area-inset-bottom, 2rem));
  `}
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 235px;
  position: relative;
  overflow: hidden;
  background: #2a1520;

  ${media.lessThan("mobile")`
    height: 215px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 73%;
    display: block;
  }

  svg {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 40px;
    display: block;
    z-index: 1;
    pointer-events: none;
  }
`;

export const AvatarWrapper = styled.div`
  width: 116px;
  height: 116px;
  border-radius: 50%;
  margin-top: -58px;
  position: relative;
  z-index: 2;
  border: 4px solid #FFFFFF;
  box-shadow: 0 0 0 1px rgba(86, 51, 36, 0.08), 0 10px 26px rgba(86, 51, 36, 0.18);
  overflow: hidden;
  background: #ffffff;
  flex-shrink: 0;

  ${media.lessThan("mobile")`
    width: 108px;
    height: 108px;
    margin-top: -54px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 15%;
    display: block;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.95rem 1.6rem 0.5rem;
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: var(--atelier-display, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(1.9rem, 5.8vw, 2.35rem);
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #563324;
  line-height: 1.15;
`;

export const Bio = styled.p`
  margin: 0.85rem 0 1.25rem;
  font-family: var(--atelier-ui, "DM Sans", -apple-system, sans-serif);
  font-size: clamp(0.71rem, 2.2vw, 0.77rem);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.65;
  color: #6e5447;
  max-width: 390px;
  padding: 0 0.5rem;
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  margin-bottom: 1.75rem;

  a {
    color: #563324;
    transition: transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.22s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 28px;
      height: 28px;
    }

    &:hover {
      color: #572443;
      transform: translateY(-2px) scale(1.12);
    }
  }
`;

export const LinksList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  padding: 0 1.25rem;

  ${media.lessThan("mobile")`
    padding: 0 0.85rem;
    gap: 0.85rem;
  `}
`;

export const LinkPill = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 72px;
  background: linear-gradient(135deg, #5c2748 0%, #4e1d3b 100%);
  color: #ffffff !important;
  border-radius: 9999px;
  padding: 0.45rem 0.65rem;
  text-decoration: none !important;
  box-shadow: 0 4px 14px rgba(87, 36, 67, 0.18), 0 1px 3px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s ease, background 0.2s ease;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #4d1c3a 0%, #3e162f 100%);
    box-shadow: 0 8px 22px rgba(87, 36, 67, 0.3), 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.985);
  }

  ${media.lessThan("mobile")`
    min-height: 64px;
    padding: 0.38rem 0.45rem;
  `}
`;

export const Thumbnail = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.95);
  position: relative;

  ${media.lessThan("mobile")`
    width: 50px;
    height: 50px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const LinkLabel = styled.span`
  font-family: var(--atelier-ui, "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: clamp(0.85rem, 2.5vw, 0.98rem);
  font-weight: 500;
  line-height: 1.34;
  color: #ffffff;
  flex: 1;
  text-align: center;
  padding: 0 0.75rem;
  word-break: break-word;
`;

export const EndSpacer = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  pointer-events: none;

  ${media.lessThan("mobile")`
    width: 50px;
    height: 50px;
  `}
`;

export const Footer = styled.footer`
  margin-top: 2.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;

  span {
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #8c7365;
  }

  small {
    font-size: 0.68rem;
    letter-spacing: 0.05em;
    color: #a48f83;
  }
`;

