import React from "react";
import Events from "../components/events";
import Members from "../components/members";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ homepage }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <Events data={homepage.events} />
      <main>
        <Members data={homepage.members} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  try {
    // Run API calls in parallel
    const [homepage] = await Promise.all([fetchAPI("/homepage")]);
    return {
      props: { homepage },
      revalidate: 1,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
      revalidate: 1,
    };
  }
}

export default Home;
