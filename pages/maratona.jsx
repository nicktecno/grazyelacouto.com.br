import MaratonaPage from "../PagesComponents/Maratona/Maratona";

export default function Home(props) {
  return <MaratonaPage />;
}
export async function getStaticProps() {
  const title =
    "Mini Curso Gratuito Vestido Vintage — Modelagem e Costura | Grazyela Couto";
  const baseKeywords =
    process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS || "";
  const metaKeywords = [
    baseKeywords,
    "Mini Curso Gratuito, Vestido Vintage, Maratona de Costura, Grazyela Couto, curso de costura gratuito, aprender a costurar, saia enviesada, blusa simples, combo de moldes, youtube",
  ]
    .filter(Boolean)
    .join(", ");
  const metaDescription =
    "Participe do Mini Curso Gratuito Vestido Vintage com Grazyela Couto no YouTube! Aprenda o passo a passo da modelagem e costura, e garanta seu combo especial de moldes do tamanho 38 ao 54.";

  return {
    props: {
      seo: {
        title,
        metaDescription,
        metaKeywords,
        canonicalPath: "/maratona",
        ogImagePath: "/images/maratona/vestido_vintage_banner.jpg",
      },
    },
    revalidate: 3600,
  };
}
