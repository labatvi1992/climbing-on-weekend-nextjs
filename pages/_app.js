import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { createContext } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../scss/main.scss";

NProgress.configure({ showSpinner: true });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global, menu, categories } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Header global={global} menu={menu} />
        <Component {...pageProps} />
        <Footer menu={menu} categories={categories} />
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  try {
    // Fetch global site settings from Strapi
    const [global, menu, categories] = await Promise.all([
      fetchAPI("/global"),
      fetchAPI("/menu"),
      fetchAPI("/categories"),
    ]);
    // Pass the data to our page via props
    return { ...appProps, pageProps: { global, menu, categories } };
  } catch (error) {
    console.log(error);
    return { ...appProps, pageProps: {} };
  }
};

export default MyApp;
