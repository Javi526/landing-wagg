import { NextPage } from "next";
import Header_LoggedIn from "../../../components/header/logged-in";
import BarPlan from "../../../components/bar/plan";
import PaymentData from "../../../components/choose-your-plan/check-out/payment-data";
import PaymentPlan from "../../../components/choose-your-plan/check-out/payment-plan";
import Image from "next/image";
import RayYellows from "../../../assets/landing/principal/ray_yellow.svg";

const CheckOut: NextPage = () => {
    return (
        <main>
            <Header_LoggedIn name={"Paulina"} image={""} />
            <BarPlan />
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