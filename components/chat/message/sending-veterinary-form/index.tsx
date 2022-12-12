import Emoji from "../../../../assets/chat/emoji.svg";
import Attached from "../../../../assets/chat/attached.svg";
import Image from "next/image";
import IconSend from "../../../../assets/chat/icon-send.svg";


type Props = {
    setOpenFile: any,
    showMessage: boolean
}

export default function SendingVeterinaryForm({ setOpenFile, showMessage }: Props) {

    return (
        <div className={"SendingForm-veterinary-container"} style={{ ...(showMessage && { width: "100%" }) }}>
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
                  role="textbox" contentEditable={true}
              ></span>
                </div>
                <div className={"SendingForm-content-send"}>
                    <div className={"SendingForm-content-send-icon-content-container"}>
                        <div className={"SendingForm-content-send-icon-emoji-content"}>
                            <Image src={Emoji} width={18} height={18} alt={"Emoji"} />
                        </div>
                        {/*<div className={"SendingForm-content-send-icon-Attached"} onClick={() => setOpenFile(true)}>
                            <Image src={Attached} width={18} height={18} alt={"Attached"}/>
                        </div>*/}
                    </div>
                    {/*<button className={"SendingForm-content-send-button"}>Enviar</button>*/}
                </div>
            </div>
            <div className={"SendingForm-send-action-container"}>
              <p className={"SendingForm-send-action-p"}>Enviar</p>
              <div className={"SendingForm-send-responsive-container"}>
                  <Image className={"SendingForm-send-responsive"} src={IconSend} width={30} height={30} alt={"IconSend"} />
              </div>
            </div>
        </div>
    )
}