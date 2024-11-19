import { messages } from "../../../constants";
import RegularList from "../../common/RegularList";
import InboxItem from "../InboxItem";

const Inbox = () => {
  return (
    <div className="w-full bg-white md:flex-1">
      <RegularList
        listHeader={() => {
          return (
            <header className="hidden px-8 py-6 border-b md:block">
              <h2 className="head-title">Messages</h2>
            </header>
          );
        }}
        data={messages}
        renderComponent={(messages) => {
          return (
            <>
              {messages.map((message) => {
                return <InboxItem {...message} key={message.title} />;
              })}
            </>
          );
        }}
      />
    </div>
  );
};

export default Inbox;
