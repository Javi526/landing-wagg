import { why_use } from "../../../../constants/landing/principal";
import { landingPrincipalInterface } from "../../../../interface/landing/principal";
import Image from "next/image";
import WhatYouShouldKnow from "../ what-you-should-know";
import RayYellows from "../../../../assets/landing/principal/ray_yellow.svg";
import Benefit from "../../../../assets/landing/principal/benefit.svg";

export default function WhyUse() {

    const handleChangeClassName = (id: number) : string => {
         if (id === 1) return "why-use-item-subtitle";
         return "why-use-item-title";
    };

    return (
        <div className={"why-use-container"}>
           <div className={"why-use-content"}>
               <div className={"why-use-content-img-ray-yellows"}>
                    <Image src={RayYellows} width={77} height={46} alt={"RayYellows"} />
               </div>
               <div className={"why-use-content-img-benefit"}>
                   <Image src={Benefit} width={254} height={105} alt={"Benefit"} />
               </div>
              <div className={"why-use-title-container"}>
                <p className={"why-use-title"}>¿Por qué usar wagg?</p>
              </div>
              <div className={"why-use-item-container"}>
                {why_use.map((data: landingPrincipalInterface) => (
                    <div className={"why-use-item"} key={data.id}>
                        {data.title && <p className={"why-use-item-title"}>{data.title}</p>}
                        <p className={handleChangeClassName(data.id)}>{data.text}</p>
                        <div className={"why-use-item-img"} style={{ marginTop: `${data.top}`, marginLeft: `${data.left}` }}>
                          <Image src={data.img} alt={data.img} width={88} height={67} />
                        </div>
                    </div>
                ))}
              </div>
           </div>
            <WhatYouShouldKnow />
        </div>
    )
}