import withRedux from "next-redux-wrapper";
import { withRouter } from "next/router";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import AppMain from "App";
import createStore from "store.js";
import "../src/assets/scss/main.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const isServer = !!ctx.req;

    if (Component.getInitialProps) {
      pageProps = { ...(await Component.getInitialProps(ctx)), ...pageProps };
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store, router } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <AppMain router={router}>
            <Component {...pageProps} />
          </AppMain>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withRouter(MyApp));
