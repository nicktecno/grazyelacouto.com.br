import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import * as S from "./style";

import heroCostureira from "../../public/images/aprenda_a_costurar/hero_costureira.jpg";
import modulosIniciais from "../../public/images/aprenda_a_costurar/modulos/00_modulos_iniciais.jpeg";
import modulo07 from "../../public/images/aprenda_a_costurar/modulos/07_camisa_classica.jpeg";
import modulo08 from "../../public/images/aprenda_a_costurar/modulos/08_vestido_verao.jpeg";
import modulo09 from "../../public/images/aprenda_a_costurar/modulos/09_camisa_cropped.jpeg";
import modulo10 from "../../public/images/aprenda_a_costurar/modulos/10_saias.jpeg";
import modulo11 from "../../public/images/aprenda_a_costurar/modulos/11_calca_italiana.jpeg";
import modulo12 from "../../public/images/aprenda_a_costurar/modulos/12_ciganinha_summer.jpeg";
import modulo13 from "../../public/images/aprenda_a_costurar/modulos/13_vestido_dolce_gabanna.jpeg";
import modulo14 from "../../public/images/aprenda_a_costurar/modulos/14_short_alexander.jpeg";
import modulo15 from "../../public/images/aprenda_a_costurar/modulos/15_saia_com_pregas.jpeg";
import modulo16 from "../../public/images/aprenda_a_costurar/modulos/16_jaquetinha_chanel.jpeg";
import modulo17 from "../../public/images/aprenda_a_costurar/modulos/17_vestido_midi.jpeg";
import modulo18 from "../../public/images/aprenda_a_costurar/modulos/18_macacao_de_grife.jpeg";
import modulo19 from "../../public/images/aprenda_a_costurar/modulos/19_vestido_oscar_de_la_renta.jpeg";
import modulo20 from "../../public/images/aprenda_a_costurar/modulos/20_vestido_fenda.jpeg";
import modulo21 from "../../public/images/aprenda_a_costurar/modulos/21_tubinho_beckman.jpeg";
import modulo22 from "../../public/images/aprenda_a_costurar/modulos/22_blusa_europeia.jpeg";
import adicionalColete from "../../public/images/aprenda_a_costurar/modulos/23_adicional_colete_alfaiataria.jpeg";
import adicionalCasaqueto from "../../public/images/aprenda_a_costurar/modulos/24_adicional_casaqueto_chanel_lady.jpeg";
import adicionalJaqueta from "../../public/images/aprenda_a_costurar/modulos/25_adicional_jaqueta_zara.jpeg";
import adicionalVestidoGlamour from "../../public/images/aprenda_a_costurar/modulos/26_adicional_vestido_glamour.jpeg";
import adicionalVestidoFlower from "../../public/images/aprenda_a_costurar/modulos/27_adicional_vestido_flower.jpeg";
import adicionalVestidoCoreana from "../../public/images/aprenda_a_costurar/modulos/28_adicional_vestido_coreana.jpeg";
import adicionalMaratonaCasaco from "../../public/images/aprenda_a_costurar/modulos/29_adicional_maratona_casaco_perfeito.jpeg";
import adicionalBlusaLaco from "../../public/images/aprenda_a_costurar/modulos/30_adicional_blusa_gola_laco.jpeg";
import adicionalVestidoVerona from "../../public/images/aprenda_a_costurar/modulos/31_adicional_vestido_verona.jpeg";
import adicionalVestidoSummer from "../../public/images/aprenda_a_costurar/modulos/32_adicional_vestido_summer.jpeg";
import adicionalCasacoPerfeito from "../../public/images/aprenda_a_costurar/modulos/33_adicional_casaco_perfeito.jpeg";
import profFoto from "../../public/images/aprenda_a_costurar/IMG_7632.JPG";
import img7723 from "../../public/images/aprenda_a_costurar/IMG_7723.jpg";
import img7832 from "../../public/images/aprenda_a_costurar/IMG_7832.JPG";

const CHECKOUT = "https://pay.hotmart.com/M72976409H?checkoutMode=10";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[index] = r(item);
  });
  return images;
}

const communityImages = Object.values(
  importAll(
    require.context(
      "../../public/images/aprenda_a_costurar/carousel03",
      false,
      /\.(png|jpe?g|svg)$/,
    ),
  ),
);

const coursePieces = [
  {
    title: "Fundamentos da Costura",
    tag: "Módulos 01 a 06",
    image: modulosIniciais,
    alt: "Módulos Iniciais 1 a 6: Fundamentos da Costura, acabamentos iniciantes, medidas, tecidos e modelagens base",
  },
  {
    title: "Camisa Clássica",
    tag: "Módulo 07",
    image: modulo07,
    alt: "Camisa Clássica listrada com colarinho e punhos estruturados",
  },
  {
    title: "Vestido Verão",
    tag: "Módulo 08",
    image: modulo08,
    alt: "Vestido Verão chemise com cinto e abotoamento frontal",
  },
  {
    title: "Camisa Cropped",
    tag: "Módulo 09",
    image: modulo09,
    alt: "Camisa Cropped com gola boneca e botões frontais",
  },
  {
    title: "Saias",
    tag: "Módulo 10",
    image: modulo10,
    alt: "Saia três marias com camadas e opções bônus godê, evasê e lápis",
  },
  {
    title: "Calça Italiana",
    tag: "Módulo 11",
    image: modulo11,
    alt: "Calça Italiana de alfaiataria com cós anatômico e bolso faca",
  },
  {
    title: "Ciganinha Summer",
    tag: "Módulo 12",
    image: modulo12,
    alt: "Blusa e vestidos Ciganinha Summer com decote ombro a ombro",
  },
  {
    title: "Vestido Dolce & Gabbana",
    tag: "Módulo 13",
    image: modulo13,
    alt: "Vestido Dolce & Gabbana evasê floral com decote quadrado e bônus cropped com saia magenta",
  },
  {
    title: "Short Alexander",
    tag: "Módulo 14",
    image: modulo14,
    alt: "Short Alexander alfaiataria com pregas e barra italiana",
  },
  {
    title: "Saia com Pregas",
    tag: "Módulo 15",
    image: modulo15,
    alt: "Saia com Pregas midi xadrez com abotoamento frontal e camisa clássica",
  },
  {
    title: "Jaquetinha Chanel",
    tag: "Módulo 16",
    image: modulo16,
    alt: "Jaquetinha Chanel estruturada em tweed com botões",
  },
  {
    title: "Vestido Midi",
    tag: "Módulo 17",
    image: modulo17,
    alt: "Vestido Midi com mangas bufantes, saia fluida e bônus",
  },
  {
    title: "Macacão de Grife",
    tag: "Módulo 18",
    image: modulo18,
    alt: "Macacão de Grife alfaiataria com transpasse e bônus",
  },
  {
    title: "Vestido Oscar de la Renta",
    tag: "Módulo 19",
    image: modulo19,
    alt: "Vestido Oscar de la Renta evasê midi com bordados florais",
  },
  {
    title: "Vestido Fenda",
    tag: "Módulo 20",
    image: modulo20,
    alt: "Vestido Fenda magenta com mangas bufantes e fenda lateral",
  },
  {
    title: "Tubinho Beckman",
    tag: "Módulo 21",
    image: modulo21,
    alt: "Vestido Tubinho Beckman com lapela contrastante e fenda",
  },
  {
    title: "Blusa Europeia",
    tag: "Módulo 22",
    image: modulo22,
    alt: "Blusa Europeia drapeada de gola alta em três versões elegantes",
  },
  {
    title: "Colete Alfaiataria",
    tag: "Módulo Adicional",
    image: adicionalColete,
    alt: "Colete de alfaiataria risca de giz com calça",
  },
  {
    title: "Casaqueto Chanel (Lady)",
    tag: "Módulo Adicional",
    image: adicionalCasaqueto,
    alt: "Casaqueto Chanel Lady clássico em tweed azul claro",
  },
  {
    title: "Jaqueta Zara",
    tag: "Módulo Adicional",
    image: adicionalJaqueta,
    alt: "Jaqueta cropped estilo trench Zara com fivelas nos punhos",
  },
  {
    title: "Vestido Glamour",
    tag: "Módulo Adicional",
    image: adicionalVestidoGlamour,
    alt: "Vestido Glamour floral lilás com cinto e abotoamento",
  },
  {
    title: "Vestido Flower",
    tag: "Módulo Adicional",
    image: adicionalVestidoFlower,
    alt: "Vestido Flower transpassado com estampas florais e mangas bufantes",
  },
  {
    title: "Vestido Coreana",
    tag: "Módulo Adicional",
    image: adicionalVestidoCoreana,
    alt: "Vestido Coreana evasê sem mangas com colarinho e cinto",
  },
  {
    title: "Maratona Casaco Perfeito",
    tag: "Módulo Adicional",
    image: adicionalMaratonaCasaco,
    alt: "Casaco clássico estilo trench coat forrado com estampa xadrez",
  },
  {
    title: "Blusa Gola Laço",
    tag: "Módulo Adicional",
    image: adicionalBlusaLaco,
    alt: "Blusa feminina rendada com gola laço e punhos trabalhados",
  },
  {
    title: "Vestido Verona",
    tag: "Módulo Adicional",
    image: adicionalVestidoVerona,
    alt: "Vestido Verona evasê midi com abotoamento frontal e versão mullet mangas bufantes",
  },
  {
    title: "Vestido Summer",
    tag: "Módulo Adicional",
    image: adicionalVestidoSummer,
    alt: "Vestido Summer com decote quadrado, lastex e saia com entremeios de renda",
  },
  {
    title: "Casaco Perfeito",
    tag: "Módulo Adicional",
    image: adicionalCasacoPerfeito,
    alt: "Casaco Perfeito sobretudo alongado alfaiataria com faixa de amarrar e gola smoking",
  },
];

const CONTEUDO = [
  "Mais de 300 aulas práticas em vídeo com passo a passo em alta definição.",
  "Mais de 20 peças completas do corte à finalização de ateliê.",
  "Modelagem prática e técnicas de adaptação de bases.",
  "Corte, montagem e acabamentos finos descomplicados.",
  "2,5 anos de acesso total com todas as atualizações inclusas.",
  "Suporte direto com a prof. Grazyela no WhatsApp e Telegram.",
  "Inclusão contínua de novas maratonas e módulos bônus.",
  "Acesso no computador, tablet e no aplicativo móvel da Hotmart.",
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

function CommunityCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, images.length]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <S.CarouselWrapper>
      <S.CarouselViewport ref={emblaRef}>
        <S.CarouselContainer>
          {images.map((img, index) => (
            <S.CarouselSlide key={index}>
              <img
                src={img.default?.src || img.src || img}
                alt={`Aluna e confecção da comunidade Grazyela Couto ${index + 1}`}
                loading="lazy"
              />
            </S.CarouselSlide>
          ))}
        </S.CarouselContainer>
      </S.CarouselViewport>

      <S.CarouselControls>
        <S.CarouselButton
          type="button"
          onClick={scrollPrev}
          aria-label="Foto anterior"
        >
          ‹
        </S.CarouselButton>
        <S.CarouselButton
          type="button"
          onClick={scrollNext}
          aria-label="Próxima foto"
        >
          ›
        </S.CarouselButton>
      </S.CarouselControls>
    </S.CarouselWrapper>
  );
}

export default function AprendaCosturarPage() {

  return (
    <S.Page>
      {/* ── 1. HERO (Layout e responsividade idênticos ao Módulo Blazer) ── */}
      <S.Hero>
        <S.HeroBg>
          <S.HeroImage
            src={heroCostureira}
            alt="Ilustração artística de costureira na máquina — Aprenda a Costurar"
            fill
            priority
          />
          <S.HeroOverlay />
        </S.HeroBg>
        <S.HeroContent>
          <S.HeroEyebrow>Por Grazyela Couto · CURSO 100% online</S.HeroEyebrow>
          <S.HeroTitle>
            Aprenda a<br />
            <S.HeroItalic>Costurar</S.HeroItalic>
          </S.HeroTitle>
          <S.HeroSub>
            Você não precisa ter dom para costurar, precisa de alguém que ensine o caminho
          </S.HeroSub>
          <S.Cta href={CHECKOUT} target="_blank" rel="noopener noreferrer" $light>
            Quero aprender agora
          </S.Cta>
          <S.HeroNota>Acesso imediato · Plataforma Hotmart</S.HeroNota>
        </S.HeroContent>
      </S.Hero>

      {/* ── 2. MANIFESTO ── */}
      <S.Manifesto>
        <S.ManifestoInner>
          <S.ManifestoEyebrow>O que é</S.ManifestoEyebrow>
          <S.ManifestoTitle>
            Costura do zero ao<br />Acabamento Impecável
          </S.ManifestoTitle>
          <S.ManifestoText>
            Um curso completo para você aprender a confeccionar suas próprias roupas
            mesmo começando do zero absoluto — precisando apenas de vontade e dedicação —
            seguindo o método passo a passo da <strong>Grazyela Couto</strong>.
          </S.ManifestoText>
        </S.ManifestoInner>
      </S.Manifesto>

      {/* ── 3. FOTO FULL + CITAÇÃO ── */}
      <S.FeatureSection>
        <S.FeaturePhoto>
          <Image
            src={img7723}
            alt="Grazyela Couto com máquina Singer — Crie suas próprias roupas do Zero ao Avançado"
            style={{
              width: "100%",
              maxWidth: "480px",
              height: "auto",
              maxHeight: "82vh",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
              display: "block",
            }}
          />
        </S.FeaturePhoto>
        <S.FeatureQuote>
          <S.FeatureQuoteBar />
          <S.FeatureQuoteText>
            "Crie suas próprias roupas do Zero ao Avançado, entendendo a modelagem, o corte e cada acabamento de ateliê."
          </S.FeatureQuoteText>
          <S.FeatureQuoteAuthor>— Grazyela Couto</S.FeatureQuoteAuthor>
        </S.FeatureQuote>
      </S.FeatureSection>

      {/* ── 4. A PROPOSTA ── */}
      <S.DarkSection>
        <S.DarkLeft>
          <S.DarkEyebrow>A proposta</S.DarkEyebrow>
          <S.DarkTitle>
            Costura<br />Descomplicada<br />
            <S.DarkTitleAccent>+ Técnica e Amor</S.DarkTitleAccent>
          </S.DarkTitle>
          <S.DarkCta
            href={CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
          >
            Garantir minha vaga
          </S.DarkCta>
        </S.DarkLeft>
        <S.DarkRight>
          <Image
            src={img7832}
            alt="Grazyela Couto — Costura Descomplicada com Técnica e Amor"
            style={{
              width: "100%",
              maxWidth: "480px",
              height: "auto",
              maxHeight: "82vh",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.4)",
              display: "block",
            }}
          />
        </S.DarkRight>
      </S.DarkSection>

      {/* ── 5. UM MÉTODO QUE LIBERTA ── */}
      <S.CompleteSection>
        <S.CompleteInner>
          <S.CompleteBadge>
            <S.CompleteBadgeLine />
            <S.CompleteEyebrow>Um método que liberta</S.CompleteEyebrow>
            <S.CompleteBadgeLine />
          </S.CompleteBadge>

          <S.CompleteTitle>
            Mais do que moldes,<br />
            <span>entenda a roupa!</span>
          </S.CompleteTitle>

          <S.CompleteQuoteBox>
            <S.CompleteQuoteMark>“</S.CompleteQuoteMark>
            <S.CompleteBody>
              Mais do que reproduzir um molde pronto, você começa a entender como uma peça é construída.
            </S.CompleteBody>
            <S.CompleteText>
              A ideia é que, com o tempo, você consiga olhar para uma roupa e pensar:
            </S.CompleteText>
            <S.CompletePromptCard>
              “Como essa peça foi construída? Como posso transformar uma base para chegar nesse modelo?”
            </S.CompletePromptCard>
            <S.CompleteHighlight>
              Você não vai apenas aprender a costurar. <span>Vai aprender a entender a roupa.</span>
            </S.CompleteHighlight>
          </S.CompleteQuoteBox>
        </S.CompleteInner>
      </S.CompleteSection>

      {/* ── 6. COLEÇÃO DE PEÇAS ── */}
      <S.PiecesSection>
        <S.PiecesHeader>
          <S.PiecesEyebrow>Coleção do Curso</S.PiecesEyebrow>
          <S.PiecesTitle>Quais Peças aprenderei ?</S.PiecesTitle>
          <S.PiecesSubtitle>
            Conheça alguns dos modelos ensinados passo a passo do corte ao acabamento
          </S.PiecesSubtitle>
        </S.PiecesHeader>

        <S.PiecesGrid>
          {coursePieces.map((piece, index) => (
            <S.PieceCard key={index}>
              <Image
                src={piece.image}
                alt={piece.alt}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <S.PieceCardOverlay />
              <S.PieceCardCaption>
                <span className="tag">{piece.tag}</span>
                <h3>{piece.title}</h3>
              </S.PieceCardCaption>
            </S.PieceCard>
          ))}
        </S.PiecesGrid>
      </S.PiecesSection>

      {/* ── 7. CARROSSEL COMUNIDADE (AGULHINHAS EM AÇÃO) ── */}
      <S.CommunitySection>
        <S.CommunityHeader>
          <S.CommunityEyebrow>Comunidade do Atelier</S.CommunityEyebrow>
          <S.CommunityTitle>Agulhinhas em Ação</S.CommunityTitle>
          <S.CommunitySubtitle>
            Vem ver o que as alunas estão fazendo e criando com suas próprias mãos!
          </S.CommunitySubtitle>
        </S.CommunityHeader>

        <CommunityCarousel images={communityImages} />
      </S.CommunitySection>

      {/* ── 8. O QUE VOU ENCONTRAR / CONTEÚDO ── */}
      <S.ContentSection>
        <S.ContentHeader>
          <S.ContentEyebrow>Conteúdo do curso</S.ContentEyebrow>
          <S.ContentTitle>O que você vai encontrar?</S.ContentTitle>
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

      {/* ── 9. QUEM SERÁ A PROFESSORA ── */}
      <S.ProfSection>
        <S.ProfPortrait
          src={profFoto}
          alt="Grazyela Couto ao lado de sua máquina de costura Singer"
          width={380}
          height={675}
        />
        <S.ProfCopy>
          <S.ProfEyebrow>Sua Professora</S.ProfEyebrow>
          <S.ProfTitle>Quem será a prof?</S.ProfTitle>
          <S.ProfBody>
            <p>
              Eu sou a <strong>Grazyela Couto</strong>, professora, modelista e costureira, e há anos vivo intensamente o universo da moda e da costura autoral.
            </p>
            <p>
              Criei a minha própria marca, somei vasta experiência no desenvolvimento de peças com modelistas e alfaiates, e principalmente em um propósito: ensinar outras mulheres a descobrirem que elas também são plenamente capazes de criar suas próprias roupas.
            </p>
            <p>
              Modelagem não é sobre fórmulas prontas ou decoreba. É sobre raciocínio, autonomia e ter alguém que mostre o caminho de forma clara, acolhedora e descomplicada.
            </p>
            <blockquote>
              “Quero que você termine esse curso pensando: Eu consigo fazer! E, a partir daí, comece a olhar para cada roupa não apenas como uma peça pronta, mas como algo que você também pode criar.”
            </blockquote>
          </S.ProfBody>
        </S.ProfCopy>
      </S.ProfSection>

      {/* ── 10. CTA CENTRAL ── */}
      <S.CtaSection>
        <S.CtaTitle>Curso Aprenda a Costurar</S.CtaTitle>
        <S.CtaSub>
          Garanta seu acesso com 2,5 anos de suporte e comece hoje mesmo a transformar sua costura.
        </S.CtaSub>
        <S.Cta $light href={CHECKOUT} target="_blank" rel="noopener noreferrer">
          Inscreva-se aqui
        </S.Cta>
        <S.HeroNota>Acesso imediato · Plataforma Hotmart</S.HeroNota>
      </S.CtaSection>

      {/* ── 11. FAQ ── */}
      <S.FaqSection>
        <S.FaqTitle>Dúvidas frequentes</S.FaqTitle>
        <S.FaqList>
          <Faq
            pergunta="Onde vou acessar as aulas?"
            resposta="Você vai acessar dentro da plataforma da Hotmart, no computador, tablet ou pelo aplicativo no celular, com acesso garantido por 2,5 anos."
          />
          <Faq
            pergunta="Precisa ter máquina industrial ou experiência prévia?"
            resposta="Não! Você pode começar com uma máquina doméstica simples e mesmo que nunca tenha colocado uma linha na agulha. O método é didático e passo a passo desde o zero absoluto."
          />
          <Faq
            pergunta="Como funciona o suporte para dúvidas?"
            resposta="Você terá suporte direto com a professora Grazyela Couto através dos grupos exclusivos no WhatsApp, Telegram e nos comentários de cada aula dentro da plataforma."
          />
          <Faq
            pergunta="O curso emite certificado de conclusão?"
            resposta="Sim! Ao concluir as etapas e aulas do curso, você pode solicitar e emitir seu certificado de conclusão."
          />
        </S.FaqList>
      </S.FaqSection>
    </S.Page>
  );
}
