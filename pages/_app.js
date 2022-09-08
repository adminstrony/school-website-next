import '../styles/globals.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Component {...pageProps} />
      <Script src="https://unpkg.com/react@18/umd/react.production.min.js" />
      <Script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" />
    </>
  )
}

export default MyApp
// do poprawy
