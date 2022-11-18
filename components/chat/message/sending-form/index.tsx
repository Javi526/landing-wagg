import Emoji from "../../../../assets/chat/emoji.svg";
import Attached from "../../../../assets/chat/attached.svg";
import Image from "next/image";

export default function SendingForm() {
    return (
        <div className={"SendingForm-container"}>
          <div className={"SendingForm-content"}>
           <div className={"SendingForm-textarea-container"}>
              <textarea
                  className={"SendingForm-textarea"}
                  placeholder={"Mensaje"}
              />
           </div>
           <div className={"SendingForm-content-send"}>
               <div className={"SendingForm-content-send-icon-container"}>
                   <div className={"SendingForm-content-send-icon"}>
                       <Image src={Emoji} width={18} height={18} alt={"Emoji"} />
                   </div>
                   <div className={"SendingForm-content-send-icon"}>
                       <Image src={Attached} width={18} height={18} alt={"Attached"} />
                   </div>
               </div>
               <button className={"SendingForm-content-send-button"}>Enviar</button>
           </div>
          </div>
        </div>
    )
}