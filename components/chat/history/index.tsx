import Image from "next/image";
import ChatArrow from "../../../assets/chat/chat-arrow.svg";
import TagReceive from "../message/content/tag-receive";
import TagTransmitter from "../message/content/tag-transmitter";
import MessageImage from "../message/content/image";
import imageCat from "../../../assets/chat/cat.svg";

type Props = {
    setShowModal: any,
    setOpenHistoryResponsive: any,
    setShowModalMessage: any,
    setOpenMessage: any,
    openMessage: boolean
}

export default function ChatHistory({ setShowModal, setOpenHistoryResponsive, setShowModalMessage, setOpenMessage, openMessage } : Props) {
    //if (typeof window === "object" && window.innerWidth < 1164)
    return (
        <div className={"ChatHistory-container"}>
            {!openMessage ?
                <>
                <div className={"VeterinaryTab-modal-title-container"}>
                    <div className={"VeterinaryTab-modal-title-and-arrow"}>
                        <div className={"VeterinaryTab-modal-arrow"} style={{marginRight: 14}} onClick={() => {
                            setOpenHistoryResponsive(false);
                        }}>
                            <Image src={ChatArrow} width={16} height={16} alt={"ChatArrow"}/>
                        </div>
                        <p className={"VeterinaryTab-modal-title"}>Últimas consultas</p>
                    </div>
                </div>
                <div className={"ChatHistory-list-title-container"}>
                    <p className={"ChatHistory-list-title-p"}>Fecha</p>
                    <p className={"ChatHistory-list-title-p"}>Motivo consulta</p>
                    <p className={"ChatHistory-list-title-p"}>Archivos adjuntos</p>
                </div>
                <div className={"ChatHistory-list-item-container"}>
                    <div className={"ChatHistory-list-item"} onClick={() =>  setOpenMessage(true)}>
                        <p className={"ChatHistory-list-item-p"}>08/11</p>
                        <p className={"ChatHistory-list-item-p"}>General</p>
                        <p className={"ChatHistory-list-item-p"}>2 archivo</p>
                    </div>
                    <div className={"ChatHistory-list-item"} onClick={() =>  setOpenMessage(true)}>
                        <p className={"ChatHistory-list-item-p"}>07/11</p>
                        <p className={"ChatHistory-list-item-p"}>Emergencia</p>
                        <p className={"ChatHistory-list-item-p"}>1 archivo</p>
                    </div>
                    <div className={"ChatHistory-list-item"} onClick={() =>  setOpenMessage(true)}>
                        <p className={"ChatHistory-list-item-p"}>08/11</p>
                        <p className={"ChatHistory-list-item-p"}>General</p>
                        <p className={"ChatHistory-list-item-p"}>2 archivo</p>
                    </div>
                    <div className={"ChatHistory-list-item"} onClick={() =>  setOpenMessage(true)}>
                        <p className={"ChatHistory-list-item-p"}>07/11</p>
                        <p className={"ChatHistory-list-item-p"}>Emergencia</p>
                        <p className={"ChatHistory-list-item-p"}>1 archivo</p>
                    </div>
                </div>
                </> :
                <>
                <div className={"VeterinaryTab-modal-title-container"}>
                   <div className={"VeterinaryTab-modal-title-and-arrow"}>
                      <div className={"VeterinaryTab-modal-arrow"} style={{marginRight: 14}} onClick={() =>  setOpenMessage(false)}>
                           <Image src={ChatArrow} width={16} height={16} alt={"ChatArrow"}/>
                      </div>
                       <p className={"VeterinaryTab-modal-title"}>Últimas consultas</p>
                  </div>
                </div>
                <div className={"VeterinaryTab-modal-content-message"}>
                 <div className={"VeterinaryTab-modal-subtitle-container"}>
                   <p className={"VeterinaryTab-modal-subtitle"}>Consulta: 08/11/2022</p>
                </div>
               <div className={"VeterinaryTab-modal-message-content"} style={{width: "100%"}}>
                <div className={"VeterinaryTab-Message-content"}>
                   <TagReceive firstName={"María"} lastName={"Fernández"} text={"Hola! En qué puedo ayudarte hoy?"} date={"12:26 pm"}/>
                   <TagTransmitter text={"Hola, cómo estas? Greta está con vomitos"} date={"12:27 pm"}/>
                   <TagReceive firstName={"María"} lastName={"Fernández"} text={"Contame más, desde cuándo está vomitando?"}  date={"12:27 pm"}/>
                   <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"}/>
                   <TagReceive firstName={"María"} lastName={"Fernández"} text={"Hola! En qué puedo ayudarte hoy?"} date={"12:26 pm"}/>
                   <TagTransmitter text={"Hola, cómo estas? Greta está con vomitos"} date={"12:27 pm"}/>
                   <MessageImage img={imageCat} date={"12:30 pm"} type={"transmitter"}/>
                </div>
              </div>
            </div>
            </>}
        </div>
    )
}