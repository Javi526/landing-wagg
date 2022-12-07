import Header_LoggedIn from "../../../components/header/logged-in";
import SectionVideoAndFinishChat from "../../../components/chat/section-video-and-finish-chat";
import Message from "../../../components/chat/message";
import DetailsConsultation from "../../../components/chat/details-consultation";
import {useState} from "react";

export default function Chat() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <main>
            {!showMenu ?
                <>
                <Header_LoggedIn name={"Paulina"} image={""} consultation={false} url={""} chat={false}/>
                <div className={"Chat-container"}>
                    <div className={"Chat-content"}>
                        <SectionVideoAndFinishChat name={"Dra. María Fernández"} setShowMenu={setShowMenu} />
                        <Message/>
                    </div>
                    <DetailsConsultation showMenu={showMenu} setShowMenu={setShowMenu} />
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