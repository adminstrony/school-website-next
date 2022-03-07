import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
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
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
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
}

export default MyDocument
