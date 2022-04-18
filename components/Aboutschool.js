import Link from 'next/link'
import schoolprofiles from '../database/school-profiles.json'
import Image from 'next/image'
import arrow from '../public/icon-arrow.svg'

export const Aboutschool = () => {
  return (
    <section className="about-school">
      <div className="about-school-text">
        <h2>Zastanawiasz się co wybrać?</h2>
        <p>
          Nasza szkoła oferuje wszystkie ścieżki nauki wraz z
          najpopularniejszymi kierunkami i profilami dającymi realne
          zatrudnienie po szkole lub wymarzone studia.
        </p>
      </div>
      <div className="about-school-profiles">
        {schoolprofiles.map((profile, i) => (
          <Link href={profile.path} key={i} passHref>
            <div className="about-school-profile clickable">
              <div className="about-school-profile-header">
                <Image src={profile.image} alt="" width="50" height="50" />
                <h3>{profile.name}</h3>
              </div>
              <p>{profile.description}</p>
              <div className="arrow">
                <Image src={arrow} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
