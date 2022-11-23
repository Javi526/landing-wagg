import { useState } from "react";
import {ChangeEvent} from "react";
import ArrowSelect from "../../../assets/register/arrow-select.svg";
import Image from "next/image";
//import {TagSelect_option} from "../../../constants/tag-select";
//import {TagSelect_Option_Interface} from "../../../interface/tag-select";

type SelectProps = {
    width: number,
    height: number,
    label: string,
    placeholder: string
}

export default function Select({ width, height, label, placeholder } : SelectProps) {
    const [value, setValue] = useState("");

    return (
        <div className={"Input-container"} style={{ width }}>
            <div className={"Input-select-container"}>
                <Image src={ArrowSelect} width={12} height={6} alt={"ArrowSelect"} />
            </div>
            <label className={"Input-label-container"}>{label}</label>
            <input
                className={"input"}
                placeholder={placeholder}
                style={{ width, height, paddingLeft: 10, marginTop: 6, cursor: "pointer", background: "#ffffff" }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                value={value}
                disabled={true}
            />

        </div>
    )
}