import { useState } from "react";
import {ChangeEvent} from "react";
import ArrowSelect from "../../../assets/register/arrow-select.svg";
import Image from "next/image";

type SelectProps = {
    width: string,
    height: number,
    label: string,
    placeholder: string,
    select_data: any
}

export default function Select({ width, height, label, placeholder, select_data } : SelectProps) {
    const [value, setValue] = useState("");

    return (
        <div className={"Input-container"} style={{ width }}>
            <div className={"select-remove-arrow"} />
            <div className={"Input-select-container"}>
                <Image src={ArrowSelect} width={12} height={6} alt={"ArrowSelect"} />
            </div>
            <label className={"Input-label-container"}>{label}</label>
            <select
                className={"select"}
                placeholder={placeholder}
                style={{ width, height, paddingLeft: 10, marginTop: 6, cursor: "pointer", background: "#ffffff" }}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)}
                value={value}
            >
                <option value="">{placeholder}</option>
                {select_data.map((data: any) => (
                    <option key={data.id} value={data.value} onClick={() => setValue(data.value)}>{data.value}</option>
                ))}
            </select>
        </div>
    )
}