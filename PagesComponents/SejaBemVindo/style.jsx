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
  --atelier-gold-bright: #e2c990;
  --atelier-gold-deep: #7a5d2e;
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
  padding: clamp(2.5rem, 5vh, 4rem) clamp(1.25rem, 4vw, 3rem);
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
  max-width: 1120px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: clamp(2.2rem, 5vw, 4.5rem);

  ${customMedia.lessThan("notebook")`
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    max-width: 540px;
  `}
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;
  animation: ${fadeUp} 0.8s ${easeOutExpo} both;

  ${customMedia.lessThan("notebook")`
    align-items: center;
  `}

  .welcomeSubtitle {
    margin: 0;
    font-family: var(--atelier-ui);
    font-size: clamp(0.82rem, 1.1vw, 0.95rem);
    font-weight: 600;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--atelier-gold-bright, #e2c990);
    text-shadow: 0 1px 2px rgba(20, 28, 16, 0.35);
  }
`;

export const BrandTitleRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin: 0.15rem 0;

  ${customMedia.lessThan("notebook")`
    justify-content: center;
  `}

  .brandName {
    margin: 0;
    font-family: var(--atelier-display);
    font-size: clamp(3.2rem, 6.8vw, 5.2rem);
    font-weight: 600;
    line-height: 0.95;
    color: #141c10;
    letter-spacing: -0.01em;
  }

  .iconsCluster {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const IconNeedle = styled.div`
  width: clamp(34px, 4vw, 46px);
  height: clamp(34px, 4vw, 46px);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 5px rgba(20, 28, 16, 0.2));
  }
`;

export const IconPlay = styled.div`
  width: clamp(30px, 3.6vw, 40px);
  height: clamp(30px, 3.6vw, 40px);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 5px rgba(20, 28, 16, 0.2));
  }
`;

export const CallToActionText = styled.h2`
  margin: 0;
  font-family: var(--atelier-display);
  font-style: italic;
  font-size: clamp(1.45rem, 2.4vw, 2.05rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--atelier-gold-bright, #e2c990);
  text-shadow: 0 1px 3px rgba(20, 28, 16, 0.3);
  line-height: 1.15;
`;

export const Hashtag = styled.p`
  margin: 0.2rem 0 0.4rem 0;
  display: inline-block;
  font-family: var(--atelier-ui);
  font-size: clamp(0.78rem, 1vw, 0.9rem);
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--atelier-gold-bright, #e2c990);
  background: rgba(20, 28, 16, 0.45);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 0.45rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(226, 201, 144, 0.55);
`;

export const AccessCard = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 0.6rem;
  padding: clamp(1.6rem, 2.8vw, 2.2rem);
  background: rgba(251, 249, 245, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  box-shadow:
    0 18px 42px rgba(16, 24, 12, 0.18),
    0 3px 12px rgba(16, 24, 12, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${customMedia.lessThan("notebook")`
    align-items: center;
    text-align: center;
    max-width: 100%;
  `}

  .accessInstruction {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: clamp(0.98rem, 1.35vw, 1.12rem);
    line-height: 1.6;
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
    padding: 1.15rem 2rem;
    min-height: 3.4rem;
    background: #141c10;
    color: #faf9f7 !important;
    font-family: var(--atelier-ui);
    font-size: clamp(0.84rem, 1.05vw, 0.95rem);
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 2px;
    box-shadow: 0 8px 24px rgba(18, 24, 14, 0.22);
    transition:
      background 0.45s ${easeOutExpo},
      transform 0.45s ${easeOutExpo},
      box-shadow 0.45s ${easeOutExpo};

    &:hover {
      background: #24301c;
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(18, 24, 14, 0.3);
    }

    ${customMedia.lessThan("mobile")`
      width: 100%;
      padding: 1.05rem 1.3rem;
      box-sizing: border-box;
    `}
  }

  .supportNote {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--atelier-ui);
    font-size: 0.86rem;
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
    max-width: clamp(340px, 34vw, 420px);
    aspect-ratio: 1320 / 2346;
    max-height: clamp(520px, 80vh, 700px);
    border-radius: 8px;
    overflow: hidden;
    box-shadow:
      0 22px 52px rgba(16, 24, 12, 0.24),
      0 4px 16px rgba(16, 24, 12, 0.12);
    background: transparent;

    ${customMedia.lessThan("notebook")`
      max-width: 320px;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center center;
      display: block;
      transition: transform 0.8s ${easeOutExpo};

      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;
