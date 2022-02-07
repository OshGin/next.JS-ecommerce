import { css } from '@emotion/react';
import Image from 'next/image';

const footerStyles = css`
  background-color: #fec397;
  padding: 10px 15 px;
  border-radius: 4px;
  margin-bottom: 8px 8px;
  font-size: 1rem;
  text-align: center;
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <span>Project for Markhof</span>
    </footer>
  );
}
