import TagReceive from "./tag-receive";
import TagTransmitter from "./tag-transmitter";
import MessageImage from "./image";
import imageCat from "../../../../assets/chat/cat.svg";

export default function MessageContent() {
    return (
        <div className={"Message-content"}>
            <TagReceive firstName={"María"} lastName={"Fernández"} text={"Hola! En qué puedo ayudarte hoy?"} date={"12:26 pm"} />
            <TagTransmitter text={"Hola, cómo estas? Greta está con vomitos"} date={"12:27 pm"} />
            <TagReceive firstName={"María"} lastName={"Fernández"} text={"Contame más, desde cuándo está vomitando?"} date={"12:27 pm"} />
            <TagTransmitter text={"Ayer a la tarde fue la primera vez, luego vomitó por la mañana luego de comer."} date={"12:27 pm"} />
            <TagReceive firstName={"María"} lastName={"Fernández"} text={"Hola! En qué puedo ayudarte hoy?"} date={"12:26 pm"} />
            <TagTransmitter text={"Hola, cómo estas? Greta está con vomitos"} date={"12:27 pm"} />
            <MessageImage img={imageCat} date={"12:30 pm"} type={"transmitter"} />
        </div>
    )
}