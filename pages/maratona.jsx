import MaratonaPage from "../PagesComponents/Maratona/Maratona";

export default function Home(props) {
  return <MaratonaPage />;
}
export async function getStaticProps({ resolvedUrl }) {
  const title = `${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE} - Maratona Casaco Perfeito`;
  const baseKeywords =
    process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS || "";
  const metaKeywords = [
    baseKeywords,
    "maratona, Casaco Perfeito, modelagem, costura online, curso de costura, Grazyela Couto",
  ]
    .filter(Boolean)
    .join(", ");
  const metaDescription =
    "Venha aprender a modelar e costurar esse lindo Casaco Perfeito!";

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
