import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i&display=swap"
            rel="stylesheet"
          />
          <link href="/vendor/animate.css/animate.min.css" rel="stylesheet" />
          <link href="/vendor/aos/aos.css" rel="stylesheet" />
          <link
            href="/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="/vendor/bootstrap-icons/bootstrap-icons.css"
            rel="stylesheet"
          />
          <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
          <link
            href="/vendor/glightbox/css/glightbox.min.css"
            rel="stylesheet"
          />
          <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
          <link href="/css/style.css" rel="stylesheet" />
          <script src="/vendor/purecounter/purecounter.js" />
          <script src="/vendor/aos/aos.js" />
          <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />
          <script src="/vendor/glightbox/js/glightbox.min.js" />
          <script src="/vendor/isotope-layout/isotope.pkgd.min.js" />
          <script src="/vendor/swiper/swiper-bundle.min.js" />
          <script src="/vendor/waypoints/noframework.waypoints.js" />
          <script src="/vendor/php-email-form/validate.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/main.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
