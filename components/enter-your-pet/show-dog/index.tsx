import Image from "next/image";
import Circle_pink from "../../../assets/landing/principal/circle_pink.svg";
import Bottomless_Dogs from "../../../assets/landing/principal/bottomless_dog.png";

export default function ShowDog() {
    return (
        <div className={"ShowDog-content-dog-container"}>
            <div className={"ShowDog-content-dog"}>
                <div className={"ShowDog-circle-pink-container"}>
                    <Image src={Circle_pink} width={260} height={251} alt={"Circle_pink"} />
                </div>
                <div className={"ShowDog-Bottomless_Dogs-container"}>
                    <Image src={Bottomless_Dogs} width={287} height={378} alt={"Bottomless_Dogs"} />
                </div>
            </div>
        </div>
    )
}