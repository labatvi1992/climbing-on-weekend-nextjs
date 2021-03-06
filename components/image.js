import NextImage from "next/image";
import { getStrapiMedia } from "../lib/media";

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
      objectFit="cover"
      src={url}
      alt={alternativeText || ""}
      unoptimized
    />
  );
};

export default Image;
