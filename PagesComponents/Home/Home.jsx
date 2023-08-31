import React, { useEffect } from "react";

import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Link from "next/link";

import { useRouter } from "next/router";

function HomePage() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <S.BoxNextArrow>
        <div
          className={className}
          style={{
            ...style,
            display: "flex",
            position: "absolute",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: "30px",
            zIndex: "1",

            right: "0px",
          }}
          onClick={onClick}
        />
      </S.BoxNextArrow>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <S.BoxPrevArrow>
        <div
          className={className}
          style={{
            ...style,
            display: "flex",
            position: "absolute",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: "30px",
            zIndex: "1",

            left: "0px",
          }}
          onClick={onClick}
        />
      </S.BoxPrevArrow>
    );
  }

  const settings1 = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return <></>;
}

export default HomePage;
