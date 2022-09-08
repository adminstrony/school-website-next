import Image from 'next/image'
import Link from 'next/link'

export const Accesibility = () => (
  <Link href="/deklaracja-dostepnosci" alt="Deklaracja dostepnosci">
    <a>
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
    </a>
  </Link>
)
