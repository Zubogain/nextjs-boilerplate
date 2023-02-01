import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

import { useTranslation } from 'next-i18next';

import { motion } from "framer-motion";
import ErrorPage from "@/components/ErrorPage";

const ErrorPageContainer = () => {
  const { t } = useTranslation(['error-page']);

  return (
    <React.Fragment>
      <Head>
        <title>{t("error-page:title")}</title>
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          title: t("error-page:title")
        }}
      />
      <motion.section
        className="error-page h-100 d-flex flex-column justify-content-center align-items-center"
        key={"my_unique_key1"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ErrorPage text={t('error-page:title')} />
      </motion.section>
    </React.Fragment>
  )
}

export default ErrorPageContainer;
