import React from "react";

import cover01 from "../../public/images/capaM01.jpg";
import cover02 from "../../public/images/capaM02.jpg";
import cover03 from "../../public/images/capaM03.jpg";
import cover04 from "../../public/images/capaM04.jpg";
import cover05 from "../../public/images/capaM05.png";
import cover06 from "../../public/images/capaM06.jpg";

import cover07 from "../../public/images/capaM07.jpg";
import cover08 from "../../public/images/capaM08.jpg";
import cover09 from "../../public/images/capa05.png";
import cover10 from "../../public/images/capaM10.jpg";
import cover11 from "../../public/images/capaM09.jpg";

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
          <S.ImageCoverFill
            src={cover01}
            priority={true}
            alt="imagem de Grazyela Couto com Vestido Verona"
          />
          {/* <div className="containerText">
            <span className="bold">Maratona</span>
            <span>Vestido Verona</span> */}
            {/* <span className="lemon">Especial</span> */}
          {/* </div> */}
        </div>
      </S.Container01>
      {/* <S.Container01 className="secondary">
        <div className="containerData secondary">
          <a
            target="_blank"
            href={"https://pay.hotmart.com/B101360900J"}
          >
            Inscreva-se
          </a>
        </div>
      </S.Container01> */}
      <S.Container01 className="third">
        <S.ImageCoverFill
          src={cover02}
          priority={false}
          alt="imagem de Grazyela Couto com a Vestido Verona anunciando a data da maratona"
        />
      </S.Container01>

       <S.Container01 className="third">
        <S.ImageCoverFill
          src={cover03}
          priority={false}
          alt="imagem de Grazyela Couto com a Vestido Verona anunciando a data da maratona que vai ser um sucesso"
        />
      </S.Container01>

      <S.Container01 className="third">       
        <a 
            target="_blank"
            href={"https://pay.hotmart.com/B101360900J"} className="containerImageOnly">
          
          <S.ImageCover05
            src={cover04}
            alt="Montagem com 3 Grazyelas usando a Vestido Verona representando os processos de modelagem, corte e costura"
          />
        </a>
      </S.Container01>

      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover05}
            alt="Tres imagens da Grazyela Couto usando a Vestido Verona"
          />
        </div>
      </S.Container01>
      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05 src={cover06} alt="A verdade é: nunca deixamos de aprender" />
        </div>
      </S.Container01>
      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover07}
            alt="Esse evento é para você que é iniciante na costura ou quer se profissionalizar!"
          />
        </div>
      </S.Container01>
      <S.Container01 className="third">
        <a 
            target="_blank"
            href={"https://pay.hotmart.com/B101360900J"} className="containerImageOnly">
          
          <S.ImageCover05 src={cover08} alt="Clique aqui!" />
        </a>
      </S.Container01>
       <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover10}
            alt="Inspiração para o Vestido Verona"
          />
        </div>
      </S.Container01>
      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover11}
            alt="Aulas 100% online na plataforma Hotmart"
          />
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
          src={cover09}
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
