import HomePage from "../PagesComponents/Home/Home";

import apiUnlogged from "../services/apiUnlogged";

export default function Home(props) {
  const photobookModuleActive =
    process.env.NEXT_PUBLIC_REACT_APP_PHOTOBOOK_MODULE_ACTIVE;
  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;
  return (
    <HomePage
      menu={props.menu}
      banners={props.banners}
      sellers={props.sellers}
      promotions={props.promotions}
      photobookModuleActive={photobookModuleActive}
      showcases={props.showcases}
      mktName={mktName}
    />
  );
}

export async function getStaticProps({ resolvedUrl }) {
  const { data: response } = await apiUnlogged.get("/descendant-categories");
  const { data: responsePromotions } = await apiUnlogged.get("/promotions");
  const { data: responseSellers } = await apiUnlogged.get(
    "/seller/public/home"
  );
  const { data: responseshowcase } = await apiUnlogged.get(
    "/showcase/products"
  );

  const menuFilter = response.data.filter((filtro) => filtro.name !== "Root");

  let banners = false;

  try {
    const { data: response } = await apiUnlogged.get("/banners");
    banners = response;
  } catch (e) {
    console.log(e);
  }
  const title = `${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE} - ${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE_COMPLEMENT}`;
  const metaKeywords = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS;
  const metaDescription = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_DESCRIPTION;
  const metaKdt = `${process.env.NEXT_PUBLIC_REACT_APP_NAME} - Home`;

  return {
    props: {
      seo: {
        title,
        metaDescription,
        metaKdt,
        metaKeywords,
      },
      showcases: responseshowcase,
      banners,
      menu: menuFilter,
      sellers: responseSellers[0],
      promotions: responsePromotions,
    },
    revalidate: 600,
  };
}
