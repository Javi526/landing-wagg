import { ButtonPurpleInterface } from "../../../interface/common";

export default function PurpleButton({ width, height, text, PurpleButton_url, router } : ButtonPurpleInterface) {
    return (
        <div className={"PurpleButton-container"}>
            <div className={"PurpleButton-content"} onClick={() => {
                if (PurpleButton_url) router.push(PurpleButton_url);
            }} style={{ width: width, height }}>{text}</div>
        </div>
    )
}