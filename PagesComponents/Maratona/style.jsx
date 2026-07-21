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
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const heroKenBurns = keyframes`
  from { transform: scale(1.07); }
  to   { transform: scale(1); }
`;

const drawLine = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`;

const ctaSheen = keyframes`
  from { transform: translateX(-120%) skewX(-18deg); }
  to   { transform: translateX(220%) skewX(-18deg); }
`;

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
  }
`;

/* ─────────────────────────────────────────
   Design tokens — mesma família da Home
───────────────────────────────────────── */
const tokens = css`
  --atelier-ink:           #100e0c;
  --atelier-ink-soft:      #1c1815;
  --atelier-graphite:      #3a342f;
  --atelier-stone:         #cfc9c2;
  --atelier-mist:          #e8e4df;
  --atelier-paper:         #faf9f7;
  --atelier-accent:        #8f1a20;
  --atelier-accent-hover:  #6b1217;
  --atelier-gold:          #c4a46a;
  --atelier-gold-bright:   #e2c990;
  --atelier-gold-deep:     #7a5d2e;
  --atelier-text-on-dark:  #faf9f7;
  --atelier-muted-on-dark: rgba(250,249,247,0.88);
  --atelier-display: "Cormorant Garamond", Georgia, serif;
  --atelier-body:    "Lora", Georgia, "Times New Roman", serif;
  --atelier-ui:      "DM Sans", system-ui, sans-serif;

  /* Verona-specific */
  --verona-wine:      #5c1620;
  --verona-wine-dark: #3d0e16;
  --verona-sage:      #5b6545;
  --verona-sage-dark: #3f4a30;
  --verona-cream:     #f5f0e8;
  --verona-olive-text:#4a5535;
`;

/* ─────────────────────────────────────────
   GENERAL CONTAINER
───────────────────────────────────────── */
export const GeneralContainer = styled.main`
  ${tokens}
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--atelier-paper);
  color: var(--atelier-ink);
  font-family: var(--atelier-body);
  overflow-x: clip;

  .reveal { opacity: 1; transform: none; }

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
    .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
  }

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

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
export const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  color: var(--atelier-text-on-dark);
  isolation: isolate;

  ${customMedia.lessThan("tablet")`
    align-items: center;
  `}

  ${customMedia.lessThan("mobile")`
    min-height: 60vh;
  `}
`;

export const HeroMedia = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--verona-wine-dark);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse 90% 90% at 30% 50%,
        rgba(92, 22, 32, 0.45) 0%,
        rgba(61, 14, 22, 0.72) 100%
      ),
      linear-gradient(
        180deg,
        rgba(61, 14, 22, 0.38) 0%,
        rgba(61, 14, 22, 0.28) 50%,
        rgba(61, 14, 22, 0.62) 100%
      );
    pointer-events: none;
    animation: ${fadeIn} 1.1s ${easeOutExpo} both;
    ${reducedMotion}
  }
`;

export const HeroImage = styled(Image)`
  object-fit: cover;
  object-position: right top;
  transform: scaleX(-1);
  animation: ${heroKenBurns} 2.6s ${easeOutExpo} both;
  ${reducedMotion}

  ${customMedia.lessThan("tablet")`
    animation: none;
    transform: none;
    object-position: 80% top;
  `}

  @media (hover: none), (pointer: coarse) {
    animation: none;
  }
`;

export const HeroShade = styled.div`
  position: absolute;
  inset: auto 0 0 0;
  height: 46%;
  background: linear-gradient(
    to top,
    rgba(61, 14, 22, 0.62),
    rgba(92, 22, 32, 0.22),
    transparent
  );
  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-width: min(48rem, 92vw);
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
    animation-delay: 0.3s;
    font-family: var(--atelier-display);
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 600;
    line-height: 0.94;
    letter-spacing: 0.01em;
    color: var(--atelier-text-on-dark);
    text-shadow: 0 2px 28px rgba(0,0,0,0.28);
  }

  .brandLine {
    display: block;
    width: 5.5rem;
    height: 1.5px;
    margin: 0.5rem 0 0.3rem;
    background: var(--atelier-gold);
    transform-origin: left center;
    animation: ${drawLine} 0.9s ${easeOutExpo} 0.52s both;
    ${reducedMotion}
  }

  h1 {
    margin: 0;
    animation-delay: 0.46s;
    font-family: var(--atelier-body);
    font-weight: 400;
    font-size: clamp(1.2rem, 2.6vw, 1.7rem);
    line-height: 1.5;
    letter-spacing: 0.06em;
    color: var(--atelier-muted-on-dark);
  }

  .cta {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    overflow: hidden;
    margin-top: 2rem;
    animation-delay: 0.66s;
    min-width: min(100%, 360px);
    min-height: 4.2rem;
    padding: 1.6rem 3.5rem;
    background: var(--atelier-paper);
    color: var(--atelier-ink) !important;
    font-family: var(--atelier-ui);
    font-size: clamp(1rem, 1.7vw, 1.3rem);
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid var(--atelier-paper);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
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
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      transform: translateX(-120%) skewX(-18deg);
      pointer-events: none;
    }

    &:hover {
      background: var(--atelier-gold);
      border-color: var(--atelier-gold);
      color: var(--atelier-ink) !important;
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.35);
      &::after { animation: ${ctaSheen} 0.85s ${easeOutExpo}; }
    }

    ${customMedia.lessThan("tablet")`
      align-self: stretch;
      text-align: center;
      transition: background 0.25s ease, color 0.25s ease;
      &:hover { transform: none; box-shadow: 0 8px 24px rgba(0,0,0,0.2); &::after { animation: none; } }
    `}

    &:focus-visible {
      outline: 2px solid var(--atelier-gold-bright);
      outline-offset: 3px;
    }
  }
  }

  ${customMedia.lessThan("mobile")`
    max-width: 100%;
    .cta { align-self: stretch; text-align: center; }
  `}
`;

/* ─────────────────────────────────────────
   SECTION LABELS
───────────────────────────────────────── */
export const SectionLabel = styled.span`
  position: relative;
  font-family: var(--atelier-ui);
  font-size: clamp(0.8rem, 1.1vw, 0.92rem);
  font-weight: 600;
  letter-spacing: 0.36em;
  text-transform: uppercase;
  color: var(--atelier-accent);

  &::after {
    content: "";
    display: block;
    width: 3rem;
    height: 1.5px;
    margin: 0.75rem 0 0;
    background: var(--atelier-gold-deep);
    transform-origin: left center;
    animation: ${drawLine} 0.8s ${easeOutExpo} both;
    ${reducedMotion}
  }
`;

export const SectionLabelLight = styled(SectionLabel)`
  color: var(--atelier-gold-bright);

  &::after {
    background: var(--atelier-gold);
  }
`;

/* ─────────────────────────────────────────
   CLASSIC BANNER
───────────────────────────────────────── */
export const ClassicBanner = styled.section`
  width: 100%;
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
  background: var(--atelier-paper);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    margin: 0;
    font-family: var(--atelier-display);
    font-size: clamp(1.8rem, 4.5vw, 3.6rem);
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0.01em;
    color: var(--verona-olive-text);

    strong {
      font-weight: 700;
      color: var(--verona-olive-text);
    }
  }
`;

/* ─────────────────────────────────────────
   CARDS — ILUSTRAÇÕES
───────────────────────────────────────── */
export const CardsSection = styled.section`
  width: 100%;
  padding: clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 6vw, 5.5rem);
  background: var(--atelier-mist);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2.5rem, 5vw, 4rem);

  .cardsGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1rem, 2.5vw, 2rem);
    width: 100%;
    max-width: 960px;

    /* Aumenta conteúdo das duas primeiras imagens sem aumentar o card */
    > :nth-child(1) img,
    > :nth-child(2) img {
      transform: scale(1.16);
    }

    ${customMedia.lessThan("tablet")`
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.75rem;

      > :nth-child(1) img,
      > :nth-child(2) img {
        transform: none;
      }
    `}

    ${customMedia.lessThan("mobile")`
      grid-template-columns: 1fr;
      max-width: 340px;
    `}
  }

  .accessCta {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-width: min(100%, 260px);
    min-height: 3.35rem;
    padding: 1.1rem 2.5rem;
    background: var(--verona-wine);
    color: var(--atelier-text-on-dark) !important;
    font-family: var(--atelier-ui);
    font-size: clamp(0.88rem, 1.25vw, 1.02rem);
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1.5px solid var(--verona-wine);
    transition:
      background 0.45s ${easeOutExpo},
      border-color 0.45s ${easeOutExpo},
      transform 0.45s ${easeOutExpo},
      box-shadow 0.45s ${easeOutExpo};

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      width: 42%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
      transform: translateX(-120%) skewX(-18deg);
      pointer-events: none;
    }

    &:hover {
      background: var(--verona-wine-dark);
      border-color: var(--verona-wine-dark);
      transform: translateY(-3px);
      box-shadow: 0 12px 28px rgba(61,14,22,0.22);
      &::after { animation: ${ctaSheen} 0.85s ${easeOutExpo}; }
    }

    ${customMedia.lessThan("tablet")`
      transition: background 0.25s ease;
      &:hover { transform: none; box-shadow: none; &::after { animation: none; } }
    `}

    &:focus-visible {
      outline: 2px solid var(--atelier-gold);
      outline-offset: 3px;
    }
  }
`;

export const IllustrationCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border-radius: 100vw 100vw 0 0;
  background: var(--verona-cream);
  box-shadow:
    0 2px 0 rgba(196,164,106,0.22),
    0 18px 48px rgba(16,14,12,0.1);
  transition: transform 0.75s ${easeOutExpo}, box-shadow 0.75s ${easeOutExpo};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-8px) scale(1.015);
      box-shadow:
        0 2px 0 rgba(196,164,106,0.35),
        0 28px 64px rgba(16,14,12,0.16);
    }
  }

  ${customMedia.lessThan("tablet")`
    transition: none;
    transform: none !important;
  `}
`;

export const IllustrationImg = styled(Image)`
  object-fit: cover;
  object-position: center top;
`;

/* ─────────────────────────────────────────
   ABOUT — O QUE É A MARATONA
───────────────────────────────────────── */
export const AboutSection = styled.section`
  width: 100%;
  padding: clamp(4rem, 8vw, 7rem) clamp(1.75rem, 7vw, 6rem);
  background: var(--verona-cream);
  display: flex;
  justify-content: center;

  .copy {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 56rem;
    width: 100%;

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-weight: 500;
      font-size: clamp(2.2rem, 4.6vw, 3.6rem);
      line-height: 1.1;
      letter-spacing: 0.01em;
      color: var(--atelier-ink);
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: clamp(1.1rem, 1.9vw, 1.35rem);
      line-height: 1.8;
      color: var(--atelier-graphite);
      max-width: 62ch;
    }
  }

  ${customMedia.lessThan("tablet")`
    .copy { gap: 1.2rem; }
  `}
`;

/* ─────────────────────────────────────────
   FEATURES — O QUE VOU ENCONTRAR
───────────────────────────────────────── */
export const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  min-height: clamp(520px, 75vh, 860px);
  background: var(--verona-sage);
  color: var(--atelier-text-on-dark);
  overflow: hidden;

  ${customMedia.lessThan("notebook")`
    grid-template-columns: 1fr;
    min-height: auto;
  `}

  .featuresCopy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: clamp(1.2rem, 2.5vw, 1.8rem);
    padding: clamp(3.5rem, 7vw, 6rem) clamp(2.5rem, 6vw, 5.5rem);

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-weight: 500;
      font-size: clamp(2.4rem, 4.5vw, 3.6rem);
      line-height: 1.08;
      color: var(--atelier-text-on-dark);
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    li {
      position: relative;
      padding-left: 1.4rem;
      font-family: var(--atelier-body);
      font-size: clamp(1rem, 1.7vw, 1.22rem);
      line-height: 1.7;
      color: var(--atelier-muted-on-dark);

      &::before {
        content: "•";
        position: absolute;
        left: 0;
        color: var(--atelier-gold-bright);
        font-size: 1.1em;
        line-height: 1.7;
      }
    }

    ${customMedia.lessThan("notebook")`
      padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
    `}
  }
`;

export const FeaturesMedia = styled.div`
  position: relative;
  width: 100%;
  background: #ffffff;
  overflow: hidden;
  align-self: stretch;
  min-height: clamp(640px, 110vw, 1100px);

  ${customMedia.lessThan("notebook")`
    min-height: clamp(480px, 90vw, 720px);
  `}

  ${customMedia.lessThan("tablet")`
    min-height: clamp(380px, 70vw, 580px);
  `}

  ${customMedia.lessThan("mobile")`
    min-height: clamp(150px, 30vw, 250px);
  `}
`;

export const FeaturesImg = styled(Image)`
  object-fit: cover;
  object-position: center 25%;
  transition: transform 1s ${easeOutExpo}, filter 1s ease;
  filter: saturate(0.9);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.03);
      filter: saturate(1);
    }
  }

  ${customMedia.lessThan("notebook")`
    object-fit: contain;
    object-position: center center;
  `}

  ${customMedia.lessThan("tablet")`
    transition: none;
    transform: none !important;
    filter: none !important;
    object-fit: contain;
    object-position: center center;
  `}

  ${customMedia.lessThan("mobile")`
    object-fit: cover;
    object-position: center 40%;
  `}
`;

/* ─────────────────────────────────────────
   CRONOGRAMA
───────────────────────────────────────── */
export const ScheduleSection = styled.section`
  width: 100%;
  padding: clamp(4rem, 8vw, 7rem) clamp(1.75rem, 7vw, 6rem);
  background: var(--atelier-paper);
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 5vw, 4.5rem);

  h2 {
    margin: 0;
    font-family: var(--atelier-display);
    font-weight: 500;
    font-size: clamp(2.4rem, 5vw, 3.8rem);
    line-height: 1.1;
    letter-spacing: 0.01em;
    color: var(--atelier-ink);
  }

  .scheduleItems {
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 1fr;
    gap: 0;
    width: 100%;

    ${customMedia.lessThan("tablet")`
      grid-template-columns: 1fr;
      gap: 0;
    `}
  }

  .scheduleItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
    padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);
    border-top: 2px solid rgba(196, 164, 106, 0.35);
    border-bottom: 2px solid rgba(196, 164, 106, 0.35);

    ${customMedia.lessThan("tablet")`
      padding: 1.5rem 0;
      border-top: 1px solid rgba(196, 164, 106, 0.35);
      border-bottom: none;

      &:last-child {
        border-bottom: 1px solid rgba(196, 164, 106, 0.35);
      }
    `}

    .week {
      font-family: var(--atelier-display);
      font-weight: 600;
      font-size: clamp(1.8rem, 4vw, 3rem);
      color: var(--verona-wine);
      line-height: 1;
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: clamp(1rem, 1.6vw, 1.2rem);
      color: var(--atelier-graphite);
      line-height: 1.55;
      max-width: 18ch;

      ${customMedia.lessThan("tablet")`
        max-width: none;
      `}
    }

    &.highlight .week {
      color: var(--verona-sage);
    }
  }

  .divider {
    width: 1px;
    background: rgba(196, 164, 106, 0.35);
    margin: 0;
    align-self: stretch;

    ${customMedia.lessThan("tablet")`
      display: none;
    `}
  }

  .accessInfo {
    border: 1.5px solid rgba(196, 164, 106, 0.35);
    border-left: 4px solid var(--verona-wine);
    padding: clamp(1.75rem, 3.5vw, 2.75rem) clamp(1.75rem, 4vw, 3rem);
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    width: 100%;

    &::before { display: none; }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      line-height: 1.7;
      color: var(--atelier-graphite);

      &:first-of-type {
        font-family: var(--atelier-display);
        font-size: clamp(1.4rem, 2.6vw, 2rem);
        font-weight: 500;
        color: var(--atelier-ink);
        line-height: 1.2;
      }

      &:last-of-type {
        font-size: clamp(1.05rem, 1.8vw, 1.28rem);
      }
    }

    strong {
      color: var(--verona-wine);
      font-weight: 700;
    }
  }
`;

/* ─────────────────────────────────────────
   VARIAÇÕES — CTA FINAL
───────────────────────────────────────── */
export const VariationsSection = styled.section`
  width: 100%;
  background: var(--verona-sage);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: stretch;
  overflow: hidden;

  ${customMedia.lessThan("notebook")`
    grid-template-columns: 1fr;
    min-height: auto;
  `}

  .variationsCta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: clamp(3rem, 6vw, 5.5rem) clamp(2rem, 5vw, 4rem);

    a {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      min-width: min(100%, 280px);
      min-height: 3.4rem;
      padding: 1.15rem 2.5rem;
      background: transparent;
      color: var(--atelier-text-on-dark) !important;
      font-family: var(--atelier-ui);
      font-size: clamp(0.88rem, 1.25vw, 1.02rem);
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      text-decoration: none;
      border: 1.5px solid rgba(250,249,247,0.55);
      transition:
        background 0.45s ${easeOutExpo},
        border-color 0.45s ${easeOutExpo},
        transform 0.45s ${easeOutExpo};

      &:hover {
        background: rgba(250,249,247,0.12);
        border-color: var(--atelier-text-on-dark);
        transform: translateY(-3px);
      }

      ${customMedia.lessThan("tablet")`
        transition: background 0.25s ease;
        &:hover { transform: none; }
        align-self: stretch;
        text-align: center;
      `}

      &:focus-visible {
        outline: 2px solid var(--atelier-gold-bright);
        outline-offset: 3px;
      }
    }
  }
`;

export const VariationsMedia = styled.div`
  position: relative;
  width: 100%;
  min-height: clamp(640px, 110vw, 1100px);
  overflow: hidden;
  align-self: stretch;
  background: #8c9973;

  ${customMedia.lessThan("notebook")`
    min-height: clamp(520px, 100vw, 800px);
  `}

  ${customMedia.lessThan("tablet")`
    min-height: clamp(600px, 120vw, 900px);
  `}
`;

export const VariationsImg = styled(Image)`
  object-fit: contain;
  object-position: center;
  transition: transform 1.1s ${easeOutExpo};
  width: 100%;
  height: 100%;

  @media (hover: hover) and (pointer: fine) {
    &:hover { transform: scale(1.025); }
  }

  ${customMedia.lessThan("tablet")`
    transition: none;
    transform: none !important;
  `}
`;
