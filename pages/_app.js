import { withRouter } from "next/router";
import Head from "next/head";

import { appWithTranslation } from 'next-i18next';

import AppMain from "@/App";
import "@Public/scss/style.scss";

import { wrapper } from "../src/store";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router, store }) => {

  return (
    <>
      <Head>
        <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AppMain router={router}>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} store={store} />
        </AnimatePresence>
      </AppMain>
    </>
  );
};

export default appWithTranslation(wrapper.withRedux(withRouter(MyApp)));

