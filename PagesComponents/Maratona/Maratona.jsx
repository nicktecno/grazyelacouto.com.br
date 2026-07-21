import React, { useEffect } from "react";
import * as S from "./style";

import heroImg from "../../public/images/maratona/00.PNG";
import cardFront from "../../public/images/maratona/01.PNG";
import cardSide from "../../public/images/maratona/02.PNG";
import cardTrio from "../../public/images/maratona/03.PNG";
import featuresImg from "../../public/images/maratona/04.PNG";
import variacoesImg from "../../public/images/maratona/05.PNG";

const HOTMART_CHECKOUT =
  "https://pay.hotmart.com/B101360900J?sck=HOTMART_PRODUCT_PAGE&off=r00dm5jg&hotfeature=32&_gl=1*dr6n49*_gcl_au*MTkwMTQ3ODY4OC4xNzg0MjEzNjI2*_ga*NTc4MDYwMzUzLjE3ODQyMTM2MjY.*_ga_GQH2V1F11Q*czE3ODQ2NDA0NjEkbzckZzEkdDE3ODQ2NDA0NjEkajYwJGwwJGgxNTEyMDUwMzg1&bid=1784640468512";

export default function MaratonaPage() {
  const [motionReady, setMotionReady] = React.useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isNarrow = window.matchMedia("(max-width: 768px)").matches;
    const skipReveal = reduceMotion || isCoarsePointer || isNarrow;

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
      {/* ── HERO ── */}
      <S.Hero as="header" aria-label="Maratona Vestido Verona — inscrições abertas">
        <S.HeroMedia>
          <S.HeroImage
            src={heroImg}
            alt="Grazyela Couto vestindo o Vestido Verona borgonha, segurando a gola com as mãos"
            priority
            fill
            sizes="100vw"
          />
          <S.HeroShade aria-hidden="true" />
        </S.HeroMedia>
        <S.HeroContent>
          <p className="welcome">— Evento Online</p>
          <p className="brand">
            Maratona Vestido
            <br />
            Verona
          </p>
          <span className="brandLine" aria-hidden="true" />
          <h1>Dos dias 28/09 a 12/10</h1>
          <a
            className="cta"
            href={HOTMART_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero meu Vestido Verona - inscrição na Maratona"
          >
            Quero meu Vestido Verona!
          </a>
        </S.HeroContent>
      </S.Hero>

      {/* ── BANNER CLÁSSICO ── */}
      <S.ClassicBanner className="reveal">
        <p>
          Crie seu vestido{" "}
          <strong>Clássico e Atemporal&nbsp;!</strong>
        </p>
      </S.ClassicBanner>

      {/* ── CARDS ILUSTRAÇÕES ── */}
      <S.CardsSection
        className="reveal"
        aria-label="Ilustrações do Vestido Verona"
      >
        <div className="cardsGrid">
          <S.IllustrationCard>
            <S.IllustrationImg
              src={cardFront}
              alt="Ilustração do Vestido Verona — vista frontal, vestido branco com cinto vermelho"
              fill
              sizes="(max-width: 768px) 80vw, 28vw"
            />
          </S.IllustrationCard>
          <S.IllustrationCard>
            <S.IllustrationImg
              src={cardSide}
              alt="Ilustração do Vestido Verona — vista lateral, destacando a saia rodada"
              fill
              sizes="(max-width: 768px) 80vw, 28vw"
            />
          </S.IllustrationCard>
          <S.IllustrationCard>
            <S.IllustrationImg
              src={cardTrio}
              alt="Ilustração do Vestido Verona — três perspectivas: frente, diagonal e lateral"
              fill
              sizes="(max-width: 768px) 80vw, 28vw"
            />
          </S.IllustrationCard>
        </div>

        <a
          className="accessCta"
          href={HOTMART_CHECKOUT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Quero meu acesso à Maratona Vestido Verona"
        >
          Meu acesso&nbsp;→
        </a>
      </S.CardsSection>

      {/* ── O QUE É A MARATONA ── */}
      <S.AboutSection className="reveal" aria-labelledby="about-title">
        <div className="copy">
          <S.SectionLabel>Sobre o evento</S.SectionLabel>
          <h2 id="about-title">O que seria a maratona?</h2>
          <p>
            A Maratona é uma experiência prática e guiada, criada para que você
            desenvolva uma peça completa do zero, aprendendo cada etapa da
            modelagem e da costura de forma clara, organizada e sem
            complicações.
          </p>
          <p>
            Durante os encontros, você acompanha todo o processo, tira dúvidas
            e evolui junto com outras alunas apaixonadas por costura.
          </p>
        </div>
      </S.AboutSection>

      {/* ── O QUE VOU ENCONTRAR ── */}
      <S.FeaturesSection className="reveal" aria-labelledby="features-title">
        <div className="featuresCopy">
          <S.SectionLabelLight>Conteúdo</S.SectionLabelLight>
          <h2 id="features-title">O que vou encontrar?</h2>
          <ul>
            <li>Aulas práticas e didáticas, do início ao fim.</li>
            <li>Modelagem completa da peça.</li>
            <li>
              Técnicas de corte e preparação do tecido. Passo a passo detalhado
              da costura.
            </li>
            <li>Acabamentos profissionais.</li>
            <li>Dicas de caimento, ajustes e modelagem.</li>
            <li>Explicações sobre materiais e tecidos ideais.</li>
            <li>Suporte e interação durante a maratona.</li>
            <li>
              A oportunidade de concluir uma peça linda, feita por você.
            </li>
          </ul>
        </div>
        <S.FeaturesMedia>
          <S.FeaturesImg
            src={featuresImg}
            alt="Três perspectivas do Vestido Verona em ilustração — frente, diagonal e lateral"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </S.FeaturesMedia>
      </S.FeaturesSection>

      {/* ── CRONOGRAMA ── */}
      <S.ScheduleSection className="reveal" aria-labelledby="schedule-title">
        <h2 id="schedule-title">Cronograma</h2>
        <div className="scheduleItems">
          <div className="scheduleItem">
            <span className="week">1ª Semana</span>
            <p>de Modelagem e Corte.</p>
          </div>
          <div className="divider" aria-hidden="true" />
          <div className="scheduleItem">
            <span className="week">2ª Semana</span>
            <p>de Costura</p>
          </div>
          <div className="divider" aria-hidden="true" />
          <div className="scheduleItem highlight">
            <span className="week">15 dias</span>
            <p>de Acesso e Live de Suporte</p>
          </div>
        </div>

        <div className="accessInfo">
          <p>
            <strong>Acesso Dentro da Plataforma da Hotmart</strong>
          </p>
          <p>
            Ao fazer seu cadastro você receberá um e-mail de acesso às aulas que
            se iniciam dia{" "}
            <strong>28/09&nbsp;—&nbsp;12/10</strong>.
          </p>
        </div>
      </S.ScheduleSection>

      {/* ── VARIAÇÕES + CTA FINAL ── */}
      <S.VariationsSection
        className="reveal"
        aria-label="Vestido Verona e suas variações"
      >
        <S.VariationsMedia>
          <S.VariationsImg
            src={variacoesImg}
            alt="Vestido Verona e Suas Variações — coleção de estilos: azul, borgonha, marinho e verde"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </S.VariationsMedia>
        <div className="variationsCta">
          <a
            href={HOTMART_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero meu acesso à Maratona Vestido Verona"
          >
            Meu acesso&nbsp;→
          </a>
        </div>
      </S.VariationsSection>
    </S.GeneralContainer>
  );
}
