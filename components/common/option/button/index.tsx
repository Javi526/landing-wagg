import {useState} from "react";

type Props = {
    label: string
    nameOne: string,
    nameTwo: string,
    width: string,
    height: string,
    margin: string
}

export default function OptionButton({ label, nameOne, nameTwo, width, height, margin }: Props) {
    const [option, setOption] = useState("");
    return (
        <div className={"Input-container"}>
            <div className={"Option-container-type"}>
                <div style={{ width, height, margin }} className={`${option === "nameOne" ? "Option-item-button-active" : "Option-item-button"} Input-label-container`} onClick={() => setOption("nameOne")}>{nameOne}</div>
                <div style={{ width, height, margin }} className={`${option === "nameTwo" ? "Option-item-button-active" : "Option-item-button"} Input-label-container`} onClick={() => setOption("nameTwo")}>{nameTwo}</div>
            </div>
        </div>
    )
}