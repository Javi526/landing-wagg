import Header_LoggedIn from "../../../components/header/logged-in";
import {useState} from "react";
import Contact from "../../../components/chat/contact";
import VeterinaryTab from "../../../components/chat/veterinary-tab";
import MessageVeterinary from "../../../components/chat/message/message-veterinary";
import VeterinarySectionVideoAndFinishChat from "../../../components/chat/veterinary-section-video-and-finish-chat";
import ChatHistory from "../../../components/chat/history";

export default function ChatVets() {
    const [showMenu, setShowMenu] = useState(false);
    const [showMessage, setshowMessage] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModalMessage, setShowModalMessage] = useState(false);
    const [openHistoryResponsive, setOpenHistoryResponsive] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);
    const historyMobile : boolean = typeof window === "object" && window.innerWidth < 710;

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
                    <VeterinaryTab
                        showMenu={showMenu}
                        setShowMenu={setShowMenu}
                        showModal={showModal}
                        setShowModal={setShowModal}
                        showModalMessage={showModalMessage}
                        setShowModalMessage={setShowModalMessage}
                        historyMobile={historyMobile}
                        setOpenHistoryResponsive={setOpenHistoryResponsive}
                    />
                </div>
               </> :
                <>
                 <Header_LoggedIn name={"Marina"} image={""} consultation={false} url={""} chat={false}/>
                    {!openHistoryResponsive ?
                      <VeterinaryTab
                        showMenu={showMenu}
                        setShowMenu={setShowMenu}
                        showModal={showModal}
                        setShowModal={setShowModal}
                        showModalMessage={showModalMessage}
                        setShowModalMessage={setShowModalMessage}
                        historyMobile={historyMobile}
                        setOpenHistoryResponsive={setOpenHistoryResponsive}
                        /> :
                        <ChatHistory
                            setShowModal={setShowModal}
                            setOpenHistoryResponsive={setOpenHistoryResponsive}
                            setShowModalMessage={setShowModalMessage}
                            setOpenMessage={setOpenMessage}
                            openMessage={openMessage}
                        />}
                </>
            }
        </main>
    )
}