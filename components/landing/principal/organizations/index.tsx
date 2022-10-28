import Organizations_dog from "../../../../assets/landing/principal/organizations_dog.svg";
import Three_firule from "../../../../assets/landing/principal/three_firule.svg";
import I_want_to_be_part from "../../../../assets/landing/principal/I_want_to_be_part.svg";
import purple_cloud from "../../../../assets/landing/principal/purple_cloud.svg";
import cloud_small_purple from "../../../../assets/landing/principal/cloud-small-purple.svg";
import Image from "next/image";

export default function Organizations() {
       return (
           <div className={"Organizations-container"}>
             <div className={"Organizations-content-container"}>
                 <div className={"Organizations-content-img-purple_cloud-responsive"}>
                     <div className={"Organizations-content-img-purple_cloud"}>
                         <Image src={purple_cloud} width={134} height={379} alt={"purple_cloud"} />
                     </div>
                     <div className={"Organizations-content-img-cloud_small_purple"}>
                         <Image src={cloud_small_purple} width={97} height={137} alt={"cloud_small_purple"} />
                     </div>
                 </div>
                 <div className={"Organizations-content-img-I_want_to_be_part-responsive"}>
                 <div className={"Organizations-content-img-three-firule"}>
                     <Image src={Three_firule} width={64} height={76} alt={"Three_firule"} />
                 </div>
                 </div>
               <div className={"Organizations-content-data-container"}>
                 <div className={"Organizations-content-data-title-and-description-container"}>
                   <p className={"Organizations-content-data-title"}>Organizaciones PetFRIENDLY</p>
                   <p className={"Organizations-content-data-description"}>Sumá tu organización a la comunidad PETFRIENDLY de Wagg: accedé a beneficios como consultas 24/7 para tus empleados, charlas de nutrición y adiestramiento. Además, con tu suscripción Wagg estarás ayudando a un refugio!</p>
                     <div className={"Organizations-content-data-button-container"}>
                         <div className={"Organizations-content-data-button"}>Quiero saber mas!</div>
                     </div>
                 </div>
                   <div className={"Organizations-content-img-I_want_to_be_part-responsive"}>
                       <div className={"Organizations-content-img-I_want_to_be_part"}>
                           <Image src={I_want_to_be_part} width={148} height={285} alt={"I_want_to_be_part"} />
                       </div>
                   </div>
                   <div className={"Organizations-content-img-Organizations_dog-responsive"}>
                       <Image src={Organizations_dog} width={364} height={298} alt={"Organizations_dog"} />
                   </div>
               </div>
             </div>
           </div>
       )
}