import Glass from "../../../assets/chat/glass.svg";
import Check from "../../../assets/chat/check.svg";
import Image from "next/image";
import {useState} from "react";
import { handleChangeNameInitials } from "../../../utils";
import {contactItemClose, contactItemOpen} from "../../../constants/chat";
import {contactItemInterface} from "../../../interface/chat";


export default function ChatContact() {
    const [tab, setTab] = useState("open");
    const handleChangeClassName = (value: string) : string => tab === value ? "ChatContact-tab-active" : "ChatContact-tab";

    return (
        <div className={"ChatContact-container"}>
          <div className={"ChatContact-search-container"}>
            <div className={"ChatContact-image-glass"}>
              <Image src={Glass} width={16} height={16} alt={"ChatContact-glass"} />
            </div>
            <input className={"ChatContact-search"} placeholder={"Buscar chat"} />
          </div>
          <div className={"ChatContact-tab-container"}>
             <div className={handleChangeClassName("open")} onClick={() => setTab("open")}>
               <p className={"ChatContact-tab-p"}>Abiertos (14)</p>
             </div>
             <div className={handleChangeClassName("close")} onClick={() => setTab("close")}>
                 <p className={"ChatContact-tab-p"}>Cerrados (4)</p>
             </div>
          </div>
          <div className={"ChatContact-item-container"}>
              {tab === "open" &&
                  <>
                  {contactItemOpen.map((data : contactItemInterface) => {
                      const firstName : string = data.firstName;
                      const lastName: string = data.lastName;
                       return  (
                          <div className={"ChatContact-item"} key={data.id}>
                              <div className={"ChatContact-item-status"} style={{ backgroundColor: `${data.status}` }} />
                              <div className={"ChatContact-item-details"}>
                                  <div className={"ChatContact-item-data"}>
                                      <div className={"ChatContact-item-data-user"}>
                                          <p className={"ChatContact-item-data-user-p"}>{handleChangeNameInitials({
                                              firstName,
                                              lastName
                                          })}</p>
                                      </div>
                                      <div className={"ChatContact-item-data-name-description-container"}>
                                          <p className={"ChatContact-item-data-name-p"}>{firstName} {lastName}</p>
                                          <div className={"ChatContact-item-data-description-container"}>
                                              <Image src={Check} width={10} height={7} alt={"ChatContact-Check"}/>
                                              <p className={"ChatContact-item-data-description-p"}>{data.description}</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className={"ChatContact-item-data-time-and-count"}>
                                      <p className={"ChatContact-item-data-time"}>{data.time}</p>
                                      <div className={"ChatContact-item-data-count"} style={{ background: `${Number(data.count) ? "#6E66CC" : "transparent"}` }}>
                                          <p className={"ChatContact-item-data-count-p"}>{Number(data.count) ? Number(data.count) : ""}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      )
                  })}
               </>
              }
              {tab === "close" &&
                  <>
                      {contactItemClose.map((p : contactItemInterface) => {
                          const firstName : string = p.firstName;
                          const lastName: string = p.lastName;
                          return  (
                              <div className={"ChatContact-item"} key={p.id}>
                                  <div className={"ChatContact-item-status"} style={{ backgroundColor: `${p.status}` }} />
                                  <div className={"ChatContact-item-details"}>
                                      <div className={"ChatContact-item-data"}>
                                          <div className={"ChatContact-item-data-user"}>
                                              <p className={"ChatContact-item-data-user-p"}>{handleChangeNameInitials({
                                                  firstName,
                                                  lastName
                                              })}</p>
                                          </div>
                                          <div className={"ChatContact-item-data-name-description-container"}>
                                              <p className={"ChatContact-item-data-name-p"}>{firstName} {lastName}</p>
                                              <div className={"ChatContact-item-data-description-container"}>
                                                  <Image src={Check} width={10} height={7} alt={"ChatContact-Check"}/>
                                                  <p className={"ChatContact-item-data-description-p"}>Paulina: Mi perro
                                                      está con
                                                      vómitos</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className={"ChatContact-item-data-time-and-count"}>
                                          <p className={"ChatContact-item-data-time"}>{p.time}</p>
                                          <div className={"ChatContact-item-data-count"} style={{ background: `${Number(p.count) ? "#6E66CC" : "transparent"}` }}>
                                              <p className={"ChatContact-item-data-count-p"}>{Number(p.count) ? Number(p.count) : ""}</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          )
                      })}
                  </>
              }
          </div>
        </div>
    )
}