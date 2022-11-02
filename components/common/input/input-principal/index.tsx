import { InputPrincipalInterface } from "../../../../interface/common";
import { useState, ChangeEvent } from "react";

export default function InputPrincipal({ width, height, label, placeholder, validAccount } : InputPrincipalInterface) {
    const [value, setValue] = useState("");

    return (
        <div className={"Input-container"}>
          <label className={"Input-label-container"}>{label}</label>
            <input
                className={"input"}
                placeholder={placeholder}
                style={{ width, height, paddingLeft: 10, marginTop: 6 }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                value={value}
            />
            {validAccount &&
                <div className={"Input-label-validation-container"}>
                    <label className={"Input-label-validation-text"}>Cuenta empresa. Continuá para crear tu contraseña.</label>
                </div>}
        </div>
    )
}