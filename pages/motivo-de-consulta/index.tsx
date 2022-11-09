import Header_LoggedIn from "../../components/header/logged-in";
import BarPlan from "../../components/bar/plan";
import DogCard from "../../assets/reason-for-consultation/dog.svg";
import CatCard from "../../assets/reason-for-consultation/cat.svg";
import SumCard from "../../assets/reason-for-consultation/sum.svg";
import Image from "next/image";
import {useState} from "react";
import InputSeconds from "../../components/common/input/input-seconds";
import Cloud from "../../assets/reason-for-consultation/cloud.svg";
import Linea from "../../assets/reason-for-consultation/linea.svg";
import ContentButtons from "../../components/common/content-buttons";
import ArrowHorizontal from "../../assets/header/arrow.svg";

export default function ReasonForConsultation() {
    const [option, setOption] = useState("");

    const HeaderText = () => {
        return (
            <div className={"HeaderText"}>
                <p className={"HeaderText-p"}>Registrate</p>
                <div className={"HeaderText-arrow"}>
                    <Image src={ArrowHorizontal} width={7} height={11} alt={"ArrowHorizontal"} />
                </div>
                <p className={"HeaderText-p"}>Elegí tu plan</p>
                <div className={"HeaderText-arrow"}>
                    <Image src={ArrowHorizontal} width={7} height={11} alt={"ArrowHorizontal"} />
                </div>
                <p className={"HeaderText-p2"}>Conectá con un Vet</p>
            </div>
        )
    };

    return (
        <main>
            <Header_LoggedIn name={"Paulina"} image={""} />
            <BarPlan Text={HeaderText} />
            <div className={"ReasonForConsultation-container"}>
                <div className={"ReasonForConsultation-image-container-cloud"}>
                    <Image src={Cloud} width={116} height={101} alt={"Cloud"} />
                </div>
                <div className={"ReasonForConsultation-image-container-linea"}>
                    <Image src={Linea} width={197} height={147} alt={"Linea"} />
                </div>
                <p className={"ReasonForConsultation-title"}>Iniciar consulta</p>
                <p className={"ReasonForConsultation-subtitle"}>Seleccioná una mascota </p>
            <div className={"ReasonForConsultation-item-container"}>
                <div className={"ReasonForConsultation-item"} onClick={() => setOption("dog")}>
                   <Image src={DogCard} alt={"DogCard"} />
                    <div className={"ReasonForConsultation-item-circle-container"}>
                        {option === "dog" ?
                            <div className={"ReasonForConsultation-item-circle"}>
                                <div className={"ReasonForConsultation-item-circle-color"} />
                            </div>
                        :
                            <div className={"ReasonForConsultation-item-circle"} />
                        }
                    </div>
                    <p className={"ReasonForConsultation-item-name"}>Greta</p>
                </div>
                <div className={"ReasonForConsultation-item"} onClick={() => setOption("cat")}>
                    <Image src={CatCard} alt={"CatCard"} />
                    <div className={"ReasonForConsultation-item-circle-container"}>
                        {option === "cat" ?
                            <div className={"ReasonForConsultation-item-circle"}>
                                <div className={"ReasonForConsultation-item-circle-color"} />
                            </div>
                            :
                            <div className={"ReasonForConsultation-item-circle"} />
                        }
                    </div>
                    <p className={"ReasonForConsultation-item-name"}>Caos</p>
                </div>
                <div className={"ReasonForConsultation-item"} style={{ background: "#FAFBFF" }}>
                    <Image src={SumCard} alt={"SumCard"} />
                    <p className={"ReasonForConsultation-item-name"}>Nueva</p>
                </div>
            </div>
                <p className={"ReasonForConsultation-form-text"}>¿Cúal es tu motivo de consulta?</p>
                <InputSeconds
                    width={312}
                    height={48}
                    label={"Consulta General"}
                    placeholder={"Consulta General"}
                    validateCard={false}
                />
                <InputSeconds
                    width={312}
                    height={48}
                    label={"Emergencia"}
                    placeholder={"Emergencia"}
                    validateCard={false}
                />
                <ContentButtons
                    width={"312px"}
                    height={42}
                    textConfirm={"Iniciar consulta"}
                    textCancel={"Ir a mi cuenta"}
                    question={false}
                    questionText={""}
                    questionLink={""}
                    url={""}
                    WhiteButton_url={""}
                    PurpleButton_url={""}
                    margin={"11px 0 0 0"}
                />
            </div>
        </main>
    )
}