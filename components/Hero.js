import Image from 'next/image'
import Link from 'next/link'

import HeroImage1 from '../public/HeroImage1.webp'
import HeroImage2 from '../public/HeroImage2.webp'

export const Hero = () => {
  return (
    <section className="hero">
      <section className="hero-text">
        <h1>
          Jesteśmy <span>dumni</span> <br />z tego co robimy
        </h1>
        <p>
          Z nami rozwiniesz swoje zainteresowania, posiądziesz wiedzę i
          umiejętności. Wszystko pod okiem najlepszych nauczycieli i wspaniałych
          kolegów, którzy zawsze Ci doradzą oraz pomogą z każdym problemem.
        </p>
        <Link href="/Rekrutacja" passHref>
          <button>
            Dołącz do nas
          </button>
        </Link>
      </section>
      <section className="hero-images">
        <div className="img1">
          <Image src={HeroImage1} alt="" />
        </div>
        <div className="img2">
          <Image src={HeroImage2} alt="" />
        </div>
      </section>
    </section>
  )
}
