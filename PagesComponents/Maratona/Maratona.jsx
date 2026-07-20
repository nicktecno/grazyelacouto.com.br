import React from "react";

import m00 from "../../public/images/maratona/00.PNG";
import m01 from "../../public/images/maratona/01.PNG";
import m02 from "../../public/images/maratona/02.PNG";
import m03 from "../../public/images/maratona/03.PNG";
import m04 from "../../public/images/maratona/04.PNG";
import m05 from "../../public/images/maratona/05.PNG";
import m06 from "../../public/images/maratona/06.PNG";
import m07 from "../../public/images/maratona/07.PNG";
import m08 from "../../public/images/maratona/08.PNG";

import * as S from "./style";

import { Telegram } from "@styled-icons/boxicons-logos/Telegram";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import Link from "next/link";

const cover01 = m00;
const cover02 = m01;
const cover03 = m02;
const cover04 = m03;
const cover05 = m04;
const cover06 = m05;
const cover07 = m06;
const cover08 = m07;
const cover11 = m08;

const HOTMART_CHECKOUT =
  "https://pay.hotmart.com/G105717138M?bid=1778094668954";

export default function MaratonaPage() {
  return (
    <S.GeneralContainer>
      <S.Container01>
        <div className="primary">
          <S.ImageHitboxWrap>
            <S.ImageCoverFill
              src={cover01}
              priority={true}
              alt="imagem de Grazyela Couto com o Casaco Perfeito"
            />
            <S.CtaHitArea
              href={HOTMART_CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero minha vaga na maratona Casaco Perfeito"
              title="Quero minha vaga"
              $top="71%"
              $left="5%"
              $width="38%"
              $height="11%"
            />
          </S.ImageHitboxWrap>
          {/* <div className="containerText">
            <span className="bold">Maratona</span>
            <span>Casaco Perfeito</span> */}
          {/* <span className="lemon">Especial</span> */}
          {/* </div> */}
        </div>
      </S.Container01>
      {/* <S.Container01 className="secondary">
        <div className="containerData secondary">
          <a
            target="_blank"
            href={HOTMART_CHECKOUT}
          >
            Inscreva-se
          </a>
        </div>
      </S.Container01> */}
      <S.Container01 className="third">
        <S.ImageCoverFill
          src={cover02}
          priority={false}
          alt="imagem de Grazyela Couto com o Casaco Perfeito anunciando a data da maratona"
        />
      </S.Container01>

      <S.Container01 className="third">
        <S.ImageHitboxWrap>
          <S.ImageCoverFill
            src={cover03}
            priority={false}
            alt="imagem de Grazyela Couto com o Casaco Perfeito anunciando a data da maratona que vai ser um sucesso"
          />
          <S.CtaHitArea
            href={HOTMART_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero participar da maratona Casaco Perfeito"
            title="Quero participar"
            $bottom="5.5%"
            $left="8%"
            $width="84%"
            $height="12%"
          />
        </S.ImageHitboxWrap>
      </S.Container01>

      <S.Container01 className="third">
        <S.ImageCover05
          src={cover04}
          alt="Montagem com 3 Grazyelas usando o Casaco Perfeito representando os processos de modelagem, corte e costura"
        />
      </S.Container01>

      <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover05}
            alt="Tres imagens da Grazyela Couto usando o Casaco Perfeito"
          />
        </div>
      </S.Container01>
      <S.Container01 className="third">
        <S.ImageHitboxWrap className="containerImageOnly">
          <S.ImageCover05
            src={cover06}
            alt="A verdade é: nunca deixamos de aprender"
          />
          <S.CtaHitArea
            href={HOTMART_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Inscreva-se na maratona Casaco Perfeito"
            title="Inscreva-se"
            $top="42%"
            $left="28%"
            $width="44%"
            $height="12%"
            $radius="9999px"
          />
        </S.ImageHitboxWrap>
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
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover08}
            alt="Para quem é a maratona Casaco Perfeito"
          />
        </div>
      </S.Container01>
      {/* <S.Container01 className="third">
        <div className="containerImageOnly">
          <S.ImageCover05
            src={cover10}
            alt="Inspiração para o Casaco Perfeito"
          />
        </div>
      </S.Container01> */}
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
      <S.BlackBackground />
    </S.GeneralContainer>
  );
}
