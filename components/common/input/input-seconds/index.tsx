import { useState, ChangeEvent } from "react";

type Props = {
    width: number,
    height: number,
    label: string,
    placeholder: string,
    validateCard: boolean
}

export default function InputSeconds({ width, height, label, placeholder, validateCard } : Props) {
    const [value, setValue] = useState("");
/*
    const CreditCard = (num: string) => {
       const data : string = num.replace(/(.{4})/g, "$1 ");
       setValue(data);
    };
*/
    return (
        <div className={"Input-container"}>
            {value &&
              <div className={"Input-seconds-label-container"}>
                <label className={"Input-seconds-label"}>{label}</label>
              </div>}
            <input
                className={"input-pay"}
                placeholder={placeholder}
                size={18}
                style={{ width, height, paddingLeft: 10, paddingTop: `${value ? "11px" : ""}` }}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>  setValue(e.target.value)}
                value={value}
            />
        </div>
    )
}