import { NextPage } from "next";
import Header_LoggedIn from "../../../components/header/logged-in";
import BarPlan from "../../../components/bar/plan";
import PaymentData from "../../../components/choose-your-plan/check-out/payment-data";
import PaymentPlan from "../../../components/choose-your-plan/check-out/payment-plan";
import Image from "next/image";
import RayYellows from "../../../assets/landing/principal/ray_yellow.svg";
import ArrowHorizontal from "../../../assets/header/arrow.svg";

const CheckOut: NextPage = () => {

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
            <Header_LoggedIn name={"Paulina"} image={""} consultation={false} url={""} chat={false} />
            <BarPlan Text={HeaderText} />
             <div className={"CheckOut-container"}>
                 <div className={"CheckOut-container-image-ray-yellow-container"}>
                     <div className={"CheckOut-container-image-ray-yellow"}>
                         <Image src={RayYellows} width={77} height={46} alt={"RayYellows"} />
                     </div>
                 </div>
                 <p className={"CheckOut-title"}>Un paso mas para activar tu plan</p>
               <div className={"CheckOut-content-pay-container"}>
                 <PaymentData />
                 <PaymentPlan />
               </div>
             </div>
        </main>
    )
}

export default CheckOut