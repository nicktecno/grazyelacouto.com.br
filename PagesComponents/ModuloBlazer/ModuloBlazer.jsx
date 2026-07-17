import React, { useState } from "react";
import Image from "next/image";
import * as S from "./style";

const CHECKOUT = "https://pay.hotmart.com/R104281766L?bid=1770287639417";

const CONTEUDO = [
  "Blazer totalmente forrado.",
  "Gola com lapela.",
  "Bolso embutido.",
  "Manga em duas partes.",
  "Ombreiras.",
  "Acabamento interno de alfaiataria.",
  "Técnicas de entretela.",
  "Aulas em vídeo.",
  "Acesso às atualizações.",
  "Grupo de alunos (WhatsApp/Telegram).",
];

function Faq({ pergunta, resposta }) {
  const [open, setOpen] = useState(false);
  return (
    <S.FaqItem>
      <S.FaqBtn onClick={() => setOpen(!open)}>
        <span>{pergunta}</span>
        <S.FaqSeta open={open}>+</S.FaqSeta>
      </S.FaqBtn>
      <S.FaqResposta open={open}>{resposta}</S.FaqResposta>
    </S.FaqItem>
  );
}

export default function ModuloBlazerPage() {
  return (
    <S.Page>

      {/* ── HERO ── */}
      <S.Hero>
        <S.HeroBg>
          <Image
            src="/images/modulo-blazer/img5.png"
            alt="Grazyela Couto"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
          <S.HeroOverlay />
        </S.HeroBg>
        <S.HeroContent>
          <S.HeroEyebrow>Por Grazyela Couto · CURSO 100% online</S.HeroEyebrow>
          <S.HeroTitle>
            Módulo<br />
            <S.HeroItalic>Blazer</S.HeroItalic>
          </S.HeroTitle>
          <S.HeroSub>
            Alfaiataria Russa — da modelagem ao acabamento de ateliê
          </S.HeroSub>
          <S.Cta href={CHECKOUT} target="_blank" rel="noopener noreferrer">
            Quero aprender agora
          </S.Cta>
          <S.HeroNota>Acesso imediato · Plataforma Hotmart</S.HeroNota>
        </S.HeroContent>
      </S.Hero>

      {/* ── MANIFESTO ── */}
      <S.Manifesto>
        <S.ManifestoInner>
          <S.ManifestoEyebrow>O que é</S.ManifestoEyebrow>
          <S.ManifestoTitle>
            Costura do zero com<br />Técnica em Alfaiataria Russa
          </S.ManifestoTitle>
          <S.ManifestoText>
            Um curso para você aprender a costurar um blazer de alfaiataria mesmo
            sendo iniciante — precisando de apenas um pouquinho de noção de costura —
            seguindo o método passo a passo da <strong>Grazyela Couto</strong>.
          </S.ManifestoText>
        </S.ManifestoInner>
      </S.Manifesto>

      {/* ── FOTO FULL + CITAÇÃO ── */}
      <S.FeatureSection>
        <S.FeaturePhoto>
          <Image
            src="/images/modulo-blazer/img6.jpg"
            alt="Alfaiataria com método"
            fill
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
          />
        </S.FeaturePhoto>
        <S.FeatureQuote>
          <S.FeatureQuoteBar />
          <S.FeatureQuoteText>
            "Aprenda a criar um blazer estruturado, elegante e atemporal,
            entendendo cada etapa da construção — da modelagem à finalização."
          </S.FeatureQuoteText>
          <S.FeatureQuoteAuthor>— Grazyela Couto</S.FeatureQuoteAuthor>
        </S.FeatureQuote>
      </S.FeatureSection>

      {/* ── SEÇÃO ESCURA — ALFAIATARIA DESCOMPLICADA ── */}
      <S.DarkSection>
        <S.DarkLeft>
          <S.DarkEyebrow>A proposta</S.DarkEyebrow>
          <S.DarkTitle>
            Alfaiataria<br />Descomplicada<br />
            <S.DarkTitleAccent>+ Técnica</S.DarkTitleAccent>
          </S.DarkTitle>
          <S.Cta
            href={CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            $light
          >
            Garantir minha vaga
          </S.Cta>
        </S.DarkLeft>
        <S.DarkRight>
          <S.DarkPhoto>
            <Image
              src="/images/modulo-blazer/img2.jpg"
              alt="Modelagem do blazer"
              fill
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
            />
          </S.DarkPhoto>
        </S.DarkRight>
      </S.DarkSection>

      {/* ── PARA QUEM / COMPLETO ── */}
      <S.CompleteSection>
        <S.CompleteText>
          <S.CompleteEyebrow>Um passo a passo</S.CompleteEyebrow>
          <S.CompleteTitle>Completo</S.CompleteTitle>
          <S.CompleteBody>
            Aprenda a modelar, cortar e costurar um blazer elegante, com
            acabamento profissional, mesmo que você ainda não tenha experiência
            em alfaiataria.
          </S.CompleteBody>
        </S.CompleteText>
        <S.CompletePhoto>
          <Image
            src="/images/modulo-blazer/img1.jpg"
            alt="Ateliê Grazyela Couto"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </S.CompletePhoto>
      </S.CompleteSection>

      {/* ── GRADE DE FOTOS verticais ── */}
      <S.PhotoGrid>
        <S.PhotoPortraitWrap>
          <Image
            src="/images/modulo-blazer/img3.jpg"
            alt="Blazer em uso"
            fill
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
          <S.PhotoPortraitOverlay />
          <S.PhotoGridCaption>Uma peça clássica.</S.PhotoGridCaption>
        </S.PhotoPortraitWrap>
        <S.PhotoPortraitWrap>
          <Image
            src="/images/modulo-blazer/img4.jpg"
            alt="Alfaiataria com método e clareza"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
          <S.PhotoPortraitOverlay />
          <S.PhotoGridCaptionDark>
            Alfaiataria com método,<br />clareza e segurança.
          </S.PhotoGridCaptionDark>
        </S.PhotoPortraitWrap>
      </S.PhotoGrid>

      {/* ── O QUE VOU ENCONTRAR ── */}
      <S.ContentSection>
        <S.ContentHeader>
          <S.ContentEyebrow>Conteúdo do módulo</S.ContentEyebrow>
          <S.ContentTitle>O que você vai aprender</S.ContentTitle>
        </S.ContentHeader>
        <S.ContentGrid>
          {CONTEUDO.map((item, i) => (
            <S.ContentItem key={i}>
              <S.ContentNum>0{i + 1}</S.ContentNum>
              <S.ContentItemText>{item}</S.ContentItemText>
            </S.ContentItem>
          ))}
        </S.ContentGrid>
      </S.ContentSection>

      {/* ── DESENHO TÉCNICO ── */}
      <S.DrawSection>
        <S.DrawEyebrow>Desenho técnico</S.DrawEyebrow>
        <S.DrawTitle>do Modelo Ensinado</S.DrawTitle>
        <S.DrawImg>
          <Image
            src="/images/modulo-blazer/desenho-tecnico.png"
            alt="Desenho técnico do blazer"
            fill
            style={{ objectFit: "contain" }}
          />
        </S.DrawImg>
        <S.DrawSig>por Grazyela Couto</S.DrawSig>
      </S.DrawSection>

      {/* ── CTA CENTRAL ── */}
      <S.CtaSection>
        <S.CtaTitle>Módulo Blazer Alfaiataria</S.CtaTitle>
        <S.CtaSub>Garanta seu acesso agora e comece hoje mesmo.</S.CtaSub>
        <S.Cta href={CHECKOUT} target="_blank" rel="noopener noreferrer">
          Inscreva-se aqui
        </S.Cta>
        <S.HeroNota>Acesso imediato · Plataforma Hotmart</S.HeroNota>
      </S.CtaSection>

      {/* ── FAQ ── */}
      <S.FaqSection>
        <S.FaqTitle>Dúvidas frequentes</S.FaqTitle>
        <S.FaqList>
          <Faq
            pergunta="Onde vou acessar as aulas?"
            resposta="Você vai acessar dentro da plataforma da Hotmart, com acesso durante 1 ano."
          />
          <Faq
            pergunta="Quanto tempo de acesso às aulas?"
            resposta="O acesso é de 1 ano a partir da data da compra, com atualizações inclusas."
          />
          <Faq
            pergunta="Precisa ter experiência em costura?"
            resposta="Não. O método é passo a passo, pensado para quem tem noções básicas de costura e quer evoluir para a alfaiataria."
          />
        </S.FaqList>
      </S.FaqSection>


    </S.Page>
  );
}
