import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  return (
    <header>
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
