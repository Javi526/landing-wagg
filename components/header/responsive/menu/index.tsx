import { HeaderResponsive, MenuInterface } from "../../../../interface/header/initial";
import { menu } from "../../../../constants/header/initial/navbar";
import { ROUTER } from "../../../../constants/router";

export default function ResponsiveMenu({ router } : HeaderResponsive) {
    return (
        <div className={"ResponsiveMenu-container"}>
           <div className={"ResponsiveMenu-content"}>
               {menu.map((data: MenuInterface) => (
                   <div className={"ResponsiveMenu-text-container"} key={data.id}>
                       <p className={"ResponsiveMenu-text"}>{data.name}
                           {data.id === 5 && <strong className={"ResponsiveMenu-text-login"} onClick={() => router.push(ROUTER.login)}>Ingresá</strong>}
                       </p>
                   </div>
               ))}
           </div>
        </div>
    )
}