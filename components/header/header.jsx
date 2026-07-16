import Image from "next/image";
import Link from "next/link";

import * as S from "./style";

function Header() {
  return (
    <S.Header>
      <Image
        src="/images/logo.png"
        alt="logo do site Grazyela Couto"
        width={500}
        height={500}
      />
      <div className="containerLinks">
        <Link href={"/"}>Início</Link>
        <Link href={"/modulo-blazer"}>Módulo Blazer</Link>
        <Link href={"/maratona"}>Maratona</Link>
      </div>
    </S.Header>
  );
}

export default Header;
