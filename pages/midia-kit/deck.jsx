import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Printer } from "@styled-icons/boxicons-regular/Printer";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { Download } from "@styled-icons/boxicons-regular/Download";

import MediaKitDeck from "../../PagesComponents/MidiaKit/MediaKitDeck";

export default function MidiaKitDeckPage() {
  const [data, setData] = useState({
    username: "grazyelacouto",
    name: "Grazyela Couto",
    metrics: {
      followersFormatted: "126,8K+",
      monthlyReachFormatted: "890K+",
      monthlyImpressionsFormatted: "1,9M+",
      engagementRate: "4.9%",
      totalPosts: 941,
    },
    reelsHighlights: [
      {
        id: "reel-1",
        title: "Tecido que vira arte, e beleza, que prazer transformar ✨",
        views: "348.000",
        likes: "1.285",
        saves: "707",
        tag: "Viral Didático",
        cover: "/images/seja-bem-vindo/IMG_9743.jpg",
        permalink: "https://www.instagram.com/reel/DduHj-IR-d8/",
      },
      {
        id: "reel-2",
        title: "80 de tecido e uma máquina reta 🪡",
        views: "215.000",
        likes: "1.112",
        saves: "612",
        tag: "Viral Didático",
        cover: "/images/aprenda_a_costurar/IMG_7725.jpg",
        permalink: "https://www.instagram.com/reel/DeZYD4HuQ-t/",
      },
      {
        id: "reel-3",
        title: "Molde disponível na loja de molde ⬆️",
        views: "182.000",
        likes: "1.091",
        saves: "600",
        tag: "Modelagem & Molde",
        cover: "/images/aprenda_a_costurar/IMG_7726.jpg",
        permalink: "https://www.instagram.com/reel/Deh-7XtoFnY/",
      },
      {
        id: "reel-4",
        title: "Saia transpassada 🪡",
        views: "145.000",
        likes: "715",
        saves: "393",
        tag: "Alta Utilidade",
        cover: "/images/aprenda_a_costurar/IMG_7632.JPG",
        permalink: "https://www.instagram.com/reel/DenSJhKIF5f/",
      },
      {
        id: "reel-5",
        title: "Costura • costureira • costurainiciantes",
        views: "128.000",
        likes: "672",
        saves: "370",
        tag: "Alta Performance",
        cover: "/images/capa01.jpg",
        permalink: "https://www.instagram.com/reel/Ddw9HOUI0Fq/",
      },
      {
        id: "reel-6",
        title: "Tutorial • corteecostura • costurices",
        views: "98.000",
        likes: "592",
        saves: "326",
        tag: "Alta Utilidade",
        cover: "/images/aprenda_a_costurar/IMG_7832.JPG",
        permalink: "https://www.instagram.com/reel/DdrMn9UuAR4/",
      },
    ],
  });

  useEffect(() => {
    fetch("/api/media-kit/instagram")
      .then((r) => r.json())
      .then((res) => {
        if (res && res.metrics) setData(res);
      })
      .catch(() => {});
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <>
      <Head>
        <title>Apresentação Mídia Kit 2026 — Grazyela Couto</title>
        <style>{`
          @page {
            size: 297mm 210mm;
            margin: 0;
          }
          @media print {
            .deck-top-bar {
              display: none !important;
            }
            body {
              margin: 0 !important;
              padding: 0 !important;
              background: #faf9f7 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
          }
        `}</style>
      </Head>

      <div
        className="deck-top-bar"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#100e0c",
          borderBottom: "1px solid rgba(196, 164, 106, 0.3)",
          padding: "14px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#ffffff",
          fontFamily: "var(--atelier-ui, sans-serif)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link
            href="/midia-kit"
            style={{
              color: "#e2c990",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.88rem",
              fontWeight: 600,
            }}
          >
            <ArrowBack style={{ width: 18, height: 18 }} />
            Voltar ao Site
          </Link>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <span style={{ fontSize: "0.92rem", fontWeight: 700 }}>
            Grazyela Couto · Deck de Apresentação Comercial (11 Slides)
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="/midia-kit-grazyela-couto.pdf"
            download="Midia-Kit-Grazyela-Couto.pdf"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Download style={{ width: 16, height: 16 }} />
            Baixar PDF Direto
          </a>

          <button
            onClick={handlePrint}
            style={{
              background: "linear-gradient(135deg, #8f1a20 0%, #6b1217 100%)",
              border: "none",
              color: "#ffffff",
              padding: "8px 20px",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(143, 26, 32, 0.4)",
            }}
          >
            <Printer style={{ width: 16, height: 16 }} />
            Imprimir / Salvar PDF
          </button>
        </div>
      </div>

      <MediaKitDeck data={data} />
    </>
  );
}

MidiaKitDeckPage.noLayout = true;
