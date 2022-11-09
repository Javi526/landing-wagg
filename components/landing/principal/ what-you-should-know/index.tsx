import Image from "next/image";
import Bottomless_Dogs from "../../../../assets/landing/principal/bottomless_dog.png";
import { WhatYouShouldKnowData } from "../../../../constants/landing/principal";
import { WhatYouShouldKnowInterface } from "../../../../interface/landing/principal";
import Circle_Yellow from "../../../../assets/landing/principal/circle_yellow.png";
import Sausage_Dogs from "../../../../assets/landing/principal/sausage_dogs.svg";
import Circle_pink from "../../../../assets/landing/principal/circle_pink.svg";
import Arrow from "../../../../assets/landing/principal/arrow.svg";
import { useState } from "react";

export default function WhatYouShouldKnow() {

    const [showData, setShowData] = useState<any>({
        q1: false,
        q2: false,
        q3: false,
    });

    const handleChangeState = (type : string) : void => {
        setShowData((prevState: any) => ({
            ...prevState,
            [type]: !showData[type]
        }));
    };

    const handleChangeClassName = (type :string) : string => {
        if (showData[type]) return "FaqsContent-items-img-invested";
        return "FaqsContent-items-img";
    };


    return (
        <div className={"WhatYouShouldKnow-container"}>
            <div className={"WhatYouShouldKnow-content"}>
                <div className={"WhatYouShouldKnow-content-image"}>
                    <Image src={Circle_Yellow} width={165} height={66} alt={"Circle_Yellow"} />
                </div>
                <p className={"WhatYouShouldKnow-title"}>Lo que tenés que saber</p>
             <div className={"WhatYouShouldKnow-content-item-container"}>
                 <div className={"WhatYouShouldKnow-content-image-dog"}>
                     <Image src={Sausage_Dogs} width={166} height={132} alt={"Sausage_Dogs"} />
                 </div>
                 {WhatYouShouldKnowData.map((data: WhatYouShouldKnowInterface) => (
                     <div className={"WhatYouShouldKnow-content-item"} key={data.id}>
                        <p className={"WhatYouShouldKnow-content-item-title"}>{data.title}</p>
                         <p className={"WhatYouShouldKnow-content-item-subTitle"} dangerouslySetInnerHTML={{ __html: data.text }} />
                     </div>
                 ))}
            </div>
                <div className={"WhatYouShouldKnow-content-item-responsive-container"}>
                    {WhatYouShouldKnowData.map((data: WhatYouShouldKnowInterface) => (
                        <div key={data.id}>
                        <div className={`WhatYouShouldKnow-content-item-responsive WhatYouShouldKnow-img-${data.id}-${showData[`q${data.id}`]}`} onClick={() => handleChangeState(`q${data.id}`)}>
                            <p className={"WhatYouShouldKnow-content-item-responsive-title"}>{data.title}</p>
                            <div className={handleChangeClassName(`q${data.id}`)}>
                                <Image src={Arrow} width={18} height={18} alt={"Arrow"} />
                            </div>
                        </div>
                            {showData[`q${data.id}`] &&
                                <div className={"WhatYouShouldKnow-content-show"}>
                                    <p className={"WhatYouShouldKnow-content-item-subTitle-responsive"} dangerouslySetInnerHTML={{ __html: data.text }} />
                                </div>}
                        </div>
                    ))}
                </div>
                <div className={"WhatYouShouldKnow-content-dog-container"}>
                <div className={"WhatYouShouldKnow-content-dog"}>
                    <div className={"WhatYouShouldKnow-circle-pink-container"}>
                        <Image src={Circle_pink} width={260} height={251} alt={"Circle_pink"} />
                    </div>
                    <div className={"WhatYouShouldKnow-Bottomless_Dogs-container"}>
                        <Image src={Bottomless_Dogs} width={287} height={378} alt={"Bottomless_Dogs"} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}