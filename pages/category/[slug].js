import Articles from "../../components/articles";
import Breadcrumbs from "../../components/breadcrumbs";
import { fetchAPI } from "../../lib/api";
import Seo from "../../components/seo";

const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    <main id="main">
      <Seo seo={seo} />
      <Breadcrumbs
        title={category.name}
        items={[
          { name: "Trang chủ", slug: "/" },
          { name: "Bài viết", slug: "/category" },
        ]}
      />
      <Articles articles={category.articles} categories={categories} />
    </main>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
  const categories = await fetchAPI("/categories");

  return {
    props: { category, categories },
    revalidate: 1,
  };
}

export default Category;
