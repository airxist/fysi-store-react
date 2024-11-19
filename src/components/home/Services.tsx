import { services } from "../../constants";
import ServiceCard from "../common/cards/ServiceCard";
import RegularList from "../common/RegularList";

const Services = () => {
  return (
    <div className="py-6 padded">
      <RegularList
        data={services}
        dataContainerStyle="flex flex-wrap gap-3"
        renderComponent={(services) => {
          return (
            <>
              {services.map((item) => (
                <ServiceCard {...item} key={item.title} />
              ))}
            </>
          );
        }}
      />
    </div>
  );
};

export default Services;
