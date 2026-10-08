import React from "react";
import Image from "next/image";
import * as S from "./style";

import grazyelaPhoto from "../../public/images/seja-bem-vindo/IMG_9743.jpg";

const HOTMART_LOGIN_URL =
  "https://sso.hotmart.com/login?service=https%3A%2F%2Fapp.hotmart.com%2Fauth%2Flogin";
const WHATSAPP_SUPPORT_URL =
  "https://chat.whatsapp.com/Cb6bMW1TNl3HYmOAQjaNHh?mode=gi_t";

export default function SejaBemVindoPage() {
  return (
    <S.Container>
      <S.ContentWrapper>
        {/* Coluna de Texto e Boas-vindas */}
        <S.TextColumn>
          <p className="welcomeSubtitle">Seja Bem-Vinda(o) ao</p>

          <S.BrandTitleRow>
            <h1 className="brandName">FashionPlay</h1>
            <div className="iconsCluster" aria-hidden="true">
              <S.IconNeedle>
                <img
                  src="/images/seja-bem-vindo/needle-thread.svg"
                  alt="Agulha com Linha de Costura"
                />
              </S.IconNeedle>
              <S.IconPlay>
                <img
                  src="/images/seja-bem-vindo/play-icon.svg"
                  alt="Ícone de Play"
                />
              </S.IconPlay>
            </div>
          </S.BrandTitleRow>

          <S.CallToActionText>Aperte o Play JÁ!</S.CallToActionText>

          <S.Hashtag>#souumaagulhinha</S.Hashtag>

          <S.AccessCard>
            <p className="accessInstruction">
              Acesse seu curso pelo seu <strong>e-mail</strong> ou diretamente
              pelo <strong>aplicativo</strong> ou <strong>navegador</strong> da
              Hotmart.
            </p>

            <a
              href={HOTMART_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btnHotmart"
            >
              Acessar Minhas Aulas na Hotmart →
            </a>

            <div className="supportNote">
              <span>Precisa de ajuda com o acesso?</span>
              <a
                href={WHATSAPP_SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com o suporte
              </a>
            </div>
          </S.AccessCard>
        </S.TextColumn>

        {/* Coluna da Imagem */}
        <S.ImageColumn>
          <div className="imageContainer">
            <Image
              src={grazyelaPhoto}
              alt="Grazyela Couto — Boas-vindas ao FashionPlay"
              priority
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 440px"
            />
          </div>
        </S.ImageColumn>
      </S.ContentWrapper>
    </S.Container>
  );
}
