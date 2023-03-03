import Emoji from "../../../../assets/chat/emoji.svg";
import Attached from "../../../../assets/chat/attached.svg";
import Image from "next/image";
import IconSend from "../../../../assets/chat/icon-send.svg";
import { handleChangeScroll } from "../../../../utils";
import {useEffect, useState} from "react";

type Props = {
    setOpenFile: any
}

export default function SendingForm({ setOpenFile }: Props) {
    const [state, setState] = useState(false);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [headerElementID] = useState<any>(() => {
      if (typeof window === "object") return window.document.getElementById("Header_LoggedIn-container-id");
    });

useEffect(() => {
    if (typeof window === "object" && state) {
        const document : any = window;
        const listener = () => {
            const heightSubmitForm : number =  97;
            const newState = window.screen.height - 300 > document.visualViewport.height;
            if (isKeyboardOpen != newState) {
                setIsKeyboardOpen(newState);
                headerElementID.style.position = "absolute";
                headerElementID.style.width = "100%";
                headerElementID.style.bottom = `${document.visualViewport.height - heightSubmitForm}px`;
                headerElementID.style.zIndex = 3;

                console.log("height", window.screen.height - document.visualViewport.height, window.screen.height, document.visualViewport.height)
            }
        };
        document.visualViewport.addEventListener('resize', listener);
        return () => {
            document.visualViewport.removeEventListener('resize', listener);
        };
    }
}, [state]);


    return (
        <div className={"SendingForm-container"} style={{ ...(isKeyboardOpen && { background: "red" }) }}>
            <div className={"SendingForm-content-send-icon-container"}>
                <div className={"SendingForm-content-send-icon-Attached"} onClick={() => setOpenFile(true)}>
                    <Image src={Attached} width={18} height={18} alt={"Attached"} />
                </div>
                <div className={"SendingForm-content-send-icon-emoji"}>
                    <Image src={Emoji} width={18} height={18} alt={"Emoji"} />
                </div>
            </div>
          <div className={"SendingForm-content"}>
           <div className={"SendingForm-textarea-container"}>
              <span
                  className={"SendingForm-textarea"}
                  placeholder={"Mensaje"}
                  onClick={() => {
                     if (window.screen.width < 768) {
                         setState(true);
                     }
                  }}
                  onBlur={() => {
                      if (state) {
                          setIsKeyboardOpen(false);
                          headerElementID.style = {};
                          setState(true);
                      }
                  }}
                  role="textbox" contentEditable={true}
              ></span>
           </div>
           <div className={"SendingForm-content-send"}>
               <div className={"SendingForm-content-send-icon-content-container"}>
                   <div className={"SendingForm-content-send-icon-emoji"}>
                       <Image src={Emoji} width={18} height={18} alt={"Emoji"} />
                   </div>
                   {/*<div className={"SendingForm-content-send-icon-Attached"} onClick={() => setOpenFile(true)}>
                       <Image src={Attached} width={18} height={18} alt={"Attached"}/>
                   </div>*/}
               </div>
               {/*<button className={"SendingForm-content-send-button"}>Enviar</button>*/}
           </div>
          </div>
            <div className={"SendingForm-send-action-container"} onClick={() => handleChangeScroll("Message-content-id")}>
                <p className={"SendingForm-send-action-p"}>Enviar</p>
                <div className={"SendingForm-send-responsive-container"}>
                    <Image className={"SendingForm-send-responsive"} src={IconSend} width={30} height={30} alt={"IconSend"} />
                </div>
            </div>
        </div>
    )
}