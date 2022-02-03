import { css } from '@emotion/react';
import Image from 'next/image';

const footerStyles = css`
  background-color: #53bd60;
  padding: 10px 15 px;
  border-radius: 4px;
  margin-bottom: 8px 8px;
  font-size: 2rem;
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <span>
        <Image
          src="/logo.png"
          alt="Logo for Click and buy"
          width={72}
          height={72}
        />
        Project for Markhof
      </span>
    </footer>
  );
}
