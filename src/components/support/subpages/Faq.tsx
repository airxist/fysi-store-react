import GeneralLayout from "../../_layout/GeneralLayout";
import Btn from "../../common/Btn";
import RegularList from "../../common/RegularList";

const Faq = () => {
  return (
    <GeneralLayout>
      <section className="mt-6 mb-40 padded">
        <h2 className="text-2xl md:text-[2rem] text-center font-DMSansMedium md:text-start">
          Frequently Asked Questions
        </h2>

        <RegularList
          data={[]}
          dataContainerStyle="h-96"
          renderComponent={() => {}}
          listFooter={() => {
            return (
              <>
                <p className="text-xl font-DMSansRegular">
                  Didn't find the answer you were looking for? Contact our
                  support team, we're here to help!
                </p>

                <Btn text="Contact Support" containerStyle="font-DMSansSemiBold px-14 py-4 rounded-[8px] mt-4" />
              </>
            );
          }}
        />
      </section>
    </GeneralLayout>
  );
};

export default Faq;
