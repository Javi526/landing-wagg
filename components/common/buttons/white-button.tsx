import { ButtonInterface } from "../../../interface/common";

export default function WhiteButton({ width, height, text } : ButtonInterface) {
    return (
        <div className={"whiteButton-container"}>
            <div className={"whiteButton-content"} style={{ width, height }}>{text}</div>
        </div>
    )
};