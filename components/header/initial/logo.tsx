import Image from "next/image";
import LogoIco from "../../../assets/landing/principal/logo.svg";

export default function Logo() {
    return (
        <>
            <Image src={LogoIco} width={108} height={36} alt={"logo"} />
        </>
    )
}