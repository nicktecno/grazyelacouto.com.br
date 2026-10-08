import MaratonaPage from "../PagesComponents/Maratona/Maratona";

export default function Home(props) {
  return <MaratonaPage />;
}
export async function getStaticProps() {
  const title = "Maratonas de Costura — Inscrições Encerradas | Grazyela Couto";
  const baseKeywords =
    process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS || "";
  const metaKeywords = [
    baseKeywords,
    "Maratona de Costura, Grazyela Couto, curso de costura, aprender a costurar do zero, maratonas de costura online, lista de espera maratona, vestido verona",
  ]
    .filter(Boolean)
    .join(", ");
  const metaDescription =
    "A última Maratona de Costura com Grazyela Couto foi finalizada com sucesso! Inscrições encerradas no momento. Em breve teremos novas maratonas e projetos especiais.";

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
