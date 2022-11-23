import { ButtonPurpleInterface } from "../../../interface/common";

export default function PurpleButton({ width, height, text, PurpleButton_url, router, disabled } : ButtonPurpleInterface) {
    const handleChangeStatus = disabled ? "PurpleButton-content-disabled" : "PurpleButton-content";
    return (
        <div className={"PurpleButton-container"}>
            <button className={handleChangeStatus} onClick={() => {
                if (PurpleButton_url) router.push(PurpleButton_url);
            }} style={{ width: width, height }} disabled={disabled}>{text}</button>
        </div>
    )
}