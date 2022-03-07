import React from 'react'
import Link from 'next/link'
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si'

export const Icons = () => {
  return (
    <div className="icons-container">
      <Link href="https://www.facebook.com/zs2lancut/" passHref>
        <h1 className="icons">
          <SiFacebook />
        </h1>
      </Link>
      <Link href="https://www.instagram.com/zs2lancut/" passHref>
        <h1 className="icons">
          <SiInstagram />
        </h1>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCd9cNUlyvaCmKVMbzBlVvGg/videos"
        passHref
      >
        <h1 className="icons">
          <SiYoutube />
        </h1>
      </Link>
    </div>
  )
}
