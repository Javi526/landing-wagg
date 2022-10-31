import Image from "next/image";
import LogoIco from "../../../assets/landing/principal/logo.svg";
import { useRouter } from "next/router";

export default function Logo() {
    const router = useRouter();
    return (
        <div className={"logo-container"} onClick={() => router.push("/")}>
            <Image src={LogoIco} width={108} height={36} alt={"logo"} />
        </div>
    )
}