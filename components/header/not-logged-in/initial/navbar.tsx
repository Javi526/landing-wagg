import { HeaderInterface, MenuInterface } from "../../../../interface/header/not-logged-in";
import { menu } from "../../../../constants/header/initial/navbar";
import Bar from "../../../../assets/header/bar.svg";
import Cross from "../../../../assets/header/cross.svg";
import Image from "next/image";
import { ROUTER } from "../../../../constants/router";

export default function Navbar({ open, setOpen, router }: HeaderInterface) {
    return (
        <>
        <div className={"header-navbar"}>
            {menu.map((data: MenuInterface) => (
                <div className={"header-navbar-container"} key={data.id}>
                    <p className={"header-navbar-item"}>{data.name}</p>
                </div>
            ))}
            <p className={"header-navbar-item-login"} onClick={() => router.push(ROUTER.login)}> Ingresá</p>
        </div>
            <div className={"header-bar"} onClick={() => setOpen(!open)}>
                {!open && <Image src={Bar} width={24} height={24} alt={"bar"} />}
                {open && <Image src={Cross} width={24} height={24} alt={"Cross"} />}
            </div>
        </>
    )
}