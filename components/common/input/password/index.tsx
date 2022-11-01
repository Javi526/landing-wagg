import { InputPasswordPrincipalInterface } from "../../../../interface/common";

export default function PasswordPrincipal({ width, height, label, labelPassword, placeholder, setKeyboard } : InputPasswordPrincipalInterface) {
    return (
        <div className={"Input-container"}>
            <div className={"Input-text-container"} style={{ width }}>
                <label className={"Input-label-container"}>{label}</label>
                <label className={"Input-label-password-container"}>{labelPassword}</label>
            </div>
            <input
                className={"input"}
                placeholder={placeholder}
                style={{ width, height, paddingLeft: 10, marginTop: 6 }}
                onClick={() => {
                    window?.visualViewport?.addEventListener('resize', () => {
                        setKeyboard(true);
                    });
                }}
                onFocus={() => {
                    window?.visualViewport?.addEventListener('resize', () => {
                        setKeyboard(true);
                    });
                }}
                onBlur={() => {
                    window?.visualViewport?.addEventListener('resize', () => {
                        setKeyboard(true);
                    });
                }}
            />
        </div>
    )
}