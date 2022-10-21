import Logo from "./logo";
import Navbar from "./navbar";
import HeaderButton from "./button";

export default function Header() {
    return (
        <div className={"header"}>
            <div className={"header-container"}>
                <div className={"header-content"}>
                    <Logo />
                    <Navbar />
                    <HeaderButton />
                </div>
            </div>
        </div>
    )
}