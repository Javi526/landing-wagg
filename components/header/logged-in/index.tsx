import Logo from "../not-logged-in/initial/logo";
import Image from "next/image";
import Avatar from "../../../assets/header/avatar.svg";
import { HeaderLoggedInInterface } from "../../../interface/header/logged-in";
import HeaderArrow from "../../../assets/header/header-arrow.svg"

export default function Header_LoggedIn({ name, image }: HeaderLoggedInInterface) {

    const showAvatar = (image: string) : string => {
        if (image) return image;
        return Avatar;
    };

    return (
        <div className={"Header_LoggedIn-container"}>
            <Logo />
            <div className={"Header_LoggedIn-user"}>
                <Image src={showAvatar(image)} width={36} height={36} alt={"Avatar"} />
                <p className={"Header_LoggedIn-user-name"}>{name}</p>
                <Image src={HeaderArrow} width={14} height={8} alt={"HeaderArrow"} />
            </div>
        </div>
    )
};