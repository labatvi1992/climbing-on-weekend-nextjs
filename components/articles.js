import React from "react";
import Card from "./card";
import Categories from "./categories";

const Articles = ({ articles, categories }) => {
  return (
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-8 entries">
            {articles.map((article) => {
              return (
                <Card
                  article={article}
                  key={`article__left__${article.slug}`}
                />
              );
            })}
          </div>
          <div className="col-lg-4">
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
