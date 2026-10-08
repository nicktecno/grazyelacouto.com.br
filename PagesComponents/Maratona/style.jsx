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

const pulseBadge = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.85; transform: scale(0.98); }
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

const tokens = css`
  --atelier-ink:           #100e0c;
  --atelier-ink-soft:      #1c1815;
  --atelier-graphite:      #3a342f;
  --atelier-stone:         #cfc9c2;
  --atelier-mist:          #f2eee9;
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

  --wine-dark: #3a1523;
  --wine-rich: #572443;
  --olive-text:#4a5535;
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
  min-height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--atelier-text-on-dark);
  isolation: isolate;

  ${customMedia.lessThan("tablet")`
    min-height: 80vh;
    padding-top: 2rem;
  `}
`;

export const HeroMedia = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--wine-dark);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse 90% 90% at 35% 50%,
        rgba(87, 36, 67, 0.65) 0%,
        rgba(40, 15, 25, 0.88) 100%
      ),
      linear-gradient(
        180deg,
        rgba(30, 10, 18, 0.5) 0%,
        rgba(40, 15, 25, 0.4) 50%,
        rgba(25, 8, 15, 0.85) 100%
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
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: min(54rem, 92vw);
  padding: clamp(3rem, 7vw, 6.5rem);
  margin-top: clamp(1rem, 3vw, 2rem);

  > * {
    opacity: 0;
    animation: ${fadeUp} 0.9s ${easeOutExpo} both;
    ${reducedMotion}
  }

  ${customMedia.lessThan("tablet")`
    > * { opacity: 1; animation: none; }
    padding: 2.5rem 1.5rem 4rem;
  `}

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    align-self: flex-start;
    padding: 0.45rem 1.1rem;
    background: rgba(226, 201, 144, 0.12);
    border: 1px solid rgba(226, 201, 144, 0.35);
    border-radius: 999px;
    font-family: var(--atelier-ui);
    font-size: 0.82rem;
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
    font-size: clamp(2.8rem, 7vw, 5.2rem);
    font-weight: 500;
    line-height: 1.02;
    letter-spacing: 0.01em;
    color: var(--atelier-text-on-dark);
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.35);

    em {
      font-style: italic;
      font-weight: 400;
      color: var(--atelier-gold-bright);
    }
  }

  .brandLine {
    display: block;
    width: 5rem;
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
    font-size: clamp(1.05rem, 2vw, 1.35rem);
    line-height: 1.6;
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
    gap: 1rem;
    margin-top: 1rem;
    animation-delay: 0.55s;

    ${customMedia.lessThan("tablet")`
      flex-direction: column;
      align-items: stretch;
    `}
  }

  .ctaPrimary {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 1.25rem 2.5rem;
    background: var(--atelier-paper);
    color: var(--atelier-ink) !important;
    font-family: var(--atelier-ui);
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid var(--atelier-paper);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    transition:
      background 0.35s ease,
      color 0.35s ease,
      transform 0.35s ease,
      box-shadow 0.35s ease;

    &:hover {
      background: var(--atelier-gold);
      border-color: var(--atelier-gold);
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
    }
  }

  .ctaSecondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 1.2rem 2.2rem;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    color: #ffffff !important;
    font-family: var(--atelier-ui);
    font-size: 0.92rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1.5px solid rgba(255, 255, 255, 0.4);
    transition:
      background 0.35s ease,
      border-color 0.35s ease,
      transform 0.35s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: #ffffff;
      transform: translateY(-2px);
    }
  }
`;

/* ─────────────────────────────────────────
   CLASSIC BANNER (Status da Maratona)
───────────────────────────────────────── */
export const ClassicBanner = styled.section`
  width: 100%;
  padding: clamp(3rem, 5vw, 4.5rem) clamp(1.5rem, 5vw, 4rem);
  background: var(--atelier-mist);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  .tag {
    font-family: var(--atelier-ui);
    font-size: 0.85rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--atelier-accent);
  }

  h2 {
    margin: 0;
    font-family: var(--atelier-display);
    font-size: clamp(1.9rem, 4.2vw, 3.2rem);
    font-weight: 500;
    line-height: 1.2;
    color: var(--atelier-ink);
  }

  p {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: clamp(1rem, 1.6vw, 1.18rem);
    line-height: 1.65;
    color: var(--atelier-graphite);
    max-width: 48rem;
  }
`;

/* ─────────────────────────────────────────
   COURSES & OPTIONS SECTION
───────────────────────────────────────── */
export const OptionsSection = styled.section`
  width: 100%;
  padding: clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 4.5rem);
  max-width: 1240px;
  margin: 0 auto;
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
    gap: 0.85rem;

    .eyebrow {
      font-family: var(--atelier-ui);
      font-size: 0.85rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--atelier-gold-deep);
    }

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-size: clamp(2.2rem, 5vw, 3.6rem);
      font-weight: 500;
      line-height: 1.15;
      color: var(--atelier-ink);
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: clamp(1rem, 1.7vw, 1.15rem);
      line-height: 1.6;
      color: var(--atelier-graphite);
    }
  }

  .cardsGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1.5rem, 3vw, 2.25rem);
    width: 100%;

    ${customMedia.lessThan("notebook")`
      grid-template-columns: 1fr;
      max-width: 580px;
    `}
  }
`;

export const OptionCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(2rem, 4vw, 2.6rem);
  background: ${(p) => (p.$featured ? "#FAF6F0" : "#FFFFFF")};
  border: 1.5px solid ${(p) => (p.$featured ? "var(--atelier-gold)" : "#EBE6DF")};
  border-radius: 8px;
  box-shadow: ${(p) =>
    p.$featured
      ? "0 16px 36px rgba(196, 164, 106, 0.18)"
      : "0 8px 24px rgba(0, 0, 0, 0.04)"};
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.09);
  }

  ${(p) =>
    p.$featured &&
    css`
      &::before {
        content: "RECOMENDADO";
        position: absolute;
        top: -12px;
        right: 24px;
        padding: 0.3rem 0.85rem;
        background: var(--atelier-gold-deep);
        color: #ffffff;
        font-family: var(--atelier-ui);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.18em;
        border-radius: 4px;
      }
    `}

  .cardTop {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    .cardTag {
      font-family: var(--atelier-ui);
      font-size: 0.78rem;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      font-weight: 600;
      color: ${(p) => (p.$featured ? "var(--atelier-accent)" : "var(--atelier-gold-deep)")};
    }

    h3 {
      margin: 0;
      font-family: var(--atelier-display);
      font-size: clamp(1.6rem, 2.5vw, 2.1rem);
      font-weight: 600;
      line-height: 1.15;
      color: var(--atelier-ink);
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: 0.98rem;
      line-height: 1.6;
      color: var(--atelier-graphite);
    }

    ul {
      margin: 0.5rem 0 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.55rem;

      li {
        font-family: var(--atelier-ui);
        font-size: 0.88rem;
        line-height: 1.45;
        color: var(--atelier-graphite);
        display: flex;
        align-items: baseline;
        gap: 0.5rem;

        &::before {
          content: "✓";
          color: var(--atelier-gold-deep);
          font-weight: bold;
        }
      }
    }
  }

  .cardAction {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.08);

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0.95rem 1.4rem;
      font-family: var(--atelier-ui);
      font-size: 0.88rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.3s ease;

      ${(p) =>
        p.$featured
          ? css`
              background: var(--atelier-accent);
              color: #ffffff !important;
              &:hover {
                background: var(--atelier-accent-hover);
                transform: translateY(-2px);
              }
            `
          : css`
              background: transparent;
              color: var(--atelier-ink) !important;
              border: 1.5px solid var(--atelier-ink);
              &:hover {
                background: var(--atelier-ink);
                color: #ffffff !important;
                transform: translateY(-2px);
              }
            `}
    }
  }
`;

/* ─────────────────────────────────────────
   VIP NOTICE / SOCIAL SECTION
───────────────────────────────────────── */
export const VipSection = styled.section`
  width: 100%;
  background: var(--wine-dark);
  color: #ffffff;
  padding: clamp(3.5rem, 6vw, 5.5rem) clamp(1.5rem, 5vw, 4rem);
  display: flex;
  justify-content: center;

  .vipInner {
    max-width: 920px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;

    .vipEyebrow {
      font-family: var(--atelier-ui);
      font-size: 0.85rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--atelier-gold-bright);
    }

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-size: clamp(2.2rem, 5.5vw, 3.8rem);
      font-weight: 500;
      line-height: 1.15;
      color: #ffffff;
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: clamp(1.05rem, 2vw, 1.25rem);
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.85);
      max-width: 44rem;
    }

    .socialLinks {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;

      ${customMedia.lessThan("tablet")`
        flex-direction: column;
        width: 100%;
        max-width: 380px;
      `}

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 1.1rem 2rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(8px);
        color: #ffffff !important;
        font-family: var(--atelier-ui);
        font-size: 0.92rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        text-decoration: none;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 4px;
        transition: all 0.3s ease;

        svg {
          width: 22px;
          height: 22px;
        }

        &.whatsapp {
          background: #25d366;
          border-color: #25d366;
          color: #ffffff !important;
          font-weight: 700;

          &:hover {
            background: #20ba59;
            transform: translateY(-2px);
          }
        }

        &.telegram {
          background: #229ed9;
          border-color: #229ed9;

          &:hover {
            background: #1e8dc2;
            transform: translateY(-2px);
          }
        }

        &.instagram {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          border-color: transparent;

          &:hover {
            opacity: 0.92;
            transform: translateY(-2px);
          }
        }
      }
    }
  }
`;

/* ─────────────────────────────────────────
   RETRÔ / ILUSTRAÇÕES PASSADAS
───────────────────────────────────────── */
export const PastEditionsSection = styled.section`
  width: 100%;
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
  background: var(--atelier-paper);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2rem, 4vw, 3.5rem);

  .header {
    text-align: center;
    max-width: 44rem;

    .eyebrow {
      font-family: var(--atelier-ui);
      font-size: 0.85rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--atelier-accent);
    }

    h3 {
      margin: 0.5rem 0 0;
      font-family: var(--atelier-display);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 500;
      color: var(--atelier-ink);
    }

    p {
      margin: 0.75rem 0 0;
      font-family: var(--atelier-body);
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--atelier-graphite);
    }
  }

  .galleryGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1rem, 2.5vw, 2rem);
    width: 100%;
    max-width: 960px;

    ${customMedia.lessThan("tablet")`
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
    `}
  }
`;

export const IllustrationCard = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #f0ebe4;
  border-radius: 4px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
`;

export const IllustrationImg = styled(Image)`
  object-fit: contain;
  object-position: center;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.04);
  }
`;

/* ─────────────────────────────────────────
   QUOTE DA PROFESSORA
───────────────────────────────────────── */
export const QuoteSection = styled.section`
  width: 100%;
  padding: clamp(3.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
  background: var(--atelier-mist);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  blockquote {
    max-width: 44rem;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    .quoteMark {
      font-family: var(--atelier-display);
      font-size: 4rem;
      line-height: 0.8;
      color: var(--atelier-gold);
    }

    p {
      margin: 0;
      font-family: var(--atelier-display);
      font-size: clamp(1.4rem, 2.8vw, 2.1rem);
      font-weight: 400;
      line-height: 1.45;
      font-style: italic;
      color: var(--atelier-ink);
    }

    cite {
      font-family: var(--atelier-ui);
      font-size: 0.95rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-style: normal;
      font-weight: 600;
      color: var(--atelier-accent);
    }
  }
`;
