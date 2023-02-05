import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-LLC5KKDG83`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LLC5KKDG83', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta httpEquiv="Content-type" content="text/html; charSet=utf-8" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
