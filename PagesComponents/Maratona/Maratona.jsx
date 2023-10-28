import React from "react";

import cover01 from "../../public/images/capaM01.jpg";
import cover02 from "../../public/images/capaM02.jpg";
import cover03 from "../../public/images/capaM03.jpg";
import cover04 from "../../public/images/capaM04.png";
import cover05 from "../../public/images/capaM05.png";

import cover07 from "../../public/images/capa05.png";

import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Telegram } from "@styled-icons/boxicons-logos/Telegram";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import Link from "next/link";

export default function MaratonaPage() {
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
          <span>Maratona Vestido Glamour</span>
          <span className="upperCase">
            Comece sua nova jornada por aqui, com mais de 900 agulhinhas
          </span>
          <div className="date">Dos dias 16/10 a 28/10</div>
        </div>
        <S.ImageCover01
          src={cover01}
          priority={true}
          alt="imagem de Grazyela Couto com o vestido glamour"
        />
      </S.Container01>
      <S.Container01 className="secondary">
        <div className="containerData">
          <span className="upperCase">Quero agora meu acesso</span>
          <a href={"/#choose"}>Clique Aqui</a>
        </div>
        <S.ImageCover01
          src={cover02}
          priority={false}
          alt="imagem de Grazyela Couto com o vestido glamour"
        />
      </S.Container01>
      <S.Container01 className="third">
        <div className="containerData">
          <span>Onde vou assistir?</span>
          <span className="regular">
            Assim que você realizar a inscrição a plataforma HOTMART onde
            hospedamos nossos cursos lhe enviará no seu email. O acesso da nossa
            maratona ! E você assistirá por meio do site ou app, e só dar play
            nas aulas .
          </span>
        </div>
        <S.ImageCover01
          src={cover03}
          priority={false}
          alt="imagem de Grazyela Couto com o vestido glamour batendo palmas"
        />
      </S.Container01>
      <S.Container01 className="third">
        <div className="containerData">
          <span>O que vou aprender ? ...."</span>
          <S.ContainerBoxes>
            <div className="box">
              - Nos primeiros dias vamos ver nossas medidas, entender o modelo,
              tecidos croqui de moda e iniciar a modelagem.
            </div>
            <div className="box">
              - Entender as possibilidades com o seu novo vestido glamour, e
              começar o corte do tecido e claro um papo bem legal com a prof
              aqui
            </div>
            <div className="box">
              - E nos últimos dias veremos TUDO sobre a costura, o passo a passo
              do completo Zero !! E claro que aulas bônus também.
            </div>
          </S.ContainerBoxes>
        </div>
      </S.Container01>
      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover04}
            alt="Montagem com 3 Grazyelas com o vestido Glamour"
          />
        </div>
      </S.Container01>

      <S.Container01 className="secondary">
        <div className="containerDataTextOnly">
          <span className="upperCase">Um evento totalmente online</span>
          <span className="upperCase boxed">Por apenas 12 reais</span>
          <a href={"/#choose"}>Quero Participar</a>
        </div>
      </S.Container01>

      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover05}
            alt="Montagem com 3 Grazyelas com o vestido Glamour"
          />
        </div>
      </S.Container01>
      <S.ContainerSocialMedia>
        <div className="title">O lema da Prof:</div>
        <div className="title">
          "Sozinhas podemos andar, mas acompanhadas vamos mais longe..."
        </div>
        <div className="normal">
          Dito isso, entrem nos grupos de suporte para conversarmos sobre nossas
          dúvidas, dicas, ideias, depoimentos, experiências, sugestões e Muitooo
          mais ...
        </div>
        <div className="containerLinks">
          <Link href={"https://chat.whatsapp.com/Cb6bMW1TNl3HYmOAQjaNHh"}>
            <Whatsapp />
          </Link>
          <Link href={"https://t.me/+JVToDD5513MyYjVh"}>
            <Telegram />
          </Link>
        </div>
      </S.ContainerSocialMedia>
      <S.Container03>
        <S.ImageCover04
          src={cover07}
          alt="imagem de Grazyela Couto segurando uma máquina de costura"
        />
        <div className="containerData">
          <div className="title">Quem será a Prof?</div>
          <div className="data">
            Grazyela Couto, Estilista, Modelista e Costureira, a mais de 4 anos
            trabalhando nesse rumo, onde teve sua marca de roupas durantes 2
            anos, e encontrou a paixão em ensinar, e diz e deixa o incentivo que
            costurar não é dom ! Vem comigo Agulhinha !!
          </div>
        </div>
      </S.Container03>
    </S.GeneralContainer>
  );
}
