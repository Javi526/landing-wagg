import { NextPage } from "next";
import Header_LoggedIn from "../../components/header/logged-in";
import ImageVeterinary from "../../assets/my-account/image-veterinary.svg";
import Cloud from "../../assets/my-account/my-account-cloud.svg";
import Yellow from "../../assets/my-account/my-account-yellow.svg";
import Chat from "../../assets/my-account/my-account-chat.svg";
import Sum from "../../assets/my-account/sum.svg";
import Arrow from "../../assets/my-account/arrow.svg";
import Info from "../../assets/my-account/info.svg";
import Cross from "../../assets/my-account/cross.svg";
import Drop from "../../assets/my-account/drop.svg";
import Edit from "../../assets/my-account/edit.svg";
import Image from "next/image";
import Modal from "../../components/modal";
import { useState } from "react";
import InputPrincipal from "../../components/common/input/input-principal";
import ContentButtons from "../../components/common/content-buttons";
import Select from "../../components/common/selects";

const MyAccountVeterinary: NextPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalDrop, setShowModalDrop] = useState(false);
    const [text, setText] = useState("");
    const [showTab, setShowTab] = useState(false);

    return (
        <main>
            <Header_LoggedIn name={"Marina"} image={""} consultation={false} url={""} chat={false} />
            <div className={"MyAccountVeterinary-container"}>
                <div className={"MyPets-section"}>
                    <p className={"MyPets-section-p"}>Mi Cuenta</p>
                </div>
                <div className={"MyAccountVeterinary-content-container"}>
                  <div className={"MyAccountVeterinary-content-username"}>
                      <div className={"MyAccountVeterinary-content-user"}>
                          <div className={"MyAccountVeterinary-content-logo"}>
                              <Image src={ImageVeterinary} width={111} height={111} alt={"ImageVeterinary"} />
                              <p className={"MyAccountVeterinary-content-edit"}>Editar</p>
                          </div>
                          <div className={"MyAccountVeterinary-content-name-container"}>
                             <p className={"MyAccountVeterinary-content-name-p"}>Marina Rodriguez</p>
                              <p className={"MyAccountVeterinary-content-name-p2"}>marinarodriguez@gmail.com</p>
                          </div>
                      </div>
                      <div className={"MyAccountVeterinary-content-image"}>
                         <div className={"MyAccountVeterinary-content-image-yellow"} style={{ zIndex: `${showModal || showModalDrop ? "0" : "1"}` }}>
                             <Image src={Yellow} width={168} height={48} alt={"MyAccountVeterinary-Yellow"} />
                         </div>
                          <div className={"MyAccountVeterinary-content-image-cloud"}>
                              <Image src={Cloud} width={186} height={118} alt={"MyAccountVeterinary-cloud"} />
                          </div>
                      </div>
                  </div>
                  <div className={"MyAccountVeterinary-section-info"}>
                     <p className={"MyAccountVeterinary-section-info-name"}>Información</p>
                     <div className={"MyAccountVeterinary-section-info-data"}>
                        <div className={"MyAccountVeterinary-section-data"}>
                           <p className={"MyAccountVeterinary-section-p"}>Matrícula</p>
                           <p className={"MyAccountVeterinary-section-p2"}>12-345679010111213-14</p>
                        </div>
                         <div className={"MyAccountVeterinary-section-data"}>
                             <p className={"MyAccountVeterinary-section-p"}>Horario de atención</p>
                             <p className={"MyAccountVeterinary-section-p2"}>Lun-Vier 8:00hs a 14:00hs</p>
                         </div>
                     </div>
                  </div>
                    <p className={"MyAccountVeterinary-section-title"}>Recursos</p>
                    <div className={"MyAccountVeterinary-section-resource-container"}>
                       <div className={"MyAccountVeterinary-section-resource"}>
                          <div className={"MyAccountVeterinary-section-resource-description"}>
                            <Image src={Chat} width={22} height={22} alt={"MyAccountVeterinary-Chat"} />
                            <p className={"MyAccountVeterinary-section-resource-name"}>Hotkeys</p>
                          </div>
                           <div className={"MyAccountVeterinary-section-resource-button"} onClick={() => {
                               setShowModal(true);
                               setText("Nuevo");
                           }}>
                              <p className={"MyAccountVeterinary-section-resource-button-name"}>Nuevo</p>
                              <Image src={Sum} width={11} height={11} alt={"MyAccountVeterinary-sum"} />
                           </div>
                       </div>
                       <div className={"MyAccountVeterinary-section-line"} />
                       <div className={"MyAccountVeterinary-section-resource-tab"} onClick={() => setShowTab(!showTab)}>
                           <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                               <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Saludos</p>
                           </div>
                           <div className={"MyAccountVeterinary-section-resource-tab-arrow"} style={{ transform: `rotate(${showTab ? "180deg" : "0deg"})` }}>
                               <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                           </div>
                       </div>
                        <div className={"MyAccountVeterinary-section-line"} />
                        {showTab &&
                            <div className={"MyAccountVeterinary-section-content-tab"}>
                            <div className={"MyAccountVeterinary-section-content-tab-text"}>
                                <p className={"MyAccountVeterinary-section-content-tab-text-p"}>Hola! ¿En qué puedo
                                    ayudarte hoy?</p>
                            </div>
                            <div className={"MyAccountVeterinary-section-content-tab-drop"} onClick={() => setShowModalDrop(true)}>
                                <Image src={Drop} width={16} height={18} alt={"MyAccountVeterinary-Drop"}/>
                            </div>
                            <div className={"MyAccountVeterinary-section-content-tab-edit"} onClick={() => {
                                setShowModal(true);
                                setText("Editar");
                            }}>
                                <Image src={Edit} width={16} height={15} alt={"MyAccountVeterinary-Edit"}/>
                            </div>
                        </div>}
                        <div className={"MyAccountVeterinary-section-resource-tab"}>
                            <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                                <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Recomendaciones</p>
                            </div>
                            <div className={"MyAccountVeterinary-section-resource-tab-arrow"}>
                                <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                            </div>
                        </div>
                        <div className={"MyAccountVeterinary-section-line"} />
                        <div className={"MyAccountVeterinary-section-resource-tab"}>
                            <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                                <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Encuestas</p>
                            </div>
                            <div className={"MyAccountVeterinary-section-resource-tab-arrow"}>
                                <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                            </div>
                        </div>
                    </div>
                    <div className={"MyAccountVeterinary-section-resource-seconds-container"}>
                        <div className={"MyAccountVeterinary-section-resource-container"}>
                            <div className={"MyAccountVeterinary-section-resource"}>
                                <div className={"MyAccountVeterinary-section-resource-description"}>
                                    <Image src={Info} width={18} height={22} alt={"MyAccountVeterinary-Info"} />
                                    <p className={"MyAccountVeterinary-section-resource-name"}>Infografías</p>
                                </div>

                            </div>
                            <div className={"MyAccountVeterinary-section-line"} />
                            <div className={"MyAccountVeterinary-section-resource-tab"}>
                                <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                                    <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Guías</p>
                                </div>
                                <div className={"MyAccountVeterinary-section-resource-tab-arrow"}>
                                    <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                                </div>
                            </div>
                            <div className={"MyAccountVeterinary-section-line"} />
                            <div className={"MyAccountVeterinary-section-resource-tab"}>
                                <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                                    <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Tips</p>
                                </div>
                                <div className={"MyAccountVeterinary-section-resource-tab-arrow"}>
                                    <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                                </div>
                            </div>
                            <div className={"MyAccountVeterinary-section-line"} />
                            <div className={"MyAccountVeterinary-section-resource-tab"}>
                                <div className={"MyAccountVeterinary-section-resource-tab-name"}>
                                    <p className={"MyAccountVeterinary-section-resource-tab-name-p"}>Urgencia</p>
                                </div>
                                <div className={"MyAccountVeterinary-section-resource-tab-arrow"}>
                                    <Image src={Arrow} width={14} height={8} alt={"MyAccountVeterinary-Arrow"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal openModal={showModal}>
               <div className={"MyAccountVeterinary-section-modal"}>
                  <div className={"MyAccountVeterinary-section-head"}>
                     <p className={"MyAccountVeterinary-section-head-p"}>{text} Hotkey</p>
                     <div className={"MyAccountVeterinary-section-head-img"} onClick={() => setShowModal(false)}>
                        <Image src={Cross} width={14} height={15} alt={"MyAccountVeterinary-Cross"} />
                     </div>
                  </div>
                  <div className={"MyAccountVeterinary-section-form-container"}>
                     <InputPrincipal
                         width={"100%"}
                         height={40}
                         label={"Escribí un nuevo texto predeterminado"}
                         placeholder={"Texto"}
                         validAccount={false}
                     />
                      <Select
                          width={"100%"}
                          height={40}
                          label={"Seleccióna una categoría"}
                          placeholder={"Ninguna"}
                          select_data={[]}
                      />
                        <ContentButtons
                              width={"100%"}
                              height={40}
                              textConfirm={"Crear"}
                              textCancel={"Cancelar"}
                              question={false}
                              questionText={""}
                              questionLink={""}
                              url={""}
                              PurpleButton_url={""}
                              WhiteButton_url={""}
                              margin={"53px 0 0 0"}
                          />
                  </div>
               </div>
            </Modal>
            <Modal openModal={showModalDrop}>
                <div className={"MyAccountVeterinary-section-modal-drop"}>
                   <div className={"MyAccountVeterinary-section-modal-drop-text-container"}>
                       <p className={"MyAccountVeterinary-section-modal-drop-text"}>¿Quieres borras este hotkey? La <br />acción no se puede deshacer</p>
                   </div>
                   <div className={"MyAccountVeterinary-section-modal-drop-button-container"}>
                       <button className={"MyAccountVeterinary-section-modal-drop-button"}>Si, borrar</button>
                       <button className={"MyAccountVeterinary-section-modal-cancel-button"} onClick={() => setShowModalDrop(false)}>No, cancelar</button>
                   </div>
                </div>
            </Modal>
        </main>
    )
};

export default MyAccountVeterinary;