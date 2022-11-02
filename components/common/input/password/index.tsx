import { InputPasswordPrincipalInterface } from "../../../../interface/common";
import { useRouter } from "next/router";
import { ROUTER } from "../../../../constants/router";
import {ChangeEvent, useState} from "react";

export default function PasswordPrincipal({ width, height, label, labelPassword, placeholder } : InputPasswordPrincipalInterface) {
    const [value, setValue] = useState("");
    const router = useRouter();

    return (
        <div className={"Input-container"}>
            <div className={"Input-text-container"} style={{ width }}>
                <label className={"Input-label-container"}>{label}</label>
                <label className={"Input-label-password-container"} onClick={() => router.push(ROUTER.forget_password)}>{labelPassword}</label>
            </div>
            <input
                className={"input"}
                placeholder={placeholder}
                style={{ width, height, paddingLeft: 10, marginTop: 6 }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                value={value}
            />
        </div>
    )
}