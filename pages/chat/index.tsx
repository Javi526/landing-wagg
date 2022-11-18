import Header_LoggedIn from "../../components/header/logged-in";
import SectionVideoAndFinishChat from "../../components/chat/section-video-and-finish-chat";
import Message from "../../components/chat/message";
import DetailsConsultation from "../../components/chat/details-consultation";
import {useState} from "react";

export default function Chat() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <main>
           <Header_LoggedIn name={"Paulina"} image={""} consultation={false} url={""} chat={true} />
            <div className={"Chat-container"}>
               <div className={"Chat-content"}>
                 <SectionVideoAndFinishChat name={"Dra. María Fernández"} />
                 <Message />
               </div>
               <DetailsConsultation />
            </div>
        </main>
    )
}