import { useState } from "react";
import { Tabs, Tabs_Plan_basic, Tabs_Plan_day, Tabs_Plan_week } from "../../../../constants/landing/principal";
import { TabsInterface, Tabs_Plan_Interface } from "../../../../interface/landing/principal";
import Checkbox_circle from "../../../../assets/landing/principal/checkbox_circle.svg";
import Checkbox_circle_Purple from "../../../../assets/landing/principal/checkbox_circle_purple.svg";
import Aks_us from "../../../../assets/landing/principal/ask-us.svg";
import I_am_organization from "../../../../assets/landing/principal/I-am-organization.svg";
import I_am_a_pet_parent from "../../../../assets/landing/principal/I_am_a_pet_parent.svg";
import Bar_lilac from "../../../../assets/landing/principal/bar_lilac.svg";
import Arrow_yellow_plan from "../../../../assets/landing/principal/arrow-yellow-plan.svg";
import Green_mave from "../../../../assets/landing/principal/green_mave.svg";
import House from "../../../../assets/landing/principal/house.svg";
import Sky_blue_firule from "../../../../assets/landing/principal/sky_blue_firule.svg";
import Image from "next/image";

export default function Plan() {
    const [type, setType] = useState("Organizaciones");
    const [tab, setTab] = useState(1);

    const handleChangeClassName = (title : string) : string => {
          if (type === title) return "Plan-content-tabs-title-selected";
          return "Plan-content-tabs-title";
    };

    const handleChangeClassNameTabs = (value : number) : string => {
        if (tab === value) return "Plan-content-tabs-select-content-cicle-select";
        return "Plan-content-tabs-select-content-cicle";
    };

    return (
        <div className={"Plan-container"}>
            <div className={"Plan-content"}>
                {type === "Organizaciones" &&
                 <>
                  <div className={"Plan-content-img-I_am_organization-container"}>
                    <Image src={I_am_organization} width={350} height={215} alt={"I_am_organization"}/>
                  </div>
                     {/*<div className={"Plan-content-img-Green_mave-container"}>
                         <Image src={Green_mave} alt={"Green_mave"}/>
                     </div>*/}
                 </>
                }
                {type === "Padres de mascotas" &&
                 <>
                     <div className={"Plan-content-img-I_am_a_pet_parent-container"}>
                         <Image src={I_am_a_pet_parent} width={278} height={108} alt={"I_am_a_pet_parent"}/>
                     </div>
                     <div className={"Plan-content-img-Bar_lilac-container"}>
                         <Image src={Bar_lilac} width={195} height={234} alt={"Bar_lilac"}/>
                     </div>
                     {/*<div className={"Plan-content-img-Sky_blue_firule-container"}>
                         <Image src={Sky_blue_firule} alt={"Sky_blue_firule"}/>
                     </div>*/}
                     {/*<div className={"Plan-content-img-House-container"}>
                         <Image src={House} alt={"House"}/>
                     </div>*/}
                 </>
                }
                <div className={"Plan-content-img-Arrow_yellow_plan-container"}>
                    <Image src={Arrow_yellow_plan} width={119} height={101} alt={"Arrow_yellow_plan"}/>
                </div>
              <p className={"Plan-content-title"}>Planes</p>
            </div>
            <div className={"Plan-content-tabs-container"}>
                <div className={"Plan-content-tabs-line-container"} />
                <div className={"Plan-content-tabs-title-container"}>
                    {Tabs.map((data: TabsInterface) => (
                        <p className={handleChangeClassName(data.title)} key={data.id} onClick={() => setType(data.title)}>{data.title}</p>
                    ))}
                </div>
            </div>
            {type === "Organizaciones" && <div className={"Plan-content-tabs-container"}>
                <div className={"Plan-content-tabs-card-basic"}>
                    <div className={"Plan-content-tabs-card-basic-left"}>
                    <p className={"Plan-content-tabs-card-basic-title"}>{Tabs_Plan_basic.title}</p>
                    <div className={"Plan-content-tabs-card-basic-price-and-time-container"}>
                        <p className={"Plan-content-tabs-card-basic-price"}>{Tabs_Plan_basic.price}</p>
                        <p className={"Plan-content-tabs-card-basic-time"}>/ {Tabs_Plan_basic.time}</p>
                    </div>
                    <p className={"Plan-content-tabs-card-basic-description"}>{Tabs_Plan_basic.description}</p>
                    <div className={"Plan-content-tabs-card-basic-item-container"}>
                        {Tabs_Plan_basic.item.map((data : Tabs_Plan_Interface) => (
                            <div className={"Plan-content-tabs-card-basic-item"} key={data.id}>
                                <Image src={Checkbox_circle} width={19} height={19} alt={"Checkbox_circle"} />
                                <p className={"Plan-content-tabs-card-basic-item-text"}>{data.text}</p>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div className={"Plan-content-tabs-card-basic-img-Aks-us"}>
                        <Image src={Aks_us} width={131} height={49} alt={"Aks_us"} />
                    </div>
                    <div className={"Plan-content-tabs-card-basic-button-container"}>
                      <div className={"Plan-content-tabs-card-basic-button"}>Obtener plan</div>
                    </div>
                </div>
            </div>}
            {type === "Padres de mascotas" &&
                <div className={"Plan-content-container-day-and-week-container"}>
                    <div className={"Plan-content-container-day-and-week-content"}>
                       <div className={`Plan-content-container-day-and-week-item ${tab !== 1 && "Plan-content-week-item-not-visible"}`}>
                           <div className={"Plan-content-tabs-card-day-and-week-left"}>
                           <p className={"Plan-content-tabs-card-day-title"}>{Tabs_Plan_day.title}</p>
                           <div className={"Plan-content-tabs-card-day-price-and-time-container"}>
                               <p className={"Plan-content-tabs-card-day-price"}>{Tabs_Plan_day.price}</p>
                               <p className={"Plan-content-tabs-card-day-time"}>/ {Tabs_Plan_day.time}</p>
                           </div>
                           <div className={"Plan-content-tabs-card-day-item-container"}>
                               {Tabs_Plan_day.item.map((data: Tabs_Plan_Interface) => (
                                   <div className={"Plan-content-tabs-card-day-item"} key={data.id}>
                                       <Image src={Checkbox_circle_Purple} width={24} height={25} alt={"Checkbox_circle_Purple"} />
                                       <p className={"Plan-content-tabs-card-day-item-text"}>{data.text}</p>
                                   </div>
                               ))}
                           </div>
                       </div>
                           <div className={"Plan-content-tabs-card-day-button-container"}>
                               <div className={"Plan-content-tabs-card-day-button"}>Obtener plan</div>
                           </div>
                       </div>
                        <div className={`Plan-content-container-day-and-week-item ${tab !== 2 && "Plan-content-week-item-not-visible"}`}>
                            <div className={"Plan-content-tabs-card-day-and-week-left"}>
                                <p className={"Plan-content-tabs-card-day-title"}>{Tabs_Plan_week.title}</p>
                                <div className={"Plan-content-tabs-card-day-price-and-time-container"}>
                                    <p className={"Plan-content-tabs-card-day-price"}>{Tabs_Plan_week.price}</p>
                                    <p className={"Plan-content-tabs-card-day-time"}>/ {Tabs_Plan_week.time}</p>
                                </div>
                                <div className={"Plan-content-tabs-card-day-item-container"}>
                                    {Tabs_Plan_week.item.map((data: Tabs_Plan_Interface) => (
                                        <div className={"Plan-content-tabs-card-day-item"} key={data.id}>
                                            <Image src={Checkbox_circle_Purple} width={24} height={25} alt={"Checkbox_circle_Purple"} />
                                            <p className={"Plan-content-tabs-card-day-item-text"}>{data.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={"Plan-content-tabs-card-week-button-container"}>
                                <div className={"Plan-content-tabs-card-day-button"}>Obtener plan</div>
                            </div>
                        </div>
                    </div>
                </div>}
            {type === "Padres de mascotas" && <div className={"Plan-content-tabs-select-container"}>
                <div className={"Plan-content-tabs-select-content"}>
                    <div className={handleChangeClassNameTabs(1)} onClick={() => setTab(1)}/>
                    <div className={handleChangeClassNameTabs(2)} onClick={() => setTab(2)}/>
                </div>
            </div>}
        </div>
    )
}