import React, { useEffect } from "react";
import NextImage from "../components/image";

const Members = ({ data }) => {
  const { title, items } = data || {};

  useEffect(() => {
    new Swiper(".testimonials-carousel", {
      speed: 400,
      loop: true,
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: false,
        slideShadows: true,
      },
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
      <div className="container-fluid p-0">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        <div className="testimonials-carousel swiper">
          <div className="swiper-wrapper">
            {(items || []).map((item, itemIndex) => {
              const { name, description, avatar } = item || {};
              return (
                <div key={itemIndex} className="testimonial-item swiper-slide">
                  <div className="testimonial-img-container">
                    <NextImage className="testimonial-img" image={avatar} />
                  </div>
                  <h3>{name}</h3>
                  <p>{description}</p>
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
