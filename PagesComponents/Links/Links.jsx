import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Tiktok } from "@styled-icons/boxicons-logos/Tiktok";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import { Telegram } from "@styled-icons/boxicons-logos/Telegram";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";

import * as S from "./style";

// Imagens
import bannerPhoto from "../../public/images/aprenda_a_costurar/IMG_7632.JPG";
import avatarPhoto from "../../public/images/aprenda_a_costurar/IMG_7723.jpg";
import thumbVerona from "../../public/images/bio/verona.jpeg";
import thumbModelagem from "../../public/images/bio/modelagem_costura.jpeg";
import thumbCamisa from "../../public/images/bio/molde_camisa_classica.webp";
import thumbSaia from "../../public/images/bio/molde_saia_enviesada.webp";
import thumbBlusa from "../../public/images/bio/molde_blusa_simples.webp";
import thumbBlazer from "../../public/images/bio/blazer.jpeg";
import thumbAlfaiataria from "../../public/images/bio/alfaiataria.jpeg";

const LINKS_DATA = [
  {
    title: "Grazyela Couto - Maratona Vestido Verona",
    href: "/maratona",
    image: thumbVerona,
    objectPosition: "center 20%",
    alt: "Maratona Vestido Verona",
  },
  {
    title: "Curso de Modelagem e Costura (Aprenda a Costurar)",
    href: "/aprenda-a-costurar",
    image: thumbModelagem,
    objectPosition: "center 22%",
    alt: "Curso de Modelagem e Costura (Aprenda a Costurar) — Grazyela Couto",
  },
  {
    title: "Canal do YouTube",
    href: "https://www.youtube.com/channel/UCNOwoaQLPOdoXDZKd_ztOaA",
    icon: (
      <div style={{ width: "100%", height: "100%", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Youtube style={{ color: "#FF0000", width: "32px", height: "32px" }} />
      </div>
    ),
    alt: "Canal do YouTube Grazyela Couto",
  },
  {
    title: "Grupo Telegram",
    href: "https://t.me/+JVToDD5513MyYjVh",
    icon: (
      <div style={{ width: "100%", height: "100%", background: "#229ED9", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Telegram style={{ color: "#FFFFFF", width: "30px", height: "30px" }} />
      </div>
    ),
    alt: "Grupo Exclusivo do Telegram",
  },
  {
    title: "Grupo WhatsApp 🪡",
    href: "https://chat.whatsapp.com/Cb6bMW1TNl3HYmOAQjaNHh?mode=gi_t",
    icon: (
      <div style={{ width: "100%", height: "100%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Whatsapp style={{ color: "#FFFFFF", width: "32px", height: "32px" }} />
      </div>
    ),
    alt: "Grupo Exclusivo do WhatsApp",
  },
  {
    title: "Molde Digital- Camisa Clássica Feminina TAMANHO 38 a 54 - Grazyela Rodrigues Couto | Hotmart",
    href: "https://hotmart.com/pt-br/marketplace/produtos/molde-digital-camisa-classica-feminina/R106672757A",
    image: thumbCamisa,
    objectPosition: "center center",
    alt: "Molde Digital Camisa Clássica Feminina",
  },
  {
    title: "Molde Digital- Saia Enviesada TAMANHO 38 a 54 - Grazyela Rodrigues Couto | Hotmart",
    href: "https://hotmart.com/pt-br/marketplace/produtos/molde-digital-saia-enviesada-tamanho-38-a-54/Y107019938P",
    image: thumbSaia,
    objectPosition: "center center",
    alt: "Molde Digital Saia Enviesada",
  },
  {
    title: "Molde Blusa simples",
    href: "https://pay.hotmart.com/U107233693H?bid=1787171331094",
    image: thumbBlusa,
    objectPosition: "center center",
    alt: "Molde Blusa simples",
  },
  {
    title: "Módulo Blazer",
    href: "/modulo-blazer",
    image: thumbBlazer,
    objectPosition: "center 18%",
    alt: "Módulo Blazer Alfaiataria",
  },
  {
    title: "Curso Peças de Alfaiataria — Grazyela Couto",
    href: "/pecas-de-alfaiataria",
    image: thumbAlfaiataria,
    objectPosition: "center 22%",
    alt: "Curso Peças de Alfaiataria Grazyela Couto",
  },
];

export default function LinksComponent() {
  const date = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Grazyela Couto — Links & Cursos</title>
        <meta
          name="description"
          content="Modelagem e Costura com Método, Técnica e Elegância. Acesse cursos, moldes digitais e canais oficiais da Grazyela Couto."
        />
        <meta property="og:title" content="Grazyela Couto — Links & Cursos" />
        <meta
          property="og:description"
          content="Modelagem e Costura com Método, Técnica e Elegância. Acesse cursos, moldes digitais e canais oficiais da Grazyela Couto."
        />
        <meta property="og:image" content="/images/aprenda_a_costurar/IMG_7723.jpg" />
      </Head>

      <S.PageWrapper>
        <S.Container>
          {/* Banner de capa com a máquina Singer em destaque */}
          <S.BannerWrapper>
            <Image
              src={bannerPhoto}
              alt="Máquina de costura Singer e Grazyela Couto"
              priority
              fill
              sizes="(max-width: 480px) 100vw, 520px"
              style={{ objectFit: "cover", objectPosition: "center 73%" }}
            />
            <svg viewBox="0 0 500 40" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,40 Q250,0 500,40 L500,40 L0,40 Z" fill="#FFECA9" />
            </svg>
          </S.BannerWrapper>

          {/* Avatar circular sobreposto com a foto de perfil */}
          <S.AvatarWrapper>
            <Image
              src={avatarPhoto}
              alt="Grazyela Couto"
              priority
              fill
              sizes="114px"
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
            />
          </S.AvatarWrapper>

          {/* Nome e bio */}
          <S.HeaderContent>
            <S.Title>Grazyela Couto</S.Title>
            <S.Bio>
              Modelagem e costura com método, técnica e elegância. Ensino mulheres a construírem peças de alfaiataria com acabamento profissional, mesmo começando do zero.
            </S.Bio>

            {/* Redes sociais */}
            <S.SocialRow>
              <a
                href="https://www.instagram.com/grazyelacouto/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Grazyela Couto"
              >
                <Instagram />
              </a>
              <a
                href="https://www.tiktok.com/@grazy.couto?lang=pt-BR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok da Grazyela Couto"
              >
                <Tiktok />
              </a>
            </S.SocialRow>
          </S.HeaderContent>

          {/* Lista de botões pílula perfeitamente balanceados */}
          <S.LinksList>
            {LINKS_DATA.map((item, idx) => {
              const isExternal = item.href.startsWith("http");
              const pillContent = (
                <>
                  <S.Thumbnail>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={54}
                        height={54}
                        style={{
                          objectFit: "cover",
                          objectPosition: item.objectPosition || "center center",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : (
                      item.icon
                    )}
                  </S.Thumbnail>
                  <S.LinkLabel>{item.title}</S.LinkLabel>
                  <S.EndSpacer aria-hidden="true" />
                </>
              );

              return isExternal ? (
                <S.LinkPill
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pillContent}
                </S.LinkPill>
              ) : (
                <Link key={idx} href={item.href} passHref legacyBehavior>
                  <S.LinkPill>{pillContent}</S.LinkPill>
                </Link>
              );
            })}
          </S.LinksList>

          {/* Mini rodapé */}
          <S.Footer>
            <span>Grazyela Couto</span>
            <small>Ateliê de Moda & Cursos Online · © {date}</small>
          </S.Footer>
        </S.Container>
      </S.PageWrapper>
    </>
  );
}
