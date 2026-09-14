import GlobalStyles from "../styles/globals";
import defaultLayout from "../jover";

import { ToastContainer } from "react-toastify";
import Header from "../components/header/header";
import Head from "next/head";
import Footer from "../components/footer/footer";
import { absoluteUrl, getSiteOrigin } from "../lib/siteUrl";

function buildJsonLd(extraNodes = []) {
  const origin = getSiteOrigin();
  const brand = "Grazyela Couto";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: brand,
        url: origin,
        logo: absoluteUrl("/images/192.png"),
        sameAs: [
          "https://www.youtube.com/channel/UCNOwoaQLPOdoXDZKd_ztOaA",
          "https://www.instagram.com/grazy.gr/",
          "https://t.me/+JVToDD5513MyYjVh",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: brand,
        description:
          "Cursos online de modelagem, costura e alfaiataria com a Grazyela Couto.",
        publisher: { "@id": `${origin}/#organization` },
        inLanguage: "pt-BR",
      },
      ...(Array.isArray(extraNodes) ? extraNodes : []),
    ],
  };
}

function MyApp({ Component, pageProps }) {
  const seo = pageProps.seo;

  const defaultTitle = `${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE} - Página não encontrada`;
  const title = seo?.title ?? defaultTitle;

  const defaultDescription = "Página não encontrada";
  const description = seo?.metaDescription ?? defaultDescription;

  const keywords =
    seo?.metaKeywords ?? process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS;

  const origin = getSiteOrigin();
  const canonicalPath = seo?.canonicalPath;
  const canonicalUrl =
    canonicalPath != null
      ? `${origin}${canonicalPath === "/" ? "/" : canonicalPath}`
      : null;

  const ogImagePath = seo?.ogImagePath || "/images/capa01.jpg";
  const ogImageUrl = absoluteUrl(ogImagePath);
  const shareable = Boolean(canonicalUrl && seo?.title);

  const jsonLd = buildJsonLd(seo?.jsonLd);

  return (
    <>
      <ToastContainer />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {shareable ? (
          <>
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta
              property="og:site_name"
              content={
                process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE ||
                "Grazyela Couto"
              }
            />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:image:alt" content={title} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImageUrl} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords ? <meta name="keywords" content={keywords} /> : null}

        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      {!Component.noLayout && <Header />}
      <GlobalStyles
        colors={
          process.env.NEXT_PUBLIC_REACT_APP_MMP_STATE === "true"
            ? selectedMkt
            : defaultLayout
        }
      />
      <Component {...pageProps} />
      {!Component.noLayout && <Footer />}
    </>
  );
}

export default MyApp;
