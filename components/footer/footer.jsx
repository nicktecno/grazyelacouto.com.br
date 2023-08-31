import Image from "next/image";
import Link from "next/link";

import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Telegram } from "@styled-icons/boxicons-logos/Telegram";

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
        <Link href={"https://www.youtube.com/channel/UCNOwoaQLPOdoXDZKd_ztOaA"}>
          <Youtube />
        </Link>
        <Link href={"https://www.instagram.com/grazy.gr/"}>
          <Instagram />
        </Link>
        <Link href={"https://t.me/+JVToDD5513MyYjVh"}>
          <Telegram />
        </Link>
      </div>
      <div className="copyright">Copyright © {date} Grazyela Couto</div>
    </S.Footer>
  );
}

export default Footer;
