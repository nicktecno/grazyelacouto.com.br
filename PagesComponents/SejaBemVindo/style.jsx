import Image from "next/image";
import styled, { css, keyframes } from "styled-components";
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

const easeOutExpo = "cubic-bezier(0.16, 1, 0.3, 1)";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.88;
  }
`;

const shimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  background: #ffffff;
  color: #100e0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  padding: clamp(2rem, 5vh, 4rem) clamp(1.25rem, 4vw, 3rem);
  box-sizing: border-box;

  /* Detalhes de iluminação suave de fundo */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(230, 218, 204, 0.35) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.15fr 0.95fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);

  ${customMedia.lessThan("notebook")`
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  `}
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  animation: ${fadeUp} 0.85s ${easeOutExpo} both;

  ${customMedia.lessThan("notebook")`
    align-items: center;
  `}

  .welcomeSubtitle {
    font-family: var(--atelier-display, "Cormorant Garamond", Georgia, serif);
    font-size: clamp(1.6rem, 3.2vw, 2.6rem);
    font-weight: 500;
    line-height: 1.15;
    color: #2b2623;
    margin: 0;
    letter-spacing: 0.02em;
  }
`;

export const BrandTitleRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0.25rem 0;

  ${customMedia.lessThan("notebook")`
    justify-content: center;
  `}

  .brandName {
    font-family: var(--atelier-display, "Cormorant Garamond", Georgia, serif);
    font-size: clamp(3.2rem, 7vw, 5.8rem);
    font-weight: 700;
    line-height: 0.95;
    color: #100e0c;
    letter-spacing: -0.01em;
  }

  .iconsCluster {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
`;

export const IconNeedle = styled.div`
  width: clamp(42px, 5vw, 60px);
  height: clamp(42px, 5vw, 60px);
  animation: ${pulseAnimation} 2.2s ease-in-out infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const IconPlay = styled.div`
  width: clamp(38px, 4.5vw, 54px);
  height: clamp(38px, 4.5vw, 54px);
  animation: ${pulseAnimation} 2.2s ease-in-out infinite 0.3s;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CallToActionText = styled.h2`
  margin: 0;
  font-family: var(--atelier-ui, "DM Sans", system-ui, sans-serif);
  font-size: clamp(1.4rem, 2.8vw, 2.2rem);
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8f1a20;
  line-height: 1.2;
`;

export const Hashtag = styled.p`
  margin: 0;
  font-family: var(--atelier-ui, "DM Sans", system-ui, sans-serif);
  font-size: clamp(1.15rem, 2vw, 1.55rem);
  font-weight: 700;
  color: #3d342f;
  letter-spacing: 0.04em;
`;

export const AccessCard = styled.div`
  width: 100%;
  max-width: 540px;
  margin-top: 1.25rem;
  padding: clamp(1.5rem, 3.5vw, 2.25rem);
  background: #faf8f5;
  border: 1.5px solid #ebdccb;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${customMedia.lessThan("notebook")`
    align-items: center;
    text-align: center;
  `}

  .accessInstruction {
    margin: 0;
    font-family: var(--atelier-body, "Lora", Georgia, serif);
    font-size: clamp(0.98rem, 1.4vw, 1.12rem);
    line-height: 1.6;
    color: #423b36;

    strong {
      color: #100e0c;
      font-weight: 600;
    }
  }

  .btnHotmart {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1.2rem 2.2rem;
    background: #ff5722;
    background: linear-gradient(135deg, #f05323 0%, #e04413 100%);
    color: #ffffff !important;
    font-family: var(--atelier-ui, "DM Sans", system-ui, sans-serif);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 8px;
    box-shadow: 0 6px 20px rgba(240, 83, 35, 0.35);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(240, 83, 35, 0.45);
      background: linear-gradient(135deg, #e04413 0%, #c93609 100%);
    }

    ${customMedia.lessThan("mobile")`
      width: 100%;
      padding: 1.1rem 1.25rem;
      font-size: 0.92rem;
      box-sizing: border-box;
    `}
  }

  .supportNote {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--atelier-ui, "DM Sans", system-ui, sans-serif);
    font-size: 0.85rem;
    color: #7a7068;

    a {
      color: #25d366;
      font-weight: 600;
      text-decoration: underline;

      &:hover {
        color: #1ea952;
      }
    }
  }
`;

export const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${fadeUp} 0.85s ${easeOutExpo} 0.2s both;

  .imageContainer {
    position: relative;
    width: 100%;
    max-width: 440px;
    aspect-ratio: 9 / 16;
    max-height: 85vh;
    border-radius: 16px;
    overflow: hidden;
    box-shadow:
      0 20px 48px rgba(0, 0, 0, 0.12),
      0 4px 16px rgba(0, 0, 0, 0.06);
    background: #f7f3ee;

    ${customMedia.lessThan("notebook")`
      max-width: 380px;
      aspect-ratio: 9 / 14;
    `}

    ${customMedia.lessThan("mobile")`
      max-width: 320px;
      aspect-ratio: 9 / 14;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
      transition: transform 0.8s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;
