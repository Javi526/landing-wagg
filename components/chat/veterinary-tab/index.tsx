import Image1_cat from "../../../assets/my-pets/image1-cat.svg";
import ChatDownload from "../../../assets/chat/chat-download.svg";
import ChatArrow from "../../../assets/chat/chat-arrow.svg";
import Eye from "../../../assets/chat/eye.svg";
import Image from "next/image";
import {useState} from "react";
import Glass from "../../../assets/chat/glass.svg";
import Arrow from "../../../assets/my-account/arrow.svg";

type Props = {
    showMenu: boolean,
    setShowMenu: any
}

export default function VeterinaryTab({ showMenu, setShowMenu } : Props) {
    const [tab, setTab] = useState("details");

    const handleChangeClassNameTab = (value : string) : string => {
        if (tab === value) return "VeterinaryTab-tab-content-active";
        return "VeterinaryTab-tab-content";
    };
    return (
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
                                <div className={"VeterinaryTab-button-history"}>
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
    )
}