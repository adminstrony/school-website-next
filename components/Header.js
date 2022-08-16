import Image from 'next/image'
import Link from 'next/link'
import hamburger from '../public/burger.svg'
import { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="header">
        <Link href="/" alt="Strona głowna">
          <a>
            <button className="logo" aria-label="Home Page">
              <Image src="/ZS2.svg" alt="" width={152} height={55} />
            </button>
          </a>
        </Link>
        <nav className="nav">
          <Link href="/plan_lekcji">
            <a>Plan lekcji</a>
          </Link>
          <Link href="/dziennik">
            <a>e-Dziennik</a>
          </Link>
          <p>|</p>
          <Link href="/Aktualnosci">
            <a>Aktualności</a>
          </Link>
          <div className="aktualnosci-dropdown-menu">
            <Link href="/Ogloszenia/" className="arrow-down">
              Ogłoszenia
            </Link>
          </div>
          <Link href="/EgzaminyMatura">
            <a>Egzaminy/Matura</a>
          </Link>
          <Link href="/Rekrutacja">
            <a>Rekrutacja</a>
          </Link>
          <div className="kierunki-dropdown-menu">
            <Link href="/Kierunki/">
              <a>Kierunki kształcenia</a>
            </Link>
          </div>
          <Link href="/oSzkole" className="arrow-down">
            <a>O Szkole</a>
          </Link>
          <div className="stowarzyszenie-dropdown-menu">
            <Link href="/Stowarzyszenie/">
              <a>Stowarzyszenie</a>
            </Link>
          </div>
        </nav>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <Image src={hamburger} alt="" />
        </button>
      </header>

      {open && (
        <div className="navigation">
          <ul className="navigation__items">
            <p>
              <Link href="/plan_lekcji">
                <a>Plan lekcji</a>
              </Link>
            </p>
            <p>
              <Link href="/dziennik">
                <a>e-Dziennik</a>
              </Link>
            </p>
            <p>
              <Link href="/Aktualnosci/">
                <a>Aktualności</a>
              </Link>
            </p>
            <p>
              <Link href="/Ogloszenia/">
                <a>Ogłoszenia</a>
              </Link>
            </p>
            <p>
              <Link href="/EgzaminyMatura/">
                <a>Egzaminy/Matura</a>
              </Link>
            </p>
            <p>
              <Link href="/Rekrutacja/">
                <a>Rekrutacja</a>
              </Link>
            </p>
            <p>
              <Link href="/oSzkole/">
                <a>O Szkole</a>
              </Link>
            </p>
            <p>
              <Link href="/Kierunki/">
                <a>Kierunki kształcenia</a>
              </Link>
            </p>
            <p>
              <Link href="/Stowarzyszenie/">
                <a>Stowarzyszenie</a>
              </Link>
            </p>
            <Icons />
          </ul>
        </div>
      )}
    </>
  )
}

const Icons = () => {
  return (
    <div className="icons-container">
      <Link href="https://www.facebook.com/zs2lancut/">
        <a>
          <Image
            width={32}
            height={32}
            src="/icon-facebook.svg"
            alt="Szkolny Facebook"
          />
        </a>
      </Link>
      <Link href="https://www.instagram.com/zs2lancut/">
        <a>
          <Image
            width={32}
            height={32}
            src="/icon-instagram.svg"
            alt="Szkolny Instagram"
          />
        </a>
      </Link>
      <Link href="https://www.youtube.com/channel/UCd9cNUlyvaCmKVMbzBlVvGg/videos">
        <a>
          <Image
            width={32}
            height={32}
            src="/icon-youtube.svg"
            alt="Szkolny Youtube"
          />
        </a>
      </Link>
    </div>
  )
}
