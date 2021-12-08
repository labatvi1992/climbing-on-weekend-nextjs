import React from "react";
import Card from "./card";
import Categories from "./categories";

const Articles = ({ articles, categories }) => {
  return (
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-8 entries">
            {articles.map((article) => {
              return (
                <Card
                  article={article}
                  key={`article__left__${article.slug}`}
                />
              );
            })}
          </div>
          <div class="col-lg-4">
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
