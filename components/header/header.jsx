import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./style";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/aprenda-a-costurar", label: "Aprenda a Costurar" },
  { href: "/pecas-de-alfaiataria", label: "Peças de Alfaiataria" },
  { href: "/modulo-blazer", label: "Módulo Blazer" },
  { href: "/moldes", label: "Moldes" },
  { href: "/maratona", label: "Maratona" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Fecha o menu móvel ao iniciar navegação
  useEffect(() => {
    const handleRouteChange = () => setMenuOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  // Trava o scroll da página enquanto o menu mobile estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Fecha o menu com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <S.HeaderWrapper>
      <S.Header>
        <Link href="/" className="logoLink" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Logo Grazyela Couto — Modelagem e Costura"
            width={180}
            height={70}
            priority
          />
        </Link>

        {/* Links de navegação desktop */}
        <div className="containerLinks">
          {NAV_LINKS.map((item) => {
            const isActive = router.asPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "active" : ""}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Botão Hambúrguer mobile */}
        <S.MenuToggle
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          $open={menuOpen}
        >
          <span />
          <span />
          <span />
        </S.MenuToggle>
      </S.Header>

      {/* Backdrop para fechar ao tocar fora */}
      <S.Backdrop
        $open={menuOpen}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Gaveta do menu mobile */}
      <S.MobileDrawer $open={menuOpen}>
        <S.MobileNav>
          {NAV_LINKS.map((item) => {
            const isActive = router.asPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobileLink ${isActive ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
                <span className="arrow">›</span>
              </Link>
            );
          })}
        </S.MobileNav>
        <S.MobileFooter>
          <span>Grazyela Couto</span>
          <small>Cursos Online & Ateliê de Moda</small>
        </S.MobileFooter>
      </S.MobileDrawer>
    </S.HeaderWrapper>
  );
}

export default Header;
