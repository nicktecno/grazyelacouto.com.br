import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import cover01 from "../../public/images/capa01.jpg";
import cover02 from "../../public/images/capa02.jpg";
import cover03 from "../../public/images/capa03.jpg";
import cover04 from "../../public/images/capa04.jpg";
import cover05 from "../../public/images/capa05.png";

import * as S from "./style";

const COURSE_SEWING = "https://pay.hotmart.com/M72976409H?checkoutMode=10";
const COURSE_TAILORING =
  "https://grazyela1467.kpages.online/pagina-de-vendas-0d6785df-66ec-4cfb-929f-d37e4340020a";
const COURSE_COMBO = "https://pay.hotmart.com/X73383978V";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[index] = r(item);
  });
  return images;
}

const imagesList01 = Object.values(
  importAll(
    require.context(
      "../../public/images/carousel01",
      false,
      /\.(png|jpe?g|svg)$/,
    ),
  ),
);
const imagesList02 = Object.values(
  importAll(
    require.context(
      "../../public/images/carousel02",
      false,
      /\.(png|jpe?g|svg)$/,
    ),
  ),
);

function GalleryCarousel({ images, light, altPrefix }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    breakpoints: {
      "(min-width: 1400px)": { slidesToScroll: 1 },
    },
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  const onInit = useCallback((api) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <S.EmblaRoot>
      <S.EmblaViewport ref={emblaRef}>
        <S.EmblaContainer>
          {images.map((img, index) => (
            <S.EmblaSlide key={index}>
              <div className="category">
                <img
                  src={img.default.src}
                  alt={`${altPrefix} ${index + 1}`}
                  loading="lazy"
                />
              </div>
            </S.EmblaSlide>
          ))}
        </S.EmblaContainer>
      </S.EmblaViewport>

      <S.EmblaControls>
        <S.EmblaButton onClick={scrollPrev} $light={light} aria-label="Anterior">
          ‹
        </S.EmblaButton>
        <S.EmblaDots>
          {scrollSnaps.map((_, index) => (
            <S.EmblaDot
              key={index}
              $active={index === selectedIndex}
              $light={light}
              onClick={() => scrollTo(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </S.EmblaDots>
        <S.EmblaButton onClick={scrollNext} $light={light} aria-label="Próximo">
          ›
        </S.EmblaButton>
      </S.EmblaControls>
    </S.EmblaRoot>
  );
}

export default function HomePage() {
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
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <S.GeneralContainer $motionReady={motionReady}>
      <S.Hero as="header">
        <S.HeroMedia>
          <S.HeroImage
            src={cover01}
            alt="Grazyela Couto com uma agulha de costura na mão"
            priority
            fill
            sizes="100vw"
          />
          <S.HeroShade aria-hidden="true" />
        </S.HeroMedia>
        <S.HeroContent>
          <p className="welcome">— Bem Vindas</p>
          <p className="brand">Grazyela Couto</p>
          <span className="brandLine" aria-hidden="true" />
          <h1>Realize seu Sonho de Fazer Suas Próprias Roupas!</h1>
          <a className="cta" href="/#cursos">
            Quero agora meu curso!
          </a>
        </S.HeroContent>
      </S.Hero>

      <S.SectionIntro id="cursos" className="reveal">
        <S.SectionLabel>Atelier</S.SectionLabel>
        <h2>Escolha o curso perfeito para você</h2>
      </S.SectionIntro>

      <S.VideoSection className="reveal">
        <div className="videoCue">
          <img alt="seta para a direita" />
        </div>
        <div className="videoFrame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BeonVXHBz1U?si=h0KOCVQBWBVzbHjx"
            title="Conheça os cursos de modelagem e costura da Grazyela Couto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </S.VideoSection>

      <S.CourseSection className="reveal">
        <div className="copy">
          <h2>Aprenda a Costurar</h2>
          <p>
            Nesse curso mesmo que você saiba pouco ou nada sobre costura, vamos
            aprender juntinhas, Costurar e Modelar seus moldes base, para
            modelos de blusa, saia, vestidos! Transformaremos esses moldes para
            executar outras lindas peças do mesmo nicho. Com todo o meu auxilio
            e mostro como você pode se apaixonar por esse mundo da Costura.
          </p>
          <a href={COURSE_SEWING} target="_blank" rel="noopener noreferrer">
            Quero agora!
          </a>
        </div>
        <S.CourseImage
          src={cover02}
          alt="Grazyela Couto costurando em uma máquina de costura industrial"
          width={1600}
          height={1066}
        />
      </S.CourseSection>

      <S.CourseSection $reverse className="reveal">
        <div className="copy">
          <h2>Peças de Alfaiataria</h2>
          <p>
            Quer desenvolver suas habilidades na costura, produzindo peças de
            alfaiataria, como um blazer, uma calça e uma salopete? Você irá
            aprender tudo isso nesse curso, desde a modelagem, corte e costura e
            até mesmo aprender a fazer seu desenho fashion, o famoso croqui de
            moda. Esse curso tem o nível intermediário para avançado. Você não
            vai perder esssa oportunidade né?
          </p>
          <a href={COURSE_TAILORING} target="_blank" rel="noopener noreferrer">
            Quero agora!
          </a>
        </div>
        <S.CourseImage
          src={cover03}
          alt="Grazyela Couto ao lado de um manequim com uma tesoura na mão"
          width={600}
          height={337}
        />
      </S.CourseSection>

      <S.CourseSection className="reveal">
        <div className="copy">
          <h2>Combo Torne-se uma Estilista do Zero</h2>
          <p>
            Sabe aquele famoso 2 em 1? É exatamente o que esse combo significa.
            Nele você terá acesso aos meus dois cursos, vai sair do total zero e
            chegar ao nível de fazer peças alfaiataria.
          </p>
          <a href={COURSE_COMBO} target="_blank" rel="noopener noreferrer">
            Quero agora!
          </a>
        </div>
        <S.CourseImage
          src={cover04}
          alt="Grazyela Couto segurando uma máquina de costura"
          width={1024}
          height={576}
        />
      </S.CourseSection>

      <S.GalleryBlock>
        <S.SectionIntro className="reveal">
          <S.SectionLabel>Comunidade</S.SectionLabel>
          <h2>Vem ver o que as agulhinhas estão fazendo!</h2>
        </S.SectionIntro>
        <GalleryCarousel
          images={imagesList01}
          altPrefix="Foto da aluna — trabalhos e peças da comunidade Grazyela Couto"
          light={false}
        />
      </S.GalleryBlock>

      <S.GalleryBlock $ink>
        <S.SectionIntro $light className="reveal">
          <S.SectionLabel $light>Coleção</S.SectionLabel>
          <h2>Algumas das peças que você irá aprender</h2>
        </S.SectionIntro>
        <GalleryCarousel
          images={imagesList02}
          altPrefix="Peça de roupa que você aprende nos cursos de modelagem e costura"
          light={true}
        />
      </S.GalleryBlock>

      <S.AboutSection className="reveal" aria-labelledby="prof-title">
        <S.AboutPortrait
          src={cover05}
          alt="Grazyela Couto, estilista, modelista e costureira, segurando uma máquina de costura"
          width={330}
          height={442}
        />
        <div className="aboutCopy">
          <h2 id="prof-title">Quem será a Prof?</h2>
          <p>
            Grazyela Couto, Estilista, Modelista e Costureira, a mais de 4 anos
            trabalhando nesse ramo, onde teve sua marca de roupas durantes 2
            anos e encontrou a paixão em ensinar. Ela diz e deixa o incentivo
            que costurar não é dom ! Vem comigo Agulhinha !!
          </p>
        </div>
      </S.AboutSection>

      <S.GeoFacts className="reveal" aria-label="Resumo dos cursos">
        <h2>O que você encontra nos cursos da Grazyela Couto</h2>
        <dl>
          <div>
            <dt>Quem ensina?</dt>
            <dd>
              Grazyela Couto — estilista, modelista e costureira com experiência
              em marca própria e ensino online de costura e modelagem.
            </dd>
          </div>
          <div>
            <dt>Para quem é?</dt>
            <dd>
              Para quem quer realizar o sonho de fazer as próprias roupas: do
              zero (blusa, saia, vestido) até alfaiataria (blazer, calça,
              salopete) e croqui de moda.
            </dd>
          </div>
          <div>
            <dt>Quais cursos?</dt>
            <dd>
              Aprenda a Costurar; Peças de Alfaiataria; e o Combo Torne-se uma
              Estilista do Zero (os dois cursos juntos).
            </dd>
          </div>
          <div>
            <dt>Onde estudar?</dt>
            <dd>
              Cursos online com suporte da professora, com conteúdo prático de
              modelagem, corte e costura.
            </dd>
          </div>
        </dl>
      </S.GeoFacts>
    </S.GeneralContainer>
  );
}
