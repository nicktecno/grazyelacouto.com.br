import React, { useEffect } from "react";

import Image from "next/image";
import cover01 from "../../public/images/capa01.jpg";
import cover02 from "../../public/images/capa02.jpg";

import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Link from "next/link";

import { useRouter } from "next/router";

export default function HomePage() {
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

  return (
    <S.GeneralContainer>
      <S.Container01>
        <div className="containerData">
          <span>— Bem Vindas</span>
          <span className="upperCase">
            Realize seu Sonho de Fazer Suas Próprias Roupas!
          </span>
          <a href={"/#choose"}>Quero agora meu curso!</a>
        </div>
        <S.ImageCover01
          src={cover01}
          alt="imagem de Grazyela Couto com uma agulha de costura na mão"
        />
      </S.Container01>
      <S.Subtitle id="choose">Escolha o curso perfeito para você</S.Subtitle>
      <S.Container02>
        <div className="containerData">
          <span className="title">Aprenda a Costurar</span>
          <span className="modified">
            Nesse curso mesmo que você saiba pouco ou nada sobre costura, vamos
            aprender juntinhas, Costurar e Modelar seus moldes base, para
            modelos de blusa, saia, vestidos! Transformaremos esses moldes para
            executar outras lindas peças do mesmo nicho. Com todo o meu auxilio
            e mostro como você pode se apaixonar por esse mundo da Costura.
          </span>
          <a href={"#choose"}>Quero agora!</a>
        </div>
        <S.ImageCover02
          src={cover02}
          alt="imagem de Grazyela Couto costurando em uma máquina de costura industrial"
        />
      </S.Container02>
    </S.GeneralContainer>
  );
}
