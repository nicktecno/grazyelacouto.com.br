import MaratonaPage from "../PagesComponents/Maratona/Maratona";

export default function Home(props) {
  return <MaratonaPage />;
}
export async function getStaticProps() {
  const title = `${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE} - Maratona Vestido Verona`;
  const baseKeywords =
    process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS || "";
  const metaKeywords = [
    baseKeywords,
    "Maratona Vestido Verona, vestido clássico, vestido Verona, modelagem vestido, costura online, curso de costura, Grazyela Couto, vestido atemporal, aprenda a costurar",
  ]
    .filter(Boolean)
    .join(", ");
  const metaDescription =
    "Crie seu vestido Clássico e Atemporal! Participe da Maratona Vestido Verona com Grazyela Couto — do zero ao acabamento em 15 dias de aulas práticas, modelagem e costura online.";

  return {
    props: {
      seo: {
        title,
        metaDescription,
        metaKeywords,
        canonicalPath: "/maratona",
        ogImagePath: "/images/maratona/00.PNG",
      },
    },
    revalidate: 3600,
  };
}
