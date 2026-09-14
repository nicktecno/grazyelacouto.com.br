import Image from "next/image";
import Link from "next/link";

import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Tiktok } from "@styled-icons/boxicons-logos/Tiktok";
import { Telegram } from "@styled-icons/boxicons-logos/Telegram";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";

import * as S from "./style";

function Footer() {
  let date = new Date().getFullYear();

  return (
    <S.Footer>
      <Image
        src="/images/logo.png"
        alt="logo do site Grazyela Couto"
        width={500}
        height={500}
      />
      <div className="containerLinks">
        <Link href={"https://www.youtube.com/channel/UCNOwoaQLPOdoXDZKd_ztOaA"} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube />
        </Link>
        <Link href={"https://www.instagram.com/grazyelacouto/"} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram />
        </Link>
        <Link href={"https://www.tiktok.com/@grazy.couto?lang=pt-BR"} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <Tiktok />
        </Link>
        <Link href={"https://chat.whatsapp.com/Cb6bMW1TNl3HYmOAQjaNHh?mode=gi_t"} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <Whatsapp />
        </Link>
        <Link href={"https://t.me/+JVToDD5513MyYjVh"} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <Telegram />
        </Link>
      </div>
      <div className="copyright">Copyright © {date} Grazyela Couto</div>
    </S.Footer>
  );
}

export default Footer;
