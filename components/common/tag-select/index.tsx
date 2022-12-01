import { TagSelect_State_Interface, Type_TagSelect_State_Id } from "../../../interface/tag-select";
import { TagSelect_State } from "../../../constants/tag-select";
import Arrow from "../../../assets/small-board/arrow.svg";
import Image from "next/image";

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

    const handleChangeSelected = () => {
        setSelected(() => ({
            ...TagSelect_State,
            [`select_item${id}`]: true
        }));
        setDisabled(false);
    }

    const styles = {
        padding,
        background,
        ...(valueSelect && { border })
    };

    const styleMobile = {
        background,
        ...(!valueSelect && { border }),
        ...(valueSelect && {
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0
        })
    };

    return (
        <>
        <div className={ClassNameType} style={styles} onClick={() => handleChangeSelected()}>
          <p className={"TagSelect-p1"}>{textOne}</p>
          <p className={"TagSelect-p2"}>{textTwo}</p>
          <p className={"TagSelect-p3"} dangerouslySetInnerHTML={{ __html: textThree }} />
          <div className={"TagSelect-check-container"}>
             <div className={"TagSelect-check"}>
                 {valueSelect && <div className={"TagSelect-checked "} />}
             </div>
          </div>
        </div>
        <div className={"TagSelect-mobile-container"} onClick={() => handleChangeSelected()}>
           <div className={"TagSelect-mobile-content-container"} style={styleMobile}>
               <div className={"TagSelect-mobile-content-select"}>
               <div className={"TagSelect-check-container"}>
                   <div className={"TagSelect-check"}>
                       {valueSelect && <div className={"TagSelect-checked "} />}
                   </div>
               </div>
               <p className={"TagSelect-p1"}>{textOne}</p>
               </div>
               <div style={{ transform: `rotate(${valueSelect ? "180deg" : "0deg"})` }}>
                 <Image src={Arrow} width={14} height={8} alt={"TagSelect-mobile-arrow"} />
               </div>
           </div>
            {valueSelect &&
            <div className={"TagSelect-mobile-description"} style={{background}}>
                <p className={"TagSelect-p2"} style={{width: "100%"}}>{textTwo}</p>
                <p className={"TagSelect-p3"} style={{width: "100%", marginTop: 24}}
                   dangerouslySetInnerHTML={{__html: textThree}}/>
            </div>}
        </div>
      </>
    )
}