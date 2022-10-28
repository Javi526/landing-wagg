import { MenuInterface } from "../../../../interface/header/initial";
import { menu } from "../../../../constants/header/initial/navbar";

export default function ResponsiveMenu() {
    return (
        <div className={"ResponsiveMenu-container"}>
           <div className={"ResponsiveMenu-content"}>
               {menu.map((data: MenuInterface) => (
                   <div className={"ResponsiveMenu-text-container"} key={data.id}>
                       <p className={"ResponsiveMenu-text"}>{data.name}
                           {data.id === 5 && <strong className={"ResponsiveMenu-text-login"}>Ingresá</strong>}
                       </p>
                   </div>
               ))}
           </div>
        </div>
    )
}