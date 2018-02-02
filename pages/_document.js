import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import stylesheet from '../styles/styles.css';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>My page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <style jsx global>
            {``}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
