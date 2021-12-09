import React, { useEffect } from "react";
import NextImage from "../components/image";

const Members = ({ data }) => {
  const { title, items } = data || {};

  useEffect(() => {
    new Swiper(".testimonials-carousel", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="testimonials" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        <div className="testimonials-carousel swiper">
          <div className="swiper-wrapper">
            {items.map((item) => {
              const { id, name, description, avatar } = item || {};
              return (
                <div key={id} className="testimonial-item swiper-slide">
                  <div className="testimonial-img-container">
                    <NextImage className="testimonial-img" image={avatar} />
                  </div>
                  <h3>{name}</h3>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {description}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
};

export default Members;
