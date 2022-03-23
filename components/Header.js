import Image from 'next/image'
import Link from 'next/link'
import hamburger from '../public/burger.svg'
import { Icons } from './Icons.js'
import { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="header">
        <Link href="/" passHref>
          <button className="logo" aria-label="Home Page">
            <Image src="/ZS2.svg" alt="" width="152.38" height="55.59" />
          </button>
        </Link>
        <nav className="nav">
          <Link href="/plan_lekcji">Plan lekcji</Link>
          <Link href="/dziennik">e-Dziennik</Link>
          <p>|</p>
          <Link href="/Aktualnosci">Aktualności</Link>
          <div className="aktualnosci-dropdown-menu">
            <Link href="/Ogloszenia/" className="arrow-down">
              Ogłoszenia
            </Link>
          </div>
          <Link href="/EgzaminyMatura">Egzaminy/Matura</Link>
          <Link href="/Rekrutacja">Rekrutacja</Link>
          <div className="kierunki-dropdown-menu">
            <Link href="/Kierunki/">Kierunki kształcenia</Link>
          </div>
          <Link href="/oSzkole" className="arrow-down">
            O Szkole
          </Link>
          <div className="stowarzyszenie-dropdown-menu">
            <Link href="/Stowarzyszenie/">Stowarzyszenie</Link>
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
              <Link href="/plan_lekcji" passHref>
                Plan lekcji
              </Link>
            </p>
            <p>
              <Link href="/dziennik" passHref>
                e-Dziennik
              </Link>
            </p>
            <p>
              <Link href="/Aktualnosci/" passHref>
                Aktualności
              </Link>
            </p>
            <p>
              <Link href="/Ogloszenia/" passHref>
                Ogłoszenia
              </Link>
            </p>
            <p>
              <Link href="/EgzaminyMatura/" passHref>
                Egzaminy/Matura
              </Link>
            </p>
            <p>
              <Link href="/Rekrutacja/" passHref>
                Rekrutacja
              </Link>
            </p>
            <p>
              <Link href="/oSzkole/" passHref>
                O Szkole
              </Link>
            </p>
            <p>
              <Link href="/Kierunki/" passHref>
                Kierunki kształcenia
              </Link>
            </p>
            <p>
              <Link href="/Stowarzyszenie/" passHref>
                Stowarzyszenie
              </Link>
            </p>
            <Icons />
          </ul>
        </div>
      )}
    </>
  )
}
