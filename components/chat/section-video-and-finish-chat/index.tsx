import FinishChat from "./finish-chat";
import Video from "./video";
import ChatPoints  from "../../../assets/chat/chat-pounts.svg";
import Image from "next/image";

type Props = {
    name: string
}

export default function SectionVideoAndFinishChat({ name } :Props) {
    return (
        <div className={"SectionVideoAndFinishChat-container"}>
          <div className={"SectionVideoAndFinishChat-section-container"}>
              <div className={"SectionVideoAndFinishChat-section-user-active"}>
                 <p className={"SectionVideoAndFinishChat-section-user-online-p"}>En línea</p>
                 <p className={"SectionVideoAndFinishChat-section-name-p"}>{name}</p>
              </div>
              <div className={"SectionVideoAndFinishChat-section-chat-and-video"}>
                  <FinishChat />
                  <Video />
                  <div className={"SectionVideoAndFinishChat-menu"}>
                      <Image src={ChatPoints} width={18} height={4} alt={"ChatPoints"} />
                  </div>
              </div>
          </div>
        </div>
    )
}