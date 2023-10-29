import React, { useEffect } from "react";

import cover01 from "../../public/images/capa01.jpg";
import cover02 from "../../public/images/capa02.jpg";
import cover03 from "../../public/images/capa03.jpg";
import cover04 from "../../public/images/capa04.jpg";
import cover05 from "../../public/images/capa05.png";

import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Link from "next/link";

import { useRouter } from "next/router";

export default function HomePage() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[index] = r(item);
    });
    return images;
  }

  const imagesList01 = Object.values(
    importAll(
      require.context(
        "../../public/images/carousel01",
        false,
        /\.(png|jpe?g|svg)$/
      )
    )
  );
  const imagesList02 = Object.values(
    importAll(
      require.context(
        "../../public/images/carousel02",
        false,
        /\.(png|jpe?g|svg)$/
      )
    )
  );

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

  let settings = {
    dots: false,
    arrows: true,
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
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
          priority={true}
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
          <a href={"https://pay.hotmart.com/M72976409H?checkoutMode=10"}>
            Quero agora!
          </a>
        </div>
        <S.ImageCover02
          src={cover02}
          priority={false}
          alt="imagem de Grazyela Couto costurando em uma máquina de costura industrial"
        />
      </S.Container02>
      <S.Container02>
        <div className="containerData">
          <span className="title">Seja Você sua Própria Estilista de Moda</span>
          <span className="modified">
            Quer desenvolver suas habilidades na costura, produzindo peças de
            alfaiataria, como um blazer, uma calça e uma salopete? Você irá
            aprender tudo isso nesse curso, desde a modelagem, corte e costura e
            até mesmo aprender a fazer seu desenho fashion, o famoso croqui de
            moda. Esse curso tem o nível intermediário para avançado. Você não
            vai perder esssa oportunidade né?
          </span>
          <a href={"https://pay.hotmart.com/M70669236F?checkoutMode=10"}>
            Quero agora!
          </a>
        </div>
        <S.ImageCover03
          src={cover03}
          alt="imagem de Grazyela Couto ao lado de um manequim com uma tesoura na mão"
        />
      </S.Container02>
      <S.Container02>
        <div className="containerData">
          <span className="title">Combo Torne-se uma Estilista do Zero</span>
          <span className="modified">
            Sabe aquele famoso 2 em 1? É exatamente o que esse combo significa.
            Nele você terá acesso aos meus dois cursos, vai sair do total zero e
            chegar ao nível de fazer peças alfaiataria.
          </span>
          <a href={"https://pay.hotmart.com/X73383978V"}>Quero agora!</a>
        </div>
        <S.ImageCover02
          src={cover04}
          alt="imagem de Grazyela Couto segurando uma máquina de costura"
        />
      </S.Container02>
      <S.Subtitle id="choose">
        Vem ver o que as agulhinhas estão fazendo!
      </S.Subtitle>
      <S.ContainerSliderCategory>
        <Slider {...settings}>
          {imagesList01.map((img, index) => (
            <div key={index} className="category">
              <img src={img.default.src} alt={`foto da aluna ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </S.ContainerSliderCategory>
      <S.Subtitle id="choose">
        Algumas das peças que você irá aprender
      </S.Subtitle>
      <S.ContainerSliderCategory>
        <Slider {...settings}>
          {imagesList02.map((img, index) => (
            <div key={index} className="category">
              <img src={img.default.src} alt={`peça de roupa ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <S.Container03>
          <S.ImageCover04
            src={cover05}
            alt="imagem de Grazyela Couto segurando uma máquina de costura"
          />
          <div className="containerData">
            <div className="title">Quem será a Prof?</div>
            <div className="data">
              Grazyela Couto, Estilista, Modelista e Costureira, a mais de 4
              anos trabalhando nesse ramo, onde teve sua marca de roupas
              durantes 2 anos e encontrou a paixão em ensinar. Ela diz e deixa o
              incentivo que costurar não é dom ! Vem comigo Agulhinha !!
            </div>
          </div>
        </S.Container03>
      </S.ContainerSliderCategory>
    </S.GeneralContainer>
  );
}
