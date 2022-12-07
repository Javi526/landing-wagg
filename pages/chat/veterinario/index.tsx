import Header_LoggedIn from "../../../components/header/logged-in";
import {useState} from "react";
import Contact from "../../../components/chat/contact";
import VeterinaryTab from "../../../components/chat/veterinary-tab";
import MessageVeterinary from "../../../components/chat/message/message-veterinary";
import VeterinarySectionVideoAndFinishChat from "../../../components/chat/veterinary-section-video-and-finish-chat";

export default function ChatVets() {
    const [showMenu, setShowMenu] = useState(false);
    const [showMessage, setshowMessage] = useState(false);
    return (
        <main>
            {!showMenu ?
                <>
                <Header_LoggedIn name={"Marina"} image={""} consultation={false} url={""} chat={false}/>
                <div className={"Chat-container"}>
                    {!showMessage && <Contact setshowMessage={setshowMessage} />}
                    <div className={`${showMessage ? "Chat-content-veterinary-contact" : "Chat-content-veterinary"}`}>
                        <VeterinarySectionVideoAndFinishChat
                            name={"Dra. María Fernández"}
                            setShowMenu={setShowMenu}
                            showMessage={showMessage}
                            setshowMessage={setshowMessage}
                        />
                        <MessageVeterinary
                            showMessage={showMessage}
                        />
                    </div>
                    <VeterinaryTab showMenu={showMenu} setShowMenu={setShowMenu} />
                </div>
               </> :
                <>
                 <Header_LoggedIn name={"Marina"} image={""} consultation={false} url={""} chat={false}/>
                 <VeterinaryTab showMenu={showMenu} setShowMenu={setShowMenu} />
                </>
            }
        </main>
    )
}