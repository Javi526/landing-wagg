import { InputPrincipalInterface } from "../../../../interface/common";

export default function InputPrincipal({ width, height, label, placeholder, setKeyboard } : InputPrincipalInterface) {
    return (
        <div className={"Input-container"}>
          <label className={"Input-label-container"}>{label}</label>
            <input
                className={"input"}
                placeholder={placeholder}
                style={{ width, height, paddingLeft: 10, marginTop: 6 }}
                onClick={() => setKeyboard(true)}
                onFocus={() => setKeyboard(true)}
                onBlur={() => setKeyboard(false)}
            />
        </div>
    )
}