import TagReceive from "./tag-receive";
import TagTransmitter from "./tag-transmitter";
import MessageImage from "./image";
import imageCat from "../../../../assets/chat/cat.svg";
import Cross from "../../../../assets/chat/cross.svg";
import Cat from "../../../../assets/chat/image-cat.svg";
import Image from "next/image";
import Emoji from "../../../../assets/chat/emoji.svg";
import CatMini from "../../../../assets/chat/cat-min.svg";
import More from "../../../../assets/chat/more.svg";
import {useState} from "react";
import useDetectKeyboardOpen from "../../../../hooks/keyboard/detect";
//import Attached from "../../../../assets/chat/attached.svg";

type Props = {
    openFile: boolean,
    setOpenFile: any
}

export default function MessageContent({ openFile, setOpenFile } : Props) {
    const [text, setText] = useState("");
    //if (typeof window === "object" && window.innerWidth < 900) setShowMenu(true);
    const isKeyboardOpen = useDetectKeyboardOpen({ minKeyboardHeight: 300, defaultValue: false });
    return (
      <>
      {!openFile ?
       <div className={"Message-content"} id={"Message-content-id"}>
          <TagReceive firstName={"María"} lastName={"Fernández"} text={"Hola! En qué puedo ayudarte hoy?"} date={"12:26 pm"}/>
          <TagTransmitter text={"Hola, cómo estas? Greta está con vomitos"} date={"12:27 pm"}/>
          <TagReceive firstName={"María"} lastName={"Fernández"} text={"Contame más, desde cuándo está vomitando?"}  date={"12:27 pm"}/>
          <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
           <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
           <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/><TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
           <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
           <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
           <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
           <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
           <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
           <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
           <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
           <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
           <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
          <TagReceive firstName={"María"} lastName={"Fernández"} text={"Hola! En qué puedo ayudarte hoy?"} date={"12:26 pm"}/>
          <TagTransmitter text={"Hola, cómo estas? Greta está con vomitos"} date={"12:27 pm"}/>
          <MessageImage img={imageCat} date={"12:30 pm"} type={"transmitter"}/>
       </div> :
       <div className={"MessageContent-file-container"}>
          <div className={"MessageContent-file-notification"}>
             <div className={"MessageContent-file-cross"} onClick={() => setOpenFile(false)}>
                 <Image src={Cross} width={12} height={12} alt={"Cross"} />
             </div>
             <div className={"MessageContent-file-title-container"}>
                <p className={"MessageContent-file-title"}>foto-greta.jpg</p>
             </div>
          </div>
          <div className={"MessageContent-file-content-container"}>
            <div className={"MessageContent-file-image-container"}>
                <Image src={Cat} width={535} height={356} alt={"image-cat-big"} />
            </div>
           <div className={"SendingForm-content-file"}>
             <div className={"SendingForm-textarea-container"} style={{ width: "calc(100% - 19px)" }}>
              <span
                  className={"SendingForm-textarea"}
                  placeholder={"Mensaje"}
                  role="textbox" contentEditable={true}
                  onInput={((Event) => setText(`${Event.currentTarget.textContent}`))}
              ></span>
               </div>
               <div className={"SendingForm-content-send"}>
                   <div className={"SendingForm-content-send-icon-file-container"}>
                       <div className={"SendingForm-content-send-icon-emoji"} style={{ marginRight: 0 }}>
                           <Image src={Emoji} width={18} height={18} alt={"Emoji"} />
                       </div>
                   </div>
                   {/*<button className={"SendingForm-content-send-button"}>Enviar</button>*/}
               </div>
           </div>
          </div>
           {!isKeyboardOpen &&
               <div className={"SendingForm-content-more-file"}>
               <div className={"SendingForm-content-more-container"}>
                   <Image src={CatMini} width={56} height={56} alt={"SendingForm-CatMini"}/>
                   <div className={"SendingForm-content-more-image-container"}>
                       <Image src={More} width={14} height={14} alt={"SendingForm-more"}/>
                   </div>
                   <div className={"SendingForm-content-more-file-button-container"}>
                       <button className={"SendingForm-content-more-file-button"}>Enviar</button>
                   </div>
               </div>
           </div>}
      </div>
    }
    </>
    )
}