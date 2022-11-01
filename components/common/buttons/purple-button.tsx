import { ButtonInterface } from "../../../interface/common";

export default function PurpleButton({ width, height, text } : ButtonInterface) {
    return (
        <div className={"PurpleButton-container"}>
            <div className={"PurpleButton-content"} style={{ width, height }}>{text}</div>
        </div>
    )
}