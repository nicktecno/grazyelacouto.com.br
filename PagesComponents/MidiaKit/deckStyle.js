import styled, { css } from "styled-components";

// Tamanho A4 Paisagem exato: 297mm x 210mm (proporção padrão internacional de apresentações)
export const DeckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1a1715;
  padding: 40px 0;
  gap: 32px;

  @media print {
    display: block !important;
    padding: 0 !important;
    margin: 0 !important;
    background: transparent !important;
    gap: 0 !important;
  }
`;

export const SlideContainer = styled.div`
  width: 297mm;
  height: 210mm;
  min-height: 210mm;
  max-height: 210mm;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background: ${(props) => (props.$dark ? "#100e0c" : "#faf9f7")};
  color: ${(props) => (props.$dark ? "#ffffff" : "#100e0c")};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;

  @media print {
    box-shadow: none !important;
    page-break-after: always !important;
    break-after: page !important;
    page-break-inside: avoid !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    width: 297mm !important;
    height: 210mm !important;
    margin: 0 !important;
  }
`;

// Slide Header compartilhado
export const SlideHeader = styled.div`
  padding: 14mm 18mm 6mm 18mm;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid ${(props) => (props.$dark ? "rgba(226, 201, 144, 0.2)" : "#eae5df")};
`;

export const SlideHeaderTitle = styled.div`
  h2 {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 2.1rem;
    font-weight: 700;
    line-height: 1.1;
    margin: 4px 0 0 0;
    color: ${(props) => (props.$dark ? "#ffffff" : "#100e0c")};
  }
`;

export const SlideEyebrow = styled.div`
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${(props) => (props.$gold ? "var(--atelier-gold-bright, #e2c990)" : "var(--atelier-accent, #8f1a20)")};
`;

export const SlideNumber = styled.div`
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => (props.$dark ? "rgba(255, 255, 255, 0.4)" : "#8c7e75")};
`;

export const SlideBody = styled.div`
  flex: 1;
  padding: 8mm 18mm 12mm 18mm;
  display: flex;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

// Footer discreto do slide
export const SlideFooter = styled.div`
  padding: 3mm 18mm;
  font-size: 0.68rem;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  color: ${(props) => (props.$dark ? "rgba(255, 255, 255, 0.4)" : "#a39992")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${(props) => (props.$dark ? "rgba(255, 255, 255, 0.08)" : "#ede8e2")};
`;

/* ── SLIDE 1: CAPA ── */
export const CoverLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CoverContent = styled.div`
  flex: 1.15;
  padding: 24mm 16mm 24mm 22mm;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
`;

export const CoverBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(196, 164, 106, 0.15);
  border: 1px solid var(--atelier-gold, #c4a46a);
  color: var(--atelier-gold-bright, #e2c990);
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 20px;
  width: fit-content;
`;

export const CoverTitle = styled.h1`
  font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
  font-size: 4.4rem;
  line-height: 0.95;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 16px 0;
  letter-spacing: -1px;

  span {
    color: var(--atelier-gold-bright, #e2c990);
    font-style: italic;
    font-weight: 400;
  }
`;

export const CoverTagline = styled.p`
  font-family: var(--atelier-body, "DM Sans", sans-serif);
  font-size: 1.05rem;
  line-height: 1.5;
  color: #d1c8c0;
  margin: 0 0 28px 0;
  max-width: 480px;
`;

export const CoverPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
`;

export const CoverPillItem = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const CoverPhotoSide = styled.div`
  flex: 0.85;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #100e0c 0%, rgba(16, 14, 12, 0.4) 30%, transparent 100%);
    z-index: 1;
  }
`;

/* ── SLIDE 2: QUEM É GRAZYELA ── */
export const BioSlideLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 28px;
  align-items: center;
`;

export const BioSlideText = styled.div`
  flex: 1.2;

  blockquote {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.45rem;
    font-style: italic;
    line-height: 1.35;
    color: var(--atelier-accent, #8f1a20);
    margin: 0 0 16px 0;
    border-left: 3px solid var(--atelier-accent, #8f1a20);
    padding-left: 16px;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #4a423d;
    margin: 0 0 16px 0;
  }
`;

export const BioHighlightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 14px;
`;

export const BioHighlightBox = styled.div`
  background: #f4ede6;
  border: 1px solid #e5dad0;
  border-radius: 12px;
  padding: 12px 16px;

  strong {
    display: block;
    font-family: var(--atelier-ui, "DM Sans", sans-serif);
    font-size: 0.85rem;
    color: #100e0c;
    margin-bottom: 2px;
  }

  span {
    font-size: 0.78rem;
    color: #6b6058;
    line-height: 1.3;
    display: block;
  }
`;

export const BioSlidePhoto = styled.div`
  flex: 0.8;
  height: 125mm;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(16, 14, 12, 0.12);
  border: 2px solid #eae5df;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }
`;

/* ── SLIDE 3: DIFERENCIAIS ── */
export const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;
  align-content: center;
`;

export const PillarCard = styled.div`
  background: #ffffff;
  border: 1px solid #e8e2db;
  border-radius: 16px;
  padding: 20px 22px;
  box-shadow: 0 4px 12px rgba(16, 14, 12, 0.04);
  display: flex;
  gap: 16px;
  align-items: flex-start;

  .pillar-icon {
    font-size: 1.8rem;
    line-height: 1;
    background: #faf5f2;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #ebd9d2;
  }

  h4 {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.35rem;
    font-weight: 700;
    color: #100e0c;
    margin: 0 0 6px 0;
  }

  p {
    font-size: 0.86rem;
    line-height: 1.45;
    color: #5c534d;
    margin: 0;
  }
`;

/* ── SLIDE 4: INSTAGRAM METRICAS ── */
export const InstagramSlideLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
  align-items: center;
`;

export const PhoneMockupSide = styled.div`
  flex: 0.75;
  background: #100e0c;
  border-radius: 28px;
  border: 3px solid #2e2824;
  padding: 16px 14px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.15);
  color: #ffffff;

  .phone-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }

  .phone-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--atelier-gold, #c4a46a);
  }

  .phone-user strong {
    display: block;
    font-size: 0.95rem;
  }

  .phone-user span {
    font-size: 0.76rem;
    color: var(--atelier-gold-bright, #e2c990);
  }

  .phone-stats-row {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
  }

  .phone-stat-item strong {
    display: block;
    font-size: 1.1rem;
    color: #ffffff;
  }

  .phone-stat-item span {
    font-size: 0.68rem;
    color: #a89f97;
  }

  .phone-bio {
    font-size: 0.76rem;
    line-height: 1.4;
    color: #cfc6be;
    margin-top: 10px;
  }
`;

export const MetricsCardsSide = styled.div`
  flex: 1.25;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const BigMetricDeckCard = styled.div`
  background: ${(props) => (props.$featured ? "linear-gradient(135deg, #8f1a20 0%, #6b1217 100%)" : "#ffffff")};
  color: ${(props) => (props.$featured ? "#ffffff" : "#100e0c")};
  border: 1px solid ${(props) => (props.$featured ? "transparent" : "#e8e2db")};
  border-radius: 18px;
  padding: 22px 20px;
  box-shadow: 0 6px 18px rgba(16, 14, 12, 0.05);

  .metric-val {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    color: ${(props) => (props.$featured ? "#ffffff" : "var(--atelier-accent, #8f1a20)")};
    margin-bottom: 6px;
  }

  .metric-label {
    font-family: var(--atelier-ui, "DM Sans", sans-serif);
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }

  .metric-desc {
    font-size: 0.78rem;
    line-height: 1.35;
    color: ${(props) => (props.$featured ? "rgba(255, 255, 255, 0.8)" : "#6e645c")};
  }
`;

/* ── SLIDE 5: DEMOGRAFIA ── */
export const DemographicsSlideLayout = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr 1fr;
  gap: 20px;
  width: 100%;
  align-items: stretch;
`;

export const DemoDeckColumn = styled.div`
  background: #ffffff;
  border: 1px solid #e8e2db;
  border-radius: 18px;
  padding: 20px 18px;
  box-shadow: 0 4px 14px rgba(16, 14, 12, 0.04);
  display: flex;
  flex-direction: column;

  h4 {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.25rem;
    color: #100e0c;
    margin: 0 0 16px 0;
    border-bottom: 1px solid #ede8e2;
    padding-bottom: 8px;
  }
`;

export const GenderBigDeck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
  background: #faf4f0;
  border-radius: 14px;
  padding: 16px;

  .gender-number {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 3.8rem;
    font-weight: 700;
    color: var(--atelier-accent, #8f1a20);
    line-height: 1;
  }

  .gender-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #100e0c;
    margin-top: 4px;
  }

  .gender-sub {
    font-size: 0.78rem;
    color: #7a6e66;
    margin-top: 6px;
  }
`;

export const BarMiniRow = styled.div`
  margin-bottom: 10px;

  .bar-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.76rem;
    font-weight: 600;
    color: #4a423d;
    margin-bottom: 4px;
  }

  .bar-bg {
    height: 8px;
    background: #ede8e2;
    border-radius: 4px;
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    background: ${(props) => (props.$primary ? "var(--atelier-accent, #8f1a20)" : "#9c8e85")};
    width: ${(props) => props.$w}%;
  }
`;

export const TagPillGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  justify-content: center;
`;

export const TagPill = styled.div`
  background: #f7f2ed;
  border-left: 3px solid var(--atelier-accent, #8f1a20);
  border-radius: 4px;
  padding: 7px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #2b2725;
`;

/* ── SLIDE 6 & 7: REELS & DESTAQUES ── */
export const ReelsDeckGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
`;

export const ReelDeckCard = styled.div`
  background: #ffffff;
  border: 1px solid #e8e2db;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(16, 14, 12, 0.05);
  display: flex;
  flex-direction: column;
`;

export const ReelDeckMedia = styled.div`
  position: relative;
  aspect-ratio: 9 / 11;
  background: #100e0c;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }

  .reel-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(16, 14, 12, 0.88);
    color: #ffffff;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 3px 8px;
    border-radius: 999px;
  }

  .reel-stats-overlay {
    position: absolute;
    bottom: 8px;
    left: 8px;
    right: 8px;
    background: rgba(16, 14, 12, 0.85);
    backdrop-filter: blur(4px);
    color: #ffffff;
    padding: 6px 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    font-size: 0.78rem;
    font-weight: 700;
  }
`;

export const ReelDeckBody = styled.div`
  padding: 12px 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-family: var(--atelier-ui, "DM Sans", sans-serif);
    font-size: 0.88rem;
    font-weight: 700;
    color: #100e0c;
    margin: 0 0 8px 0;
    line-height: 1.35;
  }

  .reel-footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #6e645c;
    border-top: 1px solid #f0eae4;
    padding-top: 8px;
  }
`;

/* ── SLIDE 8: PROVA SOCIAL ── */
export const TestimonialsDeckGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  align-content: center;
`;

export const TestimonialDeckCard = styled.div`
  background: #ffffff;
  border: 1px solid #eae5df;
  border-radius: 16px;
  padding: 16px 18px;
  box-shadow: 0 4px 12px rgba(16, 14, 12, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 0.85rem;
    line-height: 1.45;
    color: #423b36;
    margin: 0 0 12px 0;
    font-style: italic;
  }

  .author {
    font-family: var(--atelier-ui, "DM Sans", sans-serif);
    font-size: 0.76rem;
    font-weight: 700;
    color: var(--atelier-accent, #8f1a20);
    border-top: 1px solid #f4ede6;
    padding-top: 8px;
  }
`;

/* ── SLIDE 9: FORMATOS COMERCIAIS ── */
export const FormatsDeckGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  width: 100%;
  align-content: center;
`;

export const FormatDeckCard = styled.div`
  background: #ffffff;
  border: 1px solid #e8e2db;
  border-radius: 16px;
  padding: 18px 16px;
  box-shadow: 0 4px 14px rgba(16, 14, 12, 0.04);
  display: flex;
  flex-direction: column;

  .format-icon {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  h4 {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.25rem;
    color: #100e0c;
    margin: 0 0 8px 0;
    line-height: 1.2;
  }

  p {
    font-size: 0.78rem;
    line-height: 1.4;
    color: #5c534d;
    margin: 0 0 12px 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid #ede8e2;
    padding-top: 10px;
  }

  li {
    font-size: 0.74rem;
    color: #403833;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 6px;

    &::before {
      content: "✓";
      color: var(--atelier-accent, #8f1a20);
      font-weight: bold;
    }
  }
`;

/* ── SLIDE 10: PACOTES ── */
export const PackagesDeckGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  align-content: center;
`;

export const PackageDeckCard = styled.div`
  background: ${(props) => (props.$featured ? "#100e0c" : "#ffffff")};
  color: ${(props) => (props.$featured ? "#ffffff" : "#100e0c")};
  border: 2px solid ${(props) => (props.$featured ? "var(--atelier-gold, #c4a46a)" : "#e8e2db")};
  border-radius: 20px;
  padding: ${(props) => (props.$featured ? "26px 20px 20px 20px" : "20px")};
  box-shadow: 0 8px 24px rgba(16, 14, 12, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;

  .feat-tag {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--atelier-gold, #c4a46a);
    color: #100e0c;
    font-size: 0.68rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 4px 14px;
    border-radius: 999px;
    white-space: nowrap;
  }

  h3 {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.55rem;
    margin: ${(props) => (props.$featured ? "6px 0 4px 0" : "0 0 4px 0")};
    color: ${(props) => (props.$featured ? "#ffffff" : "#100e0c")};
  }

  .pack-desc {
    font-size: 0.78rem;
    line-height: 1.35;
    color: ${(props) => (props.$featured ? "#cfc6be" : "#6e645c")};
    margin-bottom: 12px;
  }

  .pack-price {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.8rem;
    font-weight: 700;
    color: ${(props) => (props.$featured ? "var(--atelier-gold-bright, #e2c990)" : "var(--atelier-accent, #8f1a20)")};
    margin-bottom: 14px;
    border-bottom: 1px solid ${(props) => (props.$featured ? "rgba(255, 255, 255, 0.12)" : "#f0eae4")};
    padding-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;
  }

  li {
    font-size: 0.78rem;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${(props) => (props.$featured ? "#e2dad2" : "#4a423d")};

    &::before {
      content: "✓";
      color: ${(props) => (props.$featured ? "var(--atelier-gold-bright, #e2c990)" : "var(--atelier-accent, #8f1a20)")};
      font-weight: bold;
    }
  }
`;

/* ── SLIDE 11: CONTATO / ENCERRAMENTO ── */
export const ContactSlideLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ContactContentSide = styled.div`
  flex: 1.15;
  padding: 16mm 16mm 16mm 22mm;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 3rem;
    color: #ffffff;
    line-height: 1.1;
    margin: 0 0 14px 0;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #d1c8c0;
    margin: 0 0 24px 0;
    max-width: 480px;
  }
`;

export const ContactCardsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

export const ContactInfoItem = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 600;

  .contact-label {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--atelier-gold-bright, #e2c990);
    display: block;
  }
`;

export const ContactPhotoSide = styled.div`
  flex: 0.85;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #100e0c 0%, rgba(16, 14, 12, 0.4) 30%, transparent 100%);
    z-index: 1;
  }
`;
