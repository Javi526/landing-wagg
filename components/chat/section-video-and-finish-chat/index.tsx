import FinishChat from "./finish-chat";
//import Video from "./video";
import ChatPoints  from "../../../assets/chat/chat-pounts.svg";
import Image from "next/image";
import Avatar from "../../../assets/chat/avatar.svg";

type Props = {
    name: string,
    setShowMenu: any
}

export default function SectionVideoAndFinishChat({ name, setShowMenu } :Props) {
    return (
        <div className={"SectionVideoAndFinishChat-container"}>
          <div className={"SectionVideoAndFinishChat-section-container"}>
              <div className={"SectionVideoAndFinishChat-section-img-container"}>
                  <div className={"SectionVideoAndFinishChat-section-img"}>
                      <Image src={Avatar} width={36} height={36} alt={"SectionVideoAndFinishChat-Avatar"} />
                  </div>
              <div className={"SectionVideoAndFinishChat-section-user-active"} onClick={() => {
                 if (typeof window === "object" && window.innerWidth < 900) setShowMenu(true);
                 }}>
                 <p className={"SectionVideoAndFinishChat-section-user-online-p"}>En línea</p>
                 <p className={"SectionVideoAndFinishChat-section-name-p"}>{name}</p>
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