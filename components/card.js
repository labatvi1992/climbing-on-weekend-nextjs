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
      <article className="entry">
        <div className="entry-img">
          <NextImage className="img-fluid" image={article.image} />
        </div>

        <h2 className="entry-title">
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h2>

        <div className="entry-meta">
          <ul>
            <li className="d-flex align-items-center">
              <i className="bi bi-person"></i> {author?.name}
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-clock"></i>{" "}
              <Moment format="DD/MM/YYYY">{published_at}</Moment>
            </li>
          </ul>
        </div>

        <div className="entry-content">
          <ReactMarkdown source={summary} escapeHtml={false} />
          <div className="read-more">
            <Link href={`/article/${article.slug}`}>Chi tiết...</Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
