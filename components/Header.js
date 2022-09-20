import Image from 'next/future/image'
import Link from 'next/link'
import { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <Link href="/">
        <a>
          <Image
            src="/Logo.svg"
            alt="Logo szkoły"
            width={323}
            height={52}
            className="logo"
            layout="fixed"
            quality={100}
            priority
          />
        </a>
      </Link>
      <nav className="navbar">
        <ul className="ul__desktop">
          <Link href="https://plan-lekcji.zs2lancut.pl/">
            <a>
              <p>Plan lekcji</p>
            </a>
          </Link>
          <Link href="/dziennik">
            <a>
              <p>e-Dziennik</p>
            </a>
          </Link>
          <p className="line">|</p>
          <Link href="/Aktualnosci">
            <a>
              <p>Aktualności</p>
              <Image src="/arrow-down.svg" alt="" height="26" width="9" />
            </a>
          </Link>
          <div className="aktualnosci-dropdown-menu">
            <Link href="/Ogloszenia">
              <a>
                <p>Ogłoszenia</p>
              </a>
            </Link>
          </div>
          <Link href="/EgzaminyMatura">
            <a>
              <p>Egzaminy/Matura</p>
            </a>
          </Link>
          <Link href="/studia-dyplomowane-dla-nauczycieli">
            <a>
              <p>Studia podyplomowe</p>
            </a>
          </Link>
          <Link href="/Szkola" className="arrow-down">
            <a>
              <p>Szkoła</p>
              <Image src="/arrow-down.svg" alt="" height="26" width="9" />
            </a>
          </Link>
          <div className="stowarzyszenie-dropdown-menu">
            <Link href="/Rekrutacja">
              <a>
                <p>Rekrutacja</p>
              </a>
            </Link>
            <Link href="/Stowarzyszenie">
              <a>
                <p>Stowarzyszenie</p>
              </a>
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
      {open && (
        <nav className="navigation-mobile">
          <ul className="navigation-mobile-items">
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
              <Link href="/Aktualnosci">
                <a>Aktualności</a>
              </Link>
            </p>
            <p>
              <Link href="/Ogloszenia">
                <a>Ogłoszenia</a>
              </Link>
            </p>
            <p>
              <Link href="/EgzaminyMatura">
                <a>Egzaminy/Matura</a>
              </Link>
            </p>
            <p>
              <Link href="/Rekrutacja">
                <a>Rekrutacja</a>
              </Link>
            </p>
            <p>
              <Link href="/studia-dyplomowane-dla-nauczycieli">
                <a>Studia podyplomowe</a>
              </Link>
            </p>
            <p>
              <Link href="/Szkola">
                <a>Szkoła</a>
              </Link>
            </p>
            <p>
              <Link href="/Stowarzyszenie">
                <a>Stowarzyszenie</a>
              </Link>
            </p>
          </ul>
        </nav>
      )}
    </header>
  )
}

// const NavIcon = () => {
//   const icons = [
//     {
//       name: 'Facebook',
//       path: '/icon-Facebook.svg',
//       width: '10',
//       height: '20',
//       href: 'https://www.facebook.com/zs2lancut/',
//     },
//     {
//       name: 'Youtube',
//       path: '/icon-Youtube.svg',
//       width: '17',
//       height: '12',
//       href: 'https://www.instagram.com/zs2lancut/',
//     },
//     {
//       name: 'Instagram',
//       path: '/icon-Instagram.svg',
//       width: '18',
//       height: '18',
//       href: 'https://www.youtube.com/channel/UCd9cNUlyvaCmKVMbzBlVvGg/videos',
//     },
//   ]
//   return (
//     <nav className="icons">
//       {icons.map(({ name, path, width, height, href }) => (
//         <Link href={href} key={name}>
//           <a>
//             <div className="icon">
//               <Image
//                 src={path}
//                 alt={'Oficjalny' + name + 'naszej szkoły'}
//                 width={width}
//                 height={height}
//               />
//             </div>
//           </a>
//         </Link>
//       ))}
//     </nav>
//   )
// }
