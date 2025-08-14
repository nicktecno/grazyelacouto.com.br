import MaratonaPage from "../PagesComponents/Maratona/Maratona";

export default function Home(props) {
  return <MaratonaPage />;
}
export async function getStaticProps({ resolvedUrl }) {
  const title = `${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE} - Maratona Vestido Verona`;
  const metaKeywords = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS;
  const metaDescription =
    "Venha aprender a modelar e costurar essa linda Vestido Verona!";

  return {
    props: {
      seo: {
        title,
        metaDescription,
        metaKeywords,
      },
    },
    revalidate: 3600,
  };
}
