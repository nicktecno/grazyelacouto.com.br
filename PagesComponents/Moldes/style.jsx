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
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
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
  --atelier-display: "Cormorant Garamond", Georgia, serif;
  --atelier-body:    "Lora", Georgia, "Times New Roman", serif;
  --atelier-ui:      "DM Sans", system-ui, sans-serif;
`;

export const Page = styled.main`
  ${tokens}
  width: 100%;
  background: var(--atelier-paper);
  color: var(--atelier-ink);
  font-family: var(--atelier-body);
  overflow-x: clip;
`;

/* ─────────────────────────────────────────
   1. HERO
───────────────────────────────────────── */
export const Hero = styled.section`
  position: relative;
  width: 100%;
  padding: clamp(3.5rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem) clamp(2.5rem, 4vw, 4rem);
  background: linear-gradient(180deg, #f7f1e9 0%, #faf9f7 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const HeroInner = styled.div`
  max-width: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  animation: ${fadeUp} 0.85s ${easeOutExpo} both;

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 1.15rem;
    background: #ffffff;
    border: 1px solid #ebdccb;
    border-radius: 999px;
    font-family: var(--atelier-ui);
    font-size: 0.82rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--atelier-accent);
    box-shadow: 0 4px 12px rgba(143, 26, 32, 0.06);
  }

  h1 {
    margin: 0;
    font-family: var(--atelier-display);
    font-size: clamp(2.6rem, 6vw, 4.8rem);
    font-weight: 500;
    line-height: 1.08;
    color: var(--atelier-ink);

    em {
      font-style: italic;
      color: var(--atelier-accent);
    }
  }

  p {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: clamp(1.05rem, 1.8vw, 1.25rem);
    line-height: 1.65;
    color: var(--atelier-graphite);
    max-width: 44rem;
  }
`;

export const TrustBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 3vw, 2.5rem);
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.12);
  width: 100%;

  .trustItem {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--atelier-ui);
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--atelier-graphite);

    span.icon {
      font-size: 1.15rem;
    }
  }
`;

/* ─────────────────────────────────────────
   2. CATEGORY FILTERS
───────────────────────────────────────── */
export const FilterSection = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 0 clamp(1.5rem, 4vw, 4rem);
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const FilterBtn = styled.button`
  padding: 0.6rem 1.4rem;
  background: ${(p) => (p.$active ? "var(--atelier-ink)" : "#ffffff")};
  color: ${(p) => (p.$active ? "#ffffff" : "var(--atelier-ink)")};
  border: 1px solid ${(p) => (p.$active ? "var(--atelier-ink)" : "#e2dbd2")};
  border-radius: 999px;
  font-family: var(--atelier-ui);
  font-size: 0.86rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${(p) => (p.$active ? "var(--atelier-ink)" : "#f5eee4")};
    border-color: var(--atelier-ink);
  }
`;

/* ─────────────────────────────────────────
   3. PRODUCTS GRID
───────────────────────────────────────── */
export const ProductsSection = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3rem);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.5rem, 3vw, 2.5rem);

  ${customMedia.lessThan("notebook")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${customMedia.lessThan("tablet")`
    grid-template-columns: 1fr;
    max-width: 480px;
  `}
`;

export const ProductCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #ebe4dc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.09);
    border-color: var(--atelier-gold);
  }

  .badgePopular {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 2;
    padding: 0.35rem 0.85rem;
    background: var(--atelier-accent);
    color: #ffffff;
    font-family: var(--atelier-ui);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(143, 26, 32, 0.3);
  }
`;

export const CardMedia = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #f7f3ee;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.6s ease;
  }

  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.75rem 1.5rem 1.5rem;
  gap: 0.85rem;

  .metaRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--atelier-ui);
    font-size: 0.78rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 700;

    .category {
      color: var(--atelier-gold-deep);
    }

    .sizes {
      color: var(--atelier-accent);
      background: #fcf1f2;
      padding: 0.2rem 0.55rem;
      border-radius: 3px;
    }
  }

  h2 {
    margin: 0;
    font-family: var(--atelier-display);
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.15;
    color: var(--atelier-ink);
  }

  .desc {
    margin: 0;
    font-family: var(--atelier-body);
    font-size: 0.95rem;
    line-height: 1.55;
    color: var(--atelier-graphite);
  }

  .featuresList {
    margin: 0.5rem 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;

    li {
      font-family: var(--atelier-ui);
      font-size: 0.84rem;
      color: var(--atelier-graphite);
      display: flex;
      align-items: center;
      gap: 0.45rem;

      &::before {
        content: "✓";
        color: #27ae60;
        font-weight: bold;
      }
    }
  }

  .actionArea {
    margin-top: auto;
    padding-top: 1.25rem;
    border-top: 1px solid #f0ebe4;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .btnBuy {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0.95rem 1.5rem;
      background: var(--atelier-accent);
      color: #ffffff !important;
      font-family: var(--atelier-ui);
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 4px;
      box-shadow: 0 4px 14px rgba(143, 26, 32, 0.2);
      transition: all 0.3s ease;

      &:hover {
        background: var(--atelier-accent-hover);
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(143, 26, 32, 0.3);
      }
    }

    .formatNote {
      text-align: center;
      font-family: var(--atelier-ui);
      font-size: 0.74rem;
      color: #7a736d;
      letter-spacing: 0.04em;
    }
  }
`;

/* ─────────────────────────────────────────
   4. HOW IT WORKS (COMO FUNCIONA O MOLDE)
───────────────────────────────────────── */
export const HowItWorksSection = styled.section`
  width: 100%;
  background: var(--atelier-mist);
  padding: clamp(3.5rem, 6vw, 5.5rem) clamp(1.5rem, 4vw, 4rem);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  .inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .header {
    text-align: center;
    max-width: 44rem;

    .eyebrow {
      font-family: var(--atelier-ui);
      font-size: 0.85rem;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--atelier-accent);
    }

    h2 {
      margin: 0.5rem 0 0;
      font-family: var(--atelier-display);
      font-size: clamp(2.2rem, 4.5vw, 3.4rem);
      font-weight: 500;
      color: var(--atelier-ink);
    }

    p {
      margin: 0.75rem 0 0;
      font-family: var(--atelier-body);
      font-size: 1.05rem;
      color: var(--atelier-graphite);
    }
  }

  .stepsGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    width: 100%;

    ${customMedia.lessThan("notebook")`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${customMedia.lessThan("mobile")`
      grid-template-columns: 1fr;
    `}
  }

  .stepCard {
    background: #ffffff;
    padding: 2rem 1.5rem;
    border-radius: 6px;
    border: 1px solid #ebdccb;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .stepNum {
      font-family: var(--atelier-display);
      font-size: 2.2rem;
      font-weight: 600;
      color: var(--atelier-gold-deep);
      line-height: 1;
    }

    h3 {
      margin: 0;
      font-family: var(--atelier-ui);
      font-size: 1.08rem;
      font-weight: 700;
      color: var(--atelier-ink);
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: 0.92rem;
      line-height: 1.55;
      color: var(--atelier-graphite);
    }
  }
`;

/* ─────────────────────────────────────────
   5. UPGRADE TO FULL COURSE BANNER
───────────────────────────────────────── */
export const CourseBannerSection = styled.section`
  max-width: 1100px;
  margin: clamp(3rem, 6vw, 5rem) auto;
  padding: 0 clamp(1.5rem, 4vw, 2rem);
  width: 100%;

  .bannerCard {
    position: relative;
    background: linear-gradient(135deg, #2b111a 0%, #4a1c2d 100%);
    color: #ffffff;
    border-radius: 12px;
    padding: clamp(2.5rem, 6vw, 4.5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;
    box-shadow: 0 16px 40px rgba(43, 17, 26, 0.25);
    overflow: hidden;

    ${customMedia.lessThan("tablet")`
      flex-direction: column;
      text-align: center;
      align-items: center;
    `}

    &::after {
      content: "";
      position: absolute;
      top: -50%;
      right: -20%;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(196, 164, 106, 0.18) 0%, transparent 70%);
      pointer-events: none;
    }
  }

  .content {
    max-width: 38rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    .tag {
      font-family: var(--atelier-ui);
      font-size: 0.82rem;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--atelier-gold-bright);
    }

    h2 {
      margin: 0;
      font-family: var(--atelier-display);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 500;
      line-height: 1.15;
    }

    p {
      margin: 0;
      font-family: var(--atelier-body);
      font-size: 1.05rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.88);
    }
  }

  .ctaBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 1.25rem 2.4rem;
    background: var(--atelier-paper);
    color: var(--atelier-ink) !important;
    font-family: var(--atelier-ui);
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      background: var(--atelier-gold);
      transform: translateY(-2px);
    }
  }
`;

/* ─────────────────────────────────────────
   6. FAQ
───────────────────────────────────────── */
export const FaqSection = styled.section`
  max-width: 860px;
  margin: 0 auto clamp(4rem, 7vw, 6rem);
  padding: 0 clamp(1.5rem, 4vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .faqHeader {
    text-align: center;

    .eyebrow {
      font-family: var(--atelier-ui);
      font-size: 0.85rem;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--atelier-accent);
    }

    h2 {
      margin: 0.4rem 0 0;
      font-family: var(--atelier-display);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 500;
      color: var(--atelier-ink);
    }
  }

  .faqList {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }
`;

export const FaqItem = styled.div`
  background: #ffffff;
  border: 1px solid #ebdccb;
  border-radius: 6px;
  overflow: hidden;
`;

export const FaqBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.35rem 1.5rem;
  background: transparent;
  border: none;
  font-family: var(--atelier-display);
  font-size: 1.25rem;
  font-weight: 600;
  text-align: left;
  color: var(--atelier-ink);
  cursor: pointer;

  span.icon {
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--atelier-accent);
    transition: transform 0.3s ease;
    transform: ${(p) => (p.$open ? "rotate(45deg)" : "rotate(0)")};
  }
`;

export const FaqAnswer = styled.div`
  display: ${(p) => (p.$open ? "block" : "none")};
  padding: 0 1.5rem 1.35rem;
  font-family: var(--atelier-body);
  font-size: 0.98rem;
  line-height: 1.65;
  color: var(--atelier-graphite);
  border-top: 1px solid #f6f0ea;
  padding-top: 1rem;
`;
