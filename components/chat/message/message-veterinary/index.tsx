import MessageContent from "../content";
import SendingForm from "../sending-veterinary-form";
import {useState} from "react";

export default function MessageVeterinary() {
    const [openFile, setOpenFile] = useState(false);
    return (
        <div className={"Message-container"}>
            <MessageContent openFile={openFile} setOpenFile={setOpenFile} />
            {!openFile && <SendingForm setOpenFile={setOpenFile} />}
        </div>
    )
}