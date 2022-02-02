import Image from 'next/image';
export default function Footer() {
  return (
    <footer>
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
