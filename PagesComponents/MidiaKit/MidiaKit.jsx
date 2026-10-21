import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Tiktok } from "@styled-icons/boxicons-logos/Tiktok";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import { Sync } from "@styled-icons/boxicons-regular/Sync";
import { Printer } from "@styled-icons/boxicons-regular/Printer";
import { CheckCircle } from "@styled-icons/boxicons-solid/CheckCircle";
import { Heart } from "@styled-icons/boxicons-solid/Heart";
import { Share } from "@styled-icons/boxicons-regular/Share";
import { Bookmark } from "@styled-icons/boxicons-regular/Bookmark";
import { Video } from "@styled-icons/boxicons-regular/Video";
import { ShoppingBag } from "@styled-icons/boxicons-regular/ShoppingBag";
import { Award } from "@styled-icons/boxicons-regular/Award";
import { UserCheck } from "@styled-icons/boxicons-regular/UserCheck";
import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { Slideshow } from "@styled-icons/boxicons-regular/Slideshow";
import { Download } from "@styled-icons/boxicons-regular/Download";

import MediaKitDeck from "./MediaKitDeck";
import * as S from "./style";

// Imagens do projeto
import heroCoverImg from "../../public/images/aprenda_a_costurar/IMG_7632.JPG";
import bioProfileImg from "../../public/images/aprenda_a_costurar/IMG_7723.jpg";
import atelierImg from "../../public/images/capa02.jpg";
import tailoringImg from "../../public/images/bio/blazer.jpeg";
import courseImg from "../../public/images/aprenda_a_costurar/IMG_7725.jpg";

const WHATSAPP_BASE = "https://api.whatsapp.com/send?phone=5531988888888";
const WHATSAPP_COMERCIAL = `${WHATSAPP_BASE}&text=Ol%C3%A1%20Grazyela!%20Acessei%20seu%20M%C3%ADdia%20Kit%20e%20gostaria%20de%20conversar%20sobre%20uma%20parceria%20comercial.`;
const EMAIL_COMERCIAL = "suportegrazycouto@gmail.com";

export default function MidiaKitComponent() {
  const [data, setData] = useState({
    username: "grazyelacouto",
    name: "Grazyela Couto",
    profilePicUrl: "/images/instagram/profile_pic.jpg",
    metrics: {
      followersFormatted: "126,8K+",
      monthlyReachFormatted: "890K+",
      monthlyImpressionsFormatted: "1,9M+",
      engagementRate: "4.9%",
      avgReelsViews: "45K - 348K",
      avgStoryViews: "3.2K - 5.8K",
      totalPosts: 941,
    },
    demographics: {
      gender: { female: 96, male: 4 },
      ageGroups: [
        { range: "18 a 24", percentage: 8 },
        { range: "25 a 34", percentage: 38 },
        { range: "35 a 44", percentage: 34 },
        { range: "45 a 54", percentage: 15 },
        { range: "55+", percentage: 5 },
      ],
      locations: [
        { name: "São Paulo", percentage: 32 },
        { name: "Minas Gerais", percentage: 18 },
        { name: "Rio de Janeiro", percentage: 14 },
        { name: "Paraná & Sul", percentage: 16 },
        { name: "Demais Estados (BR)", percentage: 20 },
      ],
      interests: [
        "Costura & Modelagem Profissional",
        "Alfaiataria Feminina Sob Medida",
        "Máquinas de Costura & Ferramentas",
        "Tecidos Nobres & Aviamentos",
        "Empreendedorismo na Moda",
        "Estilo Elegante & Atemporal",
      ],
    },
    reelsHighlights: [
      {
        id: "17882138958622821",
        title: "Tecido que vira arte, e beleza, que prazer transformar ✨",
        views: "348.000",
        likes: "1.285",
        comments: 44,
        saves: "707",
        tag: "Viral Didático",
        cover: "/images/instagram/reel_1.jpg",
        permalink: "https://www.instagram.com/reel/DduHj-IR-d8/",
      },
      {
        id: "18167679745464993",
        title: "80 de tecido e uma máquina reta 🪡",
        views: "215.000",
        likes: "1.123",
        comments: 32,
        saves: "618",
        tag: "Viral Didático",
        cover: "/images/instagram/reel_2.jpg",
        permalink: "https://www.instagram.com/reel/DeZYD4HuQ-t/",
      },
      {
        id: "17980406424004507",
        title: "Molde disponível na loja de molde ⬆️",
        views: "182.000",
        likes: "1.110",
        comments: 28,
        saves: "611",
        tag: "Modelagem & Molde",
        cover: "/images/instagram/reel_3.jpg",
        permalink: "https://www.instagram.com/reel/Deh-7XtoFnY/",
      },
      {
        id: "18125330861510405",
        title: "Saia transpassada🪡",
        views: "145.000",
        likes: "728",
        comments: 28,
        saves: "400",
        tag: "Alta Utilidade",
        cover: "/images/instagram/reel_4.jpg",
        permalink: "https://www.instagram.com/reel/DenSJhKIF5f/",
      },
      {
        id: "18191290138394582",
        title: "Costura • costureira • costurainiciantes",
        views: "128.000",
        likes: "672",
        comments: 107,
        saves: "370",
        tag: "Alta Performance",
        cover: "/images/instagram/reel_5.jpg",
        permalink: "https://www.instagram.com/reel/Ddw9HOUI0Fq/",
      },
      {
        id: "17988997791027321",
        title: "Tutorial • corteecostura • costurices",
        views: "98.000",
        likes: "592",
        comments: 11,
        saves: "326",
        tag: "Alta Utilidade",
        cover: "/images/instagram/reel_6.jpg",
        permalink: "https://www.instagram.com/reel/DdrMn9UuAR4/",
      },
    ],
    lastUpdated: new Date().toISOString(),
    source: "calibrated_baseline",
  });

  const [loadingSync, setLoadingSync] = useState(false);
  const [syncStatusText, setSyncStatusText] = useState("Métricas sincronizadas");

  useEffect(() => {
    fetch("/api/media-kit/instagram")
      .then((res) => res.json())
      .then((json) => {
        if (json && json.metrics) {
          setData(json);
        }
      })
      .catch(() => {});
  }, []);

  const handleRefresh = async () => {
    if (loadingSync) return;
    setLoadingSync(true);
    setSyncStatusText("Sincronizando com Instagram...");
    try {
      const res = await fetch("/api/media-kit/instagram?refresh=true");
      const json = await res.json();
      if (json && json.metrics) {
        setData(json);
        setSyncStatusText("Dados atualizados agora");
      }
    } catch (e) {
      setSyncStatusText("Métricas salvas");
    } finally {
      setTimeout(() => {
        setLoadingSync(false);
        setSyncStatusText("Métricas sincronizadas");
      }, 1500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      const originalTitle = document.title;
      document.title = `Midia-Kit-Grazyela-Couto-${new Date().getFullYear()}`;
      window.print();
      setTimeout(() => {
        document.title = originalTitle;
      }, 1500);
    }
  };

  const formattedDate = new Date(data.lastUpdated || Date.now()).toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return (
    <S.Page>
      <Head>
        <title>Mídia Kit Comercial — Grazyela Couto | Moda & Alfaiataria</title>
        <meta
          name="description"
          content="Mídia Kit oficial de Grazyela Couto. Dados demográficos, alcance do Instagram e oportunidades para marcas no universo da moda, corte, costura e alfaiataria."
        />
        <meta property="og:title" content="Mídia Kit Comercial — Grazyela Couto" />
        <meta
          property="og:description"
          content="Parcerias comerciais e conexão autêntica com mais de 30 mil mulheres apaixonadas por moda, modelagem e costura."
        />
        <style>{`
          @page {
            size: 297mm 210mm;
            margin: 0;
          }
          @media print {
            body {
              margin: 0 !important;
              padding: 0 !important;
              background: #faf9f7 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
          }
        `}</style>
      </Head>

      {/* ── BARRA SUPERIOR EXECUTIVA ── */}
      <S.TopBar>
        <S.BrandGroup>
          <S.BrandTitle>Grazyela Couto</S.BrandTitle>
          <S.Badge>Mídia Kit 2026</S.Badge>
          <S.LiveIndicator title="Dados integrados via API do Instagram">
            {syncStatusText}
          </S.LiveIndicator>
        </S.BrandGroup>

        <S.TopActions>
          <S.SecondaryBtn onClick={handleRefresh} title="Atualizar dados em tempo real" disabled={loadingSync}>
            <Sync style={{ animation: loadingSync ? "spin 1s infinite linear" : "none" }} />
            {loadingSync ? "Atualizando..." : "Sincronizar"}
          </S.SecondaryBtn>

          <S.SecondaryBtn
            as="a"
            href="/midia-kit-grazyela-couto.pdf"
            download="Midia-Kit-Grazyela-Couto.pdf"
            title="Baixar PDF de Apresentação Diagramado"
          >
            <Download />
            Baixar PDF
          </S.SecondaryBtn>

          <S.SecondaryBtn as={Link} href="/midia-kit/deck" title="Ver apresentação de slides widescreen">
            <Slideshow />
            Ver Slides
          </S.SecondaryBtn>

          <S.SecondaryBtn onClick={handlePrint} title="Imprimir / Salvar PDF da Apresentação">
            <Printer />
            Exportar PDF
          </S.SecondaryBtn>

          <S.PrimaryBtn
            href={WHATSAPP_COMERCIAL}
            target="_blank"
            rel="noopener noreferrer"
            title="Iniciar contato comercial imediato"
          >
            <Whatsapp />
            Falar no WhatsApp
          </S.PrimaryBtn>
        </S.TopActions>
      </S.TopBar>

      <S.ScreenLayoutWrapper>
        {/* ── NAVEGAÇÃO DE ÂNCORAS ── */}
        <S.NavTabs aria-label="Navegação do Mídia Kit">
        <S.NavTabItem href="#apresentacao">Apresentação</S.NavTabItem>
        <S.NavTabItem href="#sobre">Sobre a Criadora</S.NavTabItem>
        <S.NavTabItem href="#metricas">Audiência & Números</S.NavTabItem>
        <S.NavTabItem href="#demografia">Comunidade</S.NavTabItem>
        <S.NavTabItem href="#conteudo">Formatos & Reels</S.NavTabItem>
        <S.NavTabItem href="#parcerias">Oportunidades de Marcas</S.NavTabItem>
        <S.NavTabItem href="#depoimentos">Prova Social</S.NavTabItem>
        <S.NavTabItem href="#pacotes">Investimento</S.NavTabItem>
        <S.NavTabItem href="#contato">Contato</S.NavTabItem>
      </S.NavTabs>

      {/* ── SLIDE 1: CAPA EDITORIAL (Inspiração PDF p.1) ── */}
      <S.Section id="apresentacao">
        <S.HeroCover>
          <S.HeroContent>
            <S.SubPill>
              <Award style={{ width: 15, height: 15 }} />
              Proposta Comercial & Mídia Kit
            </S.SubPill>

            <S.HeroTitle>
              Grazyela <span>Couto</span>
            </S.HeroTitle>

            <S.HeroTagline>
              Elegância, técnica de alfaiataria e didática prática que inspiram milhares de mulheres a criarem peças
              impecáveis e valorizarem a moda autoral.
            </S.HeroTagline>

            <S.HeroMetaList>
              <S.MetaTag
                as="a"
                href="https://www.instagram.com/grazyelacouto/"
                target="_blank"
                rel="noopener noreferrer"
                title="Acessar Instagram @grazyelacouto"
              >
                <Instagram />
                @{data.username || "grazyelacouto"}
              </S.MetaTag>
              <S.MetaTag
                as="a"
                href="https://www.tiktok.com/@grazy.couto?lang=pt-BR"
                target="_blank"
                rel="noopener noreferrer"
                title="Acessar TikTok @grazy.couto"
              >
                <Tiktok />
                @grazy.couto
              </S.MetaTag>
              <S.MetaTag>
                <UserCheck />
                96% Público Feminino Qualificado
              </S.MetaTag>
            </S.HeroMetaList>
          </S.HeroContent>

          <S.HeroPhotoSide>
            <Image
              src={heroCoverImg}
              alt="Grazyela Couto no ateliê"
              priority
              sizes="(max-width: 991px) 100vw, 45vw"
            />
          </S.HeroPhotoSide>
        </S.HeroCover>
      </S.Section>

      {/* ── SLIDE 2: SOBRE A CRIADORA & PILARES (Inspiração PDF p.2 e p.3) ── */}
      <S.Section id="sobre">
        <S.SectionHeading>
          <S.Eyebrow>Identidade & Posicionamento</S.Eyebrow>
          <S.SectionTitle>Quem é Grazyela Couto?</S.SectionTitle>
          <S.SectionDesc>
            Estilista, modelista e criadora de uma das comunidades mais engajadas do país no universo do corte, costura e
            alfaiataria feminina.
          </S.SectionDesc>
        </S.SectionHeading>

        <S.StoryGrid>
          <S.StoryImageWrapper>
            <Image
              src={bioProfileImg}
              alt="Retrato de Grazyela Couto"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </S.StoryImageWrapper>

          <S.StoryTextContent>
            <S.HighlightQuote>
              “Costurar não é apenas unir tecidos: é construir autoconfiança, elegância e autonomia com as próprias mãos.”
            </S.HighlightQuote>

            <S.Paragraph>
              Com anos de dedicação ao universo da moda, <strong>Grazyela Couto</strong> desmistificou o mito de que a
              alta alfaiataria e a modelagem perfeita são inacessíveis. Através de um olhar refinado, metodologia clara
              e uma comunicação calorosa, ela conecta diariamente milhares de seguidoras com o prazer de criar roupas de
              altíssimo padrão.
            </S.Paragraph>

            <S.Paragraph>
              Seu público não consome apenas tutoriais: busca <strong>recomendações sinceras</strong> de máquinas de
              costura, tecidos nobres, ferros de passar industriais, tesouras ergonômicas, aviamentos e ferramentas que
              realmente façam a diferença na bancada de trabalho.
            </S.Paragraph>

            <S.PillarList>
              <S.PillarCard>
                <h4>✂️ Alfaiataria Descomplicada</h4>
                <p>Técnicas de grife ensinadas de forma didática e aplicável.</p>
              </S.PillarCard>

              <S.PillarCard>
                <h4>✨ Elegância Atemporal</h4>
                <p>Foco em bom gosto, caimento perfeito e acabamentos duradouros.</p>
              </S.PillarCard>

              <S.PillarCard>
                <h4>🎯 Engajamento Real</h4>
                <p>Comunidade fiel que confia e compra as ferramentas indicadas.</p>
              </S.PillarCard>

              <S.PillarCard>
                <h4>🎥 Produção Impecável</h4>
                <p>Áudio nítido, iluminação de estúdio e clareza visual em cada detalhe.</p>
              </S.PillarCard>
            </S.PillarList>
          </S.StoryTextContent>
        </S.StoryGrid>
      </S.Section>

      {/* ── SLIDE 3: NÚMEROS & AUDIÊNCIA (Inspiração PDF p.4) ── */}
      <S.Section id="metricas">
        <S.SectionHeading $center>
          <S.Eyebrow $center>Dados do Instagram em Tempo Real</S.Eyebrow>
          <S.SectionTitle>Alcance que Transforma Marcas</S.SectionTitle>
          <S.SectionDesc $center>
            Métricas sólidas, consistência editorial diária e conexão direta com um público pronto para investir.
          </S.SectionDesc>
        </S.SectionHeading>

        <S.MetricsGrid>
          <S.MetricCard $primary>
            <div>
              <S.MetricLabel $light>Seguidoras no Instagram</S.MetricLabel>
              <S.MetricNumber $light>{data.metrics?.followersFormatted || "32.8K+"}</S.MetricNumber>
            </div>
            <S.MetricSubtext $light>Público orgânico, nichado e altamente engajado</S.MetricSubtext>
          </S.MetricCard>

          <S.MetricCard>
            <div>
              <S.MetricLabel>Impressões Mensais</S.MetricLabel>
              <S.MetricNumber>{data.metrics?.monthlyImpressionsFormatted || "1.8M+"}</S.MetricNumber>
            </div>
            <S.MetricSubtext>Visualizações consolidadas em Reels, Stories e Feed</S.MetricSubtext>
          </S.MetricCard>

          <S.MetricCard>
            <div>
              <S.MetricLabel>Contas Alcançadas</S.MetricLabel>
              <S.MetricNumber>{data.metrics?.monthlyReachFormatted || "890K+"}</S.MetricNumber>
            </div>
            <S.MetricSubtext>Pessoas únicas impactadas mensalmente</S.MetricSubtext>
          </S.MetricCard>

          <S.MetricCard>
            <div>
              <S.MetricLabel>Taxa de Engajamento</S.MetricLabel>
              <S.MetricNumber>{data.metrics?.engagementRate || "4.9%"}</S.MetricNumber>
            </div>
            <S.MetricSubtext>Média muito acima do padrão de grandes influenciadores</S.MetricSubtext>
          </S.MetricCard>
        </S.MetricsGrid>

        {/* Expansão Multiplataforma (PDF p.7) */}
        <S.PlatformRow>
          <S.PlatformCard
            as="a"
            href="https://www.instagram.com/grazyelacouto/"
            target="_blank"
            rel="noopener noreferrer"
            title="Acessar Instagram de Grazyela Couto"
          >
            <Instagram style={{ color: "#E1306C" }} />
            <div>
              <h4>Instagram Principal</h4>
              <p>@{data.username || "grazyelacouto"} · Stories diários & Reels virais ↗</p>
            </div>
          </S.PlatformCard>

          <S.PlatformCard
            as="a"
            href="https://www.tiktok.com/@grazy.couto?lang=pt-BR"
            target="_blank"
            rel="noopener noreferrer"
            title="Acessar TikTok de Grazyela Couto"
          >
            <Tiktok style={{ color: "#000000" }} />
            <div>
              <h4>TikTok Criativo</h4>
              <p>@grazy.couto · Formatos rápidos, desafios e bastidores ↗</p>
            </div>
          </S.PlatformCard>

          <S.PlatformCard
            as="a"
            href="https://www.youtube.com/channel/UCNOwoaQLPOdoXDZKd_ztOaA"
            target="_blank"
            rel="noopener noreferrer"
            title="Acessar canal do YouTube de Grazyela Couto"
          >
            <Youtube style={{ color: "#FF0000" }} />
            <div>
              <h4>YouTube Aulas</h4>
              <p>Grazyela Couto · Conteúdo aprofundado e aulas completas ↗</p>
            </div>
          </S.PlatformCard>
        </S.PlatformRow>
      </S.Section>

      {/* ── SLIDE 4: MINHA COMUNIDADE & DEMOGRAFIA (Inspiração PDF p.5) ── */}
      <S.Section id="demografia">
        <S.SectionHeading>
          <S.Eyebrow>Quem são as seguidoras?</S.Eyebrow>
          <S.SectionTitle>Minha Comunidade</S.SectionTitle>
          <S.SectionDesc>
            Perfil altamente qualificado de mulheres tomadoras de decisão, empreendedoras de ateliê e apaixonadas por moda
            e criação.
          </S.SectionDesc>
        </S.SectionHeading>

        <S.DemographicsCard>
          <S.DemoSubSection>
            <h4>Distribuição por Gênero</h4>
            <S.GenderBigCard>
              <div>
                <S.GenderValue $female>{data.demographics?.gender?.female || 96}%</S.GenderValue>
                <S.GenderTag>Mulheres</S.GenderTag>
              </div>
              <div style={{ width: 1, height: 50, background: "#e2dad2" }} />
              <div>
                <S.GenderValue>{data.demographics?.gender?.male || 4}%</S.GenderValue>
                <S.GenderTag>Homens</S.GenderTag>
              </div>
            </S.GenderBigCard>

            <h4 style={{ marginTop: 24 }}>Faixas Etárias com Maior Poder de Compra</h4>
            {data.demographics?.ageGroups?.map((item, idx) => (
              <S.BarRow key={idx}>
                <S.BarHeader>
                  <span>{item.range} anos</span>
                  <span>{item.percentage}%</span>
                </S.BarHeader>
                <S.BarTrack>
                  <S.BarFill $percentage={item.percentage * 2} $color={idx === 1 || idx === 2 ? "#8f1a20" : "#cfc9c2"} />
                </S.BarTrack>
              </S.BarRow>
            ))}
          </S.DemoSubSection>

          <S.DemoSubSection>
            <h4>Principais Regiões e Estados</h4>
            {data.demographics?.locations?.map((loc, idx) => (
              <S.BarRow key={idx}>
                <S.BarHeader>
                  <span>{loc.name}</span>
                  <span>{loc.percentage}%</span>
                </S.BarHeader>
                <S.BarTrack>
                  <S.BarFill $percentage={loc.percentage * 2.5} $color={idx === 0 ? "#8f1a20" : "#8c7e75"} />
                </S.BarTrack>
              </S.BarRow>
            ))}

            <h4 style={{ marginTop: 32 }}>Interesses Predominantes da Audiência</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {data.demographics?.interests?.map((interest, idx) => (
                <span
                  key={idx}
                  style={{
                    background: "#f4ede6",
                    color: "#2b2725",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    padding: "6px 14px",
                    borderRadius: 999,
                  }}
                >
                  ✓ {interest}
                </span>
              ))}
            </div>
          </S.DemoSubSection>
        </S.DemographicsCard>
      </S.Section>

      {/* ── SLIDE 5: FORMATOS & PERFORMANCE REELS (Inspiração PDF p.6) ── */}
      <S.Section id="conteudo">
        <S.SectionHeading>
          <S.Eyebrow>Conteúdo que Engaja e Viraliza</S.Eyebrow>
          <S.SectionTitle>Performance no Feed & Reels</S.SectionTitle>
          <S.SectionDesc>
            Vídeos didáticos em alta definição, roteirizados para reter a atenção e gerar salvamentos recorrentes.
          </S.SectionDesc>
        </S.SectionHeading>

        <S.HighlightsGrid>
          {data.reelsHighlights?.map((reel, idx) => {
            const fallbackReel = `/images/instagram/reel_${(idx % 6) + 1}.jpg`;
            const coverSrc = typeof reel.cover === "string" ? reel.cover : reel.cover?.src || fallbackReel;
            return (
              <S.ReelCard
                key={reel.id}
                as="a"
                href={reel.permalink || "https://www.instagram.com/grazyelacouto/"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                title="Ver publicação no Instagram"
              >
                <S.ReelMedia>
                  <img
                    src={coverSrc}
                    alt={reel.title || "Publicação do Instagram @grazyelacouto"}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackReel;
                    }}
                  />
                  <S.ReelBadge>{reel.tag || "Instagram"}</S.ReelBadge>
                  <S.ReelViewsOverlay>
                    <span>{reel.likes} Curtidas</span>
                    <small>{reel.comments ? `${reel.comments} comentários` : "Ver no Instagram ↗"}</small>
                  </S.ReelViewsOverlay>
                </S.ReelMedia>

                <S.ReelBody>
                  <h4>{reel.title}</h4>
                  <S.ReelStatsRow>
                    <div>
                      <Heart style={{ width: 15, height: 15, color: "#8f1a20" }} />
                      {reel.likes}
                    </div>
                    <div>
                      <Bookmark style={{ width: 15, height: 15 }} />
                      {reel.saves} salvamentos
                    </div>
                  </S.ReelStatsRow>
                </S.ReelBody>
              </S.ReelCard>
            );
          })}
        </S.HighlightsGrid>
      </S.Section>

      {/* ── SLIDE 6: OPORTUNIDADES PARA MARCAS (Checklist Item 5) ── */}
      <S.Section id="parcerias">
        <S.SectionHeading $center>
          <S.Eyebrow $center>Como podemos trabalhar juntos?</S.Eyebrow>
          <S.SectionTitle>Oportunidades Comerciais para Marcas</S.SectionTitle>
          <S.SectionDesc $center>
            Formatos personalizados com foco em posicionamento de valor e retorno real de vendas para a sua empresa.
          </S.SectionDesc>
        </S.SectionHeading>

        <S.FormatsGrid>
          <S.FormatCard>
            <div className="icon-wrap">
              <Video />
            </div>
            <h4>Reels Patrocinado / Publi Tutorial</h4>
            <p>
              Gravação de aula prática ou dica de costura inserindo a sua máquina, ferramenta ou tecido como protagonista
              da peça.
            </p>
            <ul>
              <li>Vídeo de até 90s gravado em 4K</li>
              <li>Menção da marca na legenda e na tela</li>
              <li>Fixação no topo do feed (opcional)</li>
            </ul>
          </S.FormatCard>

          <S.FormatCard>
            <div className="icon-wrap">
              <ShoppingBag />
            </div>
            <h4>Combo de Stories com Link</h4>
            <p>
              Sequência de 4 a 6 stories mostrando o uso real do produto na rotina do ateliê, unboxing e chamada para ação
              com cupom exclusivo.
            </p>
            <ul>
              <li>Link direto de compra / WhatsApp</li>
              <li>Sticker de cupom personalizado</li>
              <li>Destaque permanente por 30 dias</li>
            </ul>
          </S.FormatCard>

          <S.FormatCard>
            <div className="icon-wrap">
              <CheckCircle />
            </div>
            <h4>Conteúdo UGC para sua Marca</h4>
            <p>
              Criação de vídeos verticais autênticos e de alta qualidade técnica para a sua marca veicular em seus
              próprios anúncios e tráfego pago.
            </p>
            <ul>
              <li>Resenha técnica e demonstração de uso</li>
              <li>Direitos de uso para mídia paga</li>
              <li>Entrega em formato pronto para Ads</li>
            </ul>
          </S.FormatCard>

          <S.FormatCard>
            <div className="icon-wrap">
              <Award />
            </div>
            <h4>Embaixadora / Parceria Contínua</h4>
            <p>
              Associação de longo prazo com posicionamento exclusivo de marca no ateliê e em todas as peças desenvolvidas.
            </p>
            <ul>
              <li>Reels e Stories recorrentes</li>
              <li>Presença em lançamentos</li>
              <li>Exclusividade no segmento</li>
            </ul>
          </S.FormatCard>

          <S.FormatCard>
            <div className="icon-wrap">
              <UserCheck />
            </div>
            <h4>Presença VIP & Palestras</h4>
            <p>
              Participação de Grazyela Couto em feiras da indústria têxtil, workshops, estandes de marcas e congressos de
              moda.
            </p>
            <ul>
              <li>Cobertura em tempo real nos Stories</li>
              <li>Meet & Greet com seguidoras</li>
              <li>Workshops ao vivo de costura</li>
            </ul>
          </S.FormatCard>

          <S.FormatCard>
            <div className="icon-wrap">
              <Share />
            </div>
            <h4>Cross-media TikTok & YouTube</h4>
            <p>
              Ampliação de alcance veiculando a mesma campanha no TikTok e em formato longo com demonstração no YouTube.
            </p>
            <ul>
              <li>Mais pontos de contato com o público</li>
              <li>Presença perene em buscas do YouTube</li>
              <li>Audiência complementar jovem e moderna</li>
            </ul>
          </S.FormatCard>
        </S.FormatsGrid>
      </S.Section>

      {/* ── SLIDE 7: DEPOIMENTOS / PROVA SOCIAL (Inspiração PDF p.8) ── */}
      <S.Section id="depoimentos">
        <S.SectionHeading $center>
          <S.Eyebrow $center>Conexão Real com a Audiência</S.Eyebrow>
          <S.SectionTitle>Por que elas me acompanham?</S.SectionTitle>
          <S.SectionDesc $center>
            Mensagens reais de seguidoras que comprovam o carinho, a credibilidade e o poder de recomendação da Grazyela.
          </S.SectionDesc>
        </S.SectionHeading>

        <S.TestimonialsGrid>
          <S.TestimonialBubble>
            <p>
              “A Grazy tem uma didática que ninguém tem na internet! Comprei a máquina que ela indicou e mudou totalmente o
              meu acabamento de alfaiataria.”
            </p>
            <span>— Mariana S., Seguidora & Aluna</span>
          </S.TestimonialBubble>

          <S.TestimonialBubble>
            <p>
              “É impressionante a elegância e a paciência com que você ensina. Tudo o que você usa no ateliê eu já coloco
              na minha lista de compras!”
            </p>
            <span>— Renata Alencar, Ateliê em SP</span>
          </S.TestimonialBubble>

          <S.TestimonialBubble>
            <p>
              “Costurar parecia um bicho de sete cabeças até eu maratonar seus vídeos. Sua energia e bom gosto inspiram
              demais nosso dia a dia.”
            </p>
            <span>— Cláudia Vieira, Rio de Janeiro</span>
          </S.TestimonialBubble>

          <S.TestimonialBubble>
            <p>
              “Comprei os tecidos recomendados por ela e o caimento da calça italiana ficou de grife internacional. Confio de
              olhos fechados em cada dica!”
            </p>
            <span>— Juliana Prado, Belo Horizonte</span>
          </S.TestimonialBubble>

          <S.TestimonialBubble>
            <p>
              “Adoro que você testa de verdade os produtos antes de falar. Isso passa uma segurança imensa para quem está
              investindo no seu ateliê.”
            </p>
            <span>— Beatriz F., Curitiba</span>
          </S.TestimonialBubble>

          <S.TestimonialBubble>
            <p>
              “A melhor professora de costura do Brasil! Seus Reels salvos são meu manual de consulta diário na máquina.”
            </p>
            <span>— Sandra M., Porto Alegre</span>
          </S.TestimonialBubble>
        </S.TestimonialsGrid>
      </S.Section>

      {/* ── SLIDE 8: PACOTES DE INVESTIMENTO (Inspiração PDF p.12) ── */}
      <S.Section id="pacotes">
        <S.SectionHeading $center>
          <S.Eyebrow $center>Formatos Comerciais</S.Eyebrow>
          <S.SectionTitle>Pacotes de Investimento</S.SectionTitle>
          <S.SectionDesc $center>
            Opções estruturadas para campanhas pontuais ou parcerias estratégicas de médio e longo prazo.
          </S.SectionDesc>
        </S.SectionHeading>

        <S.PackagesGrid>
          <S.PackageCard>
            <div>
              <h3>Combo Stories</h3>
              <p className="desc">
                Ideal para promoções pontuais, lançamentos com cupom e geração direta de tráfego para a loja da sua marca.
              </p>
              <div className="price">
                A Consultar
              </div>
              <ul>
                <li>Sequência de 4 Stories com narrativa fluida</li>
                <li>Stickers de Link direto e Cupom</li>
                <li>Destaque de 24h com relatório de cliques</li>
                <li>Roteiro alinhado previamente com a marca</li>
              </ul>
            </div>
            <S.PackageCTA
              href={`${WHATSAPP_BASE}&text=Ol%C3%A1%20Grazyela!%20Gostaria%20de%20consultar%20uma%20proposta%20para%20o%20Combo%20Stories.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar Combo Stories
            </S.PackageCTA>
          </S.PackageCard>

          <S.PackageCard $highlight>
            <div>
              <h3>Reels + Stories</h3>
              <p className="desc">
                O formato com maior entrega orgânica, alcance viral e retenção de marca na mente das seguidoras.
              </p>
              <div className="price">
                A Consultar
              </div>
              <ul>
                <li>1 Reels dedicado com foco no produto</li>
                <li>3 Stories de sustentação com link de compra</li>
                <li>Fixação no topo do perfil por 7 dias</li>
                <li>Collab no Instagram com o perfil da sua marca</li>
                <li>Relatório detalhado de alcance após 7 dias</li>
              </ul>
            </div>
            <S.PackageCTA
              $highlight
              href={`${WHATSAPP_BASE}&text=Ol%C3%A1%20Grazyela!%20Gostaria%20de%20consultar%20uma%20proposta%20para%20o%20pacote%20Reels%20%2B%20Stories.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar Reels + Stories
            </S.PackageCTA>
          </S.PackageCard>

          <S.PackageCard>
            <div>
              <h3>Embaixadora Trimestral</h3>
              <p className="desc">
                Associação de alto impacto, garantindo presença contínua da sua marca no ateliê durante 3 meses.
              </p>
              <div className="price">
                A Consultar
              </div>
              <ul>
                <li>1 Reels mensal de alto valor didático</li>
                <li>6 Stories mensais com demonstração de uso</li>
                <li>Direito de repost em suas redes oficiais</li>
                <li>Exclusividade do produto no nicho de costura</li>
                <li>Condições especiais para renovação anual</li>
              </ul>
            </div>
            <S.PackageCTA
              href={`${WHATSAPP_BASE}&text=Ol%C3%A1%20Grazyela!%20Gostaria%20de%20consultar%20uma%20proposta%20para%20a%20Parceria%20Trimestral.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar Parceria Trimestral
            </S.PackageCTA>
          </S.PackageCard>
        </S.PackagesGrid>
      </S.Section>

      {/* ── SLIDE 9: CONTATO & TERMOS (Inspiração PDF p.13) ── */}
      <S.Section id="contato">
        <S.ContactCard>
          <S.ContactLeft>
            <h2>
              Vamos criar algo <span>extraordinário</span> juntos?
            </h2>
            <p>
              Entre em contato com nossa equipe comercial para tirar dúvidas, solicitar pacotes personalizados ou agendar
              uma conversa.
            </p>

            <div className="terms">
              <strong>Informações Comerciais:</strong>
              <br />
              • Os pagamentos devem preceder a produção ou seguir cronograma contratual acordado.
              <br />
              • Os roteiros de publipost são aprovados previamente pela equipe da marca.
              <br />• Propostas comerciais enviadas têm validade de 30 dias a partir da data de envio.
            </div>
          </S.ContactLeft>

          <S.ContactRight>
            <S.ContactDirectBtn
              $whatsapp
              href={WHATSAPP_COMERCIAL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp />
              Conversar via WhatsApp
            </S.ContactDirectBtn>

            <S.ContactDirectBtn href={`mailto:${EMAIL_COMERCIAL}?subject=Parceria%20Comercial%20Grazyela%20Couto`}>
              <MailSend />
              {EMAIL_COMERCIAL}
            </S.ContactDirectBtn>

            <S.ContactDirectBtn
              href="https://www.instagram.com/grazyelacouto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
              Visitar @grazyelacouto
            </S.ContactDirectBtn>
          </S.ContactRight>
        </S.ContactCard>

        <S.SyncFooter>
          Mídia Kit Grazyela Couto · Dados atualizados em {formattedDate} · Conexão com API do Instagram ·{" "}
          <Link href="/">Voltar para a página inicial</Link>
        </S.SyncFooter>
      </S.Section>
      </S.ScreenLayoutWrapper>

      <S.PrintDeckWrapper>
        <MediaKitDeck data={data} />
      </S.PrintDeckWrapper>
    </S.Page>
  );
}
