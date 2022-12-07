import SendingForm from "../sending-veterinary-form";
import { useState } from "react";
import VeterinaryMessageContent from "../content-veterinary";

type Props = {
    showMessage: any
}

export default function MessageVeterinary({ showMessage } : Props) {
    const [openFile, setOpenFile] = useState(false);
    return (
        <div className={"Message-container"}>
            <VeterinaryMessageContent openFile={openFile} setOpenFile={setOpenFile} />
            {!openFile && <SendingForm setOpenFile={setOpenFile} showMessage={showMessage} />}
        </div>
    )
}