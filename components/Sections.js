import Image from 'next/legacy/image'
import Link from 'next/link'
import { ArticleCards } from './ArticleCard'

export const SectionSchool = () => {
  return (
    <section className="section-school">
      <div className="section-header">
        <div className="section-header-title">
          <span>Kierunki</span>
          <h2>
            Zastanawiasz się
            <br /> co wybrać?
          </h2>
        </div>
        <p>
          Nasza szkoła oferuje wszystkie ścieżki nauki wraz z
          najpopularniejszymi kierunkami i profilami dającymi realne
          zatrudnienie po szkole lub wymarzone studia.
        </p>
      </div>
      <div className="links-container">
        {schoolprofiles.map((profile) => (
          <Link href={profile.path} key={profile.path} className="profile-link">
            <div className="profile-link-header">
              <Image src={profile.image} alt="" width="50" height="50" />
              <h3>{profile.name}</h3>
            </div>
            <p>{profile.description}</p>
            <div className="arrow-container">
              <div className="arrow">
                <Image src="/arrow.svg" alt="" width={32} height={32} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export const SectionArticle = ({
  articles,
  objectfit,
  title,
  span,
  description,
  extraArticle,
}) => {
  return (
    <section className="section-article">
      <div className="section-header">
        <div className="section-header-title">
          <span>{span}</span>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
      <ArticleCards
        articles={articles}
        objectfit={objectfit}
        extraArticle={extraArticle}
      />
    </section>
  )
}

const schoolprofiles = [
  {
    name: 'Technikum',
    description:
      'Czyli mówisz, że nie liceum? To nic! Mamy dla Ciebie mnóstwo profili zawodowych w technikum.',
    image: '/icon-technikum.svg',
    path: '/Kierunki',
  },
  {
    name: 'Liceum ogólnokształcące',
    description:
      'Załóż mundur i noś go z dumą. Otwórz przed sobą drzwi na nowe możliwości.',
    image: '/icon-liceum.svg',
    path: '/liceum-ogolnoksztalcace',
  },
  {
    name: 'Szkoła branżowa I stopnia',
    description:
      'Zależy Ci na zawodzie? Do zaoferowania mamy rówież ciekawą Szkołę Branżową.',
    image: '/icon-branz.svg',
    path: '/Kierunki',
  },
]
