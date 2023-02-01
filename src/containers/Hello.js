import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

import { useTranslation } from 'next-i18next';

import { motion } from "framer-motion";
import Hello from "@/components/Hello";

const HelloContainer = () => {
  const { t } = useTranslation(['home']);

  return (
    <React.Fragment>
      <Head>
        <title>{t("common:title")}</title>
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          title: t("common:title")
        }}
      />
      <motion.section
        className="hello h-100 d-flex flex-column justify-content-center align-items-center"
        key={"my_unique_key1"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Hello title={t("common:title")} />
      </motion.section>
    </React.Fragment>
  )
}

export default HelloContainer;
