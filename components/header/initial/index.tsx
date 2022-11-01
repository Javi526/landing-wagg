import Logo from "./logo";
import Navbar from "./navbar";
import HeaderButton from "./button";
import ResponsiveMenu from "../responsive/menu";
import { useState } from "react";
import {useRouter} from "next/router";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

    return (
        <>
        <div className={"header"}>
            <div className={"header-container"}>
                <div className={"header-content"}>
                    <Logo />
                    <Navbar open={open} setOpen={setOpen} router={router} />
                    <HeaderButton  />
                </div>
            </div>
        </div>
            {open && <ResponsiveMenu router={router} />}
        </>
    )
}