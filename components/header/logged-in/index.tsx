import Logo from "../not-logged-in/initial/logo";
import Image from "next/image";
import Avatar from "../../../assets/header/avatar.svg";
import { HeaderLoggedInInterface } from "../../../interface/header/logged-in";
import HeaderArrow from "../../../assets/header/header-arrow.svg"
import {useRouter} from "next/router";

export default function Header_LoggedIn({ name, image, consultation, url, chat }: HeaderLoggedInInterface) {
    const router = useRouter();

    const showAvatar = (image: string) : string => {
        if (image) return image;
        return Avatar;
    };

    const redirect = (url: string) : void => {
        if (url) router.push(url);
    };

    return (
        <div className={"Header_LoggedIn-container"} id={"Header_LoggedIn-container-id"}>
            <Logo />
            <div className={"Header_LoggedIn-user-container"}>
             {consultation &&
                <div className={"Header_LoggedIn-user-button-and-line"}>
                  <div className={"Header_LoggedIn-user-button-yellow"} onClick={() => redirect(url)}>Consultá ahora</div>
                  <div className={"Header_LoggedIn-user-line"} />
                </div>}
                {chat &&
                  <div className={"Header_LoggedIn-user-button-and-line"}>
                    <div className={"Header_LoggedIn-user-button-chat-active"} onClick={() => {}}>Chat activo</div>
                  <div className={"Header_LoggedIn-user-line"} />
                </div>}
                <div className={"Header_LoggedIn-user"}>
                    <Image src={showAvatar(image)} width={36} height={36} alt={"Avatar"} />
                    <p className={"Header_LoggedIn-user-name"}>{name}</p>
                    <Image src={HeaderArrow} width={14} height={8} alt={"HeaderArrow"} />
                </div>
            </div>
        </div>
    )
};