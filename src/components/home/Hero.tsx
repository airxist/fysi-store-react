import Overlay from "../common/Overlay";
import TitleDescription from "../common/TitleDescription";
import { images, landing_page_hero } from "../../constants";
import Btn from "../common/Btn";

const Hero = () => {
  return (
    <div className="aspect-[1.5/1] md:aspect-[2.5/1] relative">
      <Overlay containerStyle="bg-forest_green-800/70 flex-center">
        <div className="max-w-[776px]">
          <TitleDescription
            containerStyle="text-gray-50 text-center"
            description={landing_page_hero.desc}
            descriptionStyle="text-xs lg:text-2xl font-medium mt-1"
            title={landing_page_hero.title}
            titleStyle="font-bold text-5xl lg:text-[102px]"
          />

          <Btn
            text="Shop Now"
            btnVariant="secondary"
            containerStyle="rounded-md flex-center font-bold text-xs  py-2 px-[10px] lg:py-4 lg:px-6 mx-auto mt-6"
          />
        </div>
      </Overlay>

      <img
        src={images.home_hero_bg}
        className="object-cover object-center size-full"
        alt="home_bg"
      />
    </div>
  );
};

export default Hero;
