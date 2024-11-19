import { usePhotoSlider } from "../../lib/hooks/usePhotoSlider";
import IconWrapper from "./IconWrapper";

const PhotoSlide = ({
  photos,
  containerStyle,
}: {
  photos: string[];
  containerStyle: string;
}) => {
  const { activeIndex } = usePhotoSlider(photos.length - 1);
  return (
    <div className={containerStyle}>
      {photos.map((photo, photoIndex) => {
        return (
          photoIndex === activeIndex && (
            <IconWrapper
              icon={photo}
              key={photoIndex}
              containerStyle="w-full"
            />
          )
        );
      })}
    </div>
  );
};

export default PhotoSlide;
