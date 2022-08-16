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
        <Link href="/Rekrutacja">
          <a>
            <button>Dołącz do nas</button>
          </a>
        </Link>
      </section>
      <section className="hero-images">
        <div className="img2">
          <Link href="/technik-mechanik-lotniczy">
            <a>
              <Image
                src="/HeroImage1.webp"
                alt="Nowy kierunek - technik mechanik lotniczy"
                width="630"
                height="410"
              />
            </a>
          </Link>
        </div>
      </section>
    </section>
  )
}
