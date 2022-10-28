import Logo from "./logo";
import Navbar from "./navbar";
import HeaderButton from "./button";
import ResponsiveMenu from "../responsive/menu";
import {useState} from "react";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
        <div className={"header"}>
            <div className={"header-container"}>
                <div className={"header-content"}>
                    <Logo />
                    <Navbar open={open} setOpen={setOpen} />
                    <HeaderButton />
                </div>
            </div>
        </div>
            {open && <ResponsiveMenu/>}
        </>
    )
}