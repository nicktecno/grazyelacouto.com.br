import React from "react";
import * as S from "./style";

const HOTMART_CHECKOUT = "https://pay.hotmart.com/G105717138M?bid=1778094668954";

const MODULOS = [
  {
    titulo: "Modelagem do zero",
    descricao:
      "Trace o molde do blazer adaptado ao seu próprio corpo, sem depender de tabelas prontas.",
  },
  {
    titulo: "Corte e encaixe inteligente",
    descricao:
      "Técnicas de encaixe que economizam tecido e garantem um caimento impecável.",
  },
  {
    titulo: "Costura com acabamento de ateliê",
    descricao:
      "Gola, entretela, forro e botões executados com o refinamento que eleva qualquer peça.",
  },
  {
    titulo: "100% online, no seu ritmo",
    descricao:
      "Aulas gravadas na Hotmart. Disponíveis para sempre — assista quando e quantas vezes quiser.",
  },
];

const PARA_QUEM = [
  "Iniciantes que querem criar seu primeiro blazer com qualidade",
  "Costureiras que desejam expandir o portfólio com alfaiataria",
  "Estilistas em formação buscando técnicas de estrutura e forro",
  "Quem quer parar de gastar em peças prontas e criar as suas",
];

export default function ModuloBlazerPage() {
  return (
    <S.Wrapper>

      {/* ── HERO ── */}
      <S.Hero>
        <S.HeroGlow aria-hidden="true" />
        <S.HeroInner>
          <S.Eyebrow>Grazyela Couto apresenta</S.Eyebrow>
          <S.HeroTitle>
            Módulo<br />
            <S.HeroTitleItalic>Blazer</S.HeroTitleItalic>
          </S.HeroTitle>
          <S.HeroDivider />
          <S.HeroSubtitle>
            Da modelagem ao acabamento de ateliê —<br />
            construa um blazer que veste como uma segunda pele.
          </S.HeroSubtitle>
          <S.Cta
            href={HOTMART_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero minha vaga no Módulo Blazer"
          >
            Quero minha vaga
          </S.Cta>
          <S.HeroNote>Acesso imediato · Plataforma Hotmart</S.HeroNote>
        </S.HeroInner>
      </S.Hero>

      {/* ── SEPARADOR ── */}
      <S.OrnamentRow aria-hidden="true">
        <S.OrnLine />
        <S.OrnDiamond>◆</S.OrnDiamond>
        <S.OrnLine />
      </S.OrnamentRow>

      {/* ── SOBRE ── */}
      <S.Section>
        <S.SectionEyebrow>O que é</S.SectionEyebrow>
        <S.SectionTitle>Um módulo feito para elevar sua costura</S.SectionTitle>
        <S.SectionText>
          O <strong>Módulo Blazer</strong> é uma imersão prática na alfaiataria aplicada.
          Com aulas didáticas e objetivas, a <strong>Grazyela Couto</strong> — Estilista,
          Modelista e Costureira — guia você passo a passo na construção de um blazer
          com estrutura, forro e acabamento de alta costura, tudo a partir do molde
          que você mesmo traça.
        </S.SectionText>
      </S.Section>

      {/* ── CONTEÚDO ── */}
      <S.DarkSection>
        <S.SectionEyebrow light>O que você aprende</S.SectionEyebrow>
        <S.SectionTitle light>Cada detalhe, cada técnica</S.SectionTitle>
        <S.Grid>
          {MODULOS.map((m, i) => (
            <S.Card key={i}>
              <S.CardNumber aria-hidden="true">0{i + 1}</S.CardNumber>
              <S.CardTitle>{m.titulo}</S.CardTitle>
              <S.CardText>{m.descricao}</S.CardText>
            </S.Card>
          ))}
        </S.Grid>
      </S.DarkSection>

      {/* ── PARA QUEM É ── */}
      <S.Section>
        <S.SectionEyebrow>Para quem é</S.SectionEyebrow>
        <S.SectionTitle>Este módulo foi feito para você que…</S.SectionTitle>
        <S.CheckList>
          {PARA_QUEM.map((item, i) => (
            <S.CheckItem key={i}>
              <S.CheckMark aria-hidden="true">◆</S.CheckMark>
              {item}
            </S.CheckItem>
          ))}
        </S.CheckList>
      </S.Section>

      {/* ── PROFESSORA ── */}
      <S.CreamSection>
        <S.ProfInner>
          <S.SectionEyebrow>Sua professora</S.SectionEyebrow>
          <S.SectionTitle>Grazyela Couto</S.SectionTitle>
          <S.SectionText>
            Estilista, Modelista e Costureira há mais de 4 anos no ramo, com marca
            própria de roupas e uma paixão genuína por ensinar. Grazyela acredita —
            e prova — que costurar não é dom: é técnica, prática e o prazer de criar.
          </S.SectionText>
          <S.Quote>
            "Costurar não é dom! Vem comigo, Agulhinha."
          </S.Quote>
        </S.ProfInner>
      </S.CreamSection>

      {/* ── CTA FINAL ── */}
      <S.CtaSection>
        <S.OrnamentRow aria-hidden="true" style={{ marginBottom: "2.5rem" }}>
          <S.OrnLine />
          <S.OrnDiamond>◆</S.OrnDiamond>
          <S.OrnLine />
        </S.OrnamentRow>
        <S.CtaTitle>Pronta para criar o seu blazer?</S.CtaTitle>
        <S.CtaSubtitle>Garanta seu acesso agora e comece hoje mesmo.</S.CtaSubtitle>
        <S.Cta
          href={HOTMART_CHECKOUT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Garantir minha vaga no Módulo Blazer"
        >
          Garantir minha vaga
        </S.Cta>
        <S.HeroNote>Acesso imediato · Plataforma Hotmart</S.HeroNote>
      </S.CtaSection>

    </S.Wrapper>
  );
}
