import { InputPrincipalInterface } from "../../../../interface/common";

export default function InputPrincipal({ width, height, label, placeholder } : InputPrincipalInterface) {
    return (
        <div className={"Input-container"}>
          <label className={"Input-label-container"}>{label}</label>
            <input
                placeholder={placeholder}
                style={{ width, height, paddingLeft: 10 }}
            />
        </div>
    )
}