import PecasAlfaiatariaPage from "../PagesComponents/PecasAlfaiataria/PecasAlfaiataria";
import { getSiteOrigin, absoluteUrl } from "../lib/siteUrl";

export default function PecasAlfaiatariaRoute(props) {
  return <PecasAlfaiatariaPage />;
}

export async function getStaticProps() {
  const origin = getSiteOrigin();
  const title = "Curso Peças de Alfaiataria — Grazyela Couto";
  const metaDescription =
    "Domine a Alfaiataria: Curso completo para criação de peças exclusivas. Aprenda modelagem, corte, entretelamento e costura de blazer slim, calça alfaiataria, coletes, salopete e bônus de croqui de moda com Grazyela Couto.";

  const baseKeywords = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS || "";
  const metaKeywords = [
    baseKeywords,
    "Curso Peças de Alfaiataria",
    "curso de alfaiataria feminina",
    "curso de alfaiataria online",
    "modelagem de alfaiataria",
    "blazer slim feminino",
    "calça de alfaiataria",
    "colete alfaiataria",
    "salopete alfaiataria",
    "alfaiataria russa",
    "técnicas de entretelamento",
    "croqui de moda",
    "desenho fashion",
    "Grazyela Couto",
    "alta costura feminina",
    "acabamento de alfaiataria",
    "curso de costura hotmart",
    "alfaiataria sob medida",
  ]
    .filter(Boolean)
    .join(", ");

  const jsonLd = [
    {
      "@type": "Course",
      "@id": `${origin}/pecas-de-alfaiataria#course`,
      name: "Curso Peças de Alfaiataria — Grazyela Couto",
      description: metaDescription,
      provider: {
        "@type": "Person",
        name: "Grazyela Couto",
        url: origin,
      },
      educationalCredentialAwarded: "Certificado Digital de Conclusão",
      courseMode: "online",
      inLanguage: "pt-BR",
      url: `${origin}/pecas-de-alfaiataria`,
      image: absoluteUrl("/images/pecas-de-alfaiataria/hero_alfaiataria.webp"),
      offers: {
        "@type": "Offer",
        category: "Paid",
        price: "59.90",
        priceCurrency: "BRL",
        url: "https://pay.hotmart.com/M70669236F?hotfeature=51",
        availability: "https://schema.org/InStock",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        instructor: {
          "@type": "Person",
          name: "Grazyela Couto",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${origin}/pecas-de-alfaiataria#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Para quem é esse produto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Para você que está decidida em aprender peças diferenciadas e crescer na área da moda.",
          },
        },
        {
          "@type": "Question",
          name: "Como funciona o 'Prazo de Garantia'?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Prazo de Garantia é o período que você tem para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório.",
          },
        },
        {
          "@type": "Question",
          name: "O que é e como funciona o Certificado de Conclusão digital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Alguns cursos online oferecem um certificado digital de conclusão. Os alunos podem emitir esse certificado ao final do curso. Esses certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares.",
          },
        },
        {
          "@type": "Question",
          name: "Como acessar o produto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Você receberá o acesso a Peças de Alfaiataria por email. O conteúdo será acessado ou baixado através de um computador, celular, tablet ou outro dispositivo digital.",
          },
        },
        {
          "@type": "Question",
          name: "Aproveite o conteúdo em qualquer dispositivo",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Assista no computador, celular ou tablet através da plataforma Hotmart.",
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
        canonicalPath: "/pecas-de-alfaiataria",
        ogImagePath: "/images/pecas-de-alfaiataria/hero_alfaiataria.webp",
        jsonLd,
      },
    },
    revalidate: 3600,
  };
}
