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
  from {
    opacity: 0;
    transform: translateY(36px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const heroKenBurns = keyframes`
  from {
    transform: scale(1.08);
  }
  to {
    transform: scale(1);
  }
`;

const drawLine = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const softFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const ctaSheen = keyframes`
  from { transform: translateX(-120%) skewX(-18deg); }
  to { transform: translateX(220%) skewX(-18deg); }
`;

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
  }
`;


export const GeneralContainer = styled.main`
  /* Mesma família cromática, calibrada para contraste WCAG */
  --atelier-ink: #100e0c;
  --atelier-ink-soft: #1c1815;
  --atelier-graphite: #3a342f;
  --atelier-stone: #cfc9c2;
  --atelier-mist: #e8e4df;
  --atelier-paper: #faf9f7;
  --atelier-accent: #8f1a20;
  --atelier-accent-hover: #6b1217;
  --atelier-gold: #c4a46a;
  --atelier-gold-bright: #e2c990;
  --atelier-gold-deep: #7a5d2e;
  --atelier-text-on-dark: #faf9f7;
  --atelier-muted-on-dark: rgba(250, 249, 247, 0.88);
  --atelier-display: "Cormorant Garamond", Georgia, serif;
  --atelier-body: "Lora", Georgia, "Times New Roman", serif;
  --atelier-ui: "DM Sans", system-ui, sans-serif;

  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--atelier-paper);
  color: var(--atelier-ink);
  font-family: var(--atelier-body);
  overflow-x: clip;

  .reveal {
    opacity: 1;
    transform: none;
  }

  ${(p) =>
    p.$motionReady &&
    css`
      .reveal:not(.is-visible) {
        opacity: 0;
        transform: translateY(28px);
      }

      .reveal {
        transition:
          opacity 0.9s ${easeOutExpo},
          transform 0.9s ${easeOutExpo};
      }

      .reveal.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }

  /* Mobile / touch: sem animações de imagem que atrapalham o scroll */
  ${customMedia.lessThan("tablet")`
    .reveal,
    .reveal:not(.is-visible),
    .reveal.is-visible {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  `}

  @media (hover: none), (pointer: coarse) {
    .reveal,
    .reveal:not(.is-visible),
    .reveal.is-visible {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
`;

export const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  color: var(--atelier-text-on-dark);
  isolation: isolate;

  ${customMedia.lessThan("tablet")`
    min-height: 100vh;
    align-items: center;
  `}
`;

export const HeroMedia = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--atelier-ink);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse 100% 100% at 50% 50%,
        rgba(95, 30, 52, 0.32) 0%,
        rgba(68, 16, 36, 0.62) 100%
      ),
      linear-gradient(
        180deg,
        rgba(78, 20, 42, 0.48) 0%,
        rgba(88, 26, 48, 0.38) 50%,
        rgba(58, 12, 30, 0.65) 100%
      );
    pointer-events: none;
    animation: ${fadeIn} 1.1s ${easeOutExpo} both;
    ${reducedMotion}
  }
`;

export const HeroImage = styled(Image)`
  object-fit: cover;
  object-position: center top;
  animation: ${heroKenBurns} 2.4s ${easeOutExpo} both;
  ${reducedMotion}

  ${customMedia.lessThan("tablet")`
    animation: none;
  `}

  @media (hover: none), (pointer: coarse) {
    animation: none;
  }
`;

export const HeroShade = styled.div`
  position: absolute;
  inset: auto 0 0 0;
  height: 42%;
  background: linear-gradient(
    to top,
    rgba(50, 10, 28, 0.55),
    rgba(68, 16, 36, 0.18),
    transparent
  );
  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  max-width: min(46rem, 92vw);
  padding: clamp(2.5rem, 7vw, 6.5rem);
  padding-bottom: clamp(3.75rem, 9vw, 7rem);

  > * {
    opacity: 0;
    animation: ${fadeUp} 1s ${easeOutExpo} both;
    ${reducedMotion}
  }

  ${customMedia.lessThan("tablet")`
    > * { opacity: 1; animation: none; }
  `}

  @media (hover: none), (pointer: coarse) {
    > * { opacity: 1; animation: none; }
  }

  .welcome {
    margin: 0;
    animation-delay: 0.15s;
    font-family: var(--atelier-ui);
    font-size: clamp(0.9rem, 1.4vw, 1.05rem);
    letter-spacing: 0.34em;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--atelier-gold-bright);
  }

  .brand {
    margin: 0;
    animation-delay: 0.32s;
    font-family: var(--atelier-display);
    font-size: clamp(3.25rem, 8vw, 6.25rem);
    font-weight: 600;
    line-height: 0.94;
    letter-spacing: 0.01em;
    color: var(--atelier-text-on-dark);
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.25);

    ${customMedia.lessThan("mobile")`
      white-space: nowrap;
    `}
  }

  .brandLine {
    display: block;
    width: 5.5rem;
    height: 1.5px;
    margin: 0.55rem 0 0.35rem;
    background: var(--atelier-gold);
    transform-origin: left center;
    animation: ${drawLine} 0.9s ${easeOutExpo} 0.55s both;
    ${reducedMotion}
  }

  h1 {
    margin: 0;
    animation-delay: 0.48s;
    font-family: var(--atelier-body);
    font-weight: 500;
    font-size: clamp(1.2rem, 2.4vw, 1.65rem);
    line-height: 1.5;
    letter-spacing: 0.04em;
    max-width: 32ch;
    color: var(--atelier-muted-on-dark);
  }

  .cta {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    overflow: hidden;
    margin-top: 1.6rem;
    min-width: min(100%, 320px);
    min-height: 3.5rem;
    animation-delay: 0.68s;
    padding: 1.2rem 2.4rem;
    background: var(--atelier-paper);
    color: var(--atelier-ink) !important;
    font-family: var(--atelier-ui);
    font-size: clamp(0.9rem, 1.3vw, 1.05rem);
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid var(--atelier-paper);
    transition:
      background 0.45s ${easeOutExpo},
      color 0.45s ${easeOutExpo},
      border-color 0.45s ${easeOutExpo},
      transform 0.45s ${easeOutExpo},
      box-shadow 0.45s ${easeOutExpo};

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      width: 40%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.45),
        transparent
      );
      transform: translateX(-120%) skewX(-18deg);
      pointer-events: none;
    }

    &:hover {
      background: var(--atelier-gold);
      border-color: var(--atelier-gold);
      color: var(--atelier-ink) !important;
      transform: translateY(-3px);
      box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);

      &::after {
        animation: ${ctaSheen} 0.85s ${easeOutExpo};
      }
    }

    ${customMedia.lessThan("tablet")`
      transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

      &:hover {
        transform: none;
        box-shadow: none;

        &::after { animation: none; }
      }
    `}

    &:focus-visible {
      outline: 2px solid var(--atelier-gold-bright);
      outline-offset: 3px;
    }
  }

  ${customMedia.lessThan("mobile")`
    max-width: 100%;

    h1 { max-width: none; }

    .cta {
      align-self: stretch;
      text-align: center;
    }
  `}
`;

export const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.1rem;
  padding: clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 4rem) 2rem;

  h2 {
    margin: 0;
    font-family: var(--atelier-display);
    font-weight: 500;
    font-size: clamp(2.15rem, 4.6vw, 3.6rem);
    line-height: 1.12;
    letter-spacing: 0.01em;
    max-width: 22ch;
    color: ${(p) =>
      p.$light ? "var(--atelier-text-on-dark)" : "var(--atelier-ink)"};
  }
`;

export const SectionLabel = styled.span`
  position: relative;
  font-family: var(--atelier-ui);
  font-size: clamp(0.82rem, 1.2vw, 0.95rem);
  font-weight: 600;
  letter-spacing: 0.36em;
  text-transform: uppercase;
  color: ${(p) =>
    p.$light ? "var(--atelier-gold-bright)" : "var(--atelier-accent)"};

  &::after {
    content: "";
    display: block;
    width: 3rem;
    height: 1.5px;
    margin: 0.85rem auto 0;
    background: ${(p) =>
      p.$light ? "var(--atelier-gold)" : "var(--atelier-gold-deep)"};
    transform-origin: center;
    animation: ${drawLine} 0.8s ${easeOutExpo} both;
    ${reducedMotion}
  }
`;

export const VideoSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: center;
  width: 100%;
  padding: clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 6vw, 5rem)
    clamp(3rem, 6vw, 5rem);
  background: var(--atelier-paper);

  ${customMedia.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}

  .videoCue {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    padding-inline: clamp(0.5rem, 2vw, 1rem);

    .cueLabel {
      margin: 0;
      font-family: var(--atelier-ui);
      font-size: clamp(0.8rem, 1.1vw, 0.95rem);
      font-weight: 600;
      letter-spacing: 0.34em;
      text-transform: uppercase;
      color: var(--atelier-accent);
    }

    .cueHeading {
      margin: 0;
      font-family: var(--atelier-display);
      font-weight: 500;
      font-size: clamp(2.2rem, 4.5vw, 3.8rem);
      line-height: 1.1;
      color: var(--atelier-ink);
    }

    .cueArrow {
      font-size: clamp(2rem, 4vw, 3.2rem);
      color: var(--atelier-gold-deep);
      line-height: 1;
      animation: ${softFloat} 3s ease-in-out infinite;
      display: inline-block;
      ${reducedMotion}
    }

    ${customMedia.lessThan("tablet")`
      align-items: center;
      text-align: center;
      .cueArrow {
        transform: rotate(90deg);
        animation: none;
      }
    `}

    @media (hover: none), (pointer: coarse) {
      .cueArrow { animation: none; }
    }
  }

  .videoFrame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: var(--atelier-ink);
    overflow: hidden;
    box-shadow:
      0 1px 0 rgba(196, 164, 106, 0.35),
      0 28px 70px rgba(16, 14, 12, 0.22);
    transition: transform 0.7s ${easeOutExpo}, box-shadow 0.7s ${easeOutExpo};

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transform: translateY(-4px);
        box-shadow:
          0 1px 0 rgba(196, 164, 106, 0.5),
          0 34px 80px rgba(16, 14, 12, 0.28);
      }
    }

    ${customMedia.lessThan("tablet")`
      transition: none;
    `}

    iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`;

const ctaLuxury = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  overflow: hidden;
  margin-top: 0.85rem;
  min-width: min(100%, 280px);
  min-height: 3.35rem;
  padding: 1.15rem 2.25rem;
  background: var(--atelier-ink);
  color: var(--atelier-text-on-dark) !important;
  font-family: var(--atelier-ui);
  font-size: clamp(0.88rem, 1.25vw, 1.02rem);
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid var(--atelier-ink);
  transition:
    background 0.45s ${easeOutExpo},
    color 0.45s ${easeOutExpo},
    border-color 0.45s ${easeOutExpo},
    transform 0.45s ${easeOutExpo},
    box-shadow 0.45s ${easeOutExpo};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 42%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.22),
      transparent
    );
    transform: translateX(-120%) skewX(-18deg);
    pointer-events: none;
  }

  &:hover {
    background: var(--atelier-gold);
    border-color: var(--atelier-gold);
    color: var(--atelier-ink) !important;
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(16, 14, 12, 0.18);

    &::after {
      animation: ${ctaSheen} 0.85s ${easeOutExpo};
    }
  }

  @media (max-width: 768px) {
    transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

    &:hover {
      transform: none;
      box-shadow: none;

      &::after {
        animation: none;
      }
    }
  }

  &:focus-visible {
    outline: 2px solid var(--atelier-accent);
    outline-offset: 3px;
  }
`;

export const CourseSection = styled.section`
  display: grid;
  grid-template-columns: ${(p) =>
    p.$reverse
      ? "minmax(0, 1.08fr) minmax(0, 0.92fr)"
      : "minmax(0, 0.92fr) minmax(0, 1.08fr)"};
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  width: 100%;
  padding: clamp(3.5rem, 8vw, 7rem) clamp(1.75rem, 7vw, 6rem);
  background: ${(p) =>
    p.$reverse ? "var(--atelier-mist)" : "var(--atelier-paper)"};
  color: var(--atelier-ink);

  ${(p) =>
    p.$reverse &&
    `
    .copy { order: 2; }
    .courseMedia { order: 1; }
  `}

  ${customMedia.lessThan("notebook")`
    grid-template-columns: 1fr;
    gap: 2rem;

    .copy {
      order: 2 !important;
      max-width: none;
    }

    .courseMedia {
      order: 1 !important;
      width: 100%;
      max-height: 480px;
    }
  `}

  .copy {
    display: flex;
    flex-direction: column;
    gap: 1.45rem;
    max-width: 42rem;
    padding-inline: clamp(0rem, 1vw, 0.75rem);

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-weight: 500;
      font-size: clamp(2.2rem, 4vw, 3.35rem);
      line-height: 1.08;
      letter-spacing: 0.01em;
      color: var(--atelier-ink);
    }

    p {
      margin: 0;
      font-size: clamp(1.1rem, 1.8vw, 1.3rem);
      line-height: 1.8;
      color: var(--atelier-graphite);
      font-weight: 400;
      max-width: 38rem;
    }

    a {
      ${ctaLuxury}
    }
  }

  .courseMedia {
    transition: transform 0.9s ${easeOutExpo}, filter 0.9s ${easeOutExpo};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover .courseMedia {
      transform: scale(1.015);
      filter: contrast(1.03) saturate(1.04);
    }
  }

  ${customMedia.lessThan("tablet")`
    .courseMedia {
      transition: none;
      transform: none !important;
      filter: none !important;
    }
  `}
`;

export const CourseImage = styled(Image).attrs({ className: "courseMedia" })`
  width: 100%;
  height: auto;
  max-height: 640px;
  object-fit: cover;
  object-position: center;
`;

export const ShirtSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  min-height: clamp(600px, 84vh, 960px);
  background: #2c4a38;
  overflow: hidden;

  ${customMedia.lessThan("notebook")`
    grid-template-columns: 1fr;
    min-height: auto;
  `}
`;

export const ShirtGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: clamp(0.6rem, 1.2vw, 1rem);
  padding: clamp(2rem, 3.5vw, 3rem) 0 clamp(2rem, 3.5vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);

  ${customMedia.lessThan("notebook")`
    padding: clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 3rem) 0;
  `}
`;

export const ShirtCard = styled.div`
  position: relative;
  width: 100%;
  ${(p) =>
    p.$main
      ? "grid-row: 1 / 3; align-self: stretch;"
      : "aspect-ratio: 3 / 4;"}
  margin-top: ${(p) => (p.$offset ? "clamp(1rem, 2vw, 1.5rem)" : "0")};
  overflow: hidden;
  box-shadow: 0 20px 52px rgba(16, 14, 12, 0.1), 0 3px 10px rgba(16, 14, 12, 0.06);
  transition: transform 0.8s ${easeOutExpo}, box-shadow 0.8s ${easeOutExpo};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-6px) scale(1.012);
      box-shadow: 0 28px 68px rgba(16, 14, 12, 0.16), 0 5px 16px rgba(16, 14, 12, 0.08);
    }
  }

  ${customMedia.lessThan("tablet")`
    transition: none;
    transform: none !important;
    margin-top: ${(p) => (p.$offset ? "clamp(1rem, 2vw, 1.5rem)" : "0")};
  `}
`;

export const ShirtImg = styled(Image)`
  object-fit: cover;
  object-position: center center;
`;

export const ShirtCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(3.5rem, 7vw, 6.5rem) clamp(2.5rem, 6vw, 5.5rem);
  gap: clamp(1.2rem, 2vw, 1.8rem);

  .shirtLabel {
    margin: 0;
    font-family: var(--atelier-ui);
    font-size: clamp(0.82rem, 1.1vw, 1rem);
    font-weight: 500;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: rgba(185, 218, 200, 0.55);
  }

  h2 {
    margin: 0;
    font-family: var(--atelier-display);
    font-weight: 500;
    font-size: clamp(3.8rem, 8vw, 7.5rem);
    line-height: 1.0;
    letter-spacing: 0.01em;
    color: #f5ede0;
  }

  .shirtDesc {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: clamp(1.1rem, 1.8vw, 1.42rem);
    line-height: 1.75;
    color: rgba(222, 240, 228, 0.88);
    max-width: 30ch;
  }

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top: 0.5rem;
    padding: 1.2rem 2.8rem;
    min-height: 3.5rem;
    background: transparent;
    color: #f5ede0 !important;
    font-family: var(--atelier-ui);
    font-size: clamp(0.86rem, 1.15vw, 1rem);
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1.5px solid rgba(245, 237, 224, 0.45);
    transition:
      background 0.45s ${easeOutExpo},
      border-color 0.45s ${easeOutExpo},
      transform 0.45s ${easeOutExpo};

    &:hover {
      background: rgba(245, 237, 224, 0.1);
      border-color: #f5ede0;
      transform: translateY(-3px);
    }

    ${customMedia.lessThan("tablet")`
      transition: background 0.25s ease, border-color 0.25s ease;
      &:hover { transform: none; }
    `}

    &:focus-visible {
      outline: 2px solid #f5ede0;
      outline-offset: 3px;
    }
  }

  ${customMedia.lessThan("notebook")`
    align-items: center;
    text-align: center;
    padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem) clamp(3.5rem, 7vw, 5rem);
    h2 { font-size: clamp(3.2rem, 11vw, 5.5rem); line-height: 1.0; }
    .shirtDesc { max-width: none; }
    a { align-self: stretch; }
  `}
`;

export const GalleryBlock = styled.section`
  width: 100%;
  padding-bottom: clamp(3rem, 6vw, 5rem);
  background: ${(p) => {
    if (p.$wine) return "#4a1220";
    if (p.$mist) return "var(--atelier-mist)";
    if (p.$ink) return "var(--atelier-ink-soft)";
    return "var(--atelier-paper)";
  }};
  color: ${(p) =>
    p.$wine || p.$ink ? "var(--atelier-text-on-dark)" : "var(--atelier-ink)"};
`;

export const EmblaRoot = styled.div`
  width: 100%;
  padding: 0 clamp(1.5rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem);
  box-sizing: border-box;
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
  touch-action: pan-y;
`;

export const EmblaContainer = styled.div`
  display: flex;
  gap: 18px;
  align-items: stretch;
  will-change: transform;

  @media (min-width: 1400px) {
    & > * { flex: 0 0 calc((100% - 18px * 4) / 5); }
  }
  @media (min-width: 1100px) and (max-width: 1399px) {
    & > * { flex: 0 0 calc((100% - 18px * 3) / 4); }
  }
  @media (min-width: 768px) and (max-width: 1099px) {
    & > * { flex: 0 0 calc((100% - 18px * 2) / 3); }
  }
  @media (min-width: 480px) and (max-width: 767px) {
    & > * { flex: 0 0 calc((100% - 18px) / 2); }
  }
  @media (max-width: 479px) {
    & > * { flex: 0 0 100%; }
  }
`;

export const EmblaSlide = styled.div`
  min-width: 0;
  flex-shrink: 0;

  .category {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: clamp(300px, 42vw, 440px);
    overflow: hidden;
    background: rgba(16, 14, 12, 0.04);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      -webkit-user-drag: none;
      transition:
        transform 0.7s ${easeOutExpo},
        filter 0.55s ease;
      filter: saturate(0.94) contrast(1.02);

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          transform: scale(1.02);
          filter: saturate(1.05) contrast(1.04);
        }
      }
    }

    ${customMedia.lessThan("tablet")`
      height: clamp(240px, 55vw, 340px);
      img {
        transition: none;
        transform: none !important;
      }
    `}
  }
`;

export const EmblaControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 1.5rem;
`;

export const EmblaButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1.5px solid
    ${(p) =>
      p.$light
        ? "rgba(250,249,247,0.45)"
        : "rgba(16,14,12,0.25)"};
  background: transparent;
  color: ${(p) =>
    p.$light ? "var(--atelier-text-on-dark)" : "var(--atelier-ink)"};
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: ${(p) =>
      p.$light
        ? "rgba(250,249,247,0.12)"
        : "rgba(16,14,12,0.07)"};
    border-color: ${(p) =>
      p.$light
        ? "rgba(250,249,247,0.7)"
        : "rgba(16,14,12,0.5)"};
  }

  &:focus-visible {
    outline: 2px solid var(--atelier-gold);
    outline-offset: 2px;
  }
`;

export const EmblaDots = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const EmblaDot = styled.button`
  width: ${(p) => (p.$active ? "1.8rem" : "0.5rem")};
  height: 0.5rem;
  border-radius: 99px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${(p) => {
    if (p.$light) {
      return p.$active
        ? "var(--atelier-gold-bright)"
        : "rgba(250,249,247,0.35)";
    }
    return p.$active ? "var(--atelier-accent)" : "rgba(16,14,12,0.22)";
  }};
  transition: width 0.3s ${easeOutExpo}, background 0.3s ease;

  &:focus-visible {
    outline: 2px solid var(--atelier-gold);
    outline-offset: 2px;
  }
`;

/* Back-compat — kept so Maratona/style.jsx doesn't break */
export const ContainerSliderCategory = EmblaRoot;

export const AboutSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;
  width: 100%;
  padding: clamp(4rem, 8vw, 7rem) clamp(1.75rem, 7vw, 6rem);
  background: var(--atelier-ink);
  color: var(--atelier-text-on-dark);

  ${customMedia.lessThan("tablet")`
    grid-template-columns: 1fr;
    text-align: center;
  `}

  .aboutCopy {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 44rem;

    ${customMedia.lessThan("tablet")`
      align-items: center;
      max-width: none;
    `}

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-weight: 500;
      font-size: clamp(2.4rem, 5vw, 3.85rem);
      line-height: 1.05;
      color: var(--atelier-text-on-dark);
    }

    p {
      margin: 0;
      font-size: clamp(1.15rem, 2.1vw, 1.45rem);
      line-height: 1.75;
      color: var(--atelier-text-on-dark);
      font-family: var(--atelier-body);
      font-weight: 400;
    }
  }
`;

export const AboutPortrait = styled(Image)`
  width: min(100%, 380px);
  height: auto;
  object-fit: contain;
  justify-self: center;
  filter: drop-shadow(0 22px 44px rgba(16, 14, 12, 0.22));
  transition: transform 0.9s ${easeOutExpo};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-6px);
    }
  }

  ${customMedia.lessThan("tablet")`
    transition: none;
    transform: none !important;
  `}
`;

export const GeoFacts = styled.section`
  width: 100%;
  padding: clamp(3.5rem, 7vw, 5.5rem) clamp(1.75rem, 7vw, 6rem)
    clamp(4.5rem, 8vw, 7rem);
  background: var(--atelier-ink);
  color: var(--atelier-text-on-dark);

  h2 {
    margin: 0 0 2.25rem;
    font-family: var(--atelier-display);
    font-weight: 500;
    font-size: clamp(1.85rem, 3.4vw, 2.65rem);
    line-height: 1.2;
    max-width: 24ch;
    color: var(--atelier-text-on-dark);
  }

  dl {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem 3rem;
    margin: 0;

    ${customMedia.lessThan("tablet")`
      grid-template-columns: 1fr;
    `}
  }

  div {
    border-top: 1px solid rgba(226, 201, 144, 0.28);
    padding-top: 1.25rem;
    transition: border-color 0.4s ease;

    &:hover {
      border-top-color: var(--atelier-gold);
    }
  }

  dt {
    margin: 0 0 0.65rem;
    font-family: var(--atelier-ui);
    font-size: clamp(0.8rem, 1.1vw, 0.9rem);
    font-weight: 600;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--atelier-gold-bright);
  }

  dd {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: clamp(1.05rem, 1.5vw, 1.18rem);
    line-height: 1.7;
    color: var(--atelier-muted-on-dark);
  }
`;

export const SewingSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  min-height: clamp(600px, 84vh, 960px);
  background: #2c4a38;
  overflow: hidden;

  ${customMedia.lessThan("tablet")`
    grid-template-columns: 1fr;
    min-height: auto;
  `}
`;

export const SewingCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  padding: clamp(3.5rem, 7vw, 6.5rem) clamp(2.5rem, 6vw, 5.5rem);
  gap: clamp(1.2rem, 2vw, 1.8rem);

  .sewingLabel {
    margin: 0;
    font-family: var(--atelier-ui);
    font-size: clamp(0.82rem, 1.1vw, 1rem);
    font-weight: 500;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: rgba(185, 218, 200, 0.55);
  }

  .sewingTag {
    margin: 0;
    font-family: var(--atelier-ui);
    font-size: clamp(1rem, 1.6vw, 1.25rem);
    font-weight: 700;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: #c8a060;
  }

  h2 {
    margin: 0;
    font-family: var(--atelier-display);
    font-style: italic;
    font-weight: 500;
    font-size: clamp(5rem, 11vw, 10.5rem);
    line-height: 0.88;
    letter-spacing: -0.01em;
    color: #f5ede0;
  }

  .sewingDesc {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: clamp(1.15rem, 1.9vw, 1.5rem);
    line-height: 1.72;
    color: rgba(222, 240, 228, 0.88);
    max-width: 32ch;
  }

  .sewingCta {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top: 0.5rem;
    padding: 1.2rem 2.8rem;
    min-height: 3.5rem;
    background: transparent;
    color: #f5ede0 !important;
    font-family: var(--atelier-ui);
    font-size: clamp(0.86rem, 1.15vw, 1rem);
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1.5px solid rgba(245, 237, 224, 0.45);
    transition:
      background 0.45s ${easeOutExpo},
      border-color 0.45s ${easeOutExpo},
      transform 0.45s ${easeOutExpo};

    &:hover {
      background: rgba(245, 237, 224, 0.1);
      border-color: #f5ede0;
      transform: translateY(-3px);
    }

    ${customMedia.lessThan("tablet")`
      transition: background 0.25s ease, border-color 0.25s ease;
      &:hover { transform: none; }
    `}

    &:focus-visible {
      outline: 2px solid #f5ede0;
      outline-offset: 3px;
    }
  }

  ${customMedia.lessThan("tablet")`
    align-items: center;
    text-align: center;
    padding: clamp(3rem, 7vw, 5rem) clamp(1.5rem, 5vw, 3rem);
    h2 { font-size: clamp(3.8rem, 13vw, 6rem); }
    .sewingDesc { max-width: none; }
  `}
`;

export const SewingMedia = styled.div`
  position: relative;
  margin: clamp(2rem, 3.5vw, 3rem) 0;
  border-radius: clamp(20px, 3vw, 36px) 0 0 clamp(20px, 3vw, 36px);
  overflow: hidden;

  ${customMedia.lessThan("tablet")`
    margin: 0;
    border-radius: 0;
    min-height: clamp(360px, 65vw, 520px);
  `}
`;

export const SewingImage = styled(Image)`
  object-fit: cover;
  object-position: center top;
`;

export const TailoringSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  min-height: clamp(620px, 88vh, 980px);
  background: #4a1220;
  overflow: hidden;

  ${customMedia.lessThan("notebook")`
    grid-template-columns: 1fr;
    min-height: auto;
  `}
`;

export const TailoringCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(3.5rem, 7vw, 6.5rem) clamp(2.5rem, 6vw, 5.5rem);
  gap: clamp(1.2rem, 2vw, 1.8rem);

  .tailLabel {
    margin: 0;
    font-family: var(--atelier-ui);
    font-size: clamp(0.82rem, 1.1vw, 1rem);
    font-weight: 600;
    letter-spacing: 0.36em;
    text-transform: uppercase;
    color: rgba(226, 201, 144, 0.7);
  }

  h2 {
    margin: 0;
    font-family: var(--atelier-display);
    font-weight: 500;
    font-size: clamp(4.2rem, 9vw, 8.5rem);
    line-height: 1.05;
    letter-spacing: 0.01em;
    color: #faf9f7;
  }

  .tailDesc {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: clamp(1.1rem, 1.8vw, 1.42rem);
    line-height: 1.75;
    color: rgba(250, 249, 247, 0.78);
    max-width: 32ch;
  }

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top: 0.5rem;
    padding: 1.2rem 2.8rem;
    min-height: 3.5rem;
    background: transparent;
    color: #faf9f7 !important;
    font-family: var(--atelier-ui);
    font-size: clamp(0.86rem, 1.15vw, 1rem);
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1.5px solid rgba(250, 249, 247, 0.45);
    transition:
      background 0.45s ${easeOutExpo},
      border-color 0.45s ${easeOutExpo},
      transform 0.45s ${easeOutExpo};

    &:hover {
      background: rgba(250, 249, 247, 0.1);
      border-color: #faf9f7;
      transform: translateY(-3px);
    }

    ${customMedia.lessThan("tablet")`
      transition: background 0.25s ease, border-color 0.25s ease;
      &:hover { transform: none; }
    `}

    &:focus-visible {
      outline: 2px solid rgba(226, 201, 144, 0.7);
      outline-offset: 3px;
    }
  }

  ${customMedia.lessThan("notebook")`
    align-items: center;
    text-align: center;
    padding: clamp(3.5rem, 7vw, 5rem) clamp(1.5rem, 5vw, 3rem) clamp(2rem, 4vw, 3rem);
    h2 { font-size: clamp(3.8rem, 13vw, 6rem); }
    .tailDesc { max-width: none; }
  `}
`;

export const TailoringGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(0.6rem, 1.2vw, 1rem);
  padding: clamp(2rem, 3.5vw, 3rem) 0 clamp(2rem, 3.5vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);
  align-items: start;

  ${customMedia.lessThan("notebook")`
    padding: clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 3rem) 0;
  `}
`;

export const TailoringCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  margin-top: ${(p) => (p.$offset ? "clamp(1.5rem, 3vw, 2.5rem)" : "0")};
  overflow: hidden;
  background: #f5f0ea;
  box-shadow: 0 16px 48px rgba(30, 4, 12, 0.28), 0 3px 10px rgba(30, 4, 12, 0.16);
  transition: transform 0.8s ${easeOutExpo}, box-shadow 0.8s ${easeOutExpo};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-6px) scale(1.015);
      box-shadow: 0 24px 60px rgba(30, 4, 12, 0.36), 0 5px 16px rgba(30, 4, 12, 0.2);
    }
  }

  ${customMedia.lessThan("tablet")`
    transition: none;
    transform: none !important;
    margin-top: ${(p) => (p.$offset ? "clamp(1rem, 2vw, 1.5rem)" : "0")};
  `}
`;

export const TailoringImg = styled(Image)`
  object-fit: cover;
  object-position: center top;
`;

export const ComboSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
  min-height: clamp(600px, 84vh, 960px);
  background: #ede8e1;
  overflow: hidden;

  ${customMedia.lessThan("notebook")`
    grid-template-columns: 1fr;
    min-height: auto;
  `}
`;

export const ComboCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(3.5rem, 7vw, 6.5rem) clamp(2.5rem, 6vw, 5.5rem);
  gap: clamp(1.2rem, 2vw, 1.8rem);

  .comboLabel {
    margin: 0;
    font-family: var(--atelier-ui);
    font-size: clamp(0.82rem, 1.1vw, 1rem);
    font-weight: 600;
    letter-spacing: 0.36em;
    text-transform: uppercase;
    color: #5c1b32;
    opacity: 0.75;
  }

  h2 {
    margin: 0;
    font-family: var(--atelier-display);
    font-weight: 500;
    font-size: clamp(3.4rem, 7vw, 6.5rem);
    line-height: 1.05;
    letter-spacing: 0.01em;
    color: #3d1020;

    em {
      font-style: italic;
      color: #5c1b32;
    }
  }

  .comboDesc {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: clamp(1.1rem, 1.8vw, 1.42rem);
    line-height: 1.75;
    color: #5a3a3a;
    max-width: 32ch;
  }

  a {
    ${ctaLuxury}
    margin-top: 0.5rem;
    background: #5c1b32;
    border-color: #5c1b32;
    color: var(--atelier-text-on-dark) !important;

    &:hover {
      background: #7a2342;
      border-color: #7a2342;
      color: var(--atelier-text-on-dark) !important;
      transform: translateY(-3px);
    }
  }

  ${customMedia.lessThan("notebook")`
    align-items: center;
    text-align: center;
    padding: clamp(3.5rem, 7vw, 5rem) clamp(1.5rem, 5vw, 3rem) clamp(2rem, 4vw, 3rem);
    h2 { font-size: clamp(2.8rem, 10vw, 4.5rem); }
    .comboDesc { max-width: none; }
    a { align-self: stretch; }
  `}
`;

export const ComboHeader = styled.div``;

export const ComboGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: clamp(0.6rem, 1.2vw, 1rem);
  padding: clamp(2rem, 3.5vw, 3rem) clamp(1.5rem, 3vw, 2.5rem) clamp(2rem, 3.5vw, 3rem) 0;

  ${customMedia.lessThan("notebook")`
    padding: 0 clamp(1.5rem, 5vw, 3rem) clamp(3rem, 6vw, 4.5rem);
  `}
`;

export const ComboImgWrap = styled.div`
  position: relative;
  width: 100%;
  ${(p) =>
    p.$main
      ? "grid-row: 1 / 3; align-self: stretch;"
      : "aspect-ratio: 3 / 4;"}
  margin-top: ${(p) => (p.$offset ? "clamp(1rem, 2vw, 1.5rem)" : "0")};
  border-radius: clamp(14px, 1.8vw, 24px);
  overflow: hidden;
  box-shadow: 0 20px 52px rgba(40, 8, 18, 0.13), 0 3px 10px rgba(40, 8, 18, 0.07);
  transition: transform 0.8s ${easeOutExpo}, box-shadow 0.8s ${easeOutExpo};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-6px) scale(1.012);
      box-shadow: 0 28px 68px rgba(40, 8, 18, 0.2), 0 5px 16px rgba(40, 8, 18, 0.1);
    }
  }

  ${customMedia.lessThan("tablet")`
    transition: none;
    transform: none !important;
    margin-top: ${(p) => (p.$offset ? "clamp(1rem, 2vw, 1.5rem)" : "0")};
  `}
`;

export const ComboImg = styled(Image)`
  object-fit: cover;
  object-position: center center;
`;

/* Back-compat aliases */
export const ImageCover01 = styled(Image)`
  object-fit: cover;
  width: 40%;
  height: auto;
`;
export const ImageCover02 = CourseImage;
export const ImageCover03 = CourseImage;
export const ImageCover04 = AboutPortrait;
export const Container01 = Hero;
export const Container02 = CourseSection;
export const Container03 = AboutSection;
export const ContainerVideo = VideoSection;
export const Subtitle = SectionIntro;
