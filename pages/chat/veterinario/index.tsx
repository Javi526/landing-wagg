import Header_LoggedIn from "../../../components/header/logged-in";
import SectionVideoAndFinishChat from "../../../components/chat/section-video-and-finish-chat";
import DetailsConsultation from "../../../components/chat/details-consultation";
import {useState} from "react";
import Contact from "../../../components/chat/contact";
import VeterinaryTab from "../../../components/chat/veterinary-tab";
import MessageVeterinary from "../../../components/chat/message/message-veterinary";

export default function ChatVets() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <main>
            {!showMenu ?
                <>
                <Header_LoggedIn name={"Marina"} image={""} consultation={false} url={""} chat={false}/>
                <div className={"Chat-container"}>
                    <Contact />
                    <div className={"Chat-content-veterinary"}>
                        <SectionVideoAndFinishChat name={"Dra. María Fernández"} setShowMenu={setShowMenu} />
                        <MessageVeterinary />
                    </div>
                    <VeterinaryTab showMenu={showMenu} setShowMenu={setShowMenu} />
                </div>
            </> :
                <>
                 <Header_LoggedIn name={"Paulina"} image={""} consultation={false} url={""} chat={false}/>
                 <DetailsConsultation showMenu={showMenu} setShowMenu={setShowMenu} />
                </>
            }
        </main>
    )
}