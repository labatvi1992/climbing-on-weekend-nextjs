import React from "react";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import Breadcrumbs from "../../components/breadcrumbs";
import Gallery from "../../components/gallery";

const Photos = ({ count, files }) => {
  return (
    <main id="main">
      <Seo />
      <Breadcrumbs
        title="Bộ sưu tập"
        items={[{ name: "Trang chủ", slug: "/" }]}
      />
      <Gallery count={count} files={files} />
    </main>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [count, files] = await Promise.all([
    fetchAPI("/upload/files/count"),
    fetchAPI("/upload/files"),
  ]);

  return {
    props: { count, files },
    revalidate: 1,
  };
}

export default Photos;
