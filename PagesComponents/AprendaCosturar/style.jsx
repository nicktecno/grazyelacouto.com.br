import styled, { keyframes } from "styled-components";
import Image from "next/image";
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

/* ── CTA reutilizável (idêntico ao Módulo Blazer) ────────────────────────── */
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
  background: ${PRETO};

  ${media.lessThan("tablet")`
    flex-direction: column;
    align-items: flex-start;
    min-height: unset;
  `}
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  ${media.lessThan("tablet")`
    position: relative;
    inset: unset;
    width: 100%;
    aspect-ratio: 4 / 3;
    flex-shrink: 0;
  `}

  ${media.lessThan("mobile")`
    aspect-ratio: 1 / 1;
  `}
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

  ${media.lessThan("tablet")`
    display: none;
  `}
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
    padding: 2.5rem 1.5rem 4.5rem;
    background: ${PRETO};
    width: 100%;
    align-items: center;
    text-align: center;
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
  font-size: clamp(4.5rem, 11vw, 11rem);
  font-weight: 300;
  line-height: 0.92;
  color: ${BRANCO};
  margin: 0 0 2.25rem;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 20px rgba(0,0,0,0.4);

  ${media.lessThan("mobile")`
    font-size: clamp(3rem, 12vw, 4.5rem);
    line-height: 1;
  `}
`;

export const HeroItalic = styled.span`
  font-style: italic;
  color: ${GOLD};
`;

export const HeroSub = styled.p`
  font-family: var(--main-font);
  font-size: clamp(1.05rem, 2vw, 1.45rem);
  color: rgba(255,255,255,0.9);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 3rem;
  max-width: 780px;
  line-height: 1.6;
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
  background: ${WINE};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}
`;

export const FeaturePhoto = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem 4rem 5vw;

  ${media.lessThan("tablet")`
    order: 2;
    padding: 1rem 1.5rem 4rem;
  `}
`;

export const FeatureQuote = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 5vw 6rem 2rem;
  gap: 2rem;

  ${media.lessThan("tablet")`
    order: 1;
    padding: 4rem 1.5rem 1.5rem;
    align-items: center;
    text-align: center;
  `}
`;

export const FeatureQuoteBar = styled.div`
  width: 48px;
  height: 2px;
  background: ${GOLD};

  ${media.lessThan("tablet")`
    margin: 0 auto;
  `}
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

/* ── SEÇÃO ESCURA — A PROPOSTA ─────────────────────────────────────────── */
export const DarkSection = styled.section`
  background: #0f0a0a;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}
`;

export const DarkLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 2rem 6rem 5vw;
  gap: 3rem;

  ${media.lessThan("tablet")`
    order: 1;
    padding: 4.5rem 1.5rem 1.5rem;
    gap: 2.25rem;
    align-items: center;
    text-align: center;
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

export const DarkCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background: ${BRANCO};
  color: ${WINE} !important;
  border: 1.5px solid ${BRANCO};
  font-family: var(--ui-font, sans-serif);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 1rem 2.2rem;
  text-decoration: none !important;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(255, 255, 255, 0.12);
  transition: all 0.25s ease;

  &:hover {
    background: ${CREAM};
    border-color: ${CREAM};
    color: ${WINE} !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  ${media.lessThan("tablet")`
    align-self: center;
  `}

  ${media.lessThan("mobile")`
    font-size: 0.78rem;
    padding: 0.85rem 1.8rem;
    letter-spacing: 0.15em;
  `}
`;

export const DarkRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 5vw 4rem 2rem;

  ${media.lessThan("tablet")`
    order: 2;
    padding: 1rem 1.5rem 4rem;
  `}
`;

export const DarkPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

/* ── COMPLETO / PASSO A PASSO ───────────────────────────────────────────── */
export const CompleteSection = styled.section`
  background: ${CREME_ESC};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}
`;

export const CompletePhoto = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem 4rem 5vw;

  ${media.lessThan("tablet")`
    order: 2;
    padding: 1rem 1.5rem 4rem;
  `}
`;

export const CompleteText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 5vw 6rem 2rem;
  gap: 2rem;

  ${media.lessThan("tablet")`
    order: 1;
    padding: 4.5rem 1.5rem 1.5rem;
    gap: 1.5rem;
    align-items: center;
    text-align: center;
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

/* ── COLEÇÃO DE PEÇAS (GRADE EM PORTRAIT) ───────────────────────────────── */
export const PiecesSection = styled.section`
  background: ${PRETO};
  padding: 8rem 6vw;

  ${media.lessThan("tablet")`
    padding: 5rem 1.5rem;
  `}
`;

export const PiecesHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4.5rem;
  gap: 1.25rem;
`;

export const PiecesEyebrow = styled.span`
  font-family: var(--ui-font, sans-serif);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${GOLD};
`;

export const PiecesTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2.25rem, 5.5vw, 5rem);
  font-weight: 600;
  color: ${BRANCO};
  margin: 0;
  line-height: 1.2;

  ${media.lessThan("mobile")`
    font-size: clamp(1.85rem, 7.5vw, 2.75rem);
  `}
`;

export const PiecesSubtitle = styled.p`
  font-family: var(--main-font);
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: rgba(255,255,255,0.75);
  margin: 0;
`;

export const PiecesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  ${media.lessThan("tablet")`
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  `}

  ${media.lessThan("mobile")`
    grid-template-columns: 1fr;
    gap: 1.25rem;
  `}
`;

export const PieceCard = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #1a1617;
  border-radius: 4px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.6);

    img {
      transform: scale(1.05);
    }
  }

  img {
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`;

export const PieceCardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 10, 10, 0.92) 0%, rgba(15, 10, 10, 0.35) 45%, transparent 70%);
  z-index: 1;
`;

export const PieceCardCaption = styled.div`
  position: absolute;
  bottom: 1.75rem;
  left: 1.75rem;
  right: 1.75rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .tag {
    font-family: var(--ui-font, sans-serif);
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: ${GOLD};
    font-weight: 700;
  }

  h3 {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(1.4rem, 2.2vw, 1.85rem);
    font-style: italic;
    font-weight: 600;
    color: ${BRANCO};
    margin: 0;
    line-height: 1.2;
  }
`;

/* ── CARROSSEL COMUNIDADE (AGULHINHAS EM AÇÃO) ───────────────────────────── */
export const CommunitySection = styled.section`
  background: ${CREAM};
  padding: 8rem 0;

  ${media.lessThan("tablet")`
    padding: 5rem 0;
  `}
`;

export const CommunityHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  margin-bottom: 3.5rem;
  gap: 1.25rem;
`;

export const CommunityEyebrow = styled.span`
  font-family: var(--ui-font, sans-serif);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${GOLD};
`;

export const CommunityTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2.25rem, 5.5vw, 5rem);
  font-weight: 600;
  color: ${PRETO};
  margin: 0;
  line-height: 1.2;
`;

export const CommunitySubtitle = styled.p`
  font-family: var(--main-font);
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: #555;
  margin: 0;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1.5rem;
  box-sizing: border-box;
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
  width: 100%;
  touch-action: pan-y;
  user-select: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: stretch;
  will-change: transform;

  ${media.lessThan("mobile")`
    gap: 1rem;
  `}
`;

export const CarouselSlide = styled.div`
  flex: 0 0 280px;
  min-width: 0;
  height: 420px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);

  ${media.lessThan("mobile")`
    flex: 0 0 230px;
    height: 350px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
    -webkit-user-drag: none;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 2.5rem;
  position: relative;
  z-index: 10;
`;

export const CarouselButton = styled.button`
  background: ${WINE};
  color: ${BRANCO};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(94, 31, 46, 0.3);
  transition: transform 0.2s, background 0.2s;
  pointer-events: auto;
  user-select: none;

  &:hover {
    background: #7a2840;
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.95);
  }
`;

/* ── CONTEÚDO DO CURSO ─────────────────────────────────────────────────── */
export const ContentSection = styled.section`
  background: ${CREME_ESC};
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

  &:hover { background: ${CREAM}; }
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

/* ── QUEM SERÁ A PROFESSORA ─────────────────────────────────────────────── */
/* ── QUEM SERÁ A PROFESSORA (Responsividade idêntica à Home) ─────────────── */
export const ProfSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;
  width: 100%;
  padding: clamp(4rem, 8vw, 7rem) clamp(1.75rem, 7vw, 6rem);
  background: ${CREAM};
  display: grid;
  grid-template-columns: 1fr 1.15fr;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
    text-align: center;
    padding: 4.5rem 1.5rem;
    gap: 2.5rem;
  `}
`;

export const ProfPortrait = styled(Image)`
  width: min(100%, 400px);
  height: auto;
  object-fit: contain;
  justify-self: center;
  border-radius: 12px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);
  transition: transform 0.6s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-6px);
    }
  }

  ${media.lessThan("tablet")`
    min-height: 80vw;
    width: min(100%, 320px);
    margin: 0 auto;
    transition: none;
    transform: none !important;
  `}
`;

export const ProfCopy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 5rem;
  gap: 2rem;
  gap: 1.5rem;
  max-width: 46rem;

  ${media.lessThan("tablet")`
    padding: 4.5rem 1.5rem;
    gap: 1.5rem;
    align-items: center;
    max-width: none;
  `}
`;

export const ProfEyebrow = styled.span`
  font-family: var(--ui-font, sans-serif);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${GOLD};
`;

export const ProfTitle = styled.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2.25rem, 5.5vw, 5rem);
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  font-weight: 600;
  color: ${PRETO};
  margin: 0;
  line-height: 1.15;

  ${media.lessThan("mobile")`
    font-size: clamp(1.85rem, 8vw, 2.5rem);
    line-height: 1.2;
    font-size: clamp(2rem, 8vw, 2.75rem);
  `}
`;

export const ProfBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    font-family: var(--main-font);
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    line-height: 1.9;
    line-height: 1.85;
    color: #444;
    margin: 0;

    strong {
      color: ${PRETO};
      font-weight: 600;
    }
  }

  blockquote {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(1.4rem, 2.6vw, 1.85rem);
    font-size: clamp(1.35rem, 2.4vw, 1.75rem);
    font-style: italic;
    font-weight: 500;
    color: ${WINE};
    line-height: 1.6;
    margin: 0.75rem 0 0;
    margin: 1rem 0 0;
    padding-left: 1.5rem;
    border-left: 3px solid ${GOLD};

    ${media.lessThan("tablet")`
      padding: 1.25rem 0.5rem;
      border-left: none;
      border-top: 2px solid ${GOLD};
      border-bottom: 2px solid ${GOLD};
      text-align: center;
    `}
  }
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
  max-width: 650px;
  line-height: 1.6;
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
