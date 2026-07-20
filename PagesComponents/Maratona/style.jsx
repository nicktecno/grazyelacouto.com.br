import Image from "next/image";
import styled from "styled-components";

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

export const BoxNextArrow = styled.div`
  display: flex;

  .slick-next:before {
    display: flex;
    width: 20px;
    height: 20px;
    color: var(--font-color);
    background-size: 20px 20px;
  }
`;

export const BoxPrevArrow = styled.div`
  display: flex;

  .slick-prev:before {
    display: flex;
    width: 20px;
    height: 20px;
    color: var(--font-color);
    background-size: 20px 20px;
  }
`;

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1920px;
  align-self: center;
  width: 100%;
`;

export const ImageCover01 = styled(Image)`
  object-fit: cover;
  width: 100%;
  

  ${customMedia.lessThan("notebook")`
          width:100%;
          height: 100%;

        `}
`;

export const ImageCover05 = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: auto;
`;

/** Wrapper para posicionar link invisível sobre o botão desenhado na arte. */
export const ImageHitboxWrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  line-height: 0;

  span {
    display: block !important;
    line-height: 0;
  }

  img {
    position: relative;
    display: block;
    width: 100% !important;
    height: auto !important;
  }
`;

/** Área clicável alinhada em % ao layout da imagem (top/left ou bottom/left + width/height). */
export const CtaHitArea = styled.a`
  position: absolute;
  z-index: 3;
  cursor: pointer;
  text-decoration: none;
  background: transparent !important;
  border: 0;
  margin: 0 !important;
  padding: 0 !important;
  min-width: 0 !important;
  max-width: none !important;
  box-shadow: none !important;
  color: transparent !important;
  font-size: 0 !important;
  line-height: 0 !important;
  overflow: hidden;

  ${(p) => p.$top != null && `top: ${p.$top};`}
  ${(p) => p.$bottom != null && `bottom: ${p.$bottom};`}
  ${(p) => p.$left != null && `left: ${p.$left};`}
  ${(p) => p.$right != null && `right: ${p.$right};`}
  ${(p) => p.$width != null && `width: ${p.$width};`}
  ${(p) => p.$height != null && `height: ${p.$height};`}
  ${(p) => p.$radius && `border-radius: ${p.$radius};`}

  &:focus-visible {
    outline: 3px solid #cc201f;
    outline-offset: 2px;
  }

  &:hover {
    background: transparent !important;
    color: transparent !important;
  }
`;

export const Container01 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  background: var(--default-color);
  justify-content: space-between;

  .primary {
    display: flex;
    flex-direction: row !important;
    width: 100%;
    justify-content: space-between;
  

    ${customMedia.lessThan("mobile")`
        flex-direction: column-reverse !important;     
        `}

    .containerText {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 1;
      padding: 5px;
    }

    span {
      text-align: center;
      font-family: "Seasons" !important;
      font-size: 25px;
      line-height: 30px;
      font-weight: 300;

      &.bold {
        font-weight: bold;
        border-bottom: 2px solid black;
        font-size: 40px;
        line-height: 60px;
        text-align: center;
      }

      &.lemon {
        font-family: "Lemon" !important;
        font-weight: 300;
        font-size: 20px;
        margin-top: 50px;
        text-align: end;
      }
    }

    ${customMedia.lessThan("desktop")`
         
          align-items:center;
        `}

    img {
      border-radius: 0px;
    }
  }

  &.third {
    /* margin-top: 50px; */
  }
  &.secondary {
    /* margin-top: 50px; */
  }

  .containerDataTextOnly {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 50px;
    ${customMedia.lessThan("desktop")`
          font-size:40px;
      
        `}

    ${customMedia.lessThan("notebook")`
          font-size:30px;
          
        `}
    ${customMedia.lessThan("tablet")`
          font-size:25px;
          line-height:30px;
        `}
          ${customMedia.lessThan("mobile")`
          font-size:16px;
          line-height:25px;
        `}

    ${customMedia.lessThan("400px")`
          font-size:12px;
          line-height:20px;
        `}
      span {
      font-family: "Metal" !important;
    }

    .upperCase {
      font-weight: 400;
      text-transform: uppercase;
      font-family: "Cinzel" !important;
    }

    .boxed {
      margin-top: 30px;
      border: 3px solid var(--font-color);
      padding: 25px;
    }

    .regular {
      font-weight: 400;

      font-family: "Forum" !important;
    }

    a {
      background: var(--bt-positive-color);
      transition: 0.3s;
      color: var(--bt-positive-text-color) !important;
      font-size: 18px;
      text-align: center;
      max-width: 400px;
      min-width: 300px;
      align-self: center;
      /* padding: 15px 5px; */
      margin-top: 20px;

      ${customMedia.lessThan("notebook")`
          margin-top:30px;
          
        `}

      ${customMedia.lessThan("tablet")`
          margin-top:10px;
          min-width: 225px;
          
        `}

        ${customMedia.lessThan("mobile")`
        
          padding:15px;
          font-size:14px;
          line-height:14px;
        `}




      :hover {
        background: var(--bt-positive-color-hover);
        color: var(--bt-positive-text-color-hover) !important;
      }
    }
  }

  .containerImageOnly {
    display: flex;
    width: 100%;
    /* padding: 20px; */
    justify-content: center;
    align-items: center;
    text-align: center;
    ${customMedia.lessThan("desktop")`
          font-size:40px;
          text-align:left;
          align-items:flex-start;
        `}

    ${customMedia.lessThan("notebook")`
          font-size:30px;
          
        `}
    ${customMedia.lessThan("tablet")`
          font-size:20px;
          line-height:30px;
        `}
          ${customMedia.lessThan("mobile")`
          font-size:16px;
          line-height:25px;
        `}

    ${customMedia.lessThan("400px")`
          font-size:12px;
          line-height:20px;
        `}
      span {
      font-family: "Metal" !important;
    }

    .upperCase {
      font-weight: 400;
      text-transform: uppercase;
      font-family: "Cinzel" !important;
    }

    .regular {
      font-weight: 400;

      font-family: "Forum" !important;
    }
  }

  .containerData {
    flex-direction: column;
    display: flex;
    font-size: 50px;
    line-height: 50px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;

    &.secondary {
      width: 100%;
      justify-content: center !important;
      align-items: center !important;
      background: #96765c;
      /* background-image: url("/images/capaM02.jpg"); */
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 350px;

      ${customMedia.lessThan("mobile")`
         height: 200px;

        `}
    }
    ${customMedia.lessThan("desktop")`
          font-size:40px;
          text-align:left;
          align-items:flex-start;
        `}

    ${customMedia.lessThan("notebook")`
          font-size:30px;
          
        `}
    ${customMedia.lessThan("tablet")`
          font-size:20px;
          line-height:30px;
        `}
          ${customMedia.lessThan("mobile")`
          font-size:16px;
          line-height:25px;
        `}

    ${customMedia.lessThan("400px")`
          font-size:12px;
          line-height:20px;
        `}
      span {
      font-family: "Metal" !important;
    }

    .upperCase {
      font-weight: 400;
      text-transform: uppercase;
      font-family: "Cinzel" !important;
    }

    .regular {
      font-weight: 400;

      font-family: "Forum" !important;
    }

    .date {
      font-weight: bold;
      margin-top: 20px;
    }

    a {
      background: var(--bt-positive-color);
      transition: 0.3s;
      color: var(--bt-positive-text-color) !important;
      font-size: 18px;
      text-align: center;
      max-width: 400px;
      min-width: 300px;
      align-self: center;
      /* padding: 5px 5px; */
      margin-top: 50px;

      ${customMedia.lessThan("mobile")`
          min-width:250px;
          padding:10px;
          font-size:14px;
          line-height:14px;
        `}

      :hover {
        background: var(--bt-positive-color-hover);
        color: var(--bt-positive-text-color-hover) !important;
      }
    }
  }
`;

export const ContainerBoxes = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  gap: 10px;

  ${customMedia.lessThan("tablet")`
          flex-direction:column;
          
        `}

  .box {
    display: flex;
    background: var(--default-color-hover);
    width: 32%;
    font-size: 20px;
    line-height: 30px;
    padding: 10px;

    ${customMedia.lessThan("tablet")`
          width:100%;
          
        `}
  }
`;

export const Subtitle = styled.div`
  display: flex;
  font-size: 50px;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  font-family: "Cinzel" !important;
  font-weight: bold;
  text-align: center;
  padding: 10px;

  ${customMedia.lessThan("desktop")`
          font-size:40px;
          
        `}

  ${customMedia.lessThan("notebook")`
          font-size:35px;
          margin-top: 20px;
          line-height:35px;
          
        `}
    ${customMedia.lessThan("tablet")`
          font-size:30px;
          
        `}
          ${customMedia.lessThan("mobile")`
          font-size:25px;
          
        `}
`;

export const ImageCover02 = styled(Image)`
  object-fit: cover;
  width: 40%;
  height: auto;

  ${customMedia.lessThan("desktop")`
          object-fit:contain;
          
        `}
  ${customMedia.lessThan("tablet")`
          width:80%;
          
        `}
`;

export const ImageCoverFill = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: auto;
`;

export const ImageCover03 = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  align-self: center;

  ${customMedia.lessThan("desktop")`
  
          object-fit:contain;
          
        `}
  ${customMedia.lessThan("tablet")`
          width:80%;
          
        `}
`;

export const Container02 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--default-color-hover);
  justify-content: space-between;

  margin-top: 50px;

  ${customMedia.lessThan("tablet")`
          flex-direction:column-reverse;
          justify-content:center;
          align-items:center;
          padding:20px 0px;
        `}

  .containerData {
    flex-direction: column;
    display: flex;
    font-size: 30px;
    line-height: 30px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;

    ${customMedia.lessThan("desktop")`
          font-size:20px;
         
        `}

    ${customMedia.lessThan("notebook")`
          font-size:20px;
          
        `}
    ${customMedia.lessThan("tablet")`
          font-size:18px;
          
        `}

        ${customMedia.lessThan("mobile")`
          font-size:16px;
          line-height:22px;
        `}

    ${customMedia.lessThan("400px")`
          font-size:14px;
          line-height:22px;
        `}
      
      
      .title {
      font-family: "Cinzel" !important;
      font-weight: bold;
      font-size: 35px;
      margin-bottom: 10px;

      ${customMedia.lessThan("notebook")`
          font-size:30px;
          
        `}

      ${customMedia.lessThan("tablet")`
          font-size:35px;
          
        `}

      ${customMedia.lessThan("mobile")`
          font-size:20px;
          
        `}
    }

    .modified {
      font-weight: 400;

      font-family: var(--main-font) !important;
    }

    a {
      background: var(--bt-positive-color);
      transition: 0.3s;
      color: var(--bt-positive-text-color) !important;
      font-size: 18px;
      text-align: center;
      max-width: 400px;
      min-width: 300px;
      align-self: center;
      /* padding: 5px 5px; */
      margin-top: 50px;

      ${customMedia.lessThan("notebook")`
          margin-top:30px;
          
        `}

      ${customMedia.lessThan("tablet")`
          margin-top:10px;
          min-width: 225px;
          
        `}

${customMedia.lessThan("mobile")`
         
          padding:10px;
          font-size:14px;
          line-height:14px;
        `}


      :hover {
        background: var(--bt-positive-color-hover);
        color: var(--bt-positive-text-color-hover) !important;
      }
    }
  }
`;

export const ContainerSliderCategory = styled.div`
  display: block;

  width: 100%;
  position: relative;
  max-width: 1920px;
  margin-top: 50px;

  .slick-list {
    padding: 0px;
  }

  .slick-slide {
    margin: 0px;
    margin-bottom: 20px;
  }
  .slick-next:before {
    display: flex;
    width: 25px;
    height: 25px;
    font-size: 25px;
    background-size: 20px 20px;
    color: var(--font-color);
  }
  .slick-prev:before {
    display: flex;
    width: 25px;
    height: 25px;
    font-size: 25px;
    background-size: 20px 20px;
    color: var(--font-color);
  }

  .category {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    width: 160px;
    height: 320px;

    margin-right: 14px;
    justify-content: center;
    align-items: center;

    font-weight: bold;

    ${customMedia.lessThan("notebook")`
      width:170px;

    `}
    ${customMedia.lessThan("tablet")`
      width:130px;
      height:170px;`}

${customMedia.lessThan("irico")`
      width:115px;
`}

  img {
      width: 100%;
      height: 100%;
      margin: 0px;
      object-fit: contain;
    }
  }
`;

export const ImageCover04 = styled(Image)`
  object-fit: contain;
  width: 40%;

  ${customMedia.lessThan("desktop")`
  
          object-fit:contain;
          
        `}
  ${customMedia.lessThan("tablet")`
          width:40%;
          
        `}
`;

export const BlackBackground = styled.div`
  width: 100%;
  background: #000;
  height: 80px;
`;

export const Container03 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 50px;
  padding: 0px 10px;
  background: #000;

  .title {
    display: flex;
    font-size: 50px;
    font-family: "Cormorant Garamond", Georgia, serif !important;
    font-weight: bold;
    line-height: 50px;
    color: #fff;

    ${customMedia.lessThan("tablet")`
          font-size:40px;
          
        `}

    ${customMedia.lessThan("mobile")`
          font-size:30px;
          line-height: 35px;
          
        `}
  }
  .data {
    display: flex;
    font-size: 25px;
    margin-top: 25px;
    line-height: 35px;
    font-family: "Cormorant Garamond", Georgia, serif !important;
    color: #fff;

    ${customMedia.lessThan("mobile")`
    line-height:25px;
          font-size:16px;
          
        `}
  }
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff9f4;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-top: 50px;

  .title {
    font-family: "Metal" !important;
    font-size: 50px;
    line-height: 50px;
    margin-bottom: 20px;

    ${customMedia.lessThan("tablet")`
     line-height:35px;
          font-size:35px;
          
        `}
  }

  .normal {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 30px;
    line-height: 30px;

    ${customMedia.lessThan("tablet")`
    line-height:20px;
          font-size:20px;
          
        `}
  }

  .containerLinks {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 50px;
    svg {
      color: var(--font-color);
      width: 70px;
    }
  }
`;
