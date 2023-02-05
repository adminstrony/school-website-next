import Image from 'next/legacy/image'
import Link from 'next/link'

export const Accesibility = () => (
  <Link href="/deklaracja-dostepnosci" alt="Deklaracja dostepnosci">
    <button className="accessibility" aria-label="accessibility">
      <Image
        src="/accessibility.svg"
        alt="Deklaracja dostepnosci"
        width={50}
        height={50}
        quality={100}
        priority
      />
    </button>
  </Link>
)
