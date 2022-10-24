import Image from "next/image";
import ImageWoman_and_dog from "../../../../assets/landing/principal/woman-and-dog.svg";
import Hello from "../../../../assets/landing/principal/hello.svg";
import LineYellow from "../../../../assets/landing/principal/line-yellow.svg";
//import ArrowYellow from "../../../../assets/landing/principal/arrow-yellow.svg";

export default function Initials() {
    return (
        <div className={"Initials-container"}>
            <div className={"Initials-content"}>
                <div className={"Initials-content-intro"}>
                    <div className={"Initials-content-description"}>
                        <Image src={Hello} width={302} height={57} alt={"hello"} />
                        <div className={"Initials-container-title"}>
                            <p className={"Initials-title"}>Teleconsejo veterinario
                                en un instante</p>
                        </div>
                        <div className={"Initial-image-line-yellow-container"}>
                            <Image src={LineYellow} width={221} height={27} alt={"line-yellow"} />
                        </div>
                        <div className={"Initials-subTitle-container"}>
                            <p className={"Initials-subTitle"}>En Wagg cuidamos a tu mascota a toda hora,
                                desde la comodidad de tu casa.</p>
                        </div>
                        <div className={"Initial-button-container"}>
                            <div className={"Initial-button"}>Consultá ahora</div>
                        </div>
                        {/*<div>
                            <Image src={ArrowYellow} width={58} height={85} alt={"ArrowYellow"}/>
                        </div>*/}
                    </div>
                    <div className={"Initials-image-woman-and-dog"}>
                        <Image src={ImageWoman_and_dog} width={512} height={430} alt={"ImageWoman_and_dog"} />
                    </div>
                </div>
                <div className={"Initial-text-how-container"}>
                    <p className={"Initial-text-how"}>¿Cómo funciona?</p>
                </div>
            </div>
        </div>
    )
}