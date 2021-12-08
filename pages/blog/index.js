import React from "react";
import Articles from "../../components/articles";
import { fetchAPI } from "../../lib/api";

const Blog = ({ articles, categories }) => {
  return (
    <main id="main">
      <Articles articles={articles} categories={categories} />
    </main>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
  ]);

  return {
    props: { articles, categories },
    revalidate: 1,
  };
}

export default Blog;
