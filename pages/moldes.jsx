import MoldesPage from "../PagesComponents/Moldes/Moldes";
import { absoluteUrl, getSiteOrigin } from "../lib/siteUrl";

export default function MoldesRoute(props) {
  return <MoldesPage />;
}

export async function getStaticProps() {
  const origin = getSiteOrigin();
  const title = "Loja de Moldes Digitais em PDF — Grazyela Couto";
  const baseKeywords = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS || "";
  const metaKeywords = [
    baseKeywords,
    "moldes digitais",
    "loja de moldes",
    "moldes de costura em PDF",
    "molde camisa clássica",
    "molde saia enviesada",
    "molde blusa simples",
    "moldes para imprimir",
    "moldes femininos 38 ao 54",
    "Grazyela Couto moldes",
    "corte e costura moldes prontos",
  ]
    .filter(Boolean)
    .join(", ");

  const metaDescription =
    "Compre moldes digitais prontos em PDF da Grazyela Couto: Camisa Clássica, Saia Enviesada e Blusa Simples. Tamanhos do 38 ao 54 com margens inclusas, prontos para imprimir em folha A4.";

  const jsonLd = [
    {
      "@type": "WebPage",
      "@id": `${origin}/moldes`,
      url: `${origin}/moldes`,
      name: title,
      description: metaDescription,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${origin}/#website` },
    },
    {
      "@type": "ItemList",
      name: "Moldes Digitais em PDF — Grazyela Couto",
      itemListElement: [
        {
          "@type": "Product",
          position: 1,
          name: "Molde Digital Camisa Clássica Feminina",
          description:
            "Molde digital em PDF com grade completa do 38 ao 54, margens inclusas e gabarito A4.",
          url: "https://hotmart.com/pt-br/marketplace/produtos/molde-digital-camisa-classica-feminina/R106672757A",
        },
        {
          "@type": "Product",
          position: 2,
          name: "Molde Digital Saia Enviesada",
          description:
            "Molde digital de saia no corte enviesado em PDF do 38 ao 54 com caimento fluido.",
          url: "https://hotmart.com/pt-br/marketplace/produtos/molde-digital-saia-enviesada-tamanho-38-a-54/Y107019938P",
        },
        {
          "@type": "Product",
          position: 3,
          name: "Molde Digital Blusa Simples",
          description:
            "Molde digital de blusa regata com pence de busto em PDF pronto para imprimir.",
          url: "https://pay.hotmart.com/U107233693H?bid=1787171331094",
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
        canonicalPath: "/moldes",
        ogImagePath: "/images/bio/molde_camisa_classica.webp",
        jsonLd,
      },
    },
    revalidate: 3600,
  };
}
