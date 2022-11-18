import MessageContent from "./content";
import SendingForm from "./sending-form";

export default function Message() {
    return (
        <div className={"Message-container"}>
          <MessageContent />
          <SendingForm />
        </div>
    )
}