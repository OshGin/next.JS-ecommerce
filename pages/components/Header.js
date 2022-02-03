import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/react';

const headeStyles = css`
  background-color: #83eb83;
  padding: 10px 15 px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 2rem;
`;

export default function Header() {
  return (
    <header css={headeStyles}>
      <Image
        src="/logo.png"
        alt="Logo for Click and buy"
        width={72}
        height={72}
      />
      <Link href="/">
        <a> Home</a>
      </Link>
      <Link href="/products">
        <a> Product</a>
      </Link>
    </header>
  );
}
