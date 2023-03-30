import Image from 'next/legacy/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-container">
          <Link href="/" alt="Strona głowna">
            <Image src="/footer-logo.webp" alt="" width={108} height={108} />
          </Link>
          <div>
            <h3>Zespół Szkół nr 2 im. Jana Kochanowskiego w Łańcucie</h3>
            <div className="footer-description">
              <Link href={LinkMap}>
                <p>
                  ul. Podzwierzyniec 41,
                  <br /> 37-100 Łańcut
                </p>
              </Link>
              <p>
                tel.: 17 225 25 82
                <br /> zs2@powiatlancut.pl
              </p>
              <p>
                Skrzynka ePUAP
                <br /> /zs2lancut/SkrytkaESP
              </p>
            </div>
          </div>

          <div className="footer-icons">
            <Link href="https://www.facebook.com/zs2lancut/">
              <Image
                width={21}
                height={21}
                src="/icon-facebook.svg"
                alt="Szkolny Facebook"
              />
            </Link>
            <Link href="https://www.instagram.com/zs2lancut/">
              <Image
                width={21}
                height={21}
                src="/icon-instagram.svg"
                alt="Szkolny Instagram"
              />
            </Link>
            <Link href="https://www.youtube.com/channel/UCd9cNUlyvaCmKVMbzBlVvGg/videos">
              <Image
                width={21}
                height={21}
                src="/icon-youtube.svg"
                alt="Szkolny Youtube"
              />
            </Link>
            <Link href="https://www.tiktok.com/@zs2lancut">
              <Image
                width={21}
                height={21}
                src="/icon-tiktok.svg"
                alt="Szkolny Tiktok"
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="subtext">
        <Link href="https://media.graphassets.com/zG7PkIAqTveHpA7HKki6">
          Polityka prywatności
        </Link>
        &nbsp;| © 2023 Adam Majcher. All rights reserved
      </p>
    </footer>
  )
}

const LinkMap =
  'https://www.google.com/maps/place/Zesp%C3%B3%C5%82+Szk%C3%B3%C5%82+nr+2+im.+J.+Kochanowskiego/@50.0914188,22.2312803,15z/data=!4m5!3m4!1s0x473cee970324f3a7:0x1d1b4a02738c9d6f!8m2!3d50.0914188!4d22.2312803'
