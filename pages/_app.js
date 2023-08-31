import GlobalStyles from "../styles/globals";
import defaultLayout from "../jover";

import { ToastContainer } from "react-toastify";
import Header from "../components/header/header";
import Head from "next/head";
import Footer from "../components/footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Head>
        <title>
          {pageProps.seo !== undefined
            ? pageProps.seo.title
            : `${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE} - Página não encontrada`}
        </title>
        <meta
          name="description"
          content={
            pageProps.seo !== undefined
              ? pageProps.seo.metaDescription
              : "Página não encontrada"
          }
        />
        <meta
          name="keywords"
          content={
            pageProps.seo !== undefined
              ? pageProps.seo.metaKeywords
              : process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS
          }
        />
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <GlobalStyles
        colors={
          process.env.NEXT_PUBLIC_REACT_APP_MMP_STATE === "true"
            ? selectedMkt
            : defaultLayout
        }
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
