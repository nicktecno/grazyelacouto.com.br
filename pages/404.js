import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "2rem", textAlign: "center", maxWidth: 480, margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
        Página não encontrada
      </h1>
      <p style={{ marginBottom: "1.5rem", lineHeight: 1.5 }}>
        O endereço que você acessou não existe ou foi movido.
      </p>
      <Link href="/" style={{ textDecoration: "underline" }}>
        Voltar para a página inicial
      </Link>
    </main>
  );
}

export async function getStaticProps() {
  const title = `${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE || "Grazyela Couto"} — Página não encontrada`;
  return {
    props: {
      seo: {
        title,
        metaDescription:
          "A página solicitada não foi encontrada. Confira os cursos e a maratona na página inicial.",
        metaKeywords: process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS,
      },
    },
  };
}
