import { ButtonWhiteInterface } from "../../../interface/common";

export default function WhiteButton({ width, height, text, WhiteButton_url, router } : ButtonWhiteInterface) {
    return (
        <div className={"whiteButton-container"}>
            <div className={"whiteButton-content"} onClick={() => {
                if (WhiteButton_url) router.push(WhiteButton_url);
            }} style={{ width, height }}>{text}</div>
        </div>
    )
};