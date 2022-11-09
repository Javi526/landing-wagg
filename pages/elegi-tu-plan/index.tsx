import { NextPage } from "next";
import Header_LoggedIn from "../../components/header/logged-in";
//import {useState} from "react";
import BarPlan from "../../components/bar/plan";
import PetParentPlanCard from "../../components/common/tab/pet-parent-plan";

const ChooseYourPlan: NextPage = () => {
  //  const [tab, setTab] = useState(1);

    return (
        <main>
            <Header_LoggedIn name={"Paulina"} image={""} />
            <BarPlan />
            <div className={"ChooseYourPlan-content"}>
                <h2 className={"ChooseYourPlan-content-h2"}>Bienvenido a Wagg</h2>
                <p className={"ChooseYourPlan-content-p"}>En Wagg ofrecemos distintos planes de atención veterinaria y seguro para tu mascota.</p>
            </div>
            <PetParentPlanCard
                tab={1}
                nameButton={"Elegir plan"}
                landing={false}
            />
        </main>
    )
}

export default ChooseYourPlan