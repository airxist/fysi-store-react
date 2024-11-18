import { aboutData } from "../../constants";
import GeneralLayout from "../_layout/GeneralLayout";
import RegularList from "../common/RegularList";
import AboutBlock from "./AboutBlock";

const About = () => {
  return (
    <GeneralLayout>
      <section className="padded">
        <RegularList
          data={aboutData}
          renderComponent={(aboutData) => {
            return (
              <>
                {aboutData.map((item) => (
                  <AboutBlock
                    key={item.title}
                    {...item}
                    containerStyle="mb-11 md:flex-center"
                  />
                ))}
              </>
            );
          }}
        />
      </section>
    </GeneralLayout>
  );
};

export default About;
