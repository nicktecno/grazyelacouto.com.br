import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

import cover01 from "../../public/images/capa01.jpg";
import cover02 from "../../public/images/capa02.jpg";
import profFoto from "../../public/images/aprenda_a_costurar/IMG_7632.JPG";
import alfaiataria01 from "../../public/images/alfaiataria01.png";
import alfaiataria02 from "../../public/images/alfaiataria02.png";
import alfaiataria03 from "../../public/images/alfaiataria03.png";
import alfaiataria04 from "../../public/images/alfaiataria04.png";
import ebookCover from "../../public/images/ebook-materiais/pagina_1.png";
import ebookPreview1 from "../../public/images/ebook-materiais/pagina_5.png";
import ebookPreview2 from "../../public/images/ebook-materiais/pagina_7.png";
import combo01 from "../../public/images/combo01.jpg";
import combo02 from "../../public/images/combo02.png";
import combo03 from "../../public/images/combo03.jpg";

import * as S from "./style";

const COURSE_SEWING = "https://pay.hotmart.com/M72976409H?checkoutMode=10";
const COURSE_TAILORING = "/pecas-de-alfaiataria";
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
  const [downloadCount, setDownloadCount] = React.useState(null);
  const [hasDownloaded, setHasDownloaded] = React.useState(false);

  useEffect(() => {
    fetch("/api/download-count")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          setDownloadCount(data.count);
        }
      })
      .catch(() => {});
  }, []);

  const handleDownload = () => {
    setDownloadCount((prev) => (typeof prev === "number" ? prev + 1 : 1));
    setHasDownloaded(true);
    setTimeout(() => setHasDownloaded(false), 5000);

    fetch("/api/download-count", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          setDownloadCount(data.count);
        }
      })
      .catch(() => {});
  };

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
          <p className="brand">Modelagem e costura com<br />Grazyela Couto</p>
          <span className="brandLine" aria-hidden="true" />
          <h1>Costure com confiança. Crie peças que você terá orgulho de vestir.</h1>
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
          <p className="cueLabel">Assista agora</p>
          <p className="cueHeading">Conheça os<br />cursos em<br />vídeo</p>
          <span className="cueArrow" aria-hidden="true">→</span>
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

      <S.SewingSection className="reveal">
        <S.SewingCopy>
          <p className="sewingLabel">Sua base para a costura profissional</p>
          <p className="sewingTag">Curso Online</p>
          <h2>"Aprenda a<br />Costurar"</h2>
          <p className="sewingDesc">
            Do Zero ao Avançado<br />
            Um método completo que reúne modelagem, técnicas de costura e
            acabamento para você evoluir do básico ao avançado com confiança.
          </p>
          <S.SewingCtaGroup>
            <a className="sewingCta" href="/aprenda-a-costurar">
              Conhecer o Curso
            </a>
            <a className="sewingCta" href={COURSE_SEWING} target="_blank" rel="noopener noreferrer">
              Quero agora!
            </a>
          </S.SewingCtaGroup>
        </S.SewingCopy>
        <S.SewingMedia>
          <S.SewingImage
            src={cover02}
            alt="Grazyela Couto costurando em uma máquina de costura"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </S.SewingMedia>
      </S.SewingSection>

      <S.TailoringSection className="reveal">
        <S.TailoringGrid>
          <S.TailoringCard>
            <S.TailoringImg src={alfaiataria01} alt="Ilustração de moda — saia midi xadrez com camisa" fill sizes="(max-width: 768px) 50vw, 25vw" />
          </S.TailoringCard>
          <S.TailoringCard $offset>
            <S.TailoringImg src={alfaiataria02} alt="Ilustração de moda — blazer verde com calça wide leg" fill sizes="(max-width: 768px) 50vw, 25vw" />
          </S.TailoringCard>
          <S.TailoringCard>
            <S.TailoringImg src={alfaiataria03} alt="Ilustração de moda — conjunto vermelho com saia longa" fill sizes="(max-width: 768px) 50vw, 25vw" />
          </S.TailoringCard>
          <S.TailoringCard $offset>
            <S.TailoringImg src={alfaiataria04} alt="Ilustração de moda — blazer alfaiataria close-up" fill sizes="(max-width: 768px) 50vw, 25vw" />
          </S.TailoringCard>
        </S.TailoringGrid>
        <S.TailoringCopy>
          <p className="tailLabel">Curso Online</p>
          <h2>Peças de<br />Alfaiataria</h2>
          <p className="tailDesc">
            Quer desenvolver suas habilidades na costura, produzindo peças de
            alfaiataria, como um blazer, uma calça e uma salopete? Você irá
            aprender tudo isso nesse curso, desde a modelagem, corte e costura e
            até mesmo aprender a fazer seu desenho fashion, o famoso croqui de
            moda. Nível intermediário a avançado.
          </p>
          <S.TailoringCtaGroup>
            <Link href={COURSE_TAILORING}>
              Conhecer o Curso
            </Link>
            <a href="https://pay.hotmart.com/M70669236F?hotfeature=51" target="_blank" rel="noopener noreferrer">
              Quero agora!
            </a>
          </S.TailoringCtaGroup>
        </S.TailoringCopy>
      </S.TailoringSection>

      <S.ComboSection className="reveal">
        <S.ComboCopy>
          <p className="comboLabel">Acesso de 5 anos</p>
          <h2>Tenha acesso<br />aos 2 em um <em>COMBO</em></h2>
          <p className="comboDesc">
            Combine os dois cursos e domine desde a costura básica até as peças
            de alfaiataria mais sofisticadas — tudo em um único acesso.
          </p>
          <a href={COURSE_COMBO} target="_blank" rel="noopener noreferrer">
            Quero agora!
          </a>
        </S.ComboCopy>
        <S.ComboGrid>
          <S.ComboImgWrap $main>
            <S.ComboImg
              src={combo01}
              alt="Grazyela Couto sorrindo com máquina de costura Singer"
              fill
              sizes="(max-width: 768px) 50vw, 28vw"
            />
          </S.ComboImgWrap>
          <S.ComboImgWrap>
            <S.ComboImg
              src={combo02}
              alt="Mão apontando para máquina de costura Singer"
              fill
              sizes="(max-width: 768px) 50vw, 28vw"
            />
          </S.ComboImgWrap>
          <S.ComboImgWrap $offset>
            <S.ComboImg
              src={combo03}
              alt="Grazyela Couto com as mãos no rosto olhando para a câmera"
              fill
              sizes="(max-width: 768px) 50vw, 28vw"
            />
          </S.ComboImgWrap>
        </S.ComboGrid>
      </S.ComboSection>

      {/* ── SEÇÃO E-BOOK: LISTA DE MATERIAIS BÁSICOS ── */}
      <S.EbookSection id="ebook-materiais" className="reveal">
        <S.EbookGrid>
          <S.EbookCard $main>
            <S.EbookImg
              src={ebookCover}
              alt="Capa do E-book: Lista de Materiais Básicos Para Iniciantes — Grazyela Couto"
              fill
              sizes="(max-width: 768px) 50vw, 28vw"
              style={{ objectPosition: "center top" }}
            />
          </S.EbookCard>
          <S.EbookCard>
            <S.EbookImg
              src={ebookPreview1}
              alt="Página de réguas e modelagem do Guia de Materiais Básicos"
              fill
              sizes="(max-width: 768px) 50vw, 24vw"
              style={{ objectPosition: "center top" }}
            />
          </S.EbookCard>
          <S.EbookCard $offset>
            <S.EbookImg
              src={ebookPreview2}
              alt="Página de tecidos recomendados do Guia de Materiais Básicos"
              fill
              sizes="(max-width: 768px) 50vw, 24vw"
              style={{ objectPosition: "center top" }}
            />
          </S.EbookCard>
        </S.EbookGrid>
        <S.EbookCopy>
          <S.EbookCounterBadge>
            <span className="pulseDot" />
            <span className="countNumber">
              {typeof downloadCount === "number"
                ? `+${downloadCount.toLocaleString("pt-BR")}`
                : "+0"}
            </span>
            <span className="countText">Downloads Realizados</span>
          </S.EbookCounterBadge>

          <p className="ebookLabel">E-book Gratuito • Guia Prático</p>
          <h2>
            Lista de<br />
            Materiais<br />
            Básicos
            <span>Para Iniciantes</span>
          </h2>
          <p className="ebookDesc">
            Tudo o que você realmente precisa para começar a costurar com segurança
            sem gastar com itens desnecessários: indicação de máquinas, réguas de
            modelagem, agulhas, tecidos e cupons de desconto exclusivos.
          </p>

          <S.EbookFeatures>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Máquinas testadas e recomendadas (Singer Facilita Pro e mais)</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Kit indispensável de corte e réguas de modelagem</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Guia dos melhores tecidos para suas primeiras peças</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Cupons de desconto exclusivos em lojas parceiras</span>
            </li>
          </S.EbookFeatures>

          <S.EbookDownloadBtn
            href="/downloads/lista-de-materiais-basicos-grazyela-couto.pdf"
            download="Lista-de-Materiais-Basicos-Grazyela-Couto.pdf"
            onClick={handleDownload}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar E-book Gratuito (PDF)
          </S.EbookDownloadBtn>

          {hasDownloaded && (
            <S.EbookDownloadFeedback>
              ✓ Download iniciado! Arquivo PDF salvo no seu dispositivo.
            </S.EbookDownloadFeedback>
          )}
        </S.EbookCopy>
      </S.EbookSection>

      {/* TODO: Mover seção "Comunidade" para outra página */}
      {/* <S.GalleryBlock $wine>
        <S.SectionIntro $light className="reveal">
          <S.SectionLabel $light>Comunidade</S.SectionLabel>
          <h2>Vem ver o que as agulhinhas estão fazendo!</h2>
        </S.SectionIntro>
        <GalleryCarousel
          images={imagesList01}
          altPrefix="Foto da aluna — trabalhos e peças da comunidade Grazyela Couto"
          light={true}
        />
      </S.GalleryBlock> */}

      {/* TODO: Mover seção "Coleção" para outra página */}
      {/* <S.GalleryBlock $mist>
        <S.SectionIntro className="reveal">
          <S.SectionLabel>Coleção</S.SectionLabel>
          <h2>Algumas das peças que você irá aprender</h2>
        </S.SectionIntro>
        <GalleryCarousel
          images={imagesList02}
          altPrefix="Peça de roupa que você aprende nos cursos de modelagem e costura"
          light={false}
        />
      </S.GalleryBlock> */}

      <S.AboutSection className="reveal" aria-labelledby="prof-title">
        <S.AboutPortrait
          src={profFoto}
          alt="Grazyela Couto, professora, modelista e costureira"
          width={380}
          height={675}
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
