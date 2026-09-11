import styled from "styled-components";
import Image from "next/image";
import { generateMedia } from "styled-media-query";

const media = generateMedia({
  desktop: "1200px",
  tablet: "833px",
  mobile: "480px",
});

const BG_CREAM      = "#F5F4EC";
const BG_SAND       = "#E5E3D8";
const BG_ACCORDION  = "#D4D1C1";
const NAVY          = "#05234A";
const TEXT_DARK     = "#4E4E4E";
const TEXT_MUTED    = "#727272";
const BTN_DARK      = "#2A2A2A";
const WHITE         = "#FFFFFF";

/* ── Página Geral ───────────────────────────────────────────────────────── */
export const Page = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${BG_CREAM};
  color: ${TEXT_DARK};
  font-family: "Open Sans", system-ui, -apple-system, sans-serif;
  overflow-x: hidden;
`;

/* ── Container de Largura Centralizada ───────────────────────────────────── */
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  box-sizing: border-box;

  ${media.lessThan("tablet")`
    padding: 0 16px;
    flex-direction: column;
    align-items: center;
  `}
`;

/* ── Divisores Azuis / Escuros ───────────────────────────────────────────── */
export const DividerLine = styled.div`
  width: ${(p) => (p.$short ? "240px" : "100%")};
  max-width: ${(p) => (p.$maxWidth ? p.$maxWidth : "100%")};
  height: 2px;
  background: ${(p) => (p.$color ? p.$color : NAVY)};
  margin: ${(p) => (p.$margin ? p.$margin : "1.5rem 0 2rem")};
  opacity: 0.85;

  ${media.lessThan("tablet")`
    margin: 1.25rem auto 1.5rem;
  `}
`;

/* ── Botão Padrão Original ──────────────────────────────────────────────── */
export const OriginalButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => (p.$bg ? p.$bg : BTN_DARK)};
  color: ${WHITE} !important;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 16px 40px;
  border-radius: 0px;
  text-decoration: none !important;
  transition: transform 0.2s ease, background 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #111111;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.22);
  }

  ${media.lessThan("tablet")`
    font-size: 16px;
    padding: 14px 32px;
    width: 100%;
    max-width: 320px;
  `}
`;

/* ── 1. HERO SECTION (Fundo #F5F4EC) ────────────────────────────────────── */
export const HeroSection = styled.section`
  background: ${BG_CREAM};
  width: 100%;
  padding: 80px 0 60px;

  ${media.lessThan("tablet")`
    padding: 35px 0 40px;
  `}
`;

export const HeroRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
  gap: 40px;

  ${media.lessThan("tablet")`
    flex-direction: column-reverse;
    text-align: center;
    gap: 30px;
    padding: 0 16px;
  `}
`;

export const HeroColLeft = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${media.lessThan("tablet")`
    align-items: center;
  `}
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-family: Georgia, serif;
  font-size: clamp(28px, 4.5vw, 48px);
  font-weight: normal;
  font-style: italic;
  color: ${TEXT_DARK};
  line-height: 1.2;

  ${media.lessThan("tablet")`
    text-align: center;
    line-height: 1.25;
  `}
`;

export const HeroColRight = styled.div`
  flex: 0.9;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${media.lessThan("tablet")`
    justify-content: center;
    width: 100%;
  `}
`;

export const HeroArchImgWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 560px;
  border-radius: 300px 300px 0px 0px;
  border: 3px solid ${NAVY};
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(5, 35, 74, 0.1);

  img {
    object-fit: cover;
    object-position: center top;
  }

  ${media.lessThan("tablet")`
    max-width: 260px;
    height: 300px;
    border: 2px solid ${NAVY};
  `}
`;

/* ── 2. SOBRE O CONTEÚDO (Fundo #E5E3D8) ────────────────────────────────── */
export const AboutSection = styled.section`
  background: ${BG_SAND};
  width: 100%;
  padding: 100px 0 120px;
  text-align: center;

  ${media.lessThan("tablet")`
    padding: 60px 0 70px;
  `}
`;

export const AboutTitle = styled.h2`
  margin: 0;
  font-family: Georgia, serif;
  font-size: clamp(32px, 6vw, 80px);
  font-weight: normal;
  font-style: italic;
  color: ${TEXT_DARK};
  line-height: 1.15;
`;

export const AboutText = styled.p`
  margin: 0 auto;
  max-width: 900px;
  font-family: "Open Sans", sans-serif;
  font-size: clamp(15px, 2vw, 17px);
  line-height: 2;
  color: ${TEXT_MUTED};

  ${media.lessThan("tablet")`
    line-height: 1.8;
  `}
`;

/* ── 3. PERGUNTAS FREQUENTES (Fundo #E5E3D8) ────────────────────────────── */
export const FaqSection = styled.section`
  background: ${BG_SAND};
  width: 100%;
  padding: 40px 0 140px;

  ${media.lessThan("tablet")`
    padding: 20px 0 70px;
  `}
`;

export const FaqTitle = styled.h2`
  margin: 0 0 1rem;
  font-family: Georgia, serif;
  font-size: clamp(30px, 5vw, 64px);
  font-weight: normal;
  font-style: italic;
  color: ${TEXT_DARK};
  text-align: center;
`;

export const FaqWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.lessThan("tablet")`
    gap: 16px;
  `}
`;

export const FaqCard = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const FaqHeader = styled.button`
  width: 100%;
  background: ${BG_CREAM};
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  text-align: left;
  transition: background 0.2s;

  &:hover {
    background: #ebe9e0;
  }

  span {
    font-family: Georgia, serif;
    font-size: clamp(16px, 2.2vw, 20px);
    font-style: italic;
    color: ${TEXT_MUTED};
    font-weight: 600;
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: ${NAVY};
    font-size: 14px;
    transition: transform 0.3s ease;
    transform: ${(p) => (p.$open ? "rotate(180deg)" : "rotate(0deg)")};
  }

  ${media.lessThan("tablet")`
    padding: 14px 18px;
  `}
`;

export const FaqContent = styled.div`
  background: ${BG_ACCORDION};
  max-height: ${(p) => (p.$open ? "600px" : "0px")};
  opacity: ${(p) => (p.$open ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease;
  padding: ${(p) => (p.$open ? "20px 24px" : "0px 24px")};

  p {
    margin: 0 0 10px;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    line-height: 1.75;
    color: ${TEXT_DARK};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

/* ── 4. OFERTA (Fundo #05234A) ──────────────────────────────────────────── */
export const OfferSection = styled.section`
  background: ${NAVY};
  width: 100%;
  padding: 100px 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${WHITE};

  ${media.lessThan("tablet")`
    padding: 60px 0 70px;
  `}
`;

export const DevicesRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;

  p {
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: clamp(16px, 2.5vw, 20px);
    color: ${WHITE};
  }

  .devicesImg {
    width: 100px;
    height: auto;
    object-fit: contain;

    ${media.lessThan("tablet")`
      width: 75px;
    `}
  }
`;

export const PriceCard = styled.div`
  background: ${BG_CREAM};
  color: ${TEXT_DARK};
  width: 100%;
  max-width: 680px;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);

  .priceLabel {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    color: ${TEXT_DARK};
    margin: 0 0 8px;
  }

  .priceValue {
    font-family: Georgia, serif;
    font-size: clamp(48px, 11vw, 110px);
    font-weight: bold;
    color: ${TEXT_DARK};
    line-height: 1;
    margin: 0 0 28px;
  }

  .secureNote {
    margin: 20px 0 0;
    font-family: Georgia, serif;
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    color: ${TEXT_DARK};

    ${media.lessThan("tablet")`
      font-size: 13px;
    `}
  }

  ${media.lessThan("tablet")`
    padding: 36px 20px;
    max-width: 90%;
  `}
`;

/* ── 5. GARANTIA & SEGURANÇA (Fundo #F5F4EC) ────────────────────────────── */
export const TrustSection = styled.section`
  background: ${BG_CREAM};
  width: 100%;
  padding: 90px 0 110px;

  ${media.lessThan("tablet")`
    padding: 50px 0 60px;
  `}
`;

export const TrustRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 16px;
  `}
`;

export const TrustCard = styled.div`
  background: ${BG_SAND};
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);

  .icon {
    font-size: 32px;
    color: ${NAVY};
    margin-bottom: 8px;
  }

  h3 {
    margin: 0 0 12px;
    font-family: "Open Sans", sans-serif;
    font-size: clamp(16px, 2vw, 18px);
    font-weight: bold;
    color: ${TEXT_DARK};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  p {
    margin: 0;
    font-family: Georgia, serif;
    font-style: italic;
    font-size: clamp(15px, 2vw, 18px);
    color: ${TEXT_DARK};
    line-height: 1.5;

    b {
      font-weight: bold;
    }
  }

  ${media.lessThan("tablet")`
    padding: 28px 20px;
  `}
`;

/* ── 6. CONHEÇA MELHOR QUEM CRIOU O CONTEÚDO (Fundo #F5F4EC) ────────────── */
export const AuthorSection = styled.section`
  background: ${BG_CREAM};
  width: 100%;
  padding: 60px 0 110px;

  ${media.lessThan("tablet")`
    padding: 30px 0 60px;
  `}
`;

export const AuthorHeading = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    margin: 0;
    font-family: Georgia, serif;
    font-size: clamp(24px, 4vw, 48px);
    font-weight: normal;
    font-style: italic;
    color: ${TEXT_DARK};
  }

  ${media.lessThan("tablet")`
    margin-bottom: 30px;
  `}
`;

export const AuthorRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
  gap: 50px;

  ${media.lessThan("tablet")`
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 0 16px;
  `}
`;

export const AuthorPhotoCol = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 480px;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    ${media.lessThan("tablet")`
      max-width: 250px;
    `}
  }
`;

export const AuthorTextCol = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .authorTag {
    font-family: "Open Sans", sans-serif;
    font-size: clamp(18px, 2.5vw, 24px);
    color: ${NAVY};
    font-weight: bold;
    margin: 0 0 16px;
    letter-spacing: 0.05em;
  }

  p {
    margin: 0;
    font-family: Georgia, serif;
    font-style: italic;
    font-size: clamp(15px, 2vw, 18px);
    line-height: 2;
    color: ${TEXT_MUTED};
  }

  ${media.lessThan("tablet")`
    align-items: center;

    p {
      line-height: 1.8;
    }
  `}
`;

/* ── 7. FOOTER ORIGINAL (Fundo #F5F4EC) ─────────────────────────────────── */
export const FooterOriginal = styled.footer`
  background: ${BG_CREAM};
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding: 30px 20px;
  text-align: center;

  p {
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 13px;
    color: ${TEXT_MUTED};
  }
`;
