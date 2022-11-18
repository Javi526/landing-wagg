import IconVideo from "../../../../assets/chat/video.svg";
import Image from "next/image";

export default function Video() {
    return (
        <div className={"Video-container"}>
            <div className={"Video-content"}>
                <Image src={IconVideo} width={22} height={16} alt={"IconVideo"} />
            </div>
        </div>
    )
}