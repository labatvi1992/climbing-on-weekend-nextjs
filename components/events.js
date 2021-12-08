import React from "react";
import Moment from "react-moment";
import Link from "next/link";
import NextImage from "../components/image";

const Events = ({ data }) => {
  const { items } = data || {};
  return (
    <section
      id="hero"
      className="d-flex justify-cntent-center align-items-center vh-100"
    >
      <div
        id="heroCarousel"
        className="container-fluid carousel carousel-fade vh-100 p-0"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          {items.map((item, itemIndex) => {
            return (
              <button
                key={item.id}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={itemIndex}
                className={itemIndex === 0 ? "active" : ""}
                aria-current="true"
                aria-label="Slide"
              />
            );
          })}
        </div>
        <div className="carousel-inner">
          {items.map((item, itemIndex) => {
            const { id, title, date, image, link } = item || {};
            return (
              <div
                className={`carousel-item${itemIndex === 0 ? " active" : ""}`}
                key={id}
              >
                <NextImage className="d-block w-100 h-100" image={image} />
                <div className="carousel-container vh-100">
                  <h2 className="animate__animated animate__fadeInDown">
                    <Moment format="DD/MM/YYYY">{date}</Moment>
                  </h2>
                  <h3 className="animate__animated animate__fadeInUp">
                    <Link href={`/article/${link.slug}`}>{title}</Link>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bx bx-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bx bx-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </section>
  );
};

export default Events;
