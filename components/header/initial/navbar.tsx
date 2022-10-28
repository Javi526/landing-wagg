import { MenuInterface } from "../../../interface/header/initial"
import { menu } from "../../../constants/header/initial/navbar";
import Bar from "../../../assets/header/bar.svg";
import Cross from "../../../assets/header/cross.svg";
import Image from "next/image";

export default function Navbar({ open, setOpen } : { open: boolean, setOpen: any }) {
    return (
        <>
        <div className={"header-navbar"}>
            {menu.map((data: MenuInterface) => (
                <div className={"header-navbar-container"} key={data.id}>
                    <p className={"header-navbar-item"}>{data.name}</p>
                </div>
            ))}
            <p className={"header-navbar-item-login"}> Ingresá</p>
        </div>
            <div className={"header-bar"} onClick={() => setOpen(!open)}>
                {!open && <Image src={Bar} width={24} height={24} alt={"bar"} />}
                {open && <Image src={Cross} width={24} height={24} alt={"Cross"} />}
            </div>
        </>
    )
}