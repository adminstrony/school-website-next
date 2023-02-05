import Head from 'next/head'
import { Accesibility } from '../components/Accesibility'
import { Header } from '../components/Header.js'
import { Footer } from '../components/Footer.js'

const descriptionTemplate =
  'Z nami rozwiniesz swoje zainteresowania, posiądziesz wiedzę i umiejętności. Wszystko pod okiem najlepszych nauczycieli i wspaniałych kolegów, którzy zawsze Ci doradzą oraz pomogą z każdym problemem.'

export const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>
          {`${title} | Zespół Szkoł Nr 2 im. Jana Kochanowskiego w Łańcucie`}
        </title>
        <meta
          name="description"
          content={description ? description : descriptionTemplate}
        />
      </Head>
      <div className="header-container">
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
      <Accesibility />
    </>
  )
}
