import styled, { keyframes } from "styled-components";
import { generateMedia } from "styled-media-query";

const media = generateMedia({ tablet: "768px", mobile: "480px" });

const CREAM     = "#f5f0e8";
const WINE      = "#5e1f2e";
const GOLD      = "#b89a6e";
const PRETO     = "#111111";
const BRANCO    = "#ffffff";
const CINZA     = "#666";
const CREME_ESC = "#ede8da";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Página ─────────────────────────────────────────────────────────────── */
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  background: ${CREAM};
  color: ${PRETO};
  font-family: var(--main-font);
`;

/* ── CTA reutilizável ───────────────────────────────────────────────────── */
export const Cta = styled.a`
  display: inline-block;
  background: ${(p) => (p.$light ? BRANCO : WINE)};
  color: ${(p) => (p.$light ? WINE : BRANCO)} !important;
  border: 2px solid ${(p) => (p.$light ? BRANCO : WINE)};
  font-family: var(--ui-font, sans-serif);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  padding: 1.6rem 4.5rem;
  text-decoration: none !important;
  transition: background 0.25s, color 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s;
  cursor: pointer;
  box-shadow: ${(p) => (p.$light ? "0 4px 24px rgba(255,255,255,0.15)" : "0 4px 28px rgba(94,31,46,0.35)")};

  &:hover {
    background: ${(p) => (p.$light ? CREAM : "#7a2840")};
    color: ${(p) => (p.$light ? WINE : BRANCO)} !important;
    border-color: ${(p) => (p.$light ? CREAM : "#7a2840")};
    box-shadow: ${(p) => (p.$light ? "0 6px 32px rgba(255,255,255,0.2)" : "0 6px 36px rgba(94,31,46,0.5)")};
    transform: translateY(-2px);
  }

  ${media.lessThan("mobile")`
    font-size: 0.85rem;
    padding: 1.3rem 2.75rem;
    letter-spacing: 0.2em;
  `}
`;

/* ── HERO ───────────────────────────────────────────────────────────────── */
export const Hero = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  ${media.lessThan("tablet")`
    min-height: 90vh;
  `}
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

/* overlay mais escuro na base para garantir leitura do texto */
export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(5, 0, 0, 0.98) 0%,
    rgba(5, 0, 0, 0.72) 40%,
    rgba(5, 0, 0, 0.42) 100%
  );
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 6vw 7rem;
  animation: ${fadeUp} 0.9s ease both;

  ${media.lessThan("tablet")`
    padding: 0 1.5rem 4.5rem;
  `}
`;

export const HeroEyebrow = styled.span`
  font-family: var(--ui-font, sans-serif);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${GOLD};
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 6px rgba(0,0,0,0.6);
`;

export const HeroTitle = styled.h1`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(5.5rem, 14vw, 13rem);
  font-weight: 300;
  line-height: 0.9;
  color: ${BRANCO};
  margin: 0 0 2.25rem;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 20px rgba(0,0,0,0.4);
`;

export const HeroItalic = styled.span`
  font-style: italic;
  color: ${GOLD};
`;

export const HeroSub = styled.p`
  font-family: var(--main-font);
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  color: rgba(255,255,255,0.9);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 3rem;
  text-shadow: 0 1px 8px rgba(0,0,0,0.8);
`;

export const HeroNota = styled.span`
  display: block;
  margin-top: 1.25rem;
  font-family: var(--ui-font, sans-serif);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  text-shadow: 0 1px 4px rgba(0,0,0,0.6);
`;

/* ── MANIFESTO ──────────────────────────────────────────────────────────── */
export const Manifesto = styled.section`
  background: ${CREAM};
  display: flex;
  justify-content: center;
  padding: 8rem 2rem;

  ${media.lessThan("tablet")`
    padding: 5rem 1.5rem;
  `}
`;

export const ManifestoInner = styled.div`
  max-width: 860px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ManifestoEyebrow = styled.span`
  font-family: var(--ui-font, sans-serif);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${GOLD};
  margin-bottom: 1.75rem;
`;

export const ManifestoTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2rem, 6vw, 5.5rem);
  font-weight: 600;
  font-style: italic;
  color: ${PRETO};
  line-height: 1.2;
  margin: 0 0 2.25rem;

  ${media.lessThan("mobile")`
    font-size: clamp(1.75rem, 7vw, 2.5rem);
    line-height: 1.3;
  `}
`;

export const ManifestoText = styled.p`
  font-family: var(--main-font);
  font-size: clamp(1.2rem, 2.4vw, 1.55rem);
  line-height: 2;
  color: #444;
  margin: 0;

  strong { color: ${PRETO}; font-weight: 600; }
`;

/* ── FEATURE — foto + citação ───────────────────────────────────────────── */
export const FeatureSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}
`;

export const FeaturePhoto = styled.div`
  position: relative;
  height: 70vh;
  min-height: 480px;

  ${media.lessThan("tablet")`
    height: 60vw;
    min-height: 280px;
  `}
`;

export const FeatureQuote = styled.div`
  background: ${WINE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 5rem;
  gap: 2rem;

  ${media.lessThan("tablet")`
    padding: 4rem 2rem;
  `}
`;

export const FeatureQuoteBar = styled.div`
  width: 48px;
  height: 2px;
  background: ${GOLD};
`;

export const FeatureQuoteText = styled.blockquote`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.75rem, 3.4vw, 2.9rem);
  font-style: italic;
  font-weight: 500;
  color: ${BRANCO};
  line-height: 1.6;
  margin: 0;
`;

export const FeatureQuoteAuthor = styled.span`
  font-family: var(--ui-font, sans-serif);
  font-size: 0.85rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${GOLD};
`;

/* ── SEÇÃO ESCURA ───────────────────────────────────────────────────────── */
export const DarkSection = styled.section`
  background: #0f0a0a;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}
`;

export const DarkLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 5rem;
  gap: 3rem;

  ${media.lessThan("tablet")`
    padding: 4.5rem 1.5rem;
    gap: 2.25rem;
  `}
`;

export const DarkEyebrow = styled.span`
  font-family: var(--ui-font, sans-serif);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${GOLD};
`;

export const DarkTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2.25rem, 6vw, 5.5rem);
  font-weight: 600;
  color: ${BRANCO};
  line-height: 1.1;
  margin: 0;

  ${media.lessThan("mobile")`
    font-size: clamp(1.85rem, 8vw, 2.5rem);
    line-height: 1.2;
  `}
`;

export const DarkTitleAccent = styled.span`
  display: block;
  color: ${GOLD};
  font-style: italic;
`;

export const DarkRight = styled.div`
  position: relative;
  min-height: 600px;

  ${media.lessThan("tablet")`
    min-height: 70vw;
  `}
`;

export const DarkPhoto = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #0f0a0a 0%, transparent 25%);
  }
`;

/* ── COMPLETO ───────────────────────────────────────────────────────────── */
export const CompleteSection = styled.section`
  background: ${CREME_ESC};
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}
`;

export const CompleteText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 5rem;
  gap: 2rem;

  ${media.lessThan("tablet")`
    padding: 4.5rem 1.5rem;
  `}
`;

export const CompleteEyebrow = styled.span`
  font-family: var(--ui-font, sans-serif);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${GOLD};
`;

export const CompleteTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2.25rem, 6vw, 5.5rem);
  font-weight: 600;
  font-style: italic;
  color: ${PRETO};
  margin: 0;
  line-height: 1.1;

  ${media.lessThan("mobile")`
    font-size: clamp(1.85rem, 8vw, 2.5rem);
    line-height: 1.2;
  `}
`;

export const CompleteBody = styled.p`
  font-family: var(--main-font);
  font-size: clamp(1.15rem, 2.2vw, 1.5rem);
  line-height: 2;
  color: #444;
  margin: 0;
`;

export const CompletePhoto = styled.div`
  position: relative;
  min-height: 540px;

  ${media.lessThan("tablet")`
    min-height: 70vw;
  `}
`;

/* ── GRADE FOTOS — portrait ─────────────────────────────────────────────── */
export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  background: ${PRETO};

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}
`;

export const PhotoPortraitWrap = styled.div`
  position: relative;
  aspect-ratio: 2 / 3;
  overflow: hidden;
`;

/* overlay escuro no rodapé de cada foto para garantir leitura da legenda */
export const PhotoPortraitOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 45%);
  z-index: 1;
`;

export const PhotoGridCaption = styled.p`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.4rem, 2.8vw, 2.1rem);
  font-style: italic;
  font-weight: 600;
  color: ${BRANCO};
  margin: 0;
  z-index: 2;
`;

export const PhotoGridCaptionDark = styled.p`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  text-align: right;
  font-family: var(--main-font);
  font-size: clamp(0.9rem, 1.6vw, 1.1rem);
  font-weight: 500;
  color: ${BRANCO};
  letter-spacing: 0.04em;
  line-height: 1.75;
  margin: 0;
  z-index: 2;
`;

/* ── CONTEÚDO ───────────────────────────────────────────────────────────── */
export const ContentSection = styled.section`
  background: ${CREAM};
  padding: 8rem 6vw;

  ${media.lessThan("tablet")`
    padding: 5rem 1.5rem;
  `}
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4.5rem;
  gap: 1.25rem;
`;

export const ContentEyebrow = styled.span`
  font-family: var(--ui-font, sans-serif);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${GOLD};
`;

export const ContentTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2rem, 5.5vw, 5rem);
  font-weight: 600;
  color: ${PRETO};
  margin: 0;
  line-height: 1.2;

  ${media.lessThan("mobile")`
    font-size: clamp(1.75rem, 7vw, 2.5rem);
    line-height: 1.3;
  `}
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1000px;
  margin: 0 auto;
  border-top: 1px solid rgba(0,0,0,0.1);
  border-left: 1px solid rgba(0,0,0,0.1);

  ${media.lessThan("mobile")`
    grid-template-columns: 1fr;
  `}
`;

export const ContentItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2.25rem 2.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  border-right: 1px solid rgba(0,0,0,0.1);
  transition: background 0.2s;

  &:hover { background: ${CREME_ESC}; }
`;

export const ContentNum = styled.span`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 2.25rem;
  font-weight: 300;
  color: ${GOLD};
  opacity: 0.65;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 2px;
`;

export const ContentItemText = styled.span`
  font-family: var(--main-font);
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  line-height: 1.7;
  color: #333;
`;

/* ── CTA SECTION ────────────────────────────────────────────────────────── */
export const CtaSection = styled.section`
  background: ${WINE};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 7rem 2rem;
  gap: 1.75rem;
`;

export const CtaTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2rem, 5.5vw, 5.5rem);
  font-weight: 600;
  color: ${BRANCO};
  margin: 0;
  line-height: 1.2;

  ${media.lessThan("mobile")`
    font-size: clamp(1.75rem, 7vw, 2.5rem);
    line-height: 1.3;
  `}
`;

export const CtaSub = styled.p`
  font-family: var(--main-font);
  font-size: clamp(1.15rem, 2.2vw, 1.5rem);
  color: rgba(255,255,255,0.85);
  margin: 0 0 0.5rem;
`;

/* ── FAQ ────────────────────────────────────────────────────────────────── */
export const FaqSection = styled.section`
  background: ${CREME_ESC};
  padding: 7rem 6vw;

  ${media.lessThan("tablet")`
    padding: 4.5rem 1.5rem;
  `}
`;

export const FaqTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2.25rem, 4.5vw, 4rem);
  font-weight: 600;
  color: ${PRETO};
  margin: 0 0 3.5rem;
`;

export const FaqList = styled.div`
  max-width: 760px;
`;

export const FaqItem = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.12);

  &:first-child { border-top: 1px solid rgba(0,0,0,0.12); }
`;

export const FaqBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  background: none;
  border: none;
  padding: 1.75rem 0;
  cursor: pointer;
  text-align: left;

  span {
    font-family: var(--main-font);
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    font-weight: 600;
    color: ${PRETO};
    line-height: 1.5;
  }
`;

export const FaqSeta = styled.span`
  font-size: 1.75rem;
  font-weight: 300;
  color: ${WINE};
  transform: ${(p) => (p.open ? "rotate(45deg)" : "rotate(0)")};
  transition: transform 0.25s;
  flex-shrink: 0;
  line-height: 1;
`;

export const FaqResposta = styled.p`
  font-family: var(--main-font);
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  line-height: 1.9;
  color: ${CINZA};
  margin: 0;
  padding-bottom: ${(p) => (p.open ? "1.75rem" : "0")};
  max-height: ${(p) => (p.open ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.35s ease, padding-bottom 0.35s;
`;

/* ── DESENHO TÉCNICO ────────────────────────────────────────────────────── */
export const DrawSection = styled.section`
  background: ${CREME_ESC};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6rem 2rem 7rem;
  gap: 2rem;

  ${media.lessThan("tablet")`
    padding: 4rem 1.5rem 5rem;
  `}
`;

export const DrawEyebrow = styled.span`
  font-family: var(--ui-font, sans-serif);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${GOLD};
`;

export const DrawTitle = styled.h3`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2rem, 3.5vw, 3.25rem);
  font-weight: 600;
  font-style: italic;
  color: ${PRETO};
  margin: 0;
  line-height: 1.25;
`;

export const DrawImg = styled.div`
  position: relative;
  width: 100%;
  max-width: 680px;
  aspect-ratio: 16 / 9;
`;

export const DrawSig = styled.p`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 1.15rem;
  font-style: italic;
  color: ${CINZA};
  margin: 0;
`;
