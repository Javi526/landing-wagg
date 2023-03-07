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
              textBox: window.document.getElementById("SendingForm-textarea-container-id"),
              textBoxSpan: window.document.getElementById("SendingForm-textarea-id"),
              submit: window.document.getElementById("SendingForm-container-id"),
          };
      }
    });


    const handleChangeStyleTextBox = () => {
        const TextBoxLine = "150px";
        const TextBoxSecondLine = "136px";
        const TextBoxThirdLine = "113px";
        if (window.screen.width < 768 && state && ElementID.submit.clientHeight !== null) {
            if (ElementID.submit.clientHeight === 94) {
                ElementID.message.style.height = TextBoxLine;
            } else if (ElementID.submit.clientHeight === 105) {
                ElementID.message.style.height = TextBoxSecondLine;
            } else if (ElementID.submit.clientHeight === 129) {
                ElementID.message.style.height = TextBoxThirdLine;
            }
        }
    };


useEffect(() => {
    if (typeof window === "object" && state) {
        const document : any = window;
        const listener = () => {
            const newState = window.screen.height - 300 > document.visualViewport.height;
            if (isKeyboardOpen != newState) {
                setIsKeyboardOpen(newState);
                handleChangeStyleTextBox();
                ElementID.submit.style.bottom = "auto";
                ElementID.header.addEventListener('touchmove', function(e : any) {e.preventDefault()}, false);
                ElementID.profesional.addEventListener('touchmove', function(e : any) {e.preventDefault()}, false);
                ElementID.submit.addEventListener('touchmove', function(e : any) {e.preventDefault()}, false);
                document.scroll(0,0);
            }
        };
        document.visualViewport.addEventListener('resize', listener);
        return () => {
            document.visualViewport.removeEventListener('resize', listener);
        };
    }
}, [state]);


    const handleChangeStyleTextBoxPress = (event: any) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            handleChangeStyleTextBox()
        }
    };

    const handleChangeKeyboardOpen = () => {
        if (window.screen.width < 768) {
            setState(true);
        }
    };

    const handleChangeKeyboardClose = () => {
        if (state) {
            setIsKeyboardOpen(false);
            ElementID.message.style = {};
            ElementID.submit.style.bottom = "0";
            ElementID.message.style.height = {};
            setState(false);
        }
    };

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
           <div className={"SendingForm-textarea-container"} id={"SendingForm-textarea-container-id"}>
              <span
                  className={"SendingForm-textarea"}
                  id={"SendingForm-textarea-id"}
                  placeholder={"Mensaje"}
                  onClick={() => handleChangeKeyboardOpen()}
                  onKeyDown={(event) => handleChangeStyleTextBoxPress(event)}
                  onInput={(event) => handleChangeStyleTextBox()}
                  onBlur={() => handleChangeKeyboardClose()}
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