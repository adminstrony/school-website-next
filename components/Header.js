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
            <Image src="/ZS2.svg" alt="" width="139" height="39" />
          </button>
        </Link>
        <nav className="nav">
          <Link href="https://zs2lancut.pl/plan_lekcji/index.html">
            Plan lekcji
          </Link>
          <Link href="https://uonetplus.vulcan.net.pl/powiatlancucki/">
            e-Dziennik
          </Link>
          <p>|</p>
          <Link href="/Aktualnosci">Aktualności</Link>
          <div className="aktualnosci-dropdown-menu">
            <Link href="/Ogłoszenia/">Ogłoszenia</Link>
          </div>
          <Link href="/EgzaminyMatura">Egzaminy/Matura</Link>
          <Link href="/Rekrutacja">Rekrutacja</Link>
          <div className="kierunki-dropdown-menu">
            <Link href="/Kierunki/">Kierunki kształcenia</Link>
          </div>
          <Link href="/oSzkole">O Szkole</Link>
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
            <Link href="https://zs2lancut.pl/plan_lekcji/index.html" passHref>
              <p>Plan lekcji</p>
            </Link>
            <Link
              href="https://uonetplus.vulcan.net.pl/powiatlancucki/"
              passHref
            >
              <p>e-Dziennik</p>
            </Link>
            <Link href="/Aktualnosci/" passHref>
              <p>Aktualności</p>
            </Link>
            <Link href="/Ogłoszenia/" passHref>
              <p>Ogłoszenia</p>
            </Link>
            <Link href="/EgzaminyMatura/" passHref>
              <p>Egzaminy/Matura</p>
            </Link>
            <Link href="/Rekrutacja/" passHref>
              <p>Rekrutacja</p>
            </Link>
            <Link href="/oSzkole/" passHref>
              <p>O Szkole</p>
            </Link>
            <Link href="/Kierunki/" passHref>
              <p>Kierunki kształcenia</p>
            </Link>
            <Link href="/Stowarzyszenie/" passHref>
              <p>Stowarzyszenie</p>
            </Link>
            <Icons />
          </ul>
        </div>
      )}
    </>
  )
}
