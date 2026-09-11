import React, { useState } from "react";
import Image from "next/image";
import * as S from "./style";

import heroAlfaiataria from "../../public/images/pecas-de-alfaiataria/hero_alfaiataria.webp";
import profAlfaiataria from "../../public/images/pecas-de-alfaiataria/prof_alfaiataria.webp";
import devicesImg from "../../public/images/pecas-de-alfaiataria/devices.png";

const CHECKOUT = "https://pay.hotmart.com/M70669236F?hotfeature=51";

const FAQ_ITEMS = [
  {
    question: "Para quem é esse produto?",
    answer:
      "Para você que está decidida em aprender peças diferenciadas e crescer na área da moda.",
  },
  {
    question: "Como funciona o 'Prazo de Garantia'?",
    answer:
      "O Prazo de Garantia é o período que você tem para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório.",
  },
  {
    question: "O que é e como funciona o Certificado de Conclusão digital?",
    answer:
      "Alguns cursos online oferecem um certificado digital de conclusão. Os alunos podem emitir esse certificado ao final do curso. Esses certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares.",
  },
  {
    question: "Como acessar o produto?",
    answer: [
      "Você receberá o acesso a Peças de Alfaiataria por email.",
      "O conteúdo será acessado ou baixado através de um computador, celular, tablet ou outro dispositivo digital. Você também pode acessar o produto comprado nesta página:",
      "01 - Faça login clicando em Entrar",
      "02 - Acesse o menu lateral, clique em Minha conta",
      "03 - Clique em Minhas compras e lá estarão os seus produtos!",
    ],
  },
  {
    question: "Aproveite o conteúdo em qualquer dispositivo",
    answer:
      "Assista no computador, celular ou tablet através da plataforma Hotmart.",
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <S.FaqCard>
      <S.FaqHeader
        type="button"
        $open={open}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="arrow">{open ? "▲" : "▼"}</span>
      </S.FaqHeader>
      <S.FaqContent $open={open}>
        {Array.isArray(answer) ? (
          answer.map((p, i) => <p key={i}>{p}</p>)
        ) : (
          <p>{answer}</p>
        )}
      </S.FaqContent>
    </S.FaqCard>
  );
}

export default function PecasAlfaiatariaPage() {
  return (
    <S.Page>
      {/* ── 1. HERO SECTION ── */}
      <S.HeroSection>
        <S.HeroRow>
          <S.HeroColLeft>
            <S.HeroTitle>
              Domine a Alfaiataria:
              <br />
              Curso Completo para Criação de Peças Exclusivas
            </S.HeroTitle>
            <S.DividerLine $short />
            <S.OriginalButton
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
            >
              COMPRAR AGORA
            </S.OriginalButton>
          </S.HeroColLeft>

          <S.HeroColRight>
            <S.HeroArchImgWrap>
              <Image
                src={heroAlfaiataria}
                alt="Domine a Alfaiataria — Curso Completo para Criação de Peças Exclusivas"
                fill
                priority
                sizes="(max-width: 768px) 260px, 500px"
              />
            </S.HeroArchImgWrap>
          </S.HeroColRight>
        </S.HeroRow>
      </S.HeroSection>

      {/* ── 2. SOBRE O CONTEÚDO ── */}
      <S.AboutSection>
        <S.Container style={{ flexDirection: "column", alignItems: "center" }}>
          <S.AboutTitle>Sobre o conteúdo</S.AboutTitle>
          <S.DividerLine $short $margin="1.5rem auto 2.5rem" />
          <S.AboutText>
            Com o Curso de Peças de Alfaiataria, desenvolva suas habilidades de
            costura e crie do zero peças específicas de altíssima qualidade.
            Aprenda técnicas de alfaiataria para fazer um blazer slim, calça
            alfaiataria, coletes, salopete e muito mais. Além disso, receba aulas
            bônus de croqui de moda para expandir seus conhecimentos e aprimorar
            suas criações com a Grazyela Couto.
          </S.AboutText>
        </S.Container>
      </S.AboutSection>

      {/* ── 3. PERGUNTAS FREQUENTES ── */}
      <S.FaqSection>
        <S.Container style={{ flexDirection: "column", alignItems: "center" }}>
          <S.FaqTitle>Perguntas frequentes</S.FaqTitle>
          <S.DividerLine $short $margin="1rem auto 2.5rem" />
          <S.FaqWrapper>
            {FAQ_ITEMS.map((item, idx) => (
              <FaqItem
                key={idx}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </S.FaqWrapper>
        </S.Container>
      </S.FaqSection>

      {/* ── 4. OFERTA ── */}
      <S.OfferSection>
        <S.DevicesRow>
          <Image
            src={devicesImg}
            alt="Dispositivos"
            className="devicesImg"
          />
          <p>Aproveite o conteúdo em qualquer dispositivo</p>
        </S.DevicesRow>

        <S.PriceCard>
          <p className="priceLabel">por apenas</p>
          <div className="priceValue">12x 59,90</div>
          <S.OriginalButton
            href={CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
          >
            COMPRAR AGORA
          </S.OriginalButton>
          <p className="secureNote">pagamento 100% seguro</p>
        </S.PriceCard>
      </S.OfferSection>

      {/* ── 5. GARANTIA & SEGURANÇA ── */}
      <S.TrustSection>
        <S.TrustRow>
          <S.TrustCard>
            <span className="icon">🛡️</span>
            <h3>GARANTIA DE 7 DIAS</h3>
            <p>
              Você tem <b>7 dias</b> para testar o produto. Se não gostar, pode
              solicitar seu dinheiro de volta.
            </p>
          </S.TrustCard>

          <S.TrustCard>
            <span className="icon">🔒</span>
            <h3>COMPRA 100% SEGURA</h3>
            <p>
              Ambiente seguro. Seus dados cadastrais são totalmente sigilosos e
              protegidos.
            </p>
          </S.TrustCard>
        </S.TrustRow>
      </S.TrustSection>

      {/* ── 6. CONHEÇA MELHOR QUEM CRIOU O CONTEÚDO ── */}
      <S.AuthorSection>
        <S.AuthorHeading>
          <h2>Conheça melhor quem criou o conteúdo</h2>
        </S.AuthorHeading>
        <S.AuthorRow>
          <S.AuthorPhotoCol>
            <Image
              src={profAlfaiataria}
              alt="Grazyela Couto — Criadora do conteúdo"
            />
          </S.AuthorPhotoCol>
          <S.AuthorTextCol>
            <div className="authorTag">Grazyela Couto</div>
            <p>
              Conheça Grazyela Couto, estilista, modelista e costureira com mais
              de 4 anos de experiência no ramo da moda. Com sua própria marca de
              roupas por 2 anos, encontrou sua vocação em compartilhar seu
              conhecimento e paixão pelo design. Grazyela acredita que costurar
              não é um dom, mas sim uma habilidade que pode ser aprendida por
              todos com método, paciência e dedicação.
            </p>
          </S.AuthorTextCol>
        </S.AuthorRow>
      </S.AuthorSection>

      {/* ── 7. FOOTER ORIGINAL ── */}
      <S.FooterOriginal>
        <p>© Grazyela Couto — Todos os direitos reservados.</p>
      </S.FooterOriginal>
    </S.Page>
  );
}
