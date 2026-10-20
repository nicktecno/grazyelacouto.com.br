import React from "react";
import MidiaKitComponent from "../PagesComponents/MidiaKit/MidiaKit";

export default function MidiaKitPage() {
  return <MidiaKitComponent />;
}

MidiaKitPage.noLayout = true;

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Mídia Kit Comercial — Grazyela Couto | Moda, Corte & Costura",
        metaDescription:
          "Mídia Kit oficial da Grazyela Couto. Métricas do Instagram, alcance de audiência qualificada e oportunidades para parcerias e marcas no universo da moda e alfaiataria.",
        canonicalPath: "/midia-kit",
        ogImagePath: "/images/aprenda_a_costurar/IMG_7632.JPG",
      },
    },
    revalidate: 3600,
  };
}
