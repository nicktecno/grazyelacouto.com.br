import HomePage from "../PagesComponents/Home/Home";
import { getSiteOrigin, absoluteUrl } from "../lib/siteUrl";

export default function Home(props) {
  return <HomePage />;
}

export async function getStaticProps() {
  const brand = "Grazyela Couto";
  const title = `${brand} — Cursos de Modelagem e Costura Online`;
  const metaDescription =
    "Aprenda do zero a modelar e costurar suas próprias roupas com a Grazyela Couto: curso de costura, peças de alfaiataria (blazer, calça, salopete), croqui de moda e o combo Torne-se uma Estilista do Zero.";
  const metaKeywords = [
    "Grazyela Couto",
    "curso de costura online",
    "modelagem e costura",
    "aprender a costurar",
    "alfaiataria",
    "croqui de moda",
    "fazer próprias roupas",
    "estilista do zero",
    "blazer modelagem",
    "curso de modelagem",
  ].join(", ");

  const origin = getSiteOrigin();

  const jsonLd = [
    {
      "@type": "Person",
      "@id": `${origin}/#person`,
      name: "Grazyela Couto",
      jobTitle: "Estilista, Modelista e Costureira",
      description:
        "Estilista, modelista e costureira com mais de 4 anos de experiência, marca própria de roupas e foco em ensinar costura e modelagem online.",
      url: origin,
      image: absoluteUrl("/images/aprenda_a_costurar/IMG_7632.JPG"),
      sameAs: [
        "https://www.youtube.com/channel/UCNOwoaQLPOdoXDZKd_ztOaA",
        "https://www.instagram.com/grazyelacouto/",
        "https://www.tiktok.com/@grazy.couto?lang=pt-BR",
      ],
      knowsAbout: [
        "costura",
        "modelagem",
        "alfaiataria",
        "croqui de moda",
        "corte e costura",
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${origin}/#cursos`,
      name: "Cursos de modelagem e costura — Grazyela Couto",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Course",
            name: "Aprenda a Costurar",
            description:
              "Curso para quem sabe pouco ou nada de costura: moldes base de blusa, saia e vestidos, com auxílio da professora.",
            provider: { "@id": `${origin}/#person` },
            url: "https://pay.hotmart.com/M72976409H?checkoutMode=10",
            inLanguage: "pt-BR",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Course",
            name: "Peças de Alfaiataria",
            description:
              "Curso intermediário a avançado: blazer, calça, salopete, modelagem, corte, costura e croqui de moda.",
            provider: { "@id": `${origin}/#person` },
            url: `${origin}/pecas-de-alfaiataria`,
            inLanguage: "pt-BR",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Course",
            name: "Combo Torne-se uma Estilista do Zero",
            description:
              "Combo 2 em 1 com acesso aos dois cursos: do zero até peças de alfaiataria.",
            provider: { "@id": `${origin}/#person` },
            url: "https://pay.hotmart.com/X73383978V",
            inLanguage: "pt-BR",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${origin}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Quem é a professora dos cursos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grazyela Couto, estilista, modelista e costureira, com mais de 4 anos na área, marca própria de roupas e foco em ensinar. Ela incentiva que costurar não é dom.",
          },
        },
        {
          "@type": "Question",
          name: "O que ensina o curso Aprenda a Costurar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mesmo sabendo pouco ou nada, você aprende a costurar e modelar moldes base para blusa, saia e vestidos, transformando-os em outras peças do mesmo nicho.",
          },
        },
        {
          "@type": "Question",
          name: "O curso de Peças de Alfaiataria é para iniciantes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "É intermediário a avançado: blazer, calça, salopete, modelagem, corte, costura e croqui de moda.",
          },
        },
        {
          "@type": "Question",
          name: "O que inclui o Combo Torne-se uma Estilista do Zero?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "É o 2 em 1: acesso aos dois cursos, saindo do zero até o nível de fazer peças de alfaiataria.",
          },
        },
      ],
    },
  ];

  return {
    props: {
      seo: {
        title,
        metaDescription,
        metaKeywords,
        canonicalPath: "/",
        ogImagePath: "/images/capa01.jpg",
        jsonLd,
      },
    },
    revalidate: 3600,
  };
}
