import { ButtonWhiteInterface } from "../../../interface/common";

export default function WhiteButton({ width, height, text, WhiteButton_url, router } : ButtonWhiteInterface) {
    return (
        <div className={"whiteButton-container"}>
            <div className={"whiteButton-content"} onClick={() => {
                if (WhiteButton_url) router.push(WhiteButton_url);
            }} style={{ width: width, height: `${height + 10}px` }}>{text}</div>
        </div>
    )
};