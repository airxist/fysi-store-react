import { SUSTAIN_IMAGES } from "../../constants";
import TitleDescription from "../common/TitleDescription";

const Sustainability = () => {
  return (
    <div className="h-[40vh] md:h-[678px] bg-forest_green-700 flex items-center">
      <div className="hidden md:block w-[29%] border h-full relative overflow-hidden">
        {/* <IconWrapper
        iconElement={<ButterflyIcon />}
        containerStyle="w-[62px] h-14 absolute top-3 left-5"
      /> */}

        {/* <IconWrapper
        iconElement={<StarIcon type="diamond" />}
        containerStyle="absolute -bottom-10 right-0 w-[353px] h-[351px]"
      /> */}

        <TitleDescription
          containerStyle="pt-24 pl-20 flex flex-col justify-between h-full pb-[55px]"
          title="Sustainability Highlight"
          description="Shop confidently with our eco-certified vendors—your choices make a real difference."
          titleStyle="font-bold text-white text-[2rem]"
          descriptionStyle="text-xl text-white"
        />
      </div>

      <div className="flex-1 h-full bg-white">
        <img
          src={SUSTAIN_IMAGES[0]}
          alt="image"
          className="object-cover object-center size-full"
        />
      </div>

      <div className="hidden md:flex w-[29%] border h-full items-center">
        <div className="max-w-[302px] ml-4">
          {/* <IconWrapper
          iconElement={<StarIcon type="hexa" />}
          containerStyle="size-10"
        /> */}
          <p className="text-xl text-white">
            Shopping on Fysi means you are helping to build a more sustainable
            world and that makes you a hero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
