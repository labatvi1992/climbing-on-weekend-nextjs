import React from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import Link from "next/link";
import NextImage from "./image";

const Card = ({ article }) => {
  const { content, published_at, author } = article;
  const summary = `${content.substring(0, 300)}...`;
  return (
    <>
      <article class="entry">
        <div class="entry-img">
          <NextImage className="img-fluid" image={article.image} />
        </div>

        <h2 class="entry-title">
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h2>

        <div class="entry-meta">
          <ul>
            <li class="d-flex align-items-center">
              <i class="bi bi-person"></i> {author?.name}
            </li>
            <li class="d-flex align-items-center">
              <i class="bi bi-clock"></i>{" "}
              <Moment format="DD/MM/YYYY">{published_at}</Moment>
            </li>
          </ul>
        </div>

        <div class="entry-content">
          <p>
            <ReactMarkdown source={summary} escapeHtml={false} />
          </p>
          <div class="read-more">
            <Link href={`/article/${article.slug}`}>Chi tiết...</Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
