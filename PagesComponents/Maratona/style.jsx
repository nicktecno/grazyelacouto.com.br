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
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const heroKenBurns = keyframes`
  from { transform: scale(1.06); }
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

const softPulse = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(196, 164, 106, 0.4); }
  50%      { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(196, 164, 106, 0); }
`;

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
  }
`;

const tokens = css`
  --atelier-ink:           #100e0c;
  --atelier-ink-soft:      #1c1815;
  --atelier-graphite:      #3a342f;
  --atelier-stone:         #cfc9c2;
  --atelier-mist:          #f4efe9;
  --atelier-paper:         #faf9f7;
  --atelier-accent:        #8f1a20;
  --atelier-accent-hover:  #6b1217;
  --atelier-gold:          #c4a46a;
  --atelier-gold-bright:   #e2c990;
  --atelier-gold-deep:     #7a5d2e;
  --atelier-text-on-dark:  #faf9f7;
  --atelier-muted-on-dark: rgba(250,249,247,0.9);
  --atelier-display: "Cormorant Garamond", Georgia, serif;
  --atelier-body:    "Lora", Georgia, "Times New Roman", serif;
  --atelier-ui:      "DM Sans", system-ui, sans-serif;

  --vintage-wine:          #572443;
  --vintage-wine-dark:     #351226;
  --vintage-wine-rich:     #4a1525;
  --vintage-rose:          #d89b9e;
  --vintage-cream:         #f7f2ea;
  --vintage-sand:          #ede4d8;
  --youtube-red:           #e62117;
  --youtube-red-hover:     #cc1810;
`;

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

  ${customMedia.lessThan("tablet")`
    .reveal,
    .reveal:not(.is-visible),
    .reveal.is-visible {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  `}
`;

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
export const Hero = styled.section`
  position: relative;
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--atelier-text-on-dark);
  isolation: isolate;

  ${customMedia.lessThan("tablet")`
    min-height: auto;
    padding-top: 2rem;
    padding-bottom: 3.5rem;
  `}
`;

export const HeroMedia = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--vintage-wine-dark);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse 90% 90% at 75% 50%,
        rgba(53, 18, 38, 0.45) 0%,
        rgba(30, 8, 20, 0.88) 100%
      ),
      linear-gradient(
        180deg,
        rgba(35, 10, 24, 0.55) 0%,
        rgba(53, 18, 38, 0.6) 50%,
        rgba(26, 6, 17, 0.92) 100%
      );
    pointer-events: none;
    animation: ${fadeIn} 1.1s ${easeOutExpo} both;
    ${reducedMotion}
  }
`;

export const HeroImage = styled(Image)`
  object-fit: cover;
  object-position: center center;
  animation: ${heroKenBurns} 2.6s ${easeOutExpo} both;
  opacity: 0.82;
  ${reducedMotion}

  ${customMedia.lessThan("tablet")`
    animation: none;
    object-position: center;
    opacity: 0.55;
  `}
`;

export const HeroShade = styled.div`
  position: absolute;
  inset: auto 0 0 0;
  height: 40%;
  background: linear-gradient(
    to top,
    rgba(26, 6, 17, 0.95),
    rgba(53, 18, 38, 0.4),
    transparent
  );
  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: min(54rem, 94vw);
  padding: clamp(3rem, 7vw, 6.5rem);

  > * {
    opacity: 0;
    animation: ${fadeUp} 0.9s ${easeOutExpo} both;
    ${reducedMotion}
  }

  ${customMedia.lessThan("tablet")`
    > * { opacity: 1; animation: none; }
    padding: 2.5rem 1.5rem;
  `}

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    align-self: flex-start;
    padding: 0.45rem 1.15rem;
    background: rgba(226, 201, 144, 0.14);
    border: 1px solid rgba(226, 201, 144, 0.4);
    border-radius: 999px;
    font-family: var(--atelier-ui);
    font-size: clamp(0.78rem, 1.1vw, 0.88rem);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--atelier-gold-bright);
    animation-delay: 0.1s;
  }

  .title {
    margin: 0;
    animation-delay: 0.25s;
    font-family: var(--atelier-display);
    font-size: clamp(2.7rem, 6.5vw, 5.2rem);
    font-weight: 500;
    line-height: 1.02;
    letter-spacing: 0.01em;
    color: var(--atelier-text-on-dark);
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4);

    em {
      font-style: italic;
      font-weight: 400;
      color: var(--atelier-gold-bright);
      display: block;
    }
  }

  .brandLine {
    display: block;
    width: 5.5rem;
    height: 1.5px;
    background: var(--atelier-gold);
    transform-origin: left center;
    animation: ${drawLine} 0.8s ${easeOutExpo} 0.4s both;
    ${reducedMotion}
  }

  .subtitle {
    margin: 0;
    animation-delay: 0.4s;
    font-family: var(--atelier-body);
    font-weight: 400;
    font-size: clamp(1.05rem, 1.9vw, 1.3rem);
    line-height: 1.65;
    color: var(--atelier-muted-on-dark);
    max-width: 44rem;

    strong {
      color: #ffffff;
      font-weight: 600;
    }
  }

  .ctaGroup {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.1rem;
    margin-top: 1.25rem;
    animation-delay: 0.55s;

    ${customMedia.lessThan("tablet")`
      flex-direction: column;
      align-items: stretch;
      gap: 0.85rem;
    `}
  }

  .ctaYoutube {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    overflow: hidden;
    padding: 1.15rem 2.2rem;
    background: var(--youtube-red);
    color: #ffffff !important;
    font-family: var(--atelier-ui);
    font-size: clamp(0.9rem, 1.2vw, 1rem);
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
    border: 2px solid var(--youtube-red);
    box-shadow: 0 8px 24px rgba(230, 33, 23, 0.35);
    transition:
      background 0.35s ease,
      border-color 0.35s ease,
      transform 0.35s ease,
      box-shadow 0.35s ease;

    svg {
      width: 22px;
      height: 22px;
      flex-shrink: 0;
    }

    &:hover {
      background: var(--youtube-red-hover);
      border-color: var(--youtube-red-hover);
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(230, 33, 23, 0.45);
    }
  }

  .ctaMoldes {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    overflow: hidden;
    padding: 1.15rem 2.2rem;
    background: var(--atelier-paper);
    color: var(--atelier-ink) !important;
    font-family: var(--atelier-ui);
    font-size: clamp(0.9rem, 1.2vw, 1rem);
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
    border: 2px solid var(--atelier-paper);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    transition:
      background 0.35s ease,
      color 0.35s ease,
      border-color 0.35s ease,
      transform 0.35s ease,
      box-shadow 0.35s ease;

    &:hover {
      background: var(--atelier-gold);
      border-color: var(--atelier-gold);
      color: var(--atelier-ink) !important;
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
    }
  }
`;

/* ─────────────────────────────────────────
   SECTION LABELS
───────────────────────────────────────── */
export const SectionLabel = styled.span`
  position: relative;
  font-family: var(--atelier-ui);
  font-size: clamp(0.8rem, 1.1vw, 0.92rem);
  font-weight: 600;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--vintage-wine);

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
  padding: clamp(3rem, 5vw, 4.5rem) clamp(1.5rem, 5vw, 4rem);
  background: var(--vintage-sand);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.85rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  .tag {
    font-family: var(--atelier-ui);
    font-size: 0.85rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--vintage-wine);
  }

  h2 {
    margin: 0;
    font-family: var(--atelier-display);
    font-size: clamp(1.9rem, 4.2vw, 3.4rem);
    font-weight: 500;
    line-height: 1.2;
    color: var(--atelier-ink);

    strong {
      color: var(--vintage-wine);
      font-weight: 700;
    }
  }

  p {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    line-height: 1.65;
    color: var(--atelier-graphite);
    max-width: 48rem;
  }
`;

/* ─────────────────────────────────────────
   VIDEO SECTION (INTRODUÇÃO)
───────────────────────────────────────── */
export const VideoSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(3.5rem, 6vw, 5.5rem) clamp(1.5rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2rem, 4vw, 3rem);

  .videoHeader {
    text-align: center;
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    .eyebrow {
      font-family: var(--atelier-ui);
      font-size: 0.85rem;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--youtube-red);
    }

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-size: clamp(2.2rem, 4.5vw, 3.6rem);
      font-weight: 500;
      line-height: 1.15;
      color: var(--atelier-ink);
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: clamp(1rem, 1.7vw, 1.18rem);
      line-height: 1.65;
      color: var(--atelier-graphite);
    }
  }

  .videoContainer {
    position: relative;
    width: 100%;
    max-width: 920px;
    aspect-ratio: 16 / 9;
    background: #000000;
    border-radius: 8px;
    overflow: hidden;
    box-shadow:
      0 2px 0 rgba(196, 164, 106, 0.4),
      0 24px 60px rgba(16, 14, 12, 0.25);
    border: 1px solid rgba(196, 164, 106, 0.2);

    iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }

  .videoActions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.95rem 1.8rem;
      background: #ffffff;
      color: var(--atelier-ink);
      font-family: var(--atelier-ui);
      font-size: 0.92rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-decoration: none;
      border: 1.5px solid var(--atelier-stone);
      border-radius: 4px;
      transition: all 0.3s ease;

      svg {
        color: var(--youtube-red);
        width: 20px;
        height: 20px;
      }

      &:hover {
        border-color: var(--youtube-red);
        color: var(--youtube-red);
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

/* ─────────────────────────────────────────
   COMBO DE MOLDES (HOTMART SPOTLIGHT)
───────────────────────────────────────── */
export const ComboSection = styled.section`
  width: 100%;
  background: var(--vintage-cream);
  border-top: 1px solid rgba(196, 164, 106, 0.25);
  border-bottom: 1px solid rgba(196, 164, 106, 0.25);
  padding: clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 4rem);

  .comboContainer {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    gap: clamp(2rem, 5vw, 4rem);
    align-items: center;

    ${customMedia.lessThan("notebook")`
      grid-template-columns: 1fr;
    `}
  }

  .comboCopy {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;

    .eyebrow {
      font-family: var(--atelier-ui);
      font-size: 0.85rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--vintage-wine);
    }

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-size: clamp(2.3rem, 4.6vw, 3.8rem);
      font-weight: 500;
      line-height: 1.1;
      color: var(--atelier-ink);
    }

    .quoteBox {
      background: #ffffff;
      border-left: 4px solid var(--vintage-wine);
      padding: clamp(1.2rem, 2.5vw, 1.6rem);
      border-radius: 0 8px 8px 0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

      p {
        margin: 0;
        font-family: var(--atelier-body);
        font-size: clamp(1.05rem, 1.7vw, 1.2rem);
        line-height: 1.65;
        color: var(--atelier-ink);
      }
    }

    .sizeCallout {
      display: flex;
      align-items: flex-start;
      gap: 0.85rem;
      background: rgba(87, 36, 67, 0.06);
      border: 1px dashed var(--vintage-wine);
      padding: 1.15rem 1.4rem;
      border-radius: 6px;

      .icon {
        font-size: 1.6rem;
        line-height: 1;
      }

      p {
        margin: 0;
        font-family: var(--atelier-body);
        font-size: clamp(0.98rem, 1.5vw, 1.12rem);
        line-height: 1.55;
        color: var(--atelier-graphite);

        strong {
          color: var(--vintage-wine);
          font-weight: 700;
        }
      }
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;

      li {
        position: relative;
        padding-left: 1.6rem;
        font-family: var(--atelier-body);
        font-size: clamp(0.98rem, 1.5vw, 1.12rem);
        line-height: 1.5;
        color: var(--atelier-graphite);

        &::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--vintage-wine);
          font-weight: 700;
          font-size: 1.1em;
        }
      }
    }

    .comboCta {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      align-self: flex-start;
      overflow: hidden;
      padding: 1.25rem 2.8rem;
      background: var(--vintage-wine);
      color: #ffffff !important;
      font-family: var(--atelier-ui);
      font-size: clamp(0.95rem, 1.3vw, 1.05rem);
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 4px;
      border: 2px solid var(--vintage-wine);
      box-shadow: 0 8px 24px rgba(87, 36, 67, 0.3);
      transition: all 0.35s ease;

      &:hover {
        background: var(--vintage-wine-dark);
        border-color: var(--vintage-wine-dark);
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(87, 36, 67, 0.4);
      }

      ${customMedia.lessThan("tablet")`
        align-self: stretch;
        text-align: center;
      `}
    }
  }

  .comboMedia {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .imgCard {
      position: relative;
      width: 100%;
      max-width: 480px;
      border-radius: 12px;
      overflow: hidden;
      background: #ffffff;
      box-shadow:
        0 2px 0 rgba(196, 164, 106, 0.3),
        0 24px 50px rgba(16, 14, 12, 0.12);
      border: 1px solid rgba(196, 164, 106, 0.2);
      transition: transform 0.5s ease;

      &:hover {
        transform: translateY(-4px);
      }
    }

    .caption {
      font-family: var(--atelier-ui);
      font-size: 0.85rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--atelier-graphite);
      text-align: center;
    }
  }
`;

/* ─────────────────────────────────────────
   CARDS SECTION (PERSPECTIVAS DO MODELO)
───────────────────────────────────────── */
export const CardsSection = styled.section`
  width: 100%;
  padding: clamp(3.5rem, 6vw, 5.5rem) clamp(1.5rem, 5vw, 4.5rem);
  background: var(--atelier-mist);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2.5rem, 5vw, 4rem);

  .sectionHeader {
    text-align: center;
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    .eyebrow {
      font-family: var(--atelier-ui);
      font-size: 0.85rem;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--vintage-wine);
    }

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-size: clamp(2.2rem, 4.5vw, 3.6rem);
      font-weight: 500;
      line-height: 1.15;
      color: var(--atelier-ink);
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: clamp(1rem, 1.7vw, 1.18rem);
      line-height: 1.6;
      color: var(--atelier-graphite);
    }
  }

  .cardsGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1.2rem, 2.5vw, 2.2rem);
    width: 100%;
    max-width: 1080px;

    ${customMedia.lessThan("tablet")`
      grid-template-columns: 1fr;
      max-width: 440px;
    `}
  }

  .accessCta {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-width: min(100%, 280px);
    padding: 1.15rem 2.5rem;
    background: var(--vintage-wine);
    color: var(--atelier-text-on-dark) !important;
    font-family: var(--atelier-ui);
    font-size: clamp(0.9rem, 1.25vw, 1.02rem);
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
    border: 1.5px solid var(--vintage-wine);
    transition: all 0.35s ease;

    &:hover {
      background: var(--vintage-wine-dark);
      border-color: var(--vintage-wine-dark);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(87, 36, 67, 0.35);
    }

    ${customMedia.lessThan("tablet")`
      align-self: stretch;
      text-align: center;
    `}
  }
`;

export const IllustrationCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 2px 0 rgba(196, 164, 106, 0.25),
    0 16px 40px rgba(16, 14, 12, 0.08);
  border: 1px solid rgba(196, 164, 106, 0.15);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-6px);
      box-shadow:
        0 2px 0 rgba(196, 164, 106, 0.4),
        0 24px 50px rgba(16, 14, 12, 0.14);
    }
  }

  .cardMedia {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 5;
    background: #f7f2ea;
    overflow: hidden;
  }

  .cardInfo {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.4rem;

    .tag {
      font-family: var(--atelier-ui);
      font-size: 0.76rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--vintage-wine);
    }

    h3 {
      margin: 0;
      font-family: var(--atelier-display);
      font-size: 1.45rem;
      font-weight: 600;
      color: var(--atelier-ink);
      line-height: 1.2;
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: 0.95rem;
      line-height: 1.55;
      color: var(--atelier-graphite);
    }
  }
`;

export const IllustrationImg = styled(Image)`
  object-fit: cover;
  transition: transform 0.8s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

/* ─────────────────────────────────────────
   ABOUT — O QUE É A MARATONA
───────────────────────────────────────── */
export const AboutSection = styled.section`
  width: 100%;
  padding: clamp(4rem, 8vw, 6.5rem) clamp(1.75rem, 7vw, 6rem);
  background: var(--vintage-cream);
  display: flex;
  justify-content: center;

  .copy {
    max-width: 52rem;
    display: flex;
    flex-direction: column;
    gap: clamp(1.2rem, 2.5vw, 1.8rem);

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-weight: 500;
      font-size: clamp(2.3rem, 4.8vw, 3.8rem);
      line-height: 1.1;
      color: var(--atelier-ink);
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: clamp(1.05rem, 1.8vw, 1.25rem);
      line-height: 1.7;
      color: var(--atelier-graphite);

      strong {
        color: var(--vintage-wine);
        font-weight: 600;
      }
    }
  }
`;

/* ─────────────────────────────────────────
   FEATURES (O QUE VOU ENCONTRAR)
───────────────────────────────────────── */
export const FeaturesSection = styled.section`
  width: 100%;
  background: var(--vintage-wine-dark);
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  align-items: stretch;
  overflow: hidden;

  ${customMedia.lessThan("notebook")`
    grid-template-columns: 1fr;
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
      gap: 0.85rem;
    }

    li {
      position: relative;
      padding-left: 1.6rem;
      font-family: var(--atelier-body);
      font-size: clamp(1rem, 1.6vw, 1.18rem);
      line-height: 1.6;
      color: var(--atelier-muted-on-dark);

      &::before {
        content: "✦";
        position: absolute;
        left: 0;
        color: var(--atelier-gold-bright);
        font-size: 0.95em;
        line-height: 1.6;
      }
    }

    .featuresCta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 1.1rem 2rem;
        font-family: var(--atelier-ui);
        font-size: 0.92rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        text-decoration: none;
        border-radius: 4px;
        transition: all 0.3s ease;

        &.primary {
          background: var(--atelier-gold);
          color: var(--atelier-ink) !important;
          border: 1.5px solid var(--atelier-gold);

          &:hover {
            background: var(--atelier-gold-bright);
            transform: translateY(-2px);
          }
        }

        &.secondary {
          background: transparent;
          color: #ffffff !important;
          border: 1.5px solid rgba(255, 255, 255, 0.4);

          &:hover {
            background: rgba(255, 255, 255, 0.12);
            border-color: #ffffff;
            transform: translateY(-2px);
          }
        }
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
  background: var(--vintage-sand);
  overflow: hidden;
  align-self: stretch;
  min-height: clamp(500px, 80vw, 850px);

  ${customMedia.lessThan("notebook")`
    min-height: clamp(400px, 70vw, 600px);
  `}
`;

export const FeaturesImg = styled(Image)`
  object-fit: contain;
  object-position: center center;
  transition: transform 1s ${easeOutExpo};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

/* ─────────────────────────────────────────
   SCHEDULE / CRONOGRAMA
───────────────────────────────────────── */
export const ScheduleSection = styled.section`
  width: 100%;
  padding: clamp(4rem, 8vw, 6.5rem) clamp(1.75rem, 7vw, 6rem);
  background: var(--atelier-paper);
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 4rem);
  max-width: 1200px;
  margin: 0 auto;

  .header {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-weight: 500;
      font-size: clamp(2.4rem, 5vw, 3.8rem);
      line-height: 1.1;
      letter-spacing: 0.01em;
      color: var(--atelier-ink);
    }
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
    justify-content: flex-start;
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

    .stepBadge {
      font-family: var(--atelier-ui);
      font-size: 0.8rem;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--vintage-wine);
    }

    .title {
      font-family: var(--atelier-display);
      font-weight: 600;
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      color: var(--atelier-ink);
      line-height: 1.2;
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: clamp(0.98rem, 1.5vw, 1.15rem);
      color: var(--atelier-graphite);
      line-height: 1.6;
    }

    &.highlight {
      background: rgba(196, 164, 106, 0.08);

      .stepBadge {
        color: var(--atelier-gold-deep);
      }
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
    border-left: 4px solid var(--vintage-wine);
    padding: clamp(1.75rem, 3.5vw, 2.75rem) clamp(1.75rem, 4vw, 3rem);
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    width: 100%;
    background: #ffffff;
    border-radius: 0 8px 8px 0;

    p {
      margin: 0;
      font-family: var(--atelier-body);
      line-height: 1.7;
      color: var(--atelier-graphite);

      &:first-of-type {
        font-family: var(--atelier-display);
        font-size: clamp(1.35rem, 2.5vw, 1.9rem);
        font-weight: 500;
        color: var(--atelier-ink);
        line-height: 1.2;
      }

      &:last-of-type {
        font-size: clamp(1.02rem, 1.7vw, 1.22rem);
      }
    }

    strong {
      color: var(--vintage-wine);
      font-weight: 700;
    }
  }
`;

/* ─────────────────────────────────────────
   QUOTE GRAZYELA COUTO
───────────────────────────────────────── */
export const QuoteSection = styled.section`
  width: 100%;
  padding: clamp(4rem, 7vw, 6rem) clamp(1.5rem, 6vw, 5rem);
  background: var(--vintage-sand);
  display: flex;
  justify-content: center;
  align-items: center;

  blockquote {
    position: relative;
    max-width: 46rem;
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    .quoteMark {
      font-family: var(--atelier-display);
      font-size: clamp(4rem, 8vw, 6rem);
      line-height: 0.5;
      color: var(--vintage-wine);
      opacity: 0.5;
    }

    p {
      margin: 0;
      font-family: var(--atelier-display);
      font-size: clamp(1.5rem, 3.2vw, 2.3rem);
      font-style: italic;
      font-weight: 400;
      line-height: 1.4;
      color: var(--atelier-ink);
    }

    cite {
      font-family: var(--atelier-ui);
      font-size: 0.95rem;
      font-style: normal;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--vintage-wine);
    }
  }
`;

/* ─────────────────────────────────────────
   VIP / COMUNIDADE
───────────────────────────────────────── */
export const VipSection = styled.section`
  width: 100%;
  background: var(--vintage-wine-dark);
  color: var(--atelier-text-on-dark);
  padding: clamp(4rem, 8vw, 6.5rem) clamp(1.5rem, 6vw, 4.5rem);
  display: flex;
  justify-content: center;

  .vipInner {
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.4rem;

    .vipEyebrow {
      font-family: var(--atelier-ui);
      font-size: 0.85rem;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--atelier-gold-bright);
    }

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-size: clamp(2.2rem, 5vw, 3.6rem);
      font-weight: 500;
      line-height: 1.15;
      color: #ffffff;
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: clamp(1.05rem, 1.8vw, 1.25rem);
      line-height: 1.65;
      color: var(--atelier-muted-on-dark);
      max-width: 42rem;
    }

    .socialLinks {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
      width: 100%;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.65rem;
        padding: 1.1rem 2rem;
        border-radius: 4px;
        font-family: var(--atelier-ui);
        font-size: 0.95rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-decoration: none;
        transition: all 0.35s ease;

        svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        &.youtube {
          background: var(--youtube-red);
          color: #ffffff !important;
          border: 1.5px solid var(--youtube-red);

          &:hover {
            background: var(--youtube-red-hover);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(230, 33, 23, 0.4);
          }
        }

        &.whatsapp {
          background: #25d366;
          color: #ffffff !important;
          border: 1.5px solid #25d366;

          &:hover {
            background: #20bd5a;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(37, 211, 102, 0.35);
          }
        }

        &.telegram {
          background: #229ed9;
          color: #ffffff !important;
          border: 1.5px solid #229ed9;

          &:hover {
            background: #1e8dc2;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(34, 158, 217, 0.35);
          }
        }

        &.instagram {
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
          color: #ffffff !important;
          border: 1.5px solid transparent;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(220, 39, 67, 0.35);
          }
        }

        ${customMedia.lessThan("tablet")`
          width: 100%;
        `}
      }
    }
  }
`;

/* ─────────────────────────────────────────
   FINAL CTA SECTION
───────────────────────────────────────── */
export const FinalCtaSection = styled.section`
  width: 100%;
  padding: clamp(4rem, 8vw, 6.5rem) clamp(1.5rem, 6vw, 4rem);
  background: var(--vintage-sand);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.4rem;

  .eyebrow {
    font-family: var(--atelier-ui);
    font-size: 0.85rem;
    letter-spacing: 0.34em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--vintage-wine);
  }

  h2 {
    margin: 0;
    font-family: var(--atelier-display);
    font-size: clamp(2.4rem, 5.5vw, 4.2rem);
    font-weight: 500;
    line-height: 1.1;
    color: var(--atelier-ink);
  }

  p {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: clamp(1.05rem, 1.8vw, 1.25rem);
    line-height: 1.65;
    color: var(--atelier-graphite);
    max-width: 44rem;
  }

  .ctaButtons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 1rem;

    .btnMoldes {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1.25rem 2.8rem;
      background: var(--vintage-wine);
      color: #ffffff !important;
      font-family: var(--atelier-ui);
      font-size: clamp(0.95rem, 1.3vw, 1.05rem);
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 4px;
      border: 2px solid var(--vintage-wine);
      box-shadow: 0 8px 24px rgba(87, 36, 67, 0.3);
      transition: all 0.35s ease;

      &:hover {
        background: var(--vintage-wine-dark);
        border-color: var(--vintage-wine-dark);
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(87, 36, 67, 0.4);
      }
    }

    .btnYoutube {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1.25rem 2.5rem;
      background: #ffffff;
      color: var(--atelier-ink) !important;
      font-family: var(--atelier-ui);
      font-size: clamp(0.95rem, 1.3vw, 1.05rem);
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 4px;
      border: 2px solid var(--atelier-stone);
      transition: all 0.35s ease;

      svg {
        color: var(--youtube-red);
        width: 22px;
        height: 22px;
      }

      &:hover {
        border-color: var(--youtube-red);
        color: var(--youtube-red) !important;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      }
    }

    ${customMedia.lessThan("tablet")`
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      .btnMoldes, .btnYoutube {
        width: 100%;
      }
    `}
  }
`;
