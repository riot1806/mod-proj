import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>MOD</title>
        <meta name='description' content='mod' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='format-detection' content='telephone=no' />
        <link rel='icon' href='/favicon.ico' />
        <script
          src='https://code.jquery.com/jquery-3.7.0.min.js'
          integrity='sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g='
          crossOrigin='anonymous'
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
