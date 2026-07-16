import styled, { keyframes } from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
});

// ── Paleta derivada do projeto ─────────────────────────────────────────────
const CREAM      = "#fff9f4";
const WARM_BEIGE = "#e6dfda";
const MOCHA      = "#96765c";
const MOCHA_DARK = "#6b5040";
const NEAR_BLACK = "#292929";
const GOLD       = "#b89b6e";
const WHITE      = "#ffffff";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ── Wrapper ────────────────────────────────────────────────────────────────

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  align-self: center;
  background: ${WHITE};
  color: ${NEAR_BLACK};
  font-family: var(--main-font);
`;

// ── Hero ───────────────────────────────────────────────────────────────────

export const Hero = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 92vh;
  background: ${NEAR_BLACK};
  overflow: hidden;
  padding: 6rem 2rem;

  ${customMedia.lessThan("tablet")`
    min-height: 80vh;
    padding: 5rem 1.5rem;
  `}
`;

export const HeroGlow = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 55% at 80% 20%, ${MOCHA}33 0%, transparent 60%),
    radial-gradient(ellipse 45% 40% at 10% 90%, ${GOLD}18 0%, transparent 55%);
  pointer-events: none;
`;

export const HeroInner = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 860px;
  animation: ${fadeUp} 0.9s ease both;
`;

export const Eyebrow = styled.span`
  display: inline-block;
  font-family: var(--ui-font, "DM Sans", system-ui, sans-serif);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: ${GOLD};
  margin-bottom: 1.4rem;

  &::before,
  &::after {
    content: "—";
    margin: 0 0.55em;
    opacity: 0.55;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(4.5rem, 12vw, 10rem);
  font-weight: 300;
  line-height: 0.95;
  color: ${WHITE};
  margin: 0;
  letter-spacing: -0.02em;
`;

export const HeroTitleItalic = styled.span`
  font-style: italic;
  color: ${GOLD};
`;

export const HeroDivider = styled.div`
  width: 56px;
  height: 1px;
  background: ${GOLD};
  margin: 2rem auto;
  opacity: 0.65;
`;

export const HeroSubtitle = styled.p`
  font-family: var(--main-font);
  font-size: clamp(1rem, 2.4vw, 1.3rem);
  font-weight: 400;
  color: #bfb8b0;
  line-height: 1.8;
  margin: 0 0 2.75rem;
  max-width: 540px;
`;

export const Cta = styled.a`
  display: inline-block;
  background: ${GOLD};
  color: ${WHITE} !important;
  font-family: var(--ui-font, "DM Sans", system-ui, sans-serif);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 1.15rem 3.25rem;
  text-decoration: none !important;
  transition: background 0.3s, transform 0.2s;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background: ${MOCHA};
    color: ${WHITE} !important;
    transform: translateY(-2px);
  }

  ${customMedia.lessThan("mobile")`
    padding: 1rem 2rem;
    font-size: 0.78rem;
    letter-spacing: 0.14em;
  `}
`;

export const HeroNote = styled.span`
  display: block;
  margin-top: 1.1rem;
  font-family: var(--ui-font, "DM Sans", system-ui, sans-serif);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: #5a534d;
  text-transform: uppercase;
`;

// ── Ornamento ──────────────────────────────────────────────────────────────

export const OrnamentRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 3rem;
  margin: 3rem 0;

  ${customMedia.lessThan("mobile")`
    padding: 0 1.5rem;
    margin: 2rem 0;
  `}
`;

export const OrnLine = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, ${WARM_BEIGE}, transparent);
`;

export const OrnDiamond = styled.span`
  font-size: 0.55rem;
  color: ${GOLD};
  margin: 0 1.1rem;
  opacity: 0.75;
`;

// ── Seção genérica (fundo branco) ─────────────────────────────────────────

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 2rem;
  max-width: 860px;
  margin: 0 auto;
  width: 100%;

  ${customMedia.lessThan("tablet")`
    padding: 3.5rem 1.5rem;
  `}
`;

// ── Seção escura ───────────────────────────────────────────────────────────

export const DarkSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${NEAR_BLACK};
  padding: 6rem 2rem;
  width: 100%;

  ${customMedia.lessThan("tablet")`
    padding: 4rem 1.5rem;
  `}
`;

// ── Seção creme ────────────────────────────────────────────────────────────

export const CreamSection = styled.section`
  background: ${CREAM};
  width: 100%;
  padding: 6rem 2rem;

  ${customMedia.lessThan("tablet")`
    padding: 4rem 1.5rem;
  `}
`;

// ── Tipografia de seção ────────────────────────────────────────────────────

export const SectionEyebrow = styled.span`
  display: inline-block;
  font-family: var(--ui-font, "DM Sans", system-ui, sans-serif);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${(p) => (p.light ? GOLD : MOCHA)};
  margin-bottom: 1rem;

  &::before,
  &::after {
    content: "—";
    margin: 0 0.5em;
    opacity: 0.5;
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  line-height: 1.15;
  color: ${(p) => (p.light ? WHITE : NEAR_BLACK)};
  margin: 0 0 1.5rem;
  letter-spacing: -0.01em;
`;

export const SectionText = styled.p`
  font-family: var(--main-font);
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.95;
  color: #4a4440;
  max-width: 640px;
  margin: 0;
`;

// ── Grid de conteúdo ───────────────────────────────────────────────────────

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  width: 100%;
  max-width: 1000px;
  margin-top: 3rem;

  ${customMedia.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 2.75rem;
  background: #1c1a18;
  transition: background 0.3s;

  &:hover {
    background: #242220;
  }

  ${customMedia.lessThan("mobile")`
    padding: 2rem 1.5rem;
  `}
`;

export const CardNumber = styled.span`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 3.25rem;
  font-weight: 300;
  color: ${GOLD};
  opacity: 0.3;
  line-height: 1;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 1.55rem;
  font-weight: 600;
  color: #f0ece7;
  margin: 0 0 0.8rem;
`;

export const CardText = styled.p`
  font-family: var(--main-font);
  font-size: 0.95rem;
  line-height: 1.85;
  color: #7a736c;
  margin: 0;
`;

// ── Lista para quem é ──────────────────────────────────────────────────────

export const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 620px;
  width: 100%;
`;

export const CheckItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-family: var(--main-font);
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.75;
  color: #4a4440;
  text-align: left;
  padding: 1.25rem 0;
  border-bottom: 1px solid ${WARM_BEIGE};

  &:last-child {
    border-bottom: none;
  }
`;

export const CheckMark = styled.span`
  font-size: 0.45rem;
  color: ${GOLD};
  flex-shrink: 0;
  margin-top: 0.55rem;
`;

// ── Professora ─────────────────────────────────────────────────────────────

export const ProfInner = styled.div`
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Quote = styled.blockquote`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.35rem, 3.2vw, 2.1rem);
  font-style: italic;
  font-weight: 500;
  color: ${MOCHA_DARK};
  margin: 2.5rem 0 0;
  padding: 2rem 2.75rem;
  border-left: 3px solid ${GOLD};
  text-align: left;
  line-height: 1.65;
  background: ${WHITE};
  width: 100%;

  ${customMedia.lessThan("mobile")`
    padding: 1.5rem 1.25rem;
  `}
`;

// ── CTA final ──────────────────────────────────────────────────────────────

export const CtaSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 2rem 7rem;
  background: ${WHITE};

  ${customMedia.lessThan("tablet")`
    padding: 3.5rem 1.5rem 5rem;
  `}
`;

export const CtaTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  color: ${NEAR_BLACK};
  margin: 0 0 1rem;
`;

export const CtaSubtitle = styled.p`
  font-family: var(--main-font);
  font-size: 1.1rem;
  color: #6b635b;
  margin: 0 0 2.5rem;
  line-height: 1.7;
`;
