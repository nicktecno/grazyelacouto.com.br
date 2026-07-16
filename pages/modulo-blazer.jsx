import ModuloBlazerPage from "../PagesComponents/ModuloBlazer/ModuloBlazer";
import { absoluteUrl, getSiteOrigin } from "../lib/siteUrl";

export default function ModuloBlazer(props) {
  return <ModuloBlazerPage />;
}

export async function getStaticProps() {
  const origin = getSiteOrigin();
  const title = `${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE} - Módulo Blazer`;
  const baseKeywords = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS || "";
  const metaKeywords = [
    baseKeywords,
    "módulo blazer, blazer, alfaiataria, modelagem de blazer, costura de blazer, curso blazer online, Grazyela Couto",
  ]
    .filter(Boolean)
    .join(", ");
  const metaDescription =
    "Aprenda a modelar e costurar um blazer do zero com acabamento de ateliê. Módulo online com a Grazyela Couto — acesso imediato na Hotmart.";

  const jsonLd = [
    {
      "@type": "WebPage",
      "@id": `${origin}/modulo-blazer`,
      url: `${origin}/modulo-blazer`,
      name: title,
      description: metaDescription,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${origin}/#website` },
      about: {
        "@type": "Course",
        name: "Módulo Blazer — Grazyela Couto",
        description: metaDescription,
        provider: {
          "@type": "Organization",
          name: "Grazyela Couto",
          url: origin,
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          inLanguage: "pt-BR",
        },
        educationalLevel: "Iniciante ao Avançado",
        teaches: [
          "Modelagem de blazer",
          "Corte e encaixe de tecido",
          "Costura de alfaiataria",
          "Acabamento com forro e entretela",
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: origin,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Módulo Blazer",
          item: `${origin}/modulo-blazer`,
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
        canonicalPath: "/modulo-blazer",
        ogImagePath: "/images/capa01.jpg",
        jsonLd,
      },
    },
  };
}
