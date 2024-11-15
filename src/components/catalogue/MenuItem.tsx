import ChecklistSection from "../common/CheckListSection";

const MenuItem = () => {
  return (
    <div className="w-[22%] border-2 bg-white rounded-[8px] divide-y-2 hidden md:block">
      <ChecklistSection
        title="Delivery Option"
        inputs={[
          { label: "Pick-up", checked: false },
          { label: "Door-step Delivery", checked: false },
        ]}
        onChange={() => {}}
      />
      <ChecklistSection
        onChange={() => {}}
        title="Brand"
        inputs={[
          { label: "Fashion Front", checked: false },
          { label: "AWW", checked: false },
          { label: "Pick-up", checked: false },
          { label: "Luis Vuitton", checked: false },
          { label: "Zara", checked: false },
          { label: "Dolce & Gabbana", checked: false },
        ]}
      />
      <ChecklistSection
        title="Delivery Option"
        inputs={[
          { label: "Under 2000", checked: false },
          { label: "2000 - 5000", checked: false },
          { label: "5000 - 10000", checked: false },
          { label: "10000 - 20000", checked: false },
          { label: "Above 20000", checked: false },
        ]}
        onChange={() => {}}
      />
    </div>
  );
};

export default MenuItem;
