import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import Link from "next/link";
import { fetchAPI } from "../../../lib/api";
import NextImage from "../../../components/image";
import Seo from "../../../components/seo";
import Categories from "../../../components/categories";
import Breadcrumbs from "../../../components/breadcrumbs";

const Article = ({ article, categories }) => {
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <main id="main">
      <Seo seo={seo} />
      <Breadcrumbs
        title={article.title}
        items={[
          { name: "Trang chủ", slug: "/" },
          { name: "Bài viết", slug: "/category" },
        ]}
      />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <div className="entry-img">
                  <NextImage className="img-fluid" image={article.image} />
                </div>

                <h2 className="entry-title">{article.title}</h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i> {article.author.name}
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <Moment format="DD/MM/YYYY">
                        {article.published_at}
                      </Moment>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <ReactMarkdown source={article.content} escapeHtml={false} />
                </div>

                <div className="entry-footer">
                  <i className="bi bi-folder"></i>
                  <ul className="cats" style={{ marginLeft: 5 }}>
                    <li>
                      <Link href={`/category/${article.category.slug}`}>
                        {article.category.name}
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>

              <div className="blog-author d-flex align-items-center">
                {article.author.picture && (
                  <div className="blog-author-img">
                    <NextImage
                      className="rounded-circle"
                      image={article.author.picture}
                    />
                  </div>
                )}
                <div>
                  <h4>{article.author.name}</h4>
                  <ReactMarkdown
                    source={article.author.description}
                    escapeHtml={false}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Categories categories={categories} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export async function getStaticPaths() {
  let articles = [];
  try {
    articles = await fetchAPI("/articles");
  } catch (error) {
    console.log(error);
  }
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const articles = await fetchAPI(`/articles?slug=${params.slug}`);
    const categories = await fetchAPI("/categories");

    return {
      props: { article: articles[0], categories },
      revalidate: 1,
    };
  } catch (error) {
    console.log(error);
    return {
      props: { article: {}, categories: [] },
      revalidate: 1,
    };
  }
}

export default Article;
