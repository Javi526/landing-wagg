import { FaqsData } from "../../../constants/faqs";
import { FaqsInterface } from "../../../interface/faqs";
import Arrow from "../../../assets/landing/principal/arrow.svg";
import Image from "next/image";
import { useState } from "react";

export default function FaqsContent() {
    const [showData, setShowData] = useState<any>({
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
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
        <div className={"FaqsContent-container"}>
            <div className={"FaqsContent-content-container"}>
                <p className={"FaqsContent-title"}>FAQs Preguntas Frecuentes</p>
                <div className={"FaqsContent-items-container"}>
                    {FaqsData.map((data: FaqsInterface) => (
                        <>
                        <div className={"FaqsContent-items-tabs"} key={data.id} onClick={() => handleChangeState(`q${data.id}`)}>
                            <p className={"FaqsContent-items-title-tabs"}>{data.title}</p>
                            <div className={handleChangeClassName(`q${data.id}`)}>
                                <Image src={Arrow} width={18} height={18} alt={"Arrow"} />
                            </div>
                        </div>
                            {showData[`q${data.id}`] &&
                                <div className={"FaqsContent-items"} key={data.id}>
                                <p className={"FaqsContent-items-text"} dangerouslySetInnerHTML={{__html: data.text}}/>
                            </div>}
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}