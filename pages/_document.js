import Document, { Html, Head, Main, NextScript } from "next/document";
import { resetServerContext } from "react-beautiful-dnd";

import i18nextConfig from '../next-i18next.config';

class AppDocument extends Document {
  constructor(props) {
    super(props);

    const { page } = props.__NEXT_DATA__;

    this.state = {
      page: page.page,
    };
  }

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    resetServerContext();
    return { ...initialProps };
  }

  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.query.locale ||
      i18nextConfig.i18n.defaultLocale

    return (
      <Html lang={currentLocale}>
        <Head />
        <body id="root">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
