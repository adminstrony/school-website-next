import Image from 'next/image'
import Link from 'next/link'

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
          <button>Dołącz do nas</button>
        </Link>
      </section>
      <section className="hero-images">
        <div className="img1">
          <Image src="/HeroImage1.webp" alt="" width="300" height="410" />
        </div>
        <div className="img2">
          <Image src="/HeroImage2.webp" alt="" width="300" height="410" />
        </div>
      </section>
    </section>
  )
}
