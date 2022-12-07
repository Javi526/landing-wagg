import FinishChat from "./finish-chat";
//import Video from "./video";
import ChatPoints  from "../../../assets/chat/chat-pounts.svg";
import Image from "next/image";
import Avatar from "../../../assets/chat/avatar.svg";
import Arrow from "../../../assets/chat/arrow.svg";

type Props = {
    name: string,
    setShowMenu: any,
    showMessage: boolean,
    setshowMessage: any
}

export default function VeterinarySectionVideoAndFinishChat({ name, setShowMenu, showMessage, setshowMessage } :Props) {
    return (
        <div className={"SectionVideoAndFinishChat-container"}>
            <div className={"SectionVideoAndFinishChat-section-container"}>
                <div className={"SectionVideoAndFinishChat-section-img-container"}>
                    {showMessage &&
                    <div className={"VeterinarySectionVideoAndFinishChat-arrow"} onClick={() => setshowMessage(false)}>
                        <Image src={Arrow} width={14} height={12} alt={"VeterinarySectionVideoAndFinishChat-arrow"}/>
                    </div>}
                    <div className={"VeterinarySectionVideoAndFinishChat-section-img"}>
                        <Image src={Avatar} width={36} height={36} alt={"SectionVideoAndFinishChat-Avatar"} />
                    </div>
                    <div className={"VeterinarySectionVideoAndFinishChat-section-user-active"} onClick={() => {
                        if (typeof window === "object" && window.innerWidth < 1164) setShowMenu(true);
                    }}>
                        <p className={"VeterinarySectionVideoAndFinishChat-section-user-online-p"}>En línea</p>
                        <p className={"VeterinarySectionVideoAndFinishChat-section-name-p"}>{name}</p>
                    </div>
                </div>
                <div className={"SectionVideoAndFinishChat-section-chat-and-video"}>
                    <FinishChat />
                    {/*<Video/>*/}
                    <div className={"SectionVideoAndFinishChat-menu"} onClick={() => setShowMenu(true)}>
                        <Image src={ChatPoints} width={18} height={4} alt={"ChatPoints"} />
                    </div>
                </div>
            </div>
        </div>
    )
}