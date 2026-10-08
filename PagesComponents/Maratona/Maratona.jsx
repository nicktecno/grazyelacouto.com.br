import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import { Telegram } from "@styled-icons/boxicons-logos/Telegram";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";

import * as S from "./style";

import heroImg from "../../public/images/maratona/00.PNG";
import cardFront from "../../public/images/maratona/01.PNG";
import cardSide from "../../public/images/maratona/02.PNG";
import cardTrio from "../../public/images/maratona/03.PNG";

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
      <S.Hero as="header" aria-label="Maratonas de Costura Grazyela Couto">
        <S.HeroMedia>
          <S.HeroImage
            src={heroImg}
            alt="Grazyela Couto — Ateliê de Alta Costura e Modelagem"
            priority
            fill
            sizes="100vw"
          />
        </S.HeroMedia>

        <S.HeroContent>
          <span className="badge">✨ Evento Concluído · Em Breve Novidades</span>
          <p className="title">
            Maratonas de Costura<br />
            <em>Inscrições Encerradas</em>
          </p>
          <span className="brandLine" aria-hidden="true" />
          <p className="subtitle">
            A última <strong>Maratona Vestido Verona</strong> foi um sucesso
            inesquecível! No momento não temos maratonas com inscrições abertas,
            mas novas edições e projetos práticos já estão sendo preparados com
            muito carinho.
          </p>

          <div className="ctaGroup">
            <Link href="/aprenda-a-costurar" className="ctaPrimary">
              Conhecer o Curso "Aprenda a Costurar" →
            </Link>
            <a
              href={WHATSAPP_VIP}
              target="_blank"
              rel="noopener noreferrer"
              className="ctaSecondary"
            >
              <Whatsapp style={{ width: 20, height: 20 }} />
              Entrar na Lista VIP (WhatsApp)
            </a>
          </div>
        </S.HeroContent>
      </S.Hero>

      {/* ── 2. BANNER DE STATUS EDITORIAL ── */}
      <S.ClassicBanner className="reveal">
        <span className="tag">Ateliê Grazyela Couto</span>
        <h2>Em breve teremos novas maratonas e imersões</h2>
        <p>
          Nossas maratonas são experiências intensivas e pontuais. Enquanto a
          próxima data não é anunciada, você pode continuar sua evolução com
          nossos cursos completos de acesso imediato.
        </p>
      </S.ClassicBanner>

      {/* ── 3. CAMINHOS PARA A ALUNA CONTINUAR COSTURANDO ── */}
      <S.OptionsSection className="reveal">
        <div className="sectionHeader">
          <span className="eyebrow">Continue sua evolução</span>
          <h2>Onde você deseja começar hoje?</h2>
          <p>
            Não espere a próxima maratona para destravar sua costura. Conheça
            nossos treinamentos com turmas abertas:
          </p>
        </div>

        <div className="cardsGrid">
          {/* Card 1: Aprenda a Costurar */}
          <S.OptionCard $featured>
            <div className="cardTop">
              <span className="cardTag">Curso Principal</span>
              <h3>Aprenda a Costurar</h3>
              <p>
                O método completo do zero ao acabamento de ateliê. Aprenda mais
                de 20 peças completas com moldes sob medida e suporte direto.
              </p>
              <ul>
                <li>Mais de 300 aulas práticas do corte à costura</li>
                <li>26 módulos completos (camisas, vestidos, saias e casacos)</li>
                <li>Inclui moldes e aulas bônus das maratonas</li>
                <li>Acesso contínuo com suporte no WhatsApp</li>
              </ul>
            </div>
            <div className="cardAction">
              <Link href="/aprenda-a-costurar">Acessar Curso Completo →</Link>
            </div>
          </S.OptionCard>

          {/* Card 2: Alfaiataria & Blazer */}
          <S.OptionCard>
            <div className="cardTop">
              <span className="cardTag">Especialização</span>
              <h3>Alfaiataria & Blazer</h3>
              <p>
                Para quem quer dar um salto na técnica e produzir peças de alto
                padrão com estrutura profissional.
              </p>
              <ul>
                <li>Entretelamento, ombreiras e forração impecável</li>
                <li>Corte anatômico e lapelas perfeitas</li>
                <li>Calça italiana, blazer e colete sob medida</li>
                <li>Técnicas tradicionais de ateliê fino</li>
              </ul>
            </div>
            <div className="cardAction">
              <Link href="/pecas-de-alfaiataria">Conhecer Alfaiataria →</Link>
            </div>
          </S.OptionCard>

          {/* Card 3: Lista de Espera */}
          <S.OptionCard>
            <div className="cardTop">
              <span className="cardTag">Comunidade VIP</span>
              <h3>Lista de Espera da Próxima Maratona</h3>
              <p>
                As vagas das maratonas são limitadas. Participe dos nossos
                canais gratuitos para ser avisada assim que as próximas turmas
                forem abertas.
              </p>
              <ul>
                <li>Avisos em primeira mão antes do público geral</li>
                <li>Acesso a lives exclusivas e moldes gratuitos</li>
                <li>Dicas semanais de corte, tecido e acabamento</li>
                <li>100% gratuito e direto no seu celular</li>
              </ul>
            </div>
            <div className="cardAction">
              <a
                href={WHATSAPP_VIP}
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar no Grupo VIP →
              </a>
            </div>
          </S.OptionCard>
        </div>
      </S.OptionsSection>

      {/* ── 4. RETROSPECTIVA DA ÚLTIMA MARATONA ── */}
      <S.PastEditionsSection className="reveal">
        <div className="header">
          <span className="eyebrow">Edição Anterior</span>
          <h3>Como foi a última maratona?</h3>
          <p>
            Na Maratona Vestido Verona, alunas de todo o Brasil confeccionaram um
            modelo atemporal, com caimento fluido, gola estruturada e cinto sob
            medida.
          </p>
        </div>

        <div className="galleryGrid">
          <S.IllustrationCard>
            <S.IllustrationImg
              src={cardFront}
              alt="Vestido Verona — Vista Frontal"
              sizes="(max-width: 768px) 80vw, 28vw"
            />
          </S.IllustrationCard>
          <S.IllustrationCard>
            <S.IllustrationImg
              src={cardSide}
              alt="Vestido Verona — Vista Lateral com Saia Rodada"
              sizes="(max-width: 768px) 80vw, 28vw"
            />
          </S.IllustrationCard>
          <S.IllustrationCard>
            <S.IllustrationImg
              src={cardTrio}
              alt="Vestido Verona — Perspectivas do Modelo"
              sizes="(max-width: 768px) 80vw, 28vw"
            />
          </S.IllustrationCard>
        </div>
      </S.PastEditionsSection>

      {/* ── 5. CITAÇÃO GRAZYELA COUTO ── */}
      <S.QuoteSection className="reveal">
        <blockquote>
          <span className="quoteMark">“</span>
          <p>
            Você não precisa ter dom para costurar. Precisa de método, paciência
            e alguém que mostre cada detalhe do caminho com amor.
          </p>
          <cite>— Grazyela Couto</cite>
        </blockquote>
      </S.QuoteSection>

      {/* ── 6. SEÇÃO VIP / REDES SOCIAIS ── */}
      <S.VipSection className="reveal">
        <div className="vipInner">
          <span className="vipEyebrow">Não fique de fora</span>
          <h2>Seja a primeira a saber da próxima data</h2>
          <p>
            Acompanhe a Grazyela no Instagram e entre no nosso grupo VIP de
            avisos para não perder a próxima maratona ou lançamento especial de
            moldes.
          </p>

          <div className="socialLinks">
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
    </S.GeneralContainer>
  );
}
