import React from 'react'
import Image from 'next/image'
import { Icons } from './Icons.js'
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si'
import Link from 'next/link'

import footerlogo from '../public/footer-logo.svg'
export const Footer = () => {
  return (
    <footer className="footer">
      <Image src={footerlogo} alt="" />
      <div className="footer-container">
        <h6>Zespół Szkoł Nr 2 im. Jana Kochanowskiego w Łańcucie</h6>
        <div className="footer-description">
          <Link
            href="https://www.google.com/maps/place/Zesp%C3%B3%C5%82+Szk%C3%B3%C5%82+nr+2+im.+J.+Kochanowskiego/@50.0914188,22.2312803,15z/data=!4m5!3m4!1s0x473cee970324f3a7:0x1d1b4a02738c9d6f!8m2!3d50.0914188!4d22.2312803"
            passHref
          >
            <p className="clicable">
              ul. Podzwierzyniec 41,
              <br /> 37-100 Łańcut
            </p>
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
        <Link href="https://www.facebook.com/zs2lancut/" passHref>
          <h2 className="icons clicable">
            <SiFacebook />
          </h2>
        </Link>
        <Link href="https://www.instagram.com/zs2lancut/" passHref>
          <h2 className="icons clicable">
            <SiInstagram />
          </h2>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCd9cNUlyvaCmKVMbzBlVvGg/videos"
          passHref
        >
          <h2 className="icons clicable">
            <SiYoutube />
          </h2>
        </Link>
      </div>
    </footer>
  )
}
