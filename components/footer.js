import React from "react";
import Link from "next/link";

const Footer = ({ menu, categories }) => {
  const { items } = menu || {};
  return (
    <>
      <footer
        id="footer"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Liên kết</h4>
                <ul>
                  {items.map((item) => {
                    const { id, text, slug } = item || {};
                    return (
                      <li key={id}>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <Link href={slug}>{text}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Danh mục</h4>
                <ul>
                  {categories.map((item) => {
                    const { id, name, slug } = item || {};
                    return (
                      <li key={id}>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <Link href={`/category/${slug}`}>{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Địa chỉ</h4>
                <p>
                  Thung lũng Sáng tạo Quy Nhơn, <br />
                  P. Ghềnh Ráng, TP. Quy Nhơn, Bình Định
                  <br /> <br />
                  <strong>Email:</strong> leonuicuoituan@gmail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>Về chúng tôi</h3>
                <p>
                  Website được tạo ra từ ý tưởng mong muốn có một kênh riêng cho
                  các hoạt động của nhóm và là nơi lưu trữ những kỷ niệm đẹp,
                  những phút giây thư giãn sau nhiều giờ làm việc mệt mỏi...
                </p>
                <br />
                <h3>Phiên bản di động</h3>
                <div className="social-links mt-3">
                  <a href="#" className="android">
                    <i className="bx bxl-android"></i>
                  </a>
                  <a href="#" className="apple">
                    <i className="bx bxl-apple"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>2021</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">Leo núi cuối tuần - Website official</div>
        </div>
      </footer>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
