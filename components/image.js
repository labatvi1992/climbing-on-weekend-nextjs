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
      unoptimized
      layout="responsive"
      width={image.width}
      height={image.height}
      objectFit="cover"
      src={url}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
