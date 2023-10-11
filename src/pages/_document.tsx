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
        <link
          rel='preload'
          href='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AfwMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAHhABAAMAAwEBAQEAAAAAAAAAAAECAxETYRIxIQT/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFxEBAQEBAAAAAAAAAAAAAAAAABESAf/aAAwDAQACEQMRAD8A9jXM+mZlaHUo7VwgK0NrTwdaG1ozWoCtDa1FWhtaovA1qbWEiDKwNcSpkBiBIq1StALtBVzpLtCjPeGfSP613hnvCozUodWqqVOpVGV1r/BxUVa/wytUqwNamRVcVFwiqioohIXAq1qWCKWGfwFSCw5BZaE3IvDReCbQBVD6QTQ+gwZWDKhqOqNChfCoEiq4WtBUREBFLUAZDYUhsBVirm2Lsoz5n1llzs00lWD6mQVUyEUcCDAkVERAWilioGRBkFSGwg2AuxdoMkEiublZqzs52V2zOzTEbaSbWWatjqyQOiV8lxIkUfKuQpygLlfIOV8gLlXKuVcirlUpyGZBUlyOQyivO43bcruRhp+N2Wi1mOnnY+lmDO7RS7SNkWF9M1bj+gO5Tkr6T6A7lPor7T7QN5Tkr7V9Cm8qmS/pPpAchlUyHlGnjMdPxtx0cTHX8/rflr6lR2ctGmmjk5bNOevrVI6VdDI0c+upkarUbPtfYx9vq+31KNfYnYydvqdvpRs7E+/WPt9X2+pRr+/U+/WTt9Tt9RY1/foJ0Zp19DOorwWO3rflt/P1wcdW3LaeHKtx3ctfWnPb1xctmimy6I7FdjI2cmu0mRtK6TLqRt6uNfXMjaRRtKaMuj2p2uf3SnbJoy6Pcrtc/ulU7SuiOj3ep3eubO8qncpHSnb0ud/XOtuXb/Q3xOv/2Q=='
          as='image'
        />
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
