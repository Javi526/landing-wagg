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
    const [ElementID] = useState<any>(() => {
      if (typeof window === "object") {
          return {
              header: window.document.getElementById("Header_LoggedIn-container-id"),
              profesional: window.document.getElementById("SectionVideoAndFinishChat-container-id"),
              message: window.document.getElementById("Message-content-id"),
              submit: window.document.getElementById("SendingForm-container-id"),
          };
      }
    });


useEffect(() => {
    if (typeof window === "object" && state) {
        const document : any = window;
        const listener = () => {
            const newState = window.screen.height - 300 > document.visualViewport.height;
            if (isKeyboardOpen != newState) {
                setIsKeyboardOpen(newState);
                /* Header */
               /* ElementID.header.style.position = "fixed";
                ElementID.header.style.width = "100%";
                ElementID.header.style.bottom = `${document.visualViewport.height - heightHeader}px`;
                ElementID.header.style.zIndex = 3;
                /* Section Video And FinishChat
                ElementID.profesional.style.position = "fixed";
                ElementID.profesional.style.width = "100%";
                ElementID.profesional.style.bottom = `${document.visualViewport.height - positionSectionVideoAndFinishChat}px`;
                console.log("height", window.screen.height - document.visualViewport.height, window.screen.height, document.visualViewport.height)*/
                /* Message  */
                ElementID.message.style.height = "150px";
                ElementID.submit.style.bottom = "auto";
                document.scroll(0,0);
                ElementID.header.addEventListener('touchmove', function(e : any) {e.preventDefault()}, false);
                ElementID.profesional.addEventListener('touchmove', function(e : any) {e.preventDefault()}, false);
                ElementID.submit.addEventListener('touchmove', function(e : any) {e.preventDefault()}, false);
             //   document.classList.add("stop-scrolling");
            }
        };
        document.visualViewport.addEventListener('resize', listener);
        return () => {
            document.visualViewport.removeEventListener('resize', listener);
        };
    }
}, [state]);




    return (
        <div className={"SendingForm-container"} id={"SendingForm-container-id"}>
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
                          ElementID.message.style = {};
                          ElementID.submit.style.bottom = "0";
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