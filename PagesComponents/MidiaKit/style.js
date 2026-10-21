import styled, { keyframes, css } from "styled-components";
import { generateMedia } from "styled-media-query";

const media = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Page = styled.div`
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
  --atelier-display: "Cormorant Garamond", "Seasons", Georgia, serif;
  --atelier-body: "Lora", Georgia, "Times New Roman", serif;
  --atelier-ui: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

  min-height: 100vh;
  background-color: var(--atelier-paper, #faf9f7);
  color: var(--atelier-graphite, #3a342f);
  font-family: var(--atelier-body, "Lora", Georgia, serif);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  position: relative;

  @media print {
    background-color: #ffffff !important;
    color: #111111 !important;
  }
`;

// Top Sticky Executive Bar
export const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 249, 247, 0.94);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(58, 52, 47, 0.08);
  padding: 14px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;

  @media print {
    display: none !important;
  }

  ${media.lessThan("tablet")`
    padding: 12px 16px;
    flex-wrap: wrap;
    gap: 12px;
  `}
`;

export const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const BrandTitle = styled.span`
  font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--atelier-ink, #100e0c);

  ${media.lessThan("mobile")`
    font-size: 1.2rem;
  `}
`;

export const Badge = styled.span`
  background: var(--atelier-accent, #8f1a20);
  color: #ffffff !important;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 4px 10px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const LiveIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #2e6d3e;
  background: rgba(46, 109, 62, 0.09);
  padding: 4px 10px;
  border-radius: 999px;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #27ae60;
    animation: ${pulse} 2s infinite ease-in-out;
  }

  ${media.lessThan("notebook")`
    display: none;
  `}
`;

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${media.lessThan("mobile")`
    width: 100%;
    justify-content: space-between;
  `}
`;

export const SecondaryBtn = styled.button`
  background: #ffffff;
  color: var(--atelier-ink, #100e0c) !important;
  border: 1px solid var(--atelier-stone, #cfc9c2);
  padding: 8px 14px;
  border-radius: 8px;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
    color: var(--atelier-accent, #8f1a20) !important;
  }

  &:hover {
    background: var(--atelier-mist, #e8e4df);
    color: var(--atelier-ink, #100e0c) !important;
    border-color: var(--atelier-graphite, #3a342f);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  ${media.lessThan("mobile")`
    flex: 1;
    justify-content: center;
    padding: 8px 10px;
  `}
`;

export const PrimaryBtn = styled.a`
  background: var(--atelier-accent, #8f1a20);
  color: #ffffff !important;
  padding: 8px 18px;
  border-radius: 8px;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none !important;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 14px rgba(143, 26, 32, 0.25);
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
    color: #ffffff !important;
    fill: currentColor !important;
  }

  &:hover {
    background: var(--atelier-accent-hover, #6b1217);
    box-shadow: 0 6px 18px rgba(143, 26, 32, 0.35);
    transform: translateY(-1px);
    color: #ffffff !important;
  }

  ${media.lessThan("mobile")`
    flex: 1.2;
    justify-content: center;
    padding: 8px 12px;
  `}
`;

// Navigation Anchor Pill Row
export const NavTabs = styled.nav`
  background: #ffffff;
  border-bottom: 1px solid rgba(58, 52, 47, 0.06);
  padding: 10px 24px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  gap: 10px;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media print {
    display: none !important;
  }
`;

export const NavTabItem = styled.a`
  color: var(--atelier-graphite, #3a342f) !important;
  text-decoration: none !important;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 999px;
  transition: all 0.2s ease;

  &:hover {
    color: var(--atelier-accent, #8f1a20) !important;
    background: rgba(143, 26, 32, 0.08);
  }
`;

// Slide / Section Container
export const Section = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 84px 24px;
  position: relative;

  ${media.lessThan("tablet")`
    padding: 56px 20px;
  `}

  @media print {
    padding: 24px 0 !important;
    page-break-after: always;
    break-after: page;
    page-break-inside: avoid;
    break-inside: avoid;
  }
`;

// Slide 1: Hero Cover
export const HeroCover = styled.div`
  background: linear-gradient(135deg, #100e0c 0%, #1c1815 60%, #3a342f 100%);
  color: #ffffff;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(196, 164, 106, 0.22);
  box-shadow: 0 20px 48px rgba(16, 14, 12, 0.25);
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  min-height: 580px;
  position: relative;

  ${media.lessThan("notebook")`
    grid-template-columns: 1fr;
  `}

  @media print {
    box-shadow: none;
    border-radius: 12px;
    background: #100e0c !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

export const HeroContent = styled.div`
  padding: 64px 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;

  ${media.lessThan("tablet")`
    padding: 40px 24px;
  `}
`;

export const SubPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(196, 164, 106, 0.16);
  border: 1px solid rgba(196, 164, 106, 0.45);
  color: var(--atelier-gold-bright, #e2c990) !important;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 7px 16px;
  border-radius: 999px;
  margin-bottom: 28px;
  align-self: flex-start;

  svg {
    color: var(--atelier-gold-bright, #e2c990) !important;
    fill: currentColor !important;
  }
`;

export const HeroTitle = styled.h1`
  font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
  font-size: 3.8rem;
  line-height: 1.12;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #ffffff;
  letter-spacing: -0.5px;

  span {
    color: var(--atelier-gold-bright, #e2c990);
    font-style: italic;
    font-weight: 400;
  }

  ${media.lessThan("tablet")`
    font-size: 2.8rem;
    line-height: 1.18;
  `}

  ${media.lessThan("mobile")`
    font-size: 2.3rem;
  `}
`;

export const HeroTagline = styled.p`
  font-size: 1.18rem;
  line-height: 1.75;
  color: var(--atelier-mist, #e8e4df);
  margin: 0 0 32px 0;
  max-width: 540px;
  font-weight: 400;

  ${media.lessThan("tablet")`
    font-size: 1.05rem;
    margin-bottom: 24px;
  `}
`;

export const HeroMetaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
`;

export const MetaTag = styled.div`
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(196, 164, 106, 0.35);
  padding: 8px 16px;
  border-radius: 999px;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff !important;
  text-decoration: none !important;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
    color: var(--atelier-gold-bright, #e2c990) !important;
  }

  &:hover {
    background: rgba(196, 164, 106, 0.25);
    border-color: var(--atelier-gold, #c4a46a);
    transform: translateY(-1px);
    color: #ffffff !important;
  }
`;

export const HeroPhotoSide = styled.div`
  position: relative;
  min-height: 380px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #100e0c 0%, rgba(16, 14, 12, 0.2) 40%, transparent 100%);
    pointer-events: none;

    ${media.lessThan("notebook")`
      background: linear-gradient(to bottom, transparent 0%, #100e0c 100%);
    `}
  }
`;

// Section Header with Title and Eyebrow
export const SectionHeading = styled.div`
  text-align: ${(props) => (props.$center ? "center" : "left")};
  margin-bottom: 54px;

  @media print {
    margin-bottom: 24px;
  }
`;

export const Eyebrow = styled.div`
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2.2px;
  color: var(--atelier-accent, #8f1a20);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$center ? "center" : "flex-start")};
  gap: 8px;
`;

export const SectionTitle = styled.h2`
  font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
  font-size: 2.6rem;
  line-height: 1.25;
  color: var(--atelier-ink, #100e0c);
  margin: 0 0 16px 0;

  ${media.lessThan("tablet")`
    font-size: 2rem;
    line-height: 1.3;
  `}
`;

export const SectionDesc = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--atelier-graphite, #3a342f);
  max-width: 700px;
  margin: 0 auto;
  margin-left: ${(props) => (props.$center ? "auto" : "0")};
  margin-right: ${(props) => (props.$center ? "auto" : "0")};
`;

// Slide 2: Bio & Pillars (Like PDF Page 2 & 3)
export const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
    gap: 36px;
  `}

  @media print {
    gap: 20px;
  }
`;

export const StoryImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(16, 14, 12, 0.12);
  aspect-ratio: 4 / 4.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 25%;
  }

  @media print {
    box-shadow: none;
    border-radius: 8px;
  }
`;

export const StoryTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const HighlightQuote = styled.blockquote`
  font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
  font-size: 1.7rem;
  line-height: 1.4;
  color: var(--atelier-ink, #100e0c);
  border-left: 4px solid var(--atelier-accent, #8f1a20);
  padding-left: 20px;
  margin: 0;
  font-style: italic;

  ${media.lessThan("tablet")`
    font-size: 1.4rem;
  `}
`;

export const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--atelier-graphite, #3a342f);
  margin: 0;

  strong {
    color: var(--atelier-ink, #100e0c);
    font-weight: 700;
  }
`;

export const PillarList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  margin-top: 18px;
`;

export const PillarCard = styled.div`
  background: #ffffff;
  border: 1px solid var(--atelier-mist, #e8e4df);
  border-radius: 16px;
  padding: 22px 20px;
  box-shadow: 0 4px 14px rgba(16, 14, 12, 0.04);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(143, 26, 32, 0.3);
  }

  h4 {
    margin: 0 0 8px 0;
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.15rem;
    color: var(--atelier-ink, #100e0c);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--atelier-graphite, #3a342f);
  }
`;

// Slide 3: Big Metric Numbers (Like PDF Page 4)
export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 44px;

  ${media.lessThan("notebook")`
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  `}

  ${media.lessThan("mobile")`
    grid-template-columns: 1fr;
    gap: 16px;
  `}

  @media print {
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 12px;
  }
`;

export const MetricCard = styled.div`
  background: ${(props) =>
    props.$primary ? "linear-gradient(135deg, #8f1a20 0%, #6b1217 100%)" : "#ffffff"};
  color: ${(props) => (props.$primary ? "#ffffff" : "var(--atelier-ink, #100e0c)")};
  border-radius: 20px;
  padding: 32px 28px;
  border: 1px solid ${(props) => (props.$primary ? "transparent" : "var(--atelier-mist, #e8e4df)")};
  box-shadow: 0 10px 24px rgba(16, 14, 12, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  min-height: 180px;

  ${media.lessThan("tablet")`
    padding: 26px 20px;
    min-height: auto;
  `}

  @media print {
    box-shadow: none;
    border-radius: 10px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

export const MetricNumber = styled.div`
  font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
  color: ${(props) => (props.$light ? "#ffffff" : "var(--atelier-accent, #8f1a20)")};

  ${media.lessThan("tablet")`
    font-size: 2.5rem;
  `}
`;

export const MetricLabel = styled.div`
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.88rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${(props) => (props.$light ? "rgba(255, 255, 255, 0.9)" : "var(--atelier-graphite, #3a342f)")};
  margin-bottom: 8px;
`;

export const MetricSubtext = styled.div`
  font-size: 0.84rem;
  line-height: 1.5;
  color: ${(props) => (props.$light ? "rgba(255, 255, 255, 0.75)" : "#7a726b")};
`;

// Slide 4: Audience Demographics (Like PDF Page 5)
export const DemographicsCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 44px 38px;
  border: 1px solid var(--atelier-mist, #e8e4df);
  box-shadow: 0 12px 32px rgba(16, 14, 12, 0.04);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
    padding: 28px 20px;
    gap: 36px;
  `}

  @media print {
    box-shadow: none;
    border-radius: 12px;
    padding: 20px;
  }
`;

export const DemoSubSection = styled.div`
  h4 {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.45rem;
    color: var(--atelier-ink, #100e0c);
    margin: 0 0 22px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const GenderBigCard = styled.div`
  background: linear-gradient(135deg, #faf5f3 0%, #f7ebe8 100%);
  border: 1px solid var(--atelier-mist, #e8e4df);
  border-radius: 18px;
  padding: 28px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  text-align: center;
`;

export const GenderValue = styled.div`
  font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => (props.$female ? "var(--atelier-accent, #8f1a20)" : "var(--atelier-graphite, #3a342f)")};
  line-height: 1;
`;

export const GenderTag = styled.div`
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.88rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--atelier-graphite, #3a342f);
  margin-top: 6px;
`;

export const BarRow = styled.div`
  margin-bottom: 18px;
`;

export const BarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--atelier-ink, #100e0c);
  margin-bottom: 8px;
`;

export const BarTrack = styled.div`
  height: 11px;
  background: var(--atelier-mist, #e8e4df);
  border-radius: 999px;
  overflow: hidden;
  position: relative;
`;

export const BarFill = styled.div`
  height: 100%;
  width: ${(props) => props.$percentage}%;
  background: ${(props) => props.$color || "var(--atelier-accent, #8f1a20)"};
  border-radius: 999px;
  transition: width 0.8s ease-out;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// Slide 5: Feed & Stories Mockups & Highlights (Like PDF Page 6)
export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
    gap: 24px;
  `}

  @media print {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 16px;
  }
`;

export const ReelCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--atelier-mist, #e8e4df);
  box-shadow: 0 10px 24px rgba(16, 14, 12, 0.05);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(16, 14, 12, 0.09);
    border-color: rgba(143, 26, 32, 0.3);

    img {
      transform: scale(1.04);
    }
  }

  @media print {
    box-shadow: none;
    border-radius: 10px;
  }
`;

export const ReelMedia = styled.div`
  position: relative;
  aspect-ratio: 9 / 12;
  overflow: hidden;
  background: var(--atelier-ink, #100e0c);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    transition: transform 0.4s ease;
  }
`;

export const ReelBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(16, 14, 12, 0.85);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 999px;
`;

export const ReelViewsOverlay = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  background: rgba(16, 14, 12, 0.85);
  backdrop-filter: blur(8px);
  color: #ffffff;
  padding: 8px 14px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.85rem;
  font-weight: 700;

  span {
    color: var(--atelier-gold-bright, #e2c990);
  }
`;

export const ReelBody = styled.div`
  padding: 22px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    margin: 0 0 14px 0;
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.15rem;
    line-height: 1.45;
    color: var(--atelier-ink, #100e0c);
    font-weight: 600;
  }
`;

export const ReelStatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid var(--atelier-mist, #e8e4df);
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.82rem;
  color: var(--atelier-graphite, #3a342f);

  div {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }
`;

// Slide 6: Multi-platform Presence (Instagram, TikTok, YouTube - PDF Page 7)
export const PlatformRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 24px;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}
`;

export const PlatformCard = styled.div`
  background: #ffffff;
  border: 1px solid var(--atelier-mist, #e8e4df);
  border-radius: 18px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 6px 18px rgba(16, 14, 12, 0.03);
  text-decoration: none !important;
  color: inherit !important;
  cursor: pointer;
  transition: all 0.25s ease;

  svg {
    width: 38px;
    height: 38px;
    color: ${(props) => props.$iconColor || "var(--atelier-accent, #8f1a20)"};
    flex-shrink: 0;
  }

  h4 {
    margin: 0 0 4px 0;
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.18rem;
    color: var(--atelier-ink, #100e0c) !important;
    transition: color 0.2s ease;
  }

  p {
    margin: 0;
    font-size: 0.84rem;
    color: var(--atelier-graphite, #3a342f) !important;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: var(--atelier-accent, #8f1a20);
    box-shadow: 0 10px 24px rgba(16, 14, 12, 0.08);

    h4 {
      color: var(--atelier-accent, #8f1a20) !important;
    }
  }
`;

// Slide 7: Why Follow Me / Testimonials (Like PDF Page 8)
export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  ${media.lessThan("notebook")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan("mobile")`
    grid-template-columns: 1fr;
  `}

  @media print {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 14px;
  }
`;

export const TestimonialBubble = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 22px;
  border: 1px solid var(--atelier-mist, #e8e4df);
  box-shadow: 0 6px 16px rgba(16, 14, 12, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  position: relative;

  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--atelier-ink-soft, #1c1815);
    font-style: italic;
  }

  span {
    font-family: var(--atelier-ui, "DM Sans", sans-serif);
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--atelier-accent, #8f1a20);
  }
`;

// Slide 8: Formats for Brands / Partnership Opportunities (Checklist Item 5)
export const FormatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}

  @media print {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 12px;
  }
`;

export const FormatCard = styled.div`
  background: #ffffff;
  border: 1px solid var(--atelier-mist, #e8e4df);
  border-radius: 20px;
  padding: 36px 30px;
  box-shadow: 0 8px 24px rgba(16, 14, 12, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(143, 26, 32, 0.35);
    transform: translateY(-3px);
  }

  .icon-wrap {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: rgba(143, 26, 32, 0.08);
    color: var(--atelier-accent, #8f1a20);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 22px;

    svg {
      width: 26px;
      height: 26px;
    }
  }

  h4 {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.35rem;
    color: var(--atelier-ink, #100e0c);
    margin: 0 0 14px 0;
    line-height: 1.35;
  }

  p {
    font-size: 0.94rem;
    line-height: 1.7;
    color: var(--atelier-graphite, #3a342f);
    margin: 0 0 20px 0;
  }

  ul {
    margin: 0;
    padding-left: 20px;
    font-size: 0.88rem;
    color: var(--atelier-graphite, #3a342f);
    line-height: 1.75;

    li {
      margin-bottom: 8px;
    }
  }
`;

// Slide 9: Investment Packages (Like PDF Page 12)
export const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  ${media.lessThan("notebook")`
    grid-template-columns: 1fr;
    max-width: 520px;
    margin: 0 auto;
    gap: 28px;
  `}

  @media print {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 14px;
  }
`;

export const PackageCard = styled.div`
  background: ${(props) => (props.$highlight ? "#ffffff" : "#fcfbfa")};
  border-radius: 26px;
  padding: 44px 34px;
  border: 2px solid ${(props) => (props.$highlight ? "var(--atelier-accent, #8f1a20)" : "var(--atelier-mist, #e8e4df)")};
  box-shadow: ${(props) =>
    props.$highlight ? "0 20px 48px rgba(143, 26, 32, 0.12)" : "0 8px 24px rgba(16, 14, 12, 0.04)"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  ${(props) =>
    props.$highlight &&
    css`
      &::before {
        content: "MAIS RECOMENDADO";
        position: absolute;
        top: -14px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--atelier-accent, #8f1a20);
        color: #ffffff !important;
        font-family: var(--atelier-ui, "DM Sans", sans-serif);
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 1.4px;
        padding: 5px 16px;
        border-radius: 999px;
      }
    `}

  h3 {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 1.85rem;
    color: var(--atelier-ink, #100e0c);
    margin: 0 0 10px 0;
  }

  .price {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 2.1rem;
    font-weight: 700;
    color: var(--atelier-accent, #8f1a20);
    margin: 20px 0;

    small {
      font-size: 0.95rem;
      color: var(--atelier-graphite, #3a342f);
      font-family: var(--atelier-ui, "DM Sans", sans-serif);
    }
  }

  .desc {
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--atelier-graphite, #3a342f);
    margin-bottom: 28px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 36px 0;

    li {
      font-size: 0.88rem;
      line-height: 1.75;
      color: var(--atelier-ink-soft, #1c1815);
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;

      &::before {
        content: "✓";
        color: var(--atelier-accent, #8f1a20);
        font-weight: bold;
      }
    }
  }
`;

export const PackageCTA = styled.a`
  background: ${(props) => (props.$highlight ? "var(--atelier-accent, #8f1a20)" : "var(--atelier-ink, #100e0c)")};
  color: #ffffff !important;
  padding: 14px 22px;
  border-radius: 12px;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-align: center;
  text-decoration: none !important;
  display: block;
  box-shadow: ${(props) =>
    props.$highlight ? "0 4px 16px rgba(143, 26, 32, 0.3)" : "0 4px 16px rgba(16, 14, 12, 0.2)"};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.$highlight ? "var(--atelier-accent-hover, #6b1217)" : "var(--atelier-graphite, #3a342f)")};
    color: #ffffff !important;
    transform: translateY(-2px);
  }
`;

// Slide 10: Final Contact & Terms (Like PDF Page 13)
export const ContactCard = styled.div`
  background: linear-gradient(135deg, #100e0c 0%, #1c1815 60%, #3a342f 100%);
  color: #ffffff;
  border-radius: 28px;
  padding: 64px 54px;
  border: 1px solid rgba(196, 164, 106, 0.22);
  box-shadow: 0 20px 48px rgba(16, 14, 12, 0.25);
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
    padding: 40px 26px;
    gap: 36px;
  `}

  @media print {
    box-shadow: none;
    border-radius: 12px;
    background: #100e0c !important;
    padding: 30px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

export const ContactLeft = styled.div`
  h2 {
    font-family: var(--atelier-display, "Cormorant Garamond", "Seasons", serif);
    font-size: 3rem;
    margin: 0 0 16px 0;
    line-height: 1.15;
    color: #ffffff;

    span {
      color: var(--atelier-gold-bright, #e2c990);
      font-style: italic;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--atelier-mist, #e8e4df);
    margin: 0 0 28px 0;
  }

  .terms {
    font-size: 0.78rem;
    line-height: 1.7;
    color: var(--atelier-stone, #cfc9c2);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding-top: 22px;
    margin-top: 32px;
  }
`;

export const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContactDirectBtn = styled.a`
  background: ${(props) => (props.$whatsapp ? "#25D366" : "rgba(255, 255, 255, 0.12)")};
  color: ${(props) => (props.$whatsapp ? "#0d1b10" : "#ffffff")} !important;
  border: 1px solid ${(props) => (props.$whatsapp ? "#25D366" : "rgba(196, 164, 106, 0.45)")};
  padding: 18px 26px;
  border-radius: 14px;
  text-decoration: none !important;
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-weight: 700;
  font-size: 0.98rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  transition: all 0.2s ease;

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => (props.$whatsapp ? "#0d1b10" : "var(--atelier-gold-bright, #e2c990)")} !important;
    fill: currentColor !important;
    flex-shrink: 0;
  }

  &:hover {
    background: ${(props) => (props.$whatsapp ? "#20ba59" : "rgba(196, 164, 106, 0.25)")};
    border-color: ${(props) => (props.$whatsapp ? "#20ba59" : "var(--atelier-gold, #c4a46a)")};
    transform: translateY(-2px);
    color: ${(props) => (props.$whatsapp ? "#0d1b10" : "#ffffff")} !important;
  }
`;

// Sync Status Floating Info
export const SyncFooter = styled.div`
  text-align: center;
  padding: 30px 16px;
  font-family: var(--atelier-ui, "DM Sans", sans-serif);
  font-size: 0.82rem;
  color: var(--atelier-graphite, #3a342f);

  a {
    color: var(--atelier-accent, #8f1a20);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  @media print {
    display: none !important;
  }
`;

export const ScreenLayoutWrapper = styled.div`
  display: block;

  @media print {
    display: none !important;
  }
`;

export const PrintDeckWrapper = styled.div`
  display: none;

  @media print {
    display: block !important;
    width: 297mm !important;
    margin: 0 !important;
    padding: 0 !important;
  }
`;

