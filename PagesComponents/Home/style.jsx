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
  width: 40%;
  height: auto;
`;

export const Container01 = styled.div`
  display: flex;
  width: 100%;

  background: var(--default-color-hover);
  justify-content: space-between;

  .containerData {
    flex-direction: column;
    display: flex;
    font-size: 50px;
    line-height: 50px;
    padding: 20px;
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

    a {
      background: var(--bt-positive-color);
      transition: 0.3s;
      color: var(--bt-positive-text-color) !important;
      font-size: 18px;
      text-align: center;
      max-width: 400px;
      min-width: 300px;
      align-self: center;
      padding: 5px 5px;
      margin-top: 50px;

      ${customMedia.lessThan("notebook")`
          margin-top:30px;
          
        `}

      ${customMedia.lessThan("tablet")`
          margin-top:10px;
          min-width: 225px;
          
        `}

${customMedia.lessThan("mobile")`
          min-width:auto;
          padding:10px;
          font-size:14px;
          line-height:14px;
        `}

${customMedia.lessThan("400px")`
          font-size:12px;
          padding:10px;
          
        `}

${customMedia.lessThan("350px")`
          font-size:12px;
          padding:5px;
          
        `}
      :hover {
        background: var(--bt-positive-color-hover);
        color: var(--bt-positive-text-color-hover) !important;
      }
    }
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
  ${customMedia.lessThan("notebook")`
          width:80%;
          
        `}
`;

export const ImageCover03 = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  align-self: center;

  ${customMedia.lessThan("desktop")`
  
          object-fit:contain;
          
        `}
  ${customMedia.lessThan("notebook")`
          width:80%;
          
        `}
`;

export const ContainerVideo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--default-color-hover);
  justify-content: space-between;
  padding: 20px;
  margin-top: 50px;
  align-items: center;
  gap: 20px;

  ${customMedia.lessThan("tablet")`
         flex-direction:column;
        `}

  iframe {
    width: 48%;

    ${customMedia.lessThan("tablet")`
          width: 100%;
        `}
  }

  h3 {
    font-size: 30px;
  }

  .containerData {
    display: flex;
    width: 48%;
    flex-direction: column;

    ${customMedia.lessThan("tablet")`
          width: 100%;
        `}
  }
  img {
    width: auto;
    content: url(/images/arrow.jpg);

    ${customMedia.lessThan("tablet")`
         content: url(/images/arrow2.jpg);
        `}
  }
`;

export const Container02 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--default-color-hover);
  justify-content: space-between;

  margin-top: 50px;

  ${customMedia.lessThan("notebook")`
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
      padding: 5px 5px;
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
      height:210px;
      `}

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

export const Container03 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 50px;
  padding: 0px 10px;

  .title {
    display: flex;
    font-size: 50px;
    font-family: "Bodoni" !important;
    font-weight: bold;
    line-height: 50px;

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
    font-family: "Bodoni" !important;

    ${customMedia.lessThan("mobile")`
    line-height:25px;
          font-size:16px;
          
        `}
  }
`;
