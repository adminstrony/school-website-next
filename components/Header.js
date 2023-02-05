import Image from 'next/legacy/image'
import Link from 'next/link'
import { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="header">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="Logo szkoły"
            width={323}
            height={52}
            className="logo"
            quality={100}
            priority
          />
        </Link>
        <nav className="navbar">
          <ul className="ul__desktop">
            <Link href="https://plan-lekcji.zs2lancut.pl/">
              <p>Plan lekcji</p>
            </Link>
            <Link href="/dziennik">
              <p>e-Dziennik</p>
            </Link>
            <p className="line">|</p>
            <Link href="/Aktualnosci">
              <p>Aktualności</p>
              <Image src="/arrow-down.svg" alt="" height="26" width="9" />
            </Link>
            <div className="aktualnosci-dropdown-menu">
              <Link href="/Ogloszenia">
                <p>Ogłoszenia</p>
              </Link>
            </div>
            <Link href="/EgzaminyMatura">
              <p>Egzaminy/Matura</p>
            </Link>
            <Link href="/studia-dyplomowane-dla-nauczycieli">
              <p>Studia podyplomowe</p>
            </Link>
            <Link href="/Szkola" className="arrow-down">
              <p>Szkoła</p>
              <Image src="/arrow-down.svg" alt="" height="26" width="9" />
            </Link>
            <div className="stowarzyszenie-dropdown-menu">
              <Link href="/Rekrutacja">
                <p>Rekrutacja</p>
              </Link>
              <Link href="/Stowarzyszenie">
                <p>Stowarzyszenie</p>
              </Link>
            </div>
          </ul>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="hamburger"
          >
            <Image
              aria-hidden="true"
              src="/hamburger.svg"
              width={52}
              height={52}
              alt=""
              quality={100}
              priority
            />
          </button>
        </nav>
      </header>
      {open && (
        <nav className="navigation-mobile">
          <ul className="navigation-mobile-items">
            <p>
              <Link href="/plan_lekcji">Plan lekcji</Link>
            </p>
            <p>
              <Link href="/dziennik">e-Dziennik</Link>
            </p>
            <p>
              <Link href="/Aktualnosci">Aktualności</Link>
            </p>
            <p>
              <Link href="/Ogloszenia">Ogłoszenia</Link>
            </p>
            <p>
              <Link href="/EgzaminyMatura">Egzaminy/Matura</Link>
            </p>
            <p>
              <Link href="/Rekrutacja">Rekrutacja</Link>
            </p>
            <p>
              <Link href="/studia-dyplomowane-dla-nauczycieli">
                Studia podyplomowe
              </Link>
            </p>
            <p>
              <Link href="/Szkola">Szkoła</Link>
            </p>
            <p>
              <Link href="/Stowarzyszenie">Stowarzyszenie</Link>
            </p>
          </ul>
        </nav>
      )}
    </>
  )
}
