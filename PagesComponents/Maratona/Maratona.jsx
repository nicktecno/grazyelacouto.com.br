import React from "react";

import cover01 from "../../public/images/capaM01.jpg";
import cover03 from "../../public/images/capaM03.jpg";
import cover04 from "../../public/images/capaM04.jpg";
import cover05 from "../../public/images/capaM05.png";
import cover06 from "../../public/images/capaM06.jpg";

import cover07 from "../../public/images/capa05.png";
import cover08 from "../../public/images/capaM08.jpg";
import cover09 from "../../public/images/capaM09.jpg";

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
        <div className="primary">
          <S.ImageCover01
            src={cover01}
            priority={true}
            alt="imagem de Grazyela Couto com a blusa pinterest"
          />
          <div className="containerText">
            <span className="bold">Maratona</span>
            <span>Blusa Pinterest</span>
            <span className="lemon">Especial</span>
          </div>
        </div>
      </S.Container01>
      <S.Container01 className="secondary">
        <div className="containerData secondary">
          <a target="_blank" href={"https://go.hotmart.com/R88548272P?dp=1"}>
            Inscreva-se
          </a>
        </div>
      </S.Container01>
      <S.Container01 className="third">
        <S.ImageCoverFill
          src={cover03}
          priority={false}
          alt="imagem de Grazyela Couto com a blusa Pinterest anunciando a data da maratona de 22 a 25 de dezembro com mais 30 dias de acesso"
        />
      </S.Container01>

      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover04}
            alt="Montagem com 3 Grazyelas usando a blusa Pinterest representando os processos de modelagem, corte e costura"
          />
        </div>
      </S.Container01>

      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover06}
            alt="Duas imagens da Grazyela Couto usando a blusa Pinterest"
          />
        </div>
      </S.Container01>
      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05 src={cover08} alt="Cronograma das aulas" />
        </div>
      </S.Container01>
      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover05}
            alt="Esse evento é para você que é iniciante na costura ou quer se profissionalizar!"
          />
        </div>
      </S.Container01>
      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05 src={cover09} alt="Aulas 100% online na Hotmart!" />
        </div>
      </S.Container01>
      <S.ContainerSocialMedia>
        <div className="title">Entrem nos grupos de suporte:</div>

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
            trabalhando nesse ramo, onde teve sua marca de roupas durantes 2
            anos e encontrou a paixão em ensinar. Ela diz e deixa o incentivo
            que costurar não é dom ! Vem comigo Agulhinha !!
          </div>
        </div>
      </S.Container03>
    </S.GeneralContainer>
  );
}
