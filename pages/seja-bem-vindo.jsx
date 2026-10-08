import Head from "next/head";
import SejaBemVindoPage from "../PagesComponents/SejaBemVindo/SejaBemVindo";

export default function SejaBemVindoRoute() {
  return (
    <>
      <Head>
        <title>Seja Bem-Vinda(o) ao FashionPlay — Grazyela Couto</title>
        <meta
          name="description"
          content="Seja bem-vinda ao FashionPlay com Grazyela Couto. Acesse seu curso pelo seu e-mail ou diretamente pela plataforma Hotmart."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <SejaBemVindoPage />
    </>
  );
}
