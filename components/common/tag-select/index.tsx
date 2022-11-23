import { TagSelect_State_Interface, Type_TagSelect_State_Id } from "../../../interface/tag-select";
import { TagSelect_State } from "../../../constants/tag-select";

type Props = {
    id: Type_TagSelect_State_Id,
    textOne: string,
    textTwo: string,
    textThree: string,
    background: string,
    border: string,
    padding: string,
    selected: TagSelect_State_Interface,
    setSelected: any,
    setDisabled: any
};

export default function TagSelect({ id, textOne, textTwo, textThree, background, padding, selected, setSelected, setDisabled, border } : Props) {
    const valueSelect = selected[`select_item${id}`];
    const ClassNameType = valueSelect ? "TagSelect-container-selected" : "TagSelect-container-select";

    return (
        <div className={ClassNameType} style={{ padding, background, ...(valueSelect && { border }) }} onClick={() => {
            setSelected(() => ({
                ...TagSelect_State,
                [`select_item${id}`]: true
            }));
            setDisabled(false);
        }}>
          <p className={"TagSelect-p1"}>{textOne}</p>
          <p className={"TagSelect-p2"}>{textTwo}</p>
          <p className={"TagSelect-p3"} dangerouslySetInnerHTML={{ __html: textThree }} />
          <div className={"TagSelect-check-container"}>
             <div className={"TagSelect-check"}>
                 {valueSelect && <div className={"TagSelect-checked "} />}
             </div>
          </div>
        </div>
    )
}