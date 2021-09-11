import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-[#EFF4F6] dark:bg-[#1A202C]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
