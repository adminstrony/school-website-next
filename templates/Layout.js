import Head from 'next/head'
import { Header } from '../components/Header.js'
import { Footer } from '../components/Footer.js'
import { Accesibility } from '../components/Accesibility.js'

const Layout = ({ children, title }) => (
  <>
  <Head>
        <title>{title} | Zespół Szkoł Nr 2 im. Jana Kochanowskiego w Łańcucie</title>
        
        <meta name="description" content="Z nami rozwiniesz swoje zainteresowania, posiądziesz wiedzę i
          umiejętności. Wszystko pod okiem najlepszych nauczycieli i wspaniałych
          kolegów, którzy zawsze Ci doradzą oraz pomogą z każdym problemem." />
      </Head>
    <Accesibility />
    <div className="wrapper">
      <Header />
    </div>
    <div className="min">{children}</div>
    <Footer />
  </>
)

export default Layout
