import { Our_Team_Galery } from "../../../../constants/landing/principal";
import { Our_Team_Galery_Interface } from "../../../../interface/landing/principal";
import { useState } from "react";
import ArrowLeft from "../../../../assets/landing/principal/our-team-galery/arrow-left.svg";
import ArrowRight from "../../../../assets/landing/principal/our-team-galery/arrow-right.svg";
import ArrowYellow from "../../../../assets/landing/principal/arrow_yellow.svg";
import CloudViolet from "../../../../assets/landing/principal/cloud-violet.svg";
import CelestialImprint from "../../../../assets/landing/principal/celestial_imprint.svg";
import Waggers from "../../../../assets/landing/principal/waggers.svg";
import Image from "next/image";

export default function OurTeam() {
    const [previous] = useState(0);
    const [next] = useState(3);
    const [arrayState, setArrayState] = useState({ arrayOne: 0, arrayTwo: 1, arrayThree: 2 });

   const handleChangeCarrousel = () => {
      const array = Our_Team_Galery.slice(previous, next);
      return [array[arrayState.arrayOne], array[arrayState.arrayTwo], array[arrayState.arrayThree]];
   };

   const typeClassName : any = {
       0: "OurTeam-content-galery-left",
       1: "OurTeam-content-galery-center",
       2: "OurTeam-content-galery-right"
   };

   const typeSizeWidth : any = {
        0: 249,
        1: 309,
        2: 249
   };

    const typeSizeHeight : any = {
        0: 330,
        1: 330,
        2: 330
    };

    const handleChangeArrowLeft = () => {
         if (arrayState.arrayOne === 0 && arrayState.arrayTwo === 1 && arrayState.arrayThree === 2) {
             setArrayState({ arrayOne: 1, arrayTwo: 2, arrayThree: 0 });
         } else if (arrayState.arrayOne === 1 && arrayState.arrayTwo === 2 && arrayState.arrayThree === 0) {
             setArrayState({ arrayOne: 2, arrayTwo: 0, arrayThree: 1 });
         } else if (arrayState.arrayOne === 2 && arrayState.arrayTwo === 0 && arrayState.arrayThree === 1) {
             setArrayState({ arrayOne: 0, arrayTwo: 1, arrayThree: 2 });
         }
    }

    const handleChangeArrowRight = () => {
        if (arrayState.arrayOne === 0 && arrayState.arrayTwo === 1 && arrayState.arrayThree === 2) {
            setArrayState({ arrayOne: 1, arrayTwo: 2, arrayThree: 0 });
        } else if (arrayState.arrayOne === 1 && arrayState.arrayTwo === 2 && arrayState.arrayThree === 0) {
            setArrayState({ arrayOne: 2, arrayTwo: 0, arrayThree: 1 });
        } else if (arrayState.arrayOne === 2 && arrayState.arrayTwo === 0 && arrayState.arrayThree === 1) {
            setArrayState({ arrayOne: 0, arrayTwo: 1, arrayThree: 2 });
        }
    }

    return (
        <div className={"OurTeam-container"}>
          <div className={"OurTeam-content-container"}>
              <p className={"OurTeam-content-title"}>Nuestro equipo</p>
              <div className={"CloudViolet-container"}>
                  <Image src={CloudViolet} width={273} height={173} alt={"CloudViolet"} />
              </div>
              <div className={"CelestialImprint-container"}>
                  <Image src={CelestialImprint} width={183} height={186} alt={"CelestialImprint"} />
              </div>
              <div className={"Waggers-container"}>
                  <Image src={Waggers} width={262} height={89} alt={"Waggers"} />
              </div>
              <div className={"OurTeam-content-galery-container"}>
                  <div className={"ArrowYellow-container"}>
                      <Image src={ArrowYellow} width={76} height={78} alt={"ArrowYellow"} />
                  </div>
                  <div className={"OurTeam-content-galery-content-container"}>
                      {handleChangeCarrousel().map((data:Our_Team_Galery_Interface, index:number) => (
                          <div className={typeClassName[index]} key={data.id}>
                              <Image src={data.img} width={typeSizeWidth[index]} height={typeSizeHeight[index]} alt={data.img} />
                              {index === 1 && (
                                  <div className={"OurTeam-content-galery-content"}>
                                      <p className={"OurTeam-content-galery-title"}>{data.title}</p>
                                      <p className={"OurTeam-content-galery-credential"}>{data.credential}</p>
                                      <p className={"OurTeam-content-galery-experience"}>{data.experience}</p>
                                  </div>
                              )}
                          </div>
                      ))}
                  </div>
                  <div className={"OurTeam-content-arrow-container"}>
                      <Image src={ArrowLeft} width={24} height={24} alt={"ArrowLeft"} onClick={() => handleChangeArrowLeft()} style={{ cursor: "pointer" }} />
                      <Image src={ArrowRight} width={24} height={24} alt={"ArrowRight"} onClick={() => handleChangeArrowRight()} style={{ cursor: "pointer" }} />
                  </div>
              </div>
          </div>
        </div>
    )
}