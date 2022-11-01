import { InputPasswordPrincipalInterface } from "../../../../interface/common";

export default function PasswordPrincipal({ width, height, label, labelPassword, placeholder } : InputPasswordPrincipalInterface) {
    return (
        <div className={"Input-container"}>
            <div className={"Input-text-container"} style={{ width }}>
                <label className={"Input-label-container"}>{label}</label>
                <label className={"Input-label-password-container"}>{labelPassword}</label>
            </div>
            <input
                placeholder={placeholder}
                style={{ width, height, paddingLeft: 10 }}
            />
        </div>
    )
}