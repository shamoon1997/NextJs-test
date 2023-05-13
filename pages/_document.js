// import { ServerStyleSheet } from "styled-components";
import Document, { Head, Html, Main, NextScript } from "next/document";

//
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#363940" />
          {/* <link rel='manifest' href='/manifest.json' /> */}
          {/* <link rel='apple-touch-icon' href='/icons/icon-384x384.png'></link> */}
          {/* <link
                        rel="preload"
                        href="/fonts/QwitcherGrypen-Bold.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/QwitcherGrypen-Regular.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin=""
                    /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
