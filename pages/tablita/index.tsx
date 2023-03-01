import { NextPage } from "next";
import Chat_Ended from "../../assets/small-board/chat_ended.svg";
import Header_LoggedIn from "../../components/header/logged-in";
import Image from "next/image";
import Select from "../../components/common/selects";
import TagSelect from "../../components/common/tag-select";
import { TagSelect_Item, TagSelect_State, TagSelect_option } from "../../constants/tag-select";
import { TagSelect_Item_Interface, TagSelect_State_Interface } from "../../interface/tag-select";
import PurpleButton from "../../components/common/buttons/purple-button";
import { useRouter } from "next/router";
import { useState } from "react";


const SmallBoard: NextPage = () => {
    const [selected, setSelected] = useState<TagSelect_State_Interface>(TagSelect_State);
    const [disabled, setDisabled] = useState<boolean>(true);
    const router = useRouter();


    return (
        <main>
          <Header_LoggedIn name={"Marina"} image={""} consultation={false} url={""} chat={false} />
          <div className={"SmallBoard-container"}>
             <div className={"SmallBoard-container-content-img-chat"}>
                <Image src={Chat_Ended} width={211} height={45} alt={"Chat_Ended"} />
             </div>
             <div className={"SmallBoard-container-content"}>
                <p className={"SmallBoard-container-content-title"}>Resumen de la Consulta</p>
                <p className={"SmallBoard-container-content-subtitle"}>Es hora de calificar y reportar el estado de la mascota. Seleccioná una opción y considerá que el padre de mascota leerá los pasos a seguir una vez finalizada la consulta.</p>
                <div className={"SmallBoard-select"}>
                    <Select width={"100%"} height={40} label={"Motivo de consulta"} placeholder={"Seleccionar"} select_data={TagSelect_option} />
                </div>
                <div className={"SmallBoard-table-header"}>
                   <p className={"SmallBoard-table-header-title"}>Estado</p>
                    <p className={"SmallBoard-table-header-title"}>¿Qué significa?</p>
                    <p className={"SmallBoard-table-header-title"}>Pasos a seguir</p>
                    <p className={"SmallBoard-table-header-title"}>Selección</p>
                </div>
             </div>
             <div className={"SmallBoard-container-content-expand"}>
                 <div className={"SmallBoard-tagSelect-container"}>
                     {TagSelect_Item.map((data: TagSelect_Item_Interface) => (
                         <div key={data.id}>
                             <TagSelect
                                 id={data.id}
                                 textOne={data.textOne}
                                 textTwo={data.textTwo}
                                 textThree={data.textThree}
                                 background={data.background}
                                 padding={"0 0 0 22px"}
                                 border={`1px solid ${data.border}`}
                                 selected={selected}
                                 setSelected={setSelected}
                                 setDisabled={setDisabled}
                             />
                         </div>
                     ))}
                 </div>
                 <div className={"SmallBoard-button-container"}>
                   <div className={"SmallBoard-button-content-container"}>
                       <PurpleButton
                           width={"100%"}
                           height={44}
                           text={"Continuar"}
                           router={router}
                           PurpleButton_url={""}
                           disabled={disabled}
                       />
                   </div>
                 </div>
             </div>
          </div>
        </main>
    )
}

export default SmallBoard;
