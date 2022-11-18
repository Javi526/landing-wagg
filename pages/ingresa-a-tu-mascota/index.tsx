import Header_LoggedIn from "../../components/header/logged-in";
import BarPlan from "../../components/bar/plan";
import EnterYourPetForm from "../../components/enter-your-pet/form-tsx";
import ShowDog from "../../components/enter-your-pet/show-dog";
import Image from "next/image";
import ArrowHorizontal from "../../assets/header/arrow.svg";

export default function IngresaATuMascota() {

    const HeaderText = () => {
        return (
            <div className={"HeaderText"}>
                <p className={"HeaderText-p"}>Registrate</p>
                <div className={"HeaderText-arrow"}>
                    <Image src={ArrowHorizontal} width={7} height={11} alt={"ArrowHorizontal"} />
                </div>
                <p className={"HeaderText-p2"}>Elegí tu plan</p>
                <div className={"HeaderText-arrow"}>
                    <Image src={ArrowHorizontal} width={7} height={11} alt={"ArrowHorizontal"} />
                </div>
                <p className={"HeaderText-p"}>Conectá con un Vet</p>
            </div>
        )
    };

    return (
        <div>
            <Header_LoggedIn name={"Paulina"} image={""} consultation={false} url={""} chat={false} />
            <BarPlan Text={HeaderText} />
            <div className={"IngresaATuMascota-container"}>
                <EnterYourPetForm />
                <ShowDog />
            </div>
        </div>
    )
}