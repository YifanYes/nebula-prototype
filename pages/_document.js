import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link href="/fonts/fonts.css" rel="stylesheet"/>
      </Head>
      <body className="p-0 m-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}