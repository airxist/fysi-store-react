import Logo from "./Logo";
import TermsAndConditions from "./Terms&Conditions";
import { FOOTER_LINKS } from "../../constants";
import RegularList from "./RegularList";
import { useState } from "react";
import IconWrapper from "./IconWrapper";

const Footer = () => {
  const [media] = useState(
    matchMedia("(max-width: 500px)").matches ? "small" : "big"
  );
  return (
    <footer className="py-8 bg-forest_green-700 padded">
      <div className="items-start justify-between space-y-6 md:flex md:space-y-0">
        <Logo containerStyle="text-white" />

        {FOOTER_LINKS.map((item) => {
          return (
            (item.media === media || !item.media) && (
              <div key={item.label}>
                <RegularList
                  data={item.data}
                  listEmpty={() => null}
                  listHeader={() => (
                    <p className="font-medium text-forest_green-50">
                      {item.label}
                    </p>
                  )}
                  renderComponent={(data) => {
                    return (
                      <>
                        {data.map((item) =>
                          item.title ? (
                            <p className="text-xs text-forest_green-100 md:text-base md:font-medium">
                              {item.title}
                            </p>
                          ) : (
                            <IconWrapper
                              containerStyle="p-3 rounded-full size-10 bg-forest_green-900"
                              icon={item.icon}
                            />
                          )
                        )}
                      </>
                    );
                  }}
                  dataContainerStyle={
                    item.listContainerStyle ?? "mt-4 space-y-4"
                  }
                />
              </div>
            )
          );
        })}
      </div>
      <TermsAndConditions />
    </footer>
  );
};

export default Footer;
