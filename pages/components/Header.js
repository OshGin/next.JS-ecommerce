import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/react';

const headeStyles = css`
  background-color: transparent;
  color: white;
  padding: 10px 15 px;
  border-radius: 4px;
  margin-bottom: 8px 0px;
  font-size: 2rem;
  text-align: center;

  a + a {
    margin-left: 20px;
  }
`;

export default function Header() {
  return (
    <header css={headeStyles}>
      <Link href="/">
        <a> Home</a>
      </Link>
      <Link href="/products">
        <a> Product</a>
      </Link>
    </header>
  );
}
