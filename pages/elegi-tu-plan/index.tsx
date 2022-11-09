import { NextPage } from "next";
import Header_LoggedIn from "../../components/header/logged-in";
import {useState} from "react";
import BarPlan from "../../components/bar/plan";
import PetParentPlanCard from "../../components/common/tab/pet-parent-plan";
import Circle_Yellow from "../../assets/landing/principal/circle_yellow.png"
import Image from "next/image";
import ArrowLeft from "../../assets/landing/principal/our-team-galery/arrow-left.svg";
import ArrowLeftDisabled from "../../assets/landing/principal/arrow-left-disabled.svg";
import ArrowRight from "../../assets/landing/principal/our-team-galery/arrow-right.svg";
import ArrowRightDisabled from "../../assets/landing/principal/arrow-right-disabled.svg";
import ArrowHorizontal from "../../assets/header/arrow.svg";

const ChooseYourPlan: NextPage = () => {
    const [tab, setTab] = useState(1);

    const arrowLeftChange = (num: number) : string => {
        if (num > 1) return ArrowLeft;
        return ArrowLeftDisabled;
    };

    const arrowRightChange = (num: number) : string => {
        if (num < 2) return ArrowRight;
        return ArrowRightDisabled;
    };

    const arrowLeftType = (num : number) : string => {
        if (num > 1) return "pointer";
        return "auto";
    };

    const arrowRightType = (num : number) : string => {
        if (num < 2) return "pointer";
        return "auto";
    };

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
        <main>
            <Header_LoggedIn name={"Paulina"} image={""} />
            <BarPlan Text={HeaderText} />
            <div className={"ChooseYourPlan-content"}>
                <div className={"ChooseYourPlan-content-image-cicle_yellow"}>
                    <Image src={Circle_Yellow} width={165} height={66} alt={"Circle_Yellow"} />
                </div>
                <h2 className={"ChooseYourPlan-content-h2"}>Bienvenido a Wagg</h2>
                <p className={"ChooseYourPlan-content-p"}>En Wagg ofrecemos distintos planes de atención veterinaria y seguro para tu mascota.</p>
            </div>
            <PetParentPlanCard
                tab={tab}
                nameButton={"Elegir plan"}
                landing={false}
            />
            <div className={"Plan-content-tabs-select-container"}>
                <div className={"Plan-content-tabs-select-content"}>
                    <Image src={arrowLeftChange(tab)} width={24} height={24} style={{ cursor: `${arrowLeftType(tab)}` }} alt={"ArrowLeft"} onClick={() => setTab(1)}/>
                    <Image src={arrowRightChange(tab)} width={24} height={24} style={{ cursor: `${arrowRightType(tab)}` }} alt={"ArrowRight"} onClick={() => setTab(2)}/>
             </div>
            </div>
        </main>
    )
}

export default ChooseYourPlan