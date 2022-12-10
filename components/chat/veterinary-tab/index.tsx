import Image1_cat from "../../../assets/my-pets/image1-cat.svg";
import ChatArrow from "../../../assets/chat/chat-arrow.svg";
import Eye from "../../../assets/chat/eye.svg";
import Image from "next/image";
import {useState} from "react";
import Glass from "../../../assets/chat/glass.svg";
import Arrow from "../../../assets/my-account/arrow.svg";
import Modal from "../../modal";
import { My_Pets_list_Title, VeterinaryTab_list} from "../../../constants/my-pets";
import {My_Pets_Info_List_Interface, My_Pets_Info_List_Title_Interface} from "../../../interface/my-pets";
import Download from "../../../assets/my-pets/download.svg";
import Cross from "../../../assets/chat/cross.svg";
import TagReceive from "../message/content/tag-receive";
import TagTransmitter from "../message/content/tag-transmitter";
import MessageImage from "../message/content/image";
import imageCat from "../../../assets/chat/cat.svg";

type Props = {
    showMenu: boolean,
    setShowMenu: any
}

export default function VeterinaryTab({ showMenu, setShowMenu } : Props) {
    const [tab, setTab] = useState("details");
    const [showModal, setShowModal] = useState(false);
    const [showModalMessage, setShowModalMessage] = useState(false);

    const handleChangeClassNameTab = (value : string) : string => {
        if (tab === value) return "VeterinaryTab-tab-content-active";
        return "VeterinaryTab-tab-content";
    };

    return (
        <>
        <div className={`${showMenu ? "DetailsConsultation-responsive-container" : "Veterinary-DetailsConsultation-container"}`}>
            <div className={"DetailsConsultation-content"}>
                <div className={"DetailsConsultation-arrow"} onClick={() => setShowMenu(false)}>
                    <Image src={ChatArrow} width={16} height={16} alt={"ChatArrow"} />
                </div>
                <div className={"DetailsConsultation-tab-container"}>
                    <div className={handleChangeClassNameTab("details")} style={{ marginRight: 8 }} onClick={() => setTab("details")}>
                        <p className={"DetailsConsultation-tab-content-p"}>Detalles</p>
                    </div>
                    <div className={handleChangeClassNameTab("infographic")} style={{ marginRight: 8 }} onClick={() => setTab("infographic")}>
                        <p className={"DetailsConsultation-tab-content-p"}>Infografías</p>
                    </div>
                    <div className={handleChangeClassNameTab("Hotkeys")} onClick={() => setTab("Hotkeys")}>
                        <p className={"DetailsConsultation-tab-content-p"}>Hotkeys</p>
                    </div>
                </div>
                <div className={"VeterinaryTab-tab-line"} />
                <div className={"DetailsConsultation-content-title-container"}>
                    <p className={"DetailsConsultation-content-title"}>Detalles de la consulta</p>
                </div>
                {tab === "details" &&
                    <div className={"DetailsConsultation-reason-consultation-container"}>
                        <div className={"VeterinaryTab-client-container"}>
                            <p className={"VeterinaryTab-client-p"}>Cliente: Mercado Libre</p>
                        </div>
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
                                            años, hembra, castrada<br/>
                                            5-6kg, mediano
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={"DetailsConsultation-checked-container"}>
                                <input className={""} type={"checkbox"}/>
                                <p className={"DetailsConsultation-checked-p"}>Seguro Emergencia</p>
                            </div>
                            <div className={"VeterinaryTab-button-history-container"}>
                                <div className={"VeterinaryTab-button-history"} onClick={() => setShowModal(true)}>
                                    <Image src={Eye} width={16} height={11} alt={"VeterinaryTab-Eye"} />
                                    <p className={"VeterinaryTab-button-history-p"}>Ver historial del chat</p>
                                </div>
                            </div>
                        </div>
                    </div>}
                {tab === "infographic" &&
                   <>
                       <div className={"ChatContact-search-container"} style={{ padding: 0, margin: "14px 0" }}>
                           <div className={"ChatContact-image-glass"}>
                               <Image src={Glass} width={16} height={16} alt={"ChatContact-glass"} />
                           </div>
                           <input className={"ChatContact-search"} placeholder={"Buscar"} />
                       </div>
                       <div className={"VeterinaryTab-tab-item-container"}>
                         <div className={"VeterinaryTab-tab-item"}>
                             <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                                 <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Urgencia</p>
                             </div>
                             <div className={"MyAccountVeterinary-section-resource-tab-arrow"} >
                                 <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                             </div>
                         </div>
                           <div className={"VeterinaryTab-tab-item"}>
                               <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                                   <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Guía</p>
                               </div>
                               <div className={"MyAccountVeterinary-section-resource-tab-arrow"} >
                                   <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                               </div>
                           </div>
                           <div className={"VeterinaryTab-tab-item"}>
                               <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                                   <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Tips</p>
                               </div>
                               <div className={"MyAccountVeterinary-section-resource-tab-arrow"} >
                                   <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                               </div>
                           </div>
                       </div>
                   </>
                }
                {tab === "Hotkeys" &&
                    <>
                        <div className={"ChatContact-search-container"} style={{ padding: 0, margin: "14px 0" }}>
                            <div className={"ChatContact-image-glass"}>
                                <Image src={Glass} width={16} height={16} alt={"ChatContact-glass"} />
                            </div>
                            <input className={"ChatContact-search"} placeholder={"Buscar"} />
                        </div>
                        <div className={"VeterinaryTab-tab-item-container"}>
                            <div className={"VeterinaryTab-tab-item"}>
                                <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                                    <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Saludos</p>
                                </div>
                                <div className={"MyAccountVeterinary-section-resource-tab-arrow"} >
                                    <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                                </div>
                            </div>
                            <div className={"VeterinaryTab-tab-item"}>
                                <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                                    <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Mensajes</p>
                                </div>
                                <div className={"MyAccountVeterinary-section-resource-tab-arrow"} >
                                    <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                                </div>
                            </div>
                            <div className={"VeterinaryTab-tab-item"}>
                                <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                                    <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Recomendaciones</p>
                                </div>
                                <div className={"MyAccountVeterinary-section-resource-tab-arrow"} >
                                    <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                                </div>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
         <Modal openModal={showModal}>
             <div className={"VeterinaryTab-modal"}>
                 {!showModalMessage ?
                     <>
                     <div className={"VeterinaryTab-modal-title-container"}>
                         <p className={"VeterinaryTab-modal-title"}>Últimas consultas</p>
                         <div className={"VeterinaryTab-modal-close"} onClick={() => setShowModal(false)}>
                             <Image src={Cross} width={12} height={12} alt={"Cross"}/>
                         </div>
                     </div>
                     <div className={"VeterinaryTab-info-list-container"}>
                         {My_Pets_list_Title.map((data: My_Pets_Info_List_Title_Interface) => (
                             <div className={"MyPets-content-info-list"} key={data.id}>
                                 <p className={"MyPets-content-info-item-p1"}>{data.title}</p>
                             </div>
                         ))}
                     </div>
                     <div className={"VeterinaryTab-list-container"}>
                         {VeterinaryTab_list.map((data: My_Pets_Info_List_Interface) => (
                             <div className={"VeterinaryTab-list-content-container"} key={data.id}>
                                 <p className={"MyPets-content-info-item-p2"}>{data.date}</p>
                                 <p className={"MyPets-content-info-item-p2"}>{data.reason}</p>
                                 <p className={`${data.opacity ? "MyPets-content-info-list-p2-opacity" : "MyPets-content-info-item-p2"}`}>{data.attached}</p>
                                 {!data.opacity ?
                                     <Image src={Download} width={18} height={18} alt={"MyPets_download"}/> : <div/>}
                                 <div className={"VeterinaryTab-view-chat"} onClick={() => setShowModalMessage(true)}>
                                     <p className={"VeterinaryTab-view-button-chat"}>Ver Chat</p>
                                 </div>
                             </div>
                         ))}
                     </div>
                     </> :
                    <>
                    <div className={"VeterinaryTab-modal-title-container"}>
                        <div className={"VeterinaryTab-modal-title-and-arrow"}>
                        <div className={"VeterinaryTab-modal-arrow"} onClick={() => setShowModalMessage(false)}>
                            <Image src={ChatArrow} width={16} height={16} alt={"ChatArrow"} />
                        </div>
                            <p className={"VeterinaryTab-modal-title"}>Últimas consultas</p>
                        </div>
                       <div className={"VeterinaryTab-modal-close"} onClick={() => {
                           setShowModal(false);
                           setShowModalMessage(false);
                       }}>
                       <Image src={Cross} width={12} height={12} alt={"Cross"} />
                      </div>
                     </div>
                     <div className={"VeterinaryTab-modal-content-message"}>
                      <div className={"VeterinaryTab-modal-subtitle-container"}>
                        <p className={"VeterinaryTab-modal-subtitle"}>Consulta: 08/11/2022</p>
                      </div>
                      <div className={"VeterinaryTab-modal-message-content"}>
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
         </Modal>
        </>
    )
}