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
  min-height: 100vh;
  background-color: #fbf9f5;
  color: #2b2725;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
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
  background: rgba(251, 249, 245, 0.92);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(43, 39, 37, 0.08);
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
  font-family: "Seasons", serif, Georgia;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #1e1b18;

  ${media.lessThan("mobile")`
    font-size: 1.2rem;
  `}
`;

export const Badge = styled.span`
  background: #ce171f;
  color: #ffffff;
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
  color: #2b2725;
  border: 1px solid rgba(43, 39, 37, 0.16);
  padding: 8px 14px;
  border-radius: 8px;
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
  }

  &:hover {
    background: #f3efe8;
    border-color: rgba(43, 39, 37, 0.3);
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
  background: #ce171f;
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 14px rgba(206, 23, 31, 0.25);
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: #b51219;
    box-shadow: 0 6px 18px rgba(206, 23, 31, 0.35);
    transform: translateY(-1px);
    color: #ffffff;
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
  border-bottom: 1px solid rgba(43, 39, 37, 0.06);
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
  color: #665f5a;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 999px;
  transition: all 0.2s ease;

  &:hover {
    color: #ce171f;
    background: rgba(206, 23, 31, 0.06);
  }
`;

// Slide / Section Container
export const Section = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 64px 24px;
  position: relative;

  ${media.lessThan("tablet")`
    padding: 40px 18px;
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
  background: linear-gradient(135deg, #1e1b18 0%, #352f2a 100%);
  color: #ffffff;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 20px 48px rgba(30, 27, 24, 0.22);
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
    background: #1e1b18 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

export const HeroContent = styled.div`
  padding: 56px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;

  ${media.lessThan("tablet")`
    padding: 36px 24px;
  `}
`;

export const SubPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: #f7d6d8;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 24px;
  align-self: flex-start;
`;

export const HeroTitle = styled.h1`
  font-family: "Seasons", serif, Georgia;
  font-size: 3.6rem;
  line-height: 1.08;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: #ffffff;
  letter-spacing: -0.5px;

  span {
    color: #f19a9e;
    font-style: italic;
    font-weight: 400;
  }

  ${media.lessThan("tablet")`
    font-size: 2.6rem;
  `}

  ${media.lessThan("mobile")`
    font-size: 2.2rem;
  `}
`;

export const HeroTagline = styled.p`
  font-size: 1.18rem;
  line-height: 1.6;
  color: #e2dbd5;
  margin: 0 0 28px 0;
  max-width: 520px;
  font-weight: 400;

  ${media.lessThan("tablet")`
    font-size: 1.02rem;
  `}
`;

export const HeroMetaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
`;

export const MetaTag = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
    color: #f19a9e;
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
    background: linear-gradient(to right, #1e1b18 0%, rgba(30, 27, 24, 0.1) 40%, transparent 100%);
    pointer-events: none;

    ${media.lessThan("notebook")`
      background: linear-gradient(to bottom, transparent 0%, #1e1b18 100%);
    `}
  }
`;

// Section Header with Title and Eyebrow
export const SectionHeading = styled.div`
  text-align: ${(props) => (props.$center ? "center" : "left")};
  margin-bottom: 40px;

  @media print {
    margin-bottom: 24px;
  }
`;

export const Eyebrow = styled.div`
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ce171f;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$center ? "center" : "flex-start")};
  gap: 8px;
`;

export const SectionTitle = styled.h2`
  font-family: "Seasons", serif, Georgia;
  font-size: 2.5rem;
  line-height: 1.15;
  color: #1e1b18;
  margin: 0 0 12px 0;

  ${media.lessThan("tablet")`
    font-size: 1.9rem;
  `}
`;

export const SectionDesc = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: #635b55;
  max-width: 680px;
  margin: 0 auto;
  margin-left: ${(props) => (props.$center ? "auto" : "0")};
  margin-right: ${(props) => (props.$center ? "auto" : "0")};
`;

// Slide 2: Bio & Pillars (Like PDF Page 2 & 3)
export const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  align-items: center;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
    gap: 28px;
  `}

  @media print {
    gap: 20px;
  }
`;

export const StoryImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(43, 39, 37, 0.12);
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
  gap: 20px;
`;

export const HighlightQuote = styled.blockquote`
  font-family: "Seasons", serif, Georgia;
  font-size: 1.65rem;
  line-height: 1.3;
  color: #1e1b18;
  border-left: 4px solid #ce171f;
  padding-left: 18px;
  margin: 0;
  font-style: italic;

  ${media.lessThan("tablet")`
    font-size: 1.35rem;
  `}
`;

export const Paragraph = styled.p`
  font-size: 1.02rem;
  line-height: 1.7;
  color: #4f4843;
  margin: 0;

  strong {
    color: #1e1b18;
    font-weight: 700;
  }
`;

export const PillarList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 10px;
`;

export const PillarCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(43, 39, 37, 0.08);
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 4px 12px rgba(43, 39, 37, 0.03);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(206, 23, 31, 0.3);
  }

  h4 {
    margin: 0 0 6px 0;
    font-size: 1.02rem;
    color: #1e1b18;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.5;
    color: #635b55;
  }
`;

// Slide 3: Big Metric Numbers (Like PDF Page 4)
export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;

  ${media.lessThan("notebook")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan("mobile")`
    grid-template-columns: 1fr;
  `}

  @media print {
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 12px;
  }
`;

export const MetricCard = styled.div`
  background: ${(props) => (props.$primary ? "linear-gradient(135deg, #ce171f 0%, #a00f16 100%)" : "#ffffff")};
  color: ${(props) => (props.$primary ? "#ffffff" : "#1e1b18")};
  border-radius: 20px;
  padding: 28px 24px;
  border: 1px solid ${(props) => (props.$primary ? "transparent" : "rgba(43, 39, 37, 0.08)")};
  box-shadow: 0 10px 24px rgba(43, 39, 37, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  ${media.lessThan("tablet")`
    padding: 22px 18px;
  `}

  @media print {
    box-shadow: none;
    border-radius: 10px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

export const MetricNumber = styled.div`
  font-family: "Seasons", serif, Georgia;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
  color: ${(props) => (props.$light ? "#ffffff" : "#ce171f")};

  ${media.lessThan("tablet")`
    font-size: 2.3rem;
  `}
`;

export const MetricLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${(props) => (props.$light ? "rgba(255, 255, 255, 0.85)" : "#635b55")};
  margin-bottom: 6px;
`;

export const MetricSubtext = styled.div`
  font-size: 0.8rem;
  line-height: 1.4;
  color: ${(props) => (props.$light ? "rgba(255, 255, 255, 0.7)" : "#887f78")};
`;

// Slide 4: Audience Demographics (Like PDF Page 5)
export const DemographicsCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 36px;
  border: 1px solid rgba(43, 39, 37, 0.08);
  box-shadow: 0 12px 32px rgba(43, 39, 37, 0.04);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 28px;
  `}

  @media print {
    box-shadow: none;
    border-radius: 12px;
    padding: 20px;
  }
`;

export const DemoSubSection = styled.div`
  h4 {
    font-family: "Seasons", serif, Georgia;
    font-size: 1.3rem;
    color: #1e1b18;
    margin: 0 0 18px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const GenderBigCard = styled.div`
  background: linear-gradient(135deg, #faf5f3 0%, #f7ebe8 100%);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 24px;
  text-align: center;
`;

export const GenderValue = styled.div`
  font-family: "Seasons", serif, Georgia;
  font-size: 2.8rem;
  font-weight: 700;
  color: ${(props) => (props.$female ? "#ce171f" : "#4a5568")};
  line-height: 1;
`;

export const GenderTag = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #635b55;
  margin-top: 4px;
`;

export const BarRow = styled.div`
  margin-bottom: 14px;
`;

export const BarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  font-weight: 600;
  color: #2b2725;
  margin-bottom: 6px;
`;

export const BarTrack = styled.div`
  height: 10px;
  background: #eee8e2;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
`;

export const BarFill = styled.div`
  height: 100%;
  width: ${(props) => props.$percentage}%;
  background: ${(props) => props.$color || "#ce171f"};
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
  gap: 24px;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
    gap: 20px;
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
  border: 1px solid rgba(43, 39, 37, 0.08);
  box-shadow: 0 10px 24px rgba(43, 39, 37, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(43, 39, 37, 0.09);
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
  background: #1e1b18;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ReelBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(30, 27, 24, 0.85);
  backdrop-filter: blur(8px);
  color: #ffffff;
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
  background: rgba(30, 27, 24, 0.85);
  backdrop-filter: blur(8px);
  color: #ffffff;
  padding: 8px 14px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  font-weight: 700;

  span {
    color: #f19a9e;
  }
`;

export const ReelBody = styled.div`
  padding: 18px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    margin: 0 0 12px 0;
    font-size: 0.98rem;
    line-height: 1.4;
    color: #1e1b18;
  }
`;

export const ReelStatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid rgba(43, 39, 37, 0.06);
  font-size: 0.78rem;
  color: #635b55;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
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
  border: 1px solid rgba(43, 39, 37, 0.08);
  border-radius: 18px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 6px 18px rgba(43, 39, 37, 0.03);

  svg {
    width: 38px;
    height: 38px;
    color: ${(props) => props.$iconColor || "#ce171f"};
    flex-shrink: 0;
  }

  h4 {
    margin: 0 0 4px 0;
    font-size: 1.05rem;
    color: #1e1b18;
  }

  p {
    margin: 0;
    font-size: 0.82rem;
    color: #635b55;
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
  border: 1px solid rgba(43, 39, 37, 0.08);
  box-shadow: 0 6px 16px rgba(43, 39, 37, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  position: relative;

  p {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.55;
    color: #3b3531;
    font-style: italic;
  }

  span {
    font-size: 0.78rem;
    font-weight: 700;
    color: #ce171f;
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
  border: 1px solid rgba(43, 39, 37, 0.08);
  border-radius: 18px;
  padding: 28px 24px;
  box-shadow: 0 8px 20px rgba(43, 39, 37, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(206, 23, 31, 0.35);
    transform: translateY(-3px);
  }

  .icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(206, 23, 31, 0.08);
    color: #ce171f;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  h4 {
    font-size: 1.15rem;
    color: #1e1b18;
    margin: 0 0 10px 0;
  }

  p {
    font-size: 0.88rem;
    line-height: 1.55;
    color: #635b55;
    margin: 0 0 14px 0;
  }

  ul {
    margin: 0;
    padding-left: 18px;
    font-size: 0.82rem;
    color: #4f4843;
    line-height: 1.6;
  }
`;

// Slide 9: Investment Packages (Like PDF Page 12)
export const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${media.lessThan("notebook")`
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  `}

  @media print {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 14px;
  }
`;

export const PackageCard = styled.div`
  background: ${(props) => (props.$highlight ? "#ffffff" : "#f7f4ee")};
  border-radius: 24px;
  padding: 36px 28px;
  border: 2px solid ${(props) => (props.$highlight ? "#ce171f" : "rgba(43, 39, 37, 0.08)")};
  box-shadow: ${(props) =>
    props.$highlight ? "0 18px 40px rgba(206, 23, 31, 0.12)" : "0 8px 20px rgba(43, 39, 37, 0.04)"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  ${props =>
    props.$highlight &&
    css`
      &::before {
        content: "MAIS RECOMENDADO";
        position: absolute;
        top: -14px;
        left: 50%;
        transform: translateX(-50%);
        background: #ce171f;
        color: #ffffff;
        font-size: 0.68rem;
        font-weight: 800;
        letter-spacing: 1.2px;
        padding: 4px 14px;
        border-radius: 999px;
      }
    `}

  h3 {
    font-family: "Seasons", serif, Georgia;
    font-size: 1.6rem;
    color: #1e1b18;
    margin: 0 0 8px 0;
  }

  .price {
    font-family: "Seasons", serif, Georgia;
    font-size: 2.2rem;
    font-weight: 700;
    color: #ce171f;
    margin: 16px 0;

    small {
      font-size: 0.95rem;
      color: #635b55;
      font-family: sans-serif;
    }
  }

  .desc {
    font-size: 0.88rem;
    line-height: 1.5;
    color: #635b55;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 28px 0;

    li {
      font-size: 0.85rem;
      line-height: 1.7;
      color: #3b3531;
      display: flex;
      align-items: center;
      gap: 10px;

      &::before {
        content: "✓";
        color: #ce171f;
        font-weight: bold;
      }
    }
  }
`;

export const PackageCTA = styled.a`
  background: ${(props) => (props.$highlight ? "#ce171f" : "#1e1b18")};
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.$highlight ? "#b51219" : "#3b3531")};
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

// Slide 10: Final Contact & Terms (Like PDF Page 13)
export const ContactCard = styled.div`
  background: linear-gradient(135deg, #1e1b18 0%, #2f2a26 100%);
  color: #ffffff;
  border-radius: 28px;
  padding: 56px 48px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
    padding: 36px 24px;
    gap: 30px;
  `}

  @media print {
    box-shadow: none;
    border-radius: 12px;
    background: #1e1b18 !important;
    padding: 28px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

export const ContactLeft = styled.div`
  h2 {
    font-family: "Seasons", serif, Georgia;
    font-size: 2.8rem;
    margin: 0 0 12px 0;
    color: #ffffff;

    span {
      color: #f19a9e;
      font-style: italic;
    }
  }

  p {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #d6cfc7;
    margin: 0 0 24px 0;
  }

  .terms {
    font-size: 0.72rem;
    line-height: 1.5;
    color: #8c827a;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 16px;
    margin-top: 24px;
  }
`;

export const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ContactDirectBtn = styled.a`
  background: ${(props) => (props.$whatsapp ? "#25D366" : "rgba(255, 255, 255, 0.1)")};
  color: #ffffff;
  border: 1px solid ${(props) => (props.$whatsapp ? "#25D366" : "rgba(255, 255, 255, 0.2)")};
  padding: 16px 24px;
  border-radius: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.2s ease;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: ${(props) => (props.$whatsapp ? "#20ba59" : "rgba(255, 255, 255, 0.18)")};
    transform: translateY(-2px);
    color: #ffffff;
  }
`;

// Sync Status Floating Info
export const SyncFooter = styled.div`
  text-align: center;
  padding: 30px 16px;
  font-size: 0.8rem;
  color: #887f78;

  a {
    color: #ce171f;
    text-decoration: none;
    font-weight: 600;
  }

  @media print {
    display: none !important;
  }
`;
