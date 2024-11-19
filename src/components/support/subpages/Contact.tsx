import { images } from "../../../constants";
import IconWrapper from "../../common/IconWrapper";
import TitleDescription from "../../common/TitleDescription";

const Contact = () => {
  return (
    <section className="py-10 padded">
      <div className="flex flex-col items-start md:flex-row gap-x-20">
        <IconWrapper
          icon={images.eco_contact}
          containerStyle="w-full md:flex-1 border h-[241px] md:h-[500px] flex-center md:order-2"
        />

        <div className="flex flex-col w-full gap-y-3 md:order-1 md:max-w-[300px]">
          <h2 className="font-DMSansBold text-[28px]">Our Contacts</h2>

          <TitleDescription
            title="Working hours:"
            titleStyle="font-DMSansMedium text-xl"
            description="24hrs Mon - Sun"
            descriptionStyle="font-DMSansRegular"
          />

          <TitleDescription
            title="Email:"
            titleStyle="font-DMSansMedium text-xl"
            description="yourstoreemail@email.com"
            descriptionStyle="font-DMSansRegular"
          />

          <TitleDescription
            title="Phone Number:"
            titleStyle="font-DMSansMedium text-xl"
            description="+0900000000"
            descriptionStyle="font-DMSansRegular"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-[28px] font-DMSansBold">
          Follow us on our social platforms
        </h2>

        <div className="flex-center flex-wrap h-[500px] mt-5">
          <IconWrapper
            icon={images.about1}
            containerStyle="w-[50%] md:w-[25%] h-[50%] md:h-full flex flex-col justify-end"
            iconStyle="h-[70%] object-center object-cover"
          />
          
          <IconWrapper
            icon={images.about2}
            containerStyle="w-[50%] md:w-[25%] h-[50%] md:h-full"
            iconStyle="h-[70%] object-center object-cover"
          />
          
          <IconWrapper
            icon={images.about3}
            containerStyle="w-[50%] md:w-[25%] h-[50%] md:h-full flex flex-col justify-end"
            iconStyle="h-[70%] object-center object-cover"
          />
          
          <IconWrapper
            icon={images.about4}
            containerStyle="w-[50%] md:w-[25%] h-[50%] md:h-full"
            iconStyle="h-[70%] object-center object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
