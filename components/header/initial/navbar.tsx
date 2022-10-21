import { MenuInterface } from "../../../interface/header/initial"
import { menu } from "../../../contants/header/initial/navbar";

export default function Navbar() {
    return (
        <div className={"header-navbar"}>
            {menu.map((data: MenuInterface) => (
                <div className={"header-navbar-container"} key={data.id}>
                    <p className={"header-navbar-item"}>{data.name}</p>
                </div>
            ))}
        </div>
    )
}