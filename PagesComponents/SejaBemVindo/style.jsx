import Image from "next/image";
import styled, { keyframes } from "styled-components";
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
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.main`
  --atelier-ink: #100e0c;
  --atelier-ink-soft: #1c1815;
  --atelier-graphite: #3a342f;
  --atelier-stone: #cfc9c2;
  --atelier-mist: #e8e4df;
  --atelier-paper: #faf9f7;
  --atelier-accent: #8f1a20;
  --atelier-gold: #c4a46a;
  --atelier-olive: #85936e;
  --atelier-olive-deep: #141c10;
  --atelier-display: "Cormorant Garamond", Georgia, serif;
  --atelier-body: "Lora", Georgia, "Times New Roman", serif;
  --atelier-ui: "DM Sans", system-ui, sans-serif;

  min-height: 100vh;
  width: 100%;
  background: #85936e;
  color: #141c10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  padding: clamp(1.5rem, 4vh, 2.75rem) clamp(1rem, 3.5vw, 2.5rem);
  box-sizing: border-box;

  /* Iluminação suave e difusa */
  &::before {
    content: "";
    position: absolute;
    top: -10%;
    left: 25%;
    width: 650px;
    height: 650px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 68%);
    pointer-events: none;
    z-index: 0;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1060px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: clamp(1.2rem, 3vw, 2.5rem);

  ${customMedia.lessThan("notebook")`
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    max-width: 520px;
  `}
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.55rem;
  animation: ${fadeUp} 0.8s ${easeOutExpo} both;

  ${customMedia.lessThan("notebook")`
    align-items: center;
  `}

  .welcomeSubtitle {
    margin: 0;
    font-family: var(--atelier-ui);
    font-size: clamp(0.78rem, 1vw, 0.88rem);
    font-weight: 600;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(20, 28, 16, 0.85);
  }
`;

export const BrandTitleRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0;

  ${customMedia.lessThan("notebook")`
    justify-content: center;
  `}

  .brandName {
    margin: 0;
    font-family: var(--atelier-display);
    font-size: clamp(3rem, 6.2vw, 4.8rem);
    font-weight: 600;
    line-height: 0.95;
    color: #141c10;
    letter-spacing: -0.01em;
  }

  .iconsCluster {
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
`;

export const IconNeedle = styled.div`
  width: clamp(32px, 3.8vw, 44px);
  height: clamp(32px, 3.8vw, 44px);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(20, 28, 16, 0.15));
  }
`;

export const IconPlay = styled.div`
  width: clamp(28px, 3.4vw, 38px);
  height: clamp(28px, 3.4vw, 38px);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(20, 28, 16, 0.15));
  }
`;

export const CallToActionText = styled.h2`
  margin: 0;
  font-family: var(--atelier-display);
  font-style: italic;
  font-size: clamp(1.35rem, 2.2vw, 1.85rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #1b2515;
  line-height: 1.1;
`;

export const Hashtag = styled.p`
  margin: 0;
  display: inline-block;
  font-family: var(--atelier-ui);
  font-size: clamp(0.76rem, 0.95vw, 0.86rem);
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #141c10;
  background: rgba(255, 255, 255, 0.38);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.6);
`;

export const AccessCard = styled.div`
  width: 100%;
  max-width: 480px;
  margin-top: 0.35rem;
  padding: clamp(1.2rem, 2.2vw, 1.55rem);
  background: rgba(251, 249, 245, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 4px;
  box-shadow:
    0 16px 38px rgba(16, 24, 12, 0.16),
    0 3px 10px rgba(16, 24, 12, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  ${customMedia.lessThan("notebook")`
    align-items: center;
    text-align: center;
    max-width: 100%;
  `}

  .accessInstruction {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: clamp(0.95rem, 1.25vw, 1.08rem);
    line-height: 1.55;
    color: #2b3523;

    strong {
      color: #141c10;
      font-weight: 600;
    }
  }

  .btnHotmart {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1.05rem 1.8rem;
    min-height: 3.2rem;
    background: #141c10;
    color: #faf9f7 !important;
    font-family: var(--atelier-ui);
    font-size: clamp(0.82rem, 1vw, 0.92rem);
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 2px;
    box-shadow: 0 8px 22px rgba(18, 24, 14, 0.22);
    transition:
      background 0.45s ${easeOutExpo},
      transform 0.45s ${easeOutExpo},
      box-shadow 0.45s ${easeOutExpo};

    &:hover {
      background: #24301c;
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(18, 24, 14, 0.3);
    }

    ${customMedia.lessThan("mobile")`
      width: 100%;
      padding: 1rem 1.2rem;
      box-sizing: border-box;
    `}
  }

  .supportNote {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    font-family: var(--atelier-ui);
    font-size: 0.84rem;
    color: #3f4a36;

    ${customMedia.lessThan("notebook")`
      justify-content: center;
      flex-wrap: wrap;
    `}

    a {
      color: #141c10;
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 3px;
      transition: color 0.2s ease;

      &:hover {
        color: #2b3622;
      }
    }
  }
`;

export const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${fadeUp} 0.8s ${easeOutExpo} 0.15s both;

  .imageContainer {
    position: relative;
    width: 100%;
    max-width: 380px;
    aspect-ratio: 4 / 5;
    border-radius: 4px;
    overflow: hidden;
    box-shadow:
      0 20px 48px rgba(16, 24, 12, 0.22),
      0 4px 14px rgba(16, 24, 12, 0.1);
    background: #faf8f5;

    ${customMedia.lessThan("notebook")`
      max-width: 320px;
      aspect-ratio: 4 / 5;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
      transition: transform 0.8s ${easeOutExpo};

      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;
