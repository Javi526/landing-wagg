import Image from "next/image";
import ImageWoman_and_dog from "../../../../assets/landing/principal/woman-and-dog.webp";
import Hello from "../../../../assets/landing/principal/hello.svg";

export default function Initials() {
    return (
        <div className={"Initials-container"}>
            <div className={"Initials-content"}>
                <div className={"Initials-content-intro"}>
                    <div className={"Initials-content-description"}>
                        <Image src={Hello} width={302} height={57} alt={"hello"} />
                    </div>
                    <Image src={ImageWoman_and_dog} width={512} height={430} alt={"ImageWoman_and_dog"} />
                </div>
            </div>
        </div>
    )
}