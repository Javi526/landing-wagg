import Header_LoggedIn from "../../components/header/logged-in";
import MypPets_circle_yellow from "../../assets/my-pets/mypPets-circle-yellow.svg";
import Woman_and_dog from "../../assets/my-pets/Woman_and_dog.svg";
import Active from "../../assets/my-pets/active.svg";
import Heart from "../../assets/my-pets/heart.svg";
import Pen from "../../assets/my-pets/pen.svg";
import Image from "next/image";
import { My_Pets_Info, My_Pets_list_Title, My_Pets_list, My_Pets_Card } from "../../constants/my-pets";
import { My_Pets_Info_Interface, My_Pets_Info_List_Title_Interface, My_Pets_Info_List_Interface, My_Pets_Card_Interface } from "../../interface/my-pets";
import Insured_Pet from "../../assets/my-pets/insured-pet.svg";
import Arrow from "../../assets/my-pets/my-pets-arrow.svg";
import Arrow_responsive from "../../assets/my-pets/my-pets-arrow-responsive.svg";
import Download from "../../assets/my-pets/download.svg";
import { useState } from "react";
import {useRouter} from "next/router";
import {ROUTER} from "../../constants/router";

export default function MyPets() {
    const [showList, setShowList] = useState(false);
    const [showSelectPet, setShowSelectPet] = useState<number>(0);
    const [showCard, setShowCard] = useState(1);

    const history = useRouter();

    const handleChangeShowCard = (num: number) : string => showCard !== num ? "not-visible-card" : "";
    const handleChangeCarrouselSelected = (num: number) : string => showCard === num ? "show-points-item-selected" : "show-points-item";

    const handleChangeSelectPet = (id: number) : void => {
        if (id === showSelectPet) {
            setShowSelectPet(0);
        } else {
            setShowSelectPet(id);
        }
    };

    return (
        <main>
            <Header_LoggedIn name={"Paulina"} image={""} consultation={true} url={""} />
            <div className={"MyPets-section"}>
                <p className={"MyPets-section-p"}>Mis mascotas</p>
            </div>
            <div className={"MyPets-container"}>
               <div className={"MyPets-content-container"}>
                   <div className={"MyPets-content-name"}>
                       <p className={"MyPets-content-title"}>Hola, Paulina!</p>
                       <div className={"MypPets_circle_yellow"}>
                           <Image src={MypPets_circle_yellow} width={168} height={48} alt={"MypPets_circle_yellow"} />
                       </div>
                   </div>
                   <div className={"MyPets-ImageWoman_and_dog"}>
                       <Image src={Woman_and_dog} width={174} height={147} alt={"Woman_and_dog"} />
                   </div>
               </div>
               <div className={"MyPets-line"} />
                <div className={"MyPets-box-consultation"}>
                   <div className={"MyPets-box-consultation-content"}>
                      <div className={"MyPets-box-consultation-content-text-container"}>
                          <p className={"MyPets-box-consultation-content-text"}>Cómo podemos ayudar a tu mascota hoy?</p>
                      </div>
                       <div className={"MyPets-box-consultation-content-button-container"}>
                           <div className={"MyPets-box-consultation-content-button"}>Consultá ahora</div>
                       </div>
                   </div>
                </div>
                <div className={"MyPets-box-items-container"}>
                    <div className={`MyPets-box-items ${handleChangeShowCard(1)}`}>
                        <div className={"MyPets-box-items-content-text-container"}>
                            <div className={"MyPets-box-items-content-text"}>
                               <p className={"MyPets-box-items-content-p"}>Última consulta</p>
                               <p className={"MyPets-box-items-content-p2"}>Greta - Consulta general</p>
                            </div>
                            <p className={"MyPets-box-items-content-text-p"}>Reiniciar chat</p>
                        </div>
                        <div className={"MyPets-box-image-active"}>
                            <Image src={Active} width={70} height={28} alt={"img-active"} />
                        </div>
                    </div>
                    <div className={`MyPets-box-items ${handleChangeShowCard(2)}`}>
                        <div className={"MyPets-box-items-content-text-container"}>
                            <div className={"MyPets-box-items-content-text"}>
                                <p className={"MyPets-box-items-content-p"}>Contratá nuestro seguro Wagg</p>
                            </div>
                            <p className={"MyPets-box-items-content-text-p"}>Más información</p>
                        </div>
                        <div className={"MyPets-box-image-Heart"}>
                            <Image src={Heart} width={67} height={66} alt={"img-Heart"} />
                        </div>
                    </div>
                </div>
                <div className={"show-points-carrousel"}>
                    <div className={"show-points-item-container"}>
                        <div className={`${handleChangeCarrouselSelected(1)}`} onClick={() => setShowCard(1)} />
                        <div className={`${handleChangeCarrouselSelected(2)}`} onClick={() => setShowCard(2)} />
                    </div>
                </div>
                <div className={"MyPets-title-container"}>
                    <p className={"MyPets-title"}>Mis Mascotas</p>
                </div>
                <div className={"MyPets-content-items-container"}>
                    {My_Pets_Card.map((data: My_Pets_Card_Interface) => (
                        <div key={data.id}>
                        <div className={`${showSelectPet === data.id ? "MyPets-content-items-select" : "MyPets-content-items-no-select"}`} onClick={() => handleChangeSelectPet(data.id)}>
                            <div className={"MyPets-content-responsive-container"}>
                                <div className={"MyPets-content-responsive-image-and-title"}>
                                    <Image src={data.img} width={36} height={36} alt={data.alt} />
                                    <p className={"MyPets-content-items-title"}>{data.title}</p>
                                </div>
                                <div className={"MyPets-content-responsive-arrow"}>
                                    <div className={`${showSelectPet === data.id ? "FaqsContent-items-img-invested MyPets-content-responsive-container" : ""}`}>
                                        <Image src={Arrow_responsive} width={12} height={8} alt={"Arrow_responsive"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                            {showSelectPet === data.id &&
                                <div className={"MyPets-content-info-responsive-container"}>
                                <div className={"MyPets-content-info-responsive-content"}>
                                    <div className={"MyPets-content-info-title-and-button-container"}>
                                        <p className={"MyPets-content-info-title"}>Información</p>
                                        <div className={"MyPets-content-info-button"}>
                                            <p className={"MyPets-content-info-button-p"}>Editar</p>
                                            <Image src={Pen} width={15} height={14} alt={"pen"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"MyPets-content-info-item-container"}>
                                    {My_Pets_Info.map((data: My_Pets_Info_Interface) => (
                                        <div className={"MyPets-content-info-item"} key={data.id}>
                                            <p className={"MyPets-content-info-item-p1"}>{data.title}</p>
                                            <p className={"MyPets-content-info-item-p2"}>{data.description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className={"MyPets-content-image-status"}>
                                    <Image src={Insured_Pet} width={154} height={28} alt={"Insured_Pet"}/>
                                </div>
                                <div className={"MyPets-content-button-responsive"} onClick={() => history.push(ROUTER.LastConsultation)}>Últimas Consultas</div>
                            </div>}
                        </div>
                    ))}
                </div>
                <div className={"MyPets-content-info-container"}>
                   <div className={"MyPets-content-info-title-and-button-container"}>
                      <p className={"MyPets-content-info-title"}>Información</p>
                      <div className={"MyPets-content-info-button"}>
                          <p className={"MyPets-content-info-button-p"}>Editar</p>
                          <Image src={Pen} width={15} height={14} alt={"pen"} />
                      </div>
                   </div>
                   <div className={"MyPets-content-info-item-container"}>
                       {My_Pets_Info.map((data: My_Pets_Info_Interface) => (
                           <div className={"MyPets-content-info-item"} key={data.id}>
                               <p className={"MyPets-content-info-item-p1"}>{data.title}</p>
                               <p className={"MyPets-content-info-item-p2"}>{data.description}</p>
                           </div>
                       ))}
                   </div>
                   <div className={"MyPets-content-image-status"}>
                       <Image src={Insured_Pet} width={154} height={28} alt={"Insured_Pet"} />
                   </div>
                   <div className={"MyPets-content-line"} />
                   <div className={"MyPets-content-tab-container"} style={{ margin: "0 0 23px 0" }} onClick={() => setShowList(!showList)}>
                       <p className={"MyPets-content-info-title"}>Últimas consultas</p>
                       <Image src={Arrow} width={14} height={9} alt={"my-pets-arrow"} />
                   </div>
                    {showList &&
                        <>
                        <div className={"MyPets-content-info-list-container"}>
                            {My_Pets_list_Title.map((data: My_Pets_Info_List_Title_Interface) => (
                                <div className={"MyPets-content-info-list"} key={data.id}>
                                    <p className={"MyPets-content-info-item-p1"}>{data.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className={"MyPets-content-list-container"}>
                            {My_Pets_list.map((data: My_Pets_Info_List_Interface) => (
                                <div className={"MyPets-content-list-content-container"} key={data.id}>
                                    <p className={"MyPets-content-info-item-p2"} style={{width: 150}}>{data.date}</p>
                                    <p className={"MyPets-content-info-item-p2"} style={{width: 238}}>{data.reason}</p>
                                    <p className={`${data.opacity ? "MyPets-content-info-list-p2-opacity" : "MyPets-content-info-item-p2"}`}
                                       style={{width: 141}}>{data.attached}</p>
                                    {!data.opacity &&
                                        <Image src={Download} width={18} height={18} alt={"MyPets_download"}/>}
                                    <p className={"MyPets-view-button-chat"}
                                       style={{marginLeft: `${data.opacity ? "40px" : "24px"}`}}>Ver Chat</p>
                                </div>
                            ))}
                        </div>
                    </>}
                </div>
            </div>
        </main>
    )
}