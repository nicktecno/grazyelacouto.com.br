import AprendaCosturarPage from "../PagesComponents/AprendaCosturar/AprendaCosturar";
import { getSiteOrigin, absoluteUrl } from "../lib/siteUrl";

export default function AprendaCosturarRoute(props) {
  return <AprendaCosturarPage />;
}

export async function getStaticProps() {
  const origin = getSiteOrigin();
  const title = "Curso Aprenda a Costurar do Zero ao Avançado — Grazyela Couto";
  const metaDescription =
    "Aprenda a costurar do zero ao avançado com Grazyela Couto. Mais de 300 aulas práticas em vídeo, 20 peças completas (camisas, saias, calças, vestidos e casacos), modelagem sob medida, acabamento de ateliê, suporte e certificado oficial.";

  const baseKeywords = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS || "";
  const metaKeywords = [
    baseKeywords,
    "Curso Aprenda a Costurar",
    "aprender a costurar do zero",
    "curso de costura online",
    "curso de corte e costura",
    "curso de modelagem e costura",
    "Grazyela Couto",
    "curso de costura para iniciantes",
    "curso de costura profissional",
    "costura do zero ao avançado",
    "como fazer roupas passo a passo",
    "modelagem plana feminina",
    "moldes de roupas",
    "acabamentos finos de ateliê",
    "costura descomplicada",
    "costura sob medida",
    "camisa clássica",
    "vestido verão",
    "saias godê e evasê",
    "calça italiana alfaiataria",
    "ciganinha summer",
    "short alfaiataria",
    "jaquetinha chanel",
    "vestido midi",
    "macacão de grife",
    "vestido oscar de la renta",
    "vestido fenda",
    "tubinho beckman",
    "blusa europeia",
    "colete alfaiataria",
    "casaqueto chanel",
    "jaqueta zara",
    "vestido glamour",
    "vestido flower",
    "vestido coreana",
    "casaco perfeito",
    "blusa gola laço",
    "vestido verona",
    "vestido summer",
    "curso de costura hotmart",
  ]
    .filter(Boolean)
    .join(", ");

  const jsonLd = [
    {
      "@type": "Course",
      "@id": `${origin}/aprenda-a-costurar#course`,
      name: "Curso Aprenda a Costurar — Do Zero ao Avançado",
      description: metaDescription,
      provider: {
        "@type": "Person",
        name: "Grazyela Couto",
        url: origin,
      },
      educationalCredentialAwarded: "Certificado de Conclusão Digital",
      courseMode: "online",
      inLanguage: "pt-BR",
      url: `${origin}/aprenda-a-costurar`,
      image: absoluteUrl("/images/aprenda_a_costurar/hero_costureira.png"),
      offers: {
        "@type": "Offer",
        category: "Paid",
        priceCurrency: "BRL",
        url: "https://pay.hotmart.com/M72976409H?checkoutMode=10",
        availability: "https://schema.org/InStock",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "PT300H",
        instructor: {
          "@type": "Person",
          name: "Grazyela Couto",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${origin}/aprenda-a-costurar#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Onde vou acessar as aulas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Você vai acessar dentro da plataforma da Hotmart, no computador, tablet ou pelo aplicativo no celular, com acesso garantido por 2,5 anos.",
          },
        },
        {
          "@type": "Question",
          name: "Precisa ter máquina industrial ou experiência prévia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não! Você pode começar com uma máquina doméstica simples e mesmo que nunca tenha colocado uma linha na agulha. O método é didático e passo a passo desde o zero absoluto.",
          },
        },
        {
          "@type": "Question",
          name: "Como funciona o suporte para dúvidas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Você terá suporte direto com a professora Grazyela Couto através dos grupos exclusivos no WhatsApp, Telegram e nos comentários de cada aula dentro da plataforma.",
          },
        },
        {
          "@type": "Question",
          name: "O curso emite certificado de conclusão?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim! Ao concluir as etapas e aulas do curso, você pode solicitar e emitir seu certificado de conclusão.",
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
        canonicalPath: "/aprenda-a-costurar",
        ogImagePath: "/images/aprenda_a_costurar/hero_costureira.png",
        jsonLd,
      },
    },
    revalidate: 3600,
  };
}
