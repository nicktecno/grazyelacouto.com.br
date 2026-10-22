import React, { useEffect, useState } from "react";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import { Telegram } from "@styled-icons/boxicons-logos/Telegram";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";

import * as S from "./style";

import heroBannerImg from "../../public/images/maratona/vestido_vintage_banner.jpg";
import modelosImg from "../../public/images/maratona/vestido_vintage_modelos.jpg";

const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=YSVl0LKXhek&t=21s";
const YOUTUBE_EMBED_URL =
  "https://www.youtube-nocookie.com/embed/YSVl0LKXhek?start=21";
const HOTMART_COMBO_URL = "https://pay.hotmart.com/S108121789O";
const WHATSAPP_VIP =
  "https://chat.whatsapp.com/Cb6bMW1TNl3HYmOAQjaNHh?mode=gi_t";
const TELEGRAM_LINK = "https://t.me/+JVToDD5513MyYjVh";
const INSTAGRAM_LINK = "https://www.instagram.com/grazyelacouto/";

export default function MaratonaPage() {
  const [motionReady, setMotionReady] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isNarrow = window.matchMedia("(max-width: 768px)").matches;
    const skipReveal = reduceMotion || isNarrow;

    const nodes = document.querySelectorAll(".reveal");

    if (skipReveal) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      setMotionReady(false);
      return undefined;
    }

    setMotionReady(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <S.GeneralContainer $motionReady={motionReady}>
      {/* ── 1. HERO ── */}
      <S.Hero
        as="header"
        aria-label="Mini Curso Gratuito Vestido Vintage — Grazyela Couto"
      >
        <S.HeroMedia>
          <S.HeroImage
            src={heroBannerImg}
            alt="Mini Curso Gratuito Vestido Vintage com Grazyela Couto"
            priority
            fill
            sizes="100vw"
          />
          <S.HeroShade aria-hidden="true" />
        </S.HeroMedia>

        <S.HeroContent>
          <span className="badge">
            ✨ Mini Curso 100% Online e Gratuito no YouTube
          </span>
          <h1 className="title">
            Mini Curso Gratuito
            <em>Vestido Vintage</em>
          </h1>
          <span className="brandLine" aria-hidden="true" />
          <p className="subtitle">
            Aprenda a modelar e costurar um modelo clássico, fluido e
            atemporal. Aulas práticas e completas direto no YouTube para você
            desenvolver uma peça perfeita do zero com acabamentos de ateliê!
          </p>

          <div className="ctaGroup">
            <a
              href={YOUTUBE_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ctaYoutube"
              aria-label="Assistir ao Mini Curso no YouTube"
            >
              <Youtube />
              Assistir no YouTube (Gratuito)
            </a>
            <a
              href="#combo-moldes"
              className="ctaMoldes"
              aria-label="Ver detalhes do Combo de Moldes"
            >
              Combo de Moldes (38 ao 54) ↓
            </a>
          </div>
        </S.HeroContent>
      </S.Hero>

      {/* ── 2. BANNER CLÁSSICO ── */}
      <S.ClassicBanner className="reveal">
        <span className="tag">Ateliê Grazyela Couto</span>
        <h2>
          Crie seu Vestido Vintage <strong>Clássico e Atemporal&nbsp;!</strong>
        </h2>
        <p>
          Um método passo a passo detalhado, do traçado e corte em viés até a
          costura e acabamentos finos — 100% gratuito no canal do YouTube.
        </p>
      </S.ClassicBanner>

      {/* ── 3. VÍDEO DE INTRODUÇÃO (YOUTUBE) ── */}
      <S.VideoSection className="reveal" aria-labelledby="video-intro-title">
        <div className="videoHeader">
          <span className="eyebrow">Apresentação Oficial</span>
          <h2 id="video-intro-title">Vídeo de Introdução ao Curso</h2>
          <p>
            Assista ao vídeo e veja todos os encantos do Vestido Vintage, o
            caimento impecável no corpo, os tecidos recomendados e as técnicas
            que você vai aprender.
          </p>
        </div>

        <div className="videoContainer">
          <iframe
            src={YOUTUBE_EMBED_URL}
            title="Vídeo de Introdução — Mini Curso Gratuito Vestido Vintage | Grazyela Couto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="videoActions">
          <a
            href={YOUTUBE_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Assistir no YouTube"
          >
            <Youtube />
            Abrir vídeo no YouTube com chat e comentários →
          </a>
        </div>
      </S.VideoSection>

      {/* ── 4. COMBO DE MOLDES (HOTMART SPOTLIGHT) ── */}
      <S.ComboSection
        id="combo-moldes"
        className="reveal"
        aria-labelledby="combo-moldes-title"
      >
        <div className="comboContainer">
          <div className="comboCopy">
            <span className="eyebrow">Modelagens Prontas para Costurar</span>
            <h2 id="combo-moldes-title">
              Combo de Moldes: Blusa Simples + Saia Enviesada
            </h2>

            <div className="quoteBox">
              <p>
                Já imaginou ter as modelagens que se unem para criar o nosso
                lindo <strong>Vestido Vintage?</strong> 😍 Preparei um combo
                especial para você ter acesso à modelagem da blusa simples +
                modelagem da saia enviesada, as duas partes que, juntas, dão vida
                a esse vestido cheio de charme e estilo vintage! 💕
              </p>
            </div>

            <div className="sizeCallout">
              <span className="icon" aria-hidden="true">
                📐
              </span>
              <p>
                <strong>Do tamanho 38 ao 54!</strong> Você terá acesso às
                modelagens para confeccionar suas peças com mais praticidade e
                segurança, sem precisar começar do zero.
              </p>
            </div>

            <ul>
              <li>Modelagem da Blusa Simples inclusa</li>
              <li>Modelagem da Saia Enviesada com caimento fluido</li>
              <li>Grade completa de moldes: 38 ao 54</li>
              <li>Arquivos em PDF prontos para impressão em casa ou gráfica</li>
              <li>Acesso imediato e seguro através da Hotmart</li>
            </ul>

            <a
              href={HOTMART_COMBO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comboCta"
              aria-label="Adquirir Combo de Moldes Vestido Vintage na Hotmart"
            >
              Garantir Meu Combo de Moldes →
            </a>
          </div>

          <div className="comboMedia">
            <div className="imgCard">
              <S.IllustrationImg
                src={modelosImg}
                alt="Modelos do Vestido Vintage — Frente, Costas e Variação Off White"
                width={975}
                height={1024}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            <span className="caption">
              Vestido Longo Poá (Frente &amp; Costas) e Versão Off White
            </span>
          </div>
        </div>
      </S.ComboSection>

      {/* ── 5. PERSPECTIVAS E VARIAÇÕES DO MODELO ── */}
      <S.CardsSection
        className="reveal"
        aria-label="Perspectivas e Detalhes do Vestido Vintage"
      >
        <div className="sectionHeader">
          <span className="eyebrow">Perspectivas e Acabamento</span>
          <h2>Um modelo sofisticado, elegante e versátil</h2>
          <p>
            A combinação da blusa com decote refinado e da saia enviesada
            proporciona um movimento inigualável.
          </p>
        </div>

        <div className="cardsGrid">
          <S.IllustrationCard>
            <div className="cardMedia">
              <S.IllustrationImg
                src={modelosImg}
                alt="Vestido Longo Poá — Vista Frontal"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{
                  objectPosition: "5% center",
                  transform: "scale(1.55)",
                  transformOrigin: "5% 30%",
                }}
              />
            </div>
            <div className="cardInfo">
              <span className="tag">Vista Frontal</span>
              <h3>Vestido Longo Poá</h3>
              <p>
                Decote canoa refinado com mangas integradas e caimento drapeado
                suave na cintura.
              </p>
            </div>
          </S.IllustrationCard>

          <S.IllustrationCard>
            <div className="cardMedia">
              <S.IllustrationImg
                src={modelosImg}
                alt="Vestido Longo Poá — Vista Costas"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{
                  objectPosition: "48% center",
                  transform: "scale(1.55)",
                  transformOrigin: "48% 30%",
                }}
              />
            </div>
            <div className="cardInfo">
              <span className="tag">Vista Costas</span>
              <h3>Vestido Longo Poá</h3>
              <p>
                Costas fechadas e desenho anatômico que valoriza a silhueta com
                total conforto.
              </p>
            </div>
          </S.IllustrationCard>

          <S.IllustrationCard>
            <div className="cardMedia">
              <S.IllustrationImg
                src={modelosImg}
                alt="Vestido Longo Off White — Variação Ombro Só"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{
                  objectPosition: "95% center",
                  transform: "scale(1.55)",
                  transformOrigin: "95% 30%",
                }}
              />
            </div>
            <div className="cardInfo">
              <span className="tag">Variação Elegance</span>
              <h3>Vestido Longo Off White</h3>
              <p>
                Inspiração de ombro só com drapeado clássico fluido, ideal para
                festas e celebrações.
              </p>
            </div>
          </S.IllustrationCard>
        </div>

        <a
          className="accessCta"
          href={HOTMART_COMBO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acessar o Combo de Moldes Vestido Vintage"
        >
          Meu Combo de Moldes&nbsp;→
        </a>
      </S.CardsSection>

      {/* ── 6. O QUE É O MINI CURSO ── */}
      <S.AboutSection className="reveal" aria-labelledby="about-title">
        <div className="copy">
          <S.SectionLabel>Sobre o evento</S.SectionLabel>
          <h2 id="about-title">O que seria o mini curso?</h2>
          <p>
            O <strong>Mini Curso Vestido Vintage</strong> é uma experiência
            prática e guiada, criada para que você desenvolva uma peça completa
            do zero, aprendendo cada etapa da modelagem e da costura de forma
            clara, organizada e sem complicações.
          </p>
          <p>
            Realizado <strong>gratuitamente no YouTube</strong>, você acompanha
            todo o processo, tira dúvidas e evolui suas técnicas de corte e
            costura junto com outras alunas apaixonadas pela arte do ateliê.
          </p>
        </div>
      </S.AboutSection>

      {/* ── 7. O QUE VOU ENCONTRAR ── */}
      <S.FeaturesSection className="reveal" aria-labelledby="features-title">
        <div className="featuresCopy">
          <S.SectionLabelLight>Conteúdo</S.SectionLabelLight>
          <h2 id="features-title">O que vou encontrar?</h2>
          <ul>
            <li>Aulas práticas e didáticas gratuitas, do início ao fim.</li>
            <li>Modelagem completa da peça (Blusa simples + Saia enviesada).</li>
            <li>Técnicas de corte no viés e preparação adequada do tecido.</li>
            <li>Passo a passo minucioso de costura e montagem da peça.</li>
            <li>Acabamentos profissionais de alto padrão e ateliê.</li>
            <li>Dicas valiosas de caimento, ajustes e escolha dos melhores tecidos.</li>
            <li>Combo de moldes pronto para imprimir do tamanho 38 ao 54.</li>
            <li>A oportunidade de concluir um vestido deslumbrante feito por você.</li>
          </ul>

          <div className="featuresCta">
            <a
              href={HOTMART_COMBO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primary"
            >
              Comprar Combo de Moldes →
            </a>
            <a
              href={YOUTUBE_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary"
            >
              <Youtube style={{ width: 18, height: 18 }} />
              Ver Aulas no YouTube
            </a>
          </div>
        </div>

        <S.FeaturesMedia>
          <S.FeaturesImg
            src={heroBannerImg}
            alt="Mini Curso Gratuito Vestido Vintage Grazyela Couto"
            fill
            sizes="(max-width: 991px) 100vw, 50vw"
          />
        </S.FeaturesMedia>
      </S.FeaturesSection>

      {/* ── 8. CRONOGRAMA & ETAPAS ── */}
      <S.ScheduleSection className="reveal" aria-labelledby="schedule-title">
        <div className="header">
          <S.SectionLabel>Passo a Passo</S.SectionLabel>
          <h2 id="schedule-title">Como Acompanhar o Curso</h2>
        </div>

        <div className="scheduleItems">
          <div className="scheduleItem">
            <span className="stepBadge">1ª Etapa</span>
            <span className="title">Aulas no YouTube</span>
            <p>
              Acompanhe gratuitamente as aulas passo a passo de corte, montagem
              e costura da blusa e da saia.
            </p>
          </div>
          <div className="divider" aria-hidden="true" />
          <div className="scheduleItem highlight">
            <span className="stepBadge">2ª Etapa</span>
            <span className="title">Combo de Moldes</span>
            <p>
              Garanta suas modelagens prontas em PDF do 38 ao 54 para agilizar
              sua produção com segurança.
            </p>
          </div>
          <div className="divider" aria-hidden="true" />
          <div className="scheduleItem">
            <span className="stepBadge">3ª Etapa</span>
            <span className="title">Comunidade &amp; Dúvidas</span>
            <p>
              Tire dúvidas nos comentários do YouTube, grupos do WhatsApp e
              compartilhe seu lindo vestido pronto!
            </p>
          </div>
        </div>

        <div className="accessInfo">
          <p>
            <strong>Aulas 100% Gratuitas e Abertas no YouTube</strong>
          </p>
          <p>
            Assista no seu tempo, pause quantas vezes precisar e costure no seu
            ritmo com o método acolhedor e profissional de Grazyela Couto.
          </p>
        </div>
      </S.ScheduleSection>

      {/* ── 9. CITAÇÃO GRAZYELA COUTO ── */}
      <S.QuoteSection className="reveal">
        <blockquote>
          <span className="quoteMark" aria-hidden="true">
            “
          </span>
          <p>
            Você não precisa ter dom para costurar. Precisa de método, paciência
            e alguém que mostre cada detalhe do caminho com amor.
          </p>
          <cite>— Grazyela Couto</cite>
        </blockquote>
      </S.QuoteSection>

      {/* ── 10. GRUPOS VIP & REDES SOCIAIS ── */}
      <S.VipSection className="reveal">
        <div className="vipInner">
          <span className="vipEyebrow">Comunidade e Suporte</span>
          <h2>Acompanhe Tudo de Perto</h2>
          <p>
            Entre nos nossos canais e grupos VIP para receber notificações das
            aulas, novidades de novos lançamentos e dicas exclusivas de
            costura e modelagem.
          </p>

          <div className="socialLinks">
            <a
              href={YOUTUBE_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube"
            >
              <Youtube />
              Canal no YouTube
            </a>
            <a
              href={WHATSAPP_VIP}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <Whatsapp />
              Grupo VIP no WhatsApp
            </a>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="telegram"
            >
              <Telegram />
              Canal do Telegram
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <Instagram />
              Instagram @grazyelacouto
            </a>
          </div>
        </div>
      </S.VipSection>

      {/* ── 11. CTA FINAL ── */}
      <S.FinalCtaSection className="reveal">
        <span className="eyebrow">Pronta para Começar?</span>
        <h2>Comece a Criar Seu Vestido Vintage Hoje</h2>
        <p>
          Adquira as modelagens da blusa simples + saia enviesada em grade
          completa (38 ao 54) e assista ao mini curso completo gratuitamente no
          YouTube!
        </p>

        <div className="ctaButtons">
          <a
            href={HOTMART_COMBO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btnMoldes"
          >
            Quero Meu Combo de Moldes →
          </a>
          <a
            href={YOUTUBE_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btnYoutube"
          >
            <Youtube />
            Assistir no YouTube
          </a>
        </div>
      </S.FinalCtaSection>
    </S.GeneralContainer>
  );
}
