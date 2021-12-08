import React from "react";
import Events from "../components/events";
import Articles from "../components/articles";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ homepage, events, articles }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <Events data={homepage.events} />
      <Articles articles={articles} />
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
