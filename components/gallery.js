import React, { useEffect } from "react";
import NextImage from "../components/image";

const Gallery = ({ count, files }) => {
  useEffect(() => {
    GLightbox({
      selector: ".portfolio-lightbox",
      loop: true,
    });
  }, []);

  return (
    <section className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter=".filter-photo">Tất cả</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          {(files || []).map((item) => {
            const { id, name } = item || {};
            return (
              <div
                key={id}
                className="col-lg-4 col-md-6 portfolio-wrap filter-photo"
              >
                <div className="portfolio-item">
                  <div className="portfolio-image">
                    <NextImage className="img-fluid" image={item} />
                  </div>
                  <div className="portfolio-info">
                    <h3>{name}</h3>
                    <div>
                      <a
                        href={item.url}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <i className="bx bx-image"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
