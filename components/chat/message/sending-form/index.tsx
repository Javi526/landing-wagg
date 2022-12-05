import Emoji from "../../../../assets/chat/emoji.svg";
import Attached from "../../../../assets/chat/attached.svg";
import Image from "next/image";

type Props = {
    setOpenFile: any
}

export default function SendingForm({ setOpenFile }: Props) {

    return (
        <div className={"SendingForm-container"}>
          <div className={"SendingForm-content"}>
           <div className={"SendingForm-textarea-container"}>
              <span
                  className={"SendingForm-textarea"}
                  placeholder={"Mensaje"}
                  role="textbox" contentEditable={true}
              ></span>
           </div>
           <div className={"SendingForm-content-send"}>
               <div className={"SendingForm-content-send-icon-container"}>
                   <div className={"SendingForm-content-send-icon-emoji"}>
                       <Image src={Emoji} width={18} height={18} alt={"Emoji"} />
                   </div>
                   <div className={"SendingForm-content-send-icon-Attached"} onClick={() => setOpenFile(true)}>
                       <Image src={Attached} width={18} height={18} alt={"Attached"} />
                   </div>
               </div>
               {/*<button className={"SendingForm-content-send-button"}>Enviar</button>*/}
           </div>
          </div>
        </div>
    )
}