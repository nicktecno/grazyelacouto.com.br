import HomePage from "../PagesComponents/Home/Home";

export default function Home(props) {
  return <HomePage />;
}
export async function getStaticProps({ resolvedUrl }) {
  const title = `${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE} - ${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE_COMPLEMENT}`;
  const metaKeywords = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS;
  const metaDescription = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_DESCRIPTION;

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
