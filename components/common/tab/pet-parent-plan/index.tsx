import {
    ClassName_Landing,
    ClassName_Type,
    ClassName_SelectPlan,
    PetParentPlanArray
} from "../../../../constants/landing/principal";
import { Tabs_Plan_Interface, Tabs_ClassName_Interface, PetParentPlanArray_Interface } from "../../../../interface/landing/principal";
import Checkbox_circle_Purple from "../../../../assets/landing/principal/checkbox_circle_purple.svg";
import Image from "next/image";

type PetParentProps = {
    tab: number,
    nameButton: string,
    landing: boolean
};

const handleChangeClassName = (landing: boolean) : Tabs_ClassName_Interface => {
    if (landing) return ClassName_Landing;
    return ClassName_SelectPlan;
};

export default function PetParentPlanCard({ tab, nameButton, landing } : PetParentProps) {
    return (
        <div className={"Plan-content-container-day-and-week-container"} style={{ marginTop: `${landing ? "18px": "32px"}` }}>
            <div className={`${landing ? "Plan-content-container-day-and-week-content" : "Plan-content-container-day-and-week-content-select"}`}>
                {PetParentPlanArray.map((p: PetParentPlanArray_Interface) => (
                 <div className={`${handleChangeClassName(landing).Plan_content_item} ${ClassName_Type.Not_visible(tab, p.tabType)}`} key={p.id}>
                    <div className={"Plan-content-tabs-card-day-and-week-left"}>
                        <p className={"Plan-content-tabs-card-day-title"}>{p.description.title}</p>
                        <div className={"Plan-content-tabs-card-day-price-and-time-container"}>
                            <p className={"Plan-content-tabs-card-day-price"}>{p.description.price}</p>
                            <p className={"Plan-content-tabs-card-day-time"}>/ {p.description.time}</p>
                        </div>
                        <div className={"Plan-content-tabs-card-day-item-container"}>
                            {p.description.item.map((data: Tabs_Plan_Interface) => (
                                <div className={"Plan-content-tabs-card-day-item"} key={data.id}>
                                    <Image src={Checkbox_circle_Purple} width={24} height={25} alt={"Checkbox_circle_Purple"}/>
                                    <p className={"Plan-content-tabs-card-day-item-text"}>{data.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`${handleChangeClassName(landing).Plan_content_button_container}`}>
                        <div className={`${handleChangeClassName(landing).Plan_content_button}`}>{nameButton}</div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}