import Header_LoggedIn from "../../components/header/logged-in";
import ArrowBack from "../../assets/last-consultation/back.svg";
import Three_Pounts from "../../assets/last-consultation/pounts.svg";
import Image from "next/image";
import {useRouter} from "next/router";
import {ROUTER} from "../../constants/router";
import {useState} from "react";

export default function LastConsultation() {
    const [showItem, setShowItem] = useState(0);
    const history = useRouter();

    const handleChangeSelectPet = (id: number) : void => {
        if (id === showItem) {
            setShowItem(0);
        } else {
            setShowItem(id);
        }
    };

     return (
         <main>
             <Header_LoggedIn name={"Paulina"} image={""} consultation={true} url={""} />
             <div className={"LastConsultation-container"}>
                 <div className={"LastConsultation-image-arrow-back-container"} onClick={() => history.push(ROUTER.MyPets)}>
                     <Image src={ArrowBack} width={16} height={16} alt={"ArrowBack"} />
                 </div>
                 <div className={"LastConsultation-title-container"}>
                     <p className={"LastConsultation-title"}>Últimas Consultas</p>
                 </div>
                 <div className={"LastConsultation-item-title-container"}>
                     <p className={"LastConsultation-item-title"}>Fecha</p>
                     <p className={"LastConsultation-item-title"}>Motivo consulta</p>
                     <p className={"LastConsultation-item-title"}>Archivos adjuntos</p>
                 </div>
                 <div className={"LastConsultation-item-card-container"}>
                     <div className={"LastConsultation-item-card"}>
                         <div className={"LastConsultation-item-card-content"}>
                           <div className={"LastConsultation-item-card-title-container"}>
                              <p className={"LastConsultation-item-card-title"}>08/11</p>
                               <p className={"LastConsultation-item-card-title"}>General</p>
                               <p className={"LastConsultation-item-card-title"}>2 archivos</p>
                           </div>
                           <div className={"LastConsultation-item-card-image"} onClick={() => handleChangeSelectPet(1)}>
                             <Image src={Three_Pounts} width={18} height={4} alt={"Three_Pounts"} />
                           </div>
                             {showItem === 1 &&
                                 <div className={"LastConsultation-item-card-option"}>
                                 <p className={"LastConsultation-item-card-option-text"}>Descargar archivos</p>
                                 <div className={"LastConsultation-item-card-option-line"}/>
                                 <p className={"LastConsultation-item-card-option-text"}>Ver historial chat</p>
                             </div>}
                         </div>
                     </div>
                     <div className={"LastConsultation-item-card"}>
                         <div className={"LastConsultation-item-card-content"}>
                             <div className={"LastConsultation-item-card-title-container"}>
                                 <p className={"LastConsultation-item-card-title"}>07/11</p>
                                 <p className={"LastConsultation-item-card-title"}>Emergencia</p>
                                 <p className={"LastConsultation-item-card-title"}>1 archivos</p>
                             </div>
                             <div className={"LastConsultation-item-card-image"} onClick={() => handleChangeSelectPet(2)}>
                                 <Image src={Three_Pounts} width={18} height={4} alt={"Three_Pounts"} />
                             </div>
                             {showItem === 2 &&
                                 <div className={"LastConsultation-item-card-option"}>
                                     <p className={"LastConsultation-item-card-option-text"}>Descargar archivos</p>
                                     <div className={"LastConsultation-item-card-option-line"}/>
                                     <p className={"LastConsultation-item-card-option-text"}>Ver historial chat</p>
                             </div>}
                         </div>
                     </div>
                     <div className={"LastConsultation-item-card"}>
                         <div className={"LastConsultation-item-card-content"}>
                             <div className={"LastConsultation-item-card-title-container"}>
                                 <p className={"LastConsultation-item-card-title"}>08/11</p>
                                 <p className={"LastConsultation-item-card-title"}>General</p>
                                 <p className={"LastConsultation-item-card-title"}>2 archivos</p>
                             </div>
                             <div className={"LastConsultation-item-card-image"} onClick={() => handleChangeSelectPet(3)}>
                                 <Image src={Three_Pounts} width={18} height={4} alt={"Three_Pounts"} />
                             </div>
                             {showItem === 3 &&
                                 <div className={"LastConsultation-item-card-option"}>
                                     <p className={"LastConsultation-item-card-option-text"}>Descargar archivos</p>
                                     <div className={"LastConsultation-item-card-option-line"}/>
                                     <p className={"LastConsultation-item-card-option-text"}>Ver historial chat</p>
                             </div>}
                         </div>
                     </div>
                     <div className={"LastConsultation-item-card"}>
                         <div className={"LastConsultation-item-card-content"}>
                             <div className={"LastConsultation-item-card-title-container"}>
                                 <p className={"LastConsultation-item-card-title"}>07/11</p>
                                 <p className={"LastConsultation-item-card-title"}>Emergencia</p>
                                 <p className={"LastConsultation-item-card-title"}>1 archivos</p>
                             </div>
                             <div className={"LastConsultation-item-card-image"} onClick={() => handleChangeSelectPet(4)}>
                                 <Image src={Three_Pounts} width={18} height={4} alt={"Three_Pounts"} />
                             </div>
                             {showItem === 4 &&
                                 <div className={"LastConsultation-item-card-option"}>
                                     <p className={"LastConsultation-item-card-option-text"}>Descargar archivos</p>
                                     <div className={"LastConsultation-item-card-option-line"}/>
                                     <p className={"LastConsultation-item-card-option-text"}>Ver historial chat</p>
                             </div>}
                         </div>
                     </div>
                 </div>
             </div>
         </main>
     )
}