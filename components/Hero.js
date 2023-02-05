import Image from 'next/legacy/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="hero wrapper" id="hero">
      <div className="hero-text ">
        <h1>
          Jesteśmy <span>dumni</span> z tego co robimy
        </h1>
        <p>
          Z nami rozwiniesz swoje zainteresowania, posiądziesz wiedzę i
          umiejętności. Wszystko pod okiem najlepszych nauczycieli i wspaniałych
          kolegów, którzy zawsze Ci doradzą oraz pomogą z każdym problemem.
        </p>
        <div className="buttons">
          <Link href="/Rekrutacja" legacyBehavior>
            <button className="button-dark">Dołącz do nas!</button>
          </Link>
          <Link href="/Kierunki" legacyBehavior>
            <button className="button-light">Sprawdź kierunki</button>
          </Link>
        </div>
      </div>
      <Image
        src="/hero-image.webp"
        width={738}
        height={420}
        alt=""
        className="hero-image"
        layout="fixed"
        quality={100}
        priority
      />
    </section>
  )
}
