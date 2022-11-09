import {useState} from "react";

type Props = {
    label: string
}

export default function Option({ label }: Props) {
    const [option, setOption] = useState("");
    return (
        <div className={"Input-container"}>
            <label className={"Input-label-container"}>{label}</label>
             <div className={"Option-container"}>
                <div className={`${option === "dog" ? "Option-item-active" : "Option-item"} Input-label-container`} onClick={() => setOption("dog")}>Perro</div>
                 <div className={`${option === "cat" ? "Option-item-active" : "Option-item"} Input-label-container`} onClick={() => setOption("cat")}>Gato</div>
             </div>
        </div>
    )
}