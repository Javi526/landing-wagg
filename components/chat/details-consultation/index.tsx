import Image1_cat from "../../../assets/my-pets/image1-cat.svg";
import ChatDownload from "../../../assets/chat/chat-download.svg";
import ChatArrow from "../../../assets/chat/chat-arrow.svg";
import Image from "next/image";
import {useState} from "react";

type Props = {
    showMenu: boolean,
    setShowMenu: any
}

export default function DetailsConsultation({ showMenu, setShowMenu } : Props) {
    const [tab, setTab] = useState("details");

    const handleChangeClassNameTab = (value : string) : string => {
          if (tab === value) return "DetailsConsultation-tab-content-active";
          return "DetailsConsultation-tab-content";
    };
    return (
        <div className={`${showMenu ? "DetailsConsultation-responsive-container" : "DetailsConsultation-container"}`}>
          <div className={"DetailsConsultation-content"}>
             <div className={"DetailsConsultation-arrow"} onClick={() => setShowMenu(false)}>
                 <Image src={ChatArrow} width={16} height={16} alt={"ChatArrow"} />
             </div>
             <div className={"DetailsConsultation-tab-container"}>
                 <div className={handleChangeClassNameTab("details")} onClick={() => setTab("details")}>
                   <p className={"DetailsConsultation-tab-content-p"}>Detalles</p>
                 </div>
                 <div className={handleChangeClassNameTab("document")} onClick={() => setTab("document")}>
                   <p className={"DetailsConsultation-tab-content-p"}>Documentos</p>
                 </div>
             </div>
              <div className={"DetailsConsultation-tab-line"} />
             <div className={"DetailsConsultation-content-title-container"}>
               <p className={"DetailsConsultation-content-title"}>Detalles de la consulta</p>
             </div>
             {tab === "details" &&
              <div className={"DetailsConsultation-reason-consultation-container"}>
                  <div className={"DetailsConsultation-reason-text"}>
                      <p className={"DetailsConsultation-reason-text-p"}>Motivo de Consulta</p>
                      <p className={"DetailsConsultation-reason-text-p2"}>Consulta general</p>
                  </div>
                  <div className={"DetailsConsultation-reason-pet"}>
                      <div className={"DetailsConsultation-reason-pet-details"}>
                          <p className={"DetailsConsultation-reason-text-p"}>Mascota</p>
                          <div className={"DetailsConsultation-reason-pet-container"}>
                              <Image src={Image1_cat} width={50} height={50} alt={"chat-Image1_cat"}/>
                              <div className={"DetailsConsultation-reason-container"}>
                                  <p className={"DetailsConsultation-reason-text-p2"}>Greta</p>
                                  <p className={"DetailsConsultation-reason-text-p3"}>Gato, sin raza definida,<br/> 4
                                      años, hembra, castrada</p>
                              </div>
                          </div>
                      </div>
                      <div className={"DetailsConsultation-checked-container"}>
                          <input className={""} type={"checkbox"}/>
                          <p className={"DetailsConsultation-checked-p"}>Fondo de Emergencia</p>
                      </div>
                  </div>
              </div>}
              {tab === "document" &&
               <div className={"DetailsConsultation-reason-pet-documents"}>
                  <p className={"DetailsConsultation-reason-text-p4"}>Documentos</p>
                  <div className={"DetailsConsultation-reason-pet-item"}>
                      <p className={"DetailsConsultation-reason-pet-item-p"}>Instrucciones_pipeta-pdf</p>
                      <Image src={ChatDownload} width={18} height={18} alt={"ChatDownload"}/>
                  </div>
                  <div className={"DetailsConsultation-reason-pet-item"}>
                      <p className={"DetailsConsultation-reason-pet-item-p"}>Instrucciones_pipeta-pdf</p>
                      <Image src={ChatDownload} width={18} height={18} alt={"ChatDownload"}/>
                  </div>
                  <div className={"DetailsConsultation-reason-pet-button-container"}>
                      <button className={"DetailsConsultation-reason-pet-button"}>Descargar todos</button>
                      <button className={"DetailsConsultation-reason-pet-button-chat"}>Terminar chat</button>
                  </div>
              </div>}
          </div>
        </div>
    )
}