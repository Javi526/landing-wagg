import { HowDoesItWorkData } from "../../../../constants/landing/principal";
import { HowDoesItWorkDataInterface } from "../../../../interface/landing/principal";
import Image from "next/image";

export default function HowDoesItWork() {
    return (
        <div className={"HowDoesItWork-container"}>
          <div className={"HowDoesItWork-content"}>
              <div className={"HowDoesItWork-content-card"}>
                <div className={"HowDoesItWork-content-card-item-container"}>
                    {HowDoesItWorkData.map((data: HowDoesItWorkDataInterface) => (
                        <div className={"HowDoesItWork-content-card-item"} key={data.id}>
                            <div className={"HowDoesItWork-content-card-item-img-container"} id={`HowDoesItWork_img-${data.id}`}>
                                <Image src={data.img} alt={`HowDoesItWork_img-${data.id}`} width={data.width} height={132} />
                            </div>
                           <p className={"HowDoesItWork-content-card-item-title"}>{data.title}</p>
                            <p className={"HowDoesItWork-content-card-item-text"}>{data.text}</p>
                        </div>
                    ))}

                </div>
              </div>
          </div>
        </div>
    )
}