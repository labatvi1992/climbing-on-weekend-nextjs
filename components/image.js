import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ className, image }) => {
  const { url, alternativeText } = image;

  const loader = () => {
    return getStrapiMedia(image);
  };

  return (
    <NextImage
      className={className}
      loader={loader}
      layout="responsive"
      width={image.width}
      height={image.height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
