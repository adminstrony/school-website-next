import React from 'react'
import Image from 'next/image'
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link href="/" alt="Strona głowna">
          <a>
            <Image src="/footer-logo.svg" alt="" width="88" height="39" />
          </a>
        </Link>
        <div>
          <h6>Zespół Szkół nr 2 im. Jana Kochanowskiego w Łańcucie</h6>
          <div className="footer-description">
            <Link href="https://www.google.com/maps/place/Zesp%C3%B3%C5%82+Szk%C3%B3%C5%82+nr+2+im.+J.+Kochanowskiego/@50.0914188,22.2312803,15z/data=!4m5!3m4!1s0x473cee970324f3a7:0x1d1b4a02738c9d6f!8m2!3d50.0914188!4d22.2312803">
              <a>
                <p className="clickable">
                  ul. Podzwierzyniec 41,
                  <br /> 37-100 Łańcut
                </p>
              </a>
            </Link>
            <p>
              tel.: 17 225 25 82
              <br /> sekretariat@zs2lancut.pl
            </p>
            <p>
              Skrzynka ePUAP
              <br /> /zs2lancut/SkrytkaESP
            </p>
          </div>
        </div>
        <div className="icons-container footer-icons">
          <Link href="https://www.facebook.com/zs2lancut/">
            <a>
              <h2 className="icons clickable">
                <SiFacebook />
              </h2>
            </a>
          </Link>
          <Link href="https://www.instagram.com/zs2lancut/">
            <a>
              <h2 className="icons clickable">
                <SiInstagram />
              </h2>
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCd9cNUlyvaCmKVMbzBlVvGg/videos">
            <a>
              <h2 className="icons clickable">
                <SiYoutube />
              </h2>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
