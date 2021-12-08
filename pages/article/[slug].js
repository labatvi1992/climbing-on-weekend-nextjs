import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import Link from "next/link";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import NextImage from "../../components/image";
import Seo from "../../components/seo";
import Categories from "../../components/categories";

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
      <section id="blog" class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-8 entries">
              <article class="entry entry-single">
                <div class="entry-img">
                  <NextImage class="img-fluid" image={article.image} />
                </div>

                <h2 class="entry-title">{article.title}</h2>

                <div class="entry-meta">
                  <ul>
                    <li class="d-flex align-items-center">
                      <i class="bi bi-person"></i> {article.author.name}
                    </li>
                    <li class="d-flex align-items-center">
                      <i class="bi bi-clock"></i>{" "}
                      <Moment format="DD/MM/YYYY">
                        {article.published_at}
                      </Moment>
                    </li>
                  </ul>
                </div>

                <div class="entry-content">
                  <ReactMarkdown source={article.content} escapeHtml={false} />
                </div>

                <div class="entry-footer">
                  <i class="bi bi-folder"></i>
                  <ul class="cats" style={{ marginLeft: 5 }}>
                    <li>
                      <Link href={`/category/${article.category.slug}`}>
                        {article.category.name}
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>

              <div class="blog-author d-flex align-items-center">
                {article.author.picture && (
                  <img
                    className="rounded-circle"
                    src={getStrapiMedia(article.author.picture)}
                    alt=""
                  />
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
            <div class="col-lg-4">
              <Categories categories={categories} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

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
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
