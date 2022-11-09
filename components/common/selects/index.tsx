//import { useState } from "react";

type SelectProps = {
    width: number,
    height: number,
    label: string,
    placeholder: string
}

export default function Select({ width, height, label } : SelectProps) {
    //const [value, setValue] = useState("");

    return (
        <div className={"Input-container"}>
            <label className={"Input-label-container"}>{label}</label>
            <select
                className={"select"}
                style={{ width, height, paddingLeft: 10, marginTop: 6 }}
               // onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)}
                value={""}
            >
                <option value={label}>{label}</option>
            </select>
        </div>
    )
}