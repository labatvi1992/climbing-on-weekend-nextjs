import React from "react";
import Events from "../components/events";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ homepage }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <Events data={homepage.events} />
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage] = await Promise.all([fetchAPI("/homepage")]);

  return {
    props: { homepage },
    revalidate: 1,
  };
}

export default Home;
