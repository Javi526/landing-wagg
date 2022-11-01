import Image from "next/image";
import dog_login from "../../../assets/login/dog_login.svg"

export default function LoginIntro() {
    return (
        <div className={"LoginIntro-container"}>
            <div className={"LoginIntro-content"}>
               <Image src={dog_login} width={479} height={461} alt={"dog_login"} />
            </div>
        </div>
    )
}