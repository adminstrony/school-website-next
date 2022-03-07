import Image from 'next/image'
import Link from 'next/link'

export const Accesibility = () => (
  <button className="accessibility" aria-label="accessibility">
    <Link href="/deklaracja-dostepnosci" passHref>
        <Image src="/accessibility.svg" alt="" width="50" height="50" />
    </Link>
  </button>
  
)
