import React from "react";
import Seo from "../../components/seo";
import Breadcrumbs from "../../components/breadcrumbs";
import Articles from "../../components/articles";
import { fetchAPI } from "../../lib/api";

const Blog = ({ articles, categories }) => {
  return (
    <main id="main">
      <Seo />
      <Breadcrumbs
        title="Bài viết"
        items={[{ name: "Trang chủ", slug: "/" }]}
      />
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
