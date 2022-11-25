import { NextPage } from "next";
import Header_LoggedIn from "../../components/header/logged-in";
import Tag from "../../components/common/tag";
import IconInfo from "../../assets/notification/icon-info.svg";
import DogSummary from "../../assets/account-summary/dog-summary.webp";
import DogSummaryTagPurple from "../../assets/account-summary/dog-summary-tag-purple.svg";
import Rating from "../../assets/account-summary/rating.svg";
import Image from "next/image";
import { handleChangeNameInitials } from "../../utils";

const text = `La salud de tu mascota no puede esperar.<strong> Recomendamos una visita presencial con un veterinario en las próximas 4 horas.</strong>`;
const notificationText = `Si después de esta consulta creés que tu mascota necesita ser atentida, no dudes en acercarte al centro veterinarios mas cercano. La salud de tu mascota es prioridad. Para mas información consulta nuestros <strong><a href="https://landing-wagg.vercel.app/terminos-y-condiciones">Términos y Condiciones.</a></strong>`;
const firstName = "María";
const lastName = "Fernández";

const AccountSummary: NextPage = () => {
    return (
        <main>
           <Header_LoggedIn name={"Paulina"} image={""} consultation={true} url={""} chat={false} />
            <div className={"AccountSummary-container"}>
               <p className={"AccountSummary-title"}>Resumen</p>
                <p className={"AccountSummary-subtitle"}>Motivo de consulta: Respiratorio</p>
                <div className={"AccountSummary-details-container"}>
                  <Tag width={"97px"} height={27} background={"#FDE5E5"} color={"#EB5757"} name={"Emergencia"} />
                  <div className={"AccountSummary-details-text-container"}>
                    <p className={"AccountSummary-details-text"} dangerouslySetInnerHTML={{ __html: text }} />
                  </div>
                  <div className={"AccountSummary-details-button-container"}>
                     <button className={"AccountSummary-details-button-history"}>Ver historial</button>
                     <button className={"AccountSummary-details-button-download"}>Descargar archivos</button>
                  </div>
                </div>
                <div className={"AccountSummary-message-container"}>
                  <div className={"AccountSummary-message-content"}>
                     <div className={"AccountSummary-message-content-img"}>
                         <Image src={IconInfo} width={13} height={12} alt={"IconInfo"} />
                     </div>
                      <p className={"AccountSummary-message-p"} dangerouslySetInnerHTML={{ __html: notificationText }} />
                  </div>
                </div>
                <div className={"AccountSummary-comment-container"}>
                  <div className={"AccountSummary-comment-content"}>
                  <div className={"AccountSummary-comment"}>
                     <div className={"AccountSummary-comment-user"}>
                         <div className={"AccountSummary-comment-user-logo"}>
                            <p className={"AccountSummary-comment-user-logo-p"}>{handleChangeNameInitials({ firstName, lastName })}</p>
                         </div>
                         <div className={"AccountSummary-comment-user-text"}>
                             <p className={"AccountSummary-comment-user-text-p"}>Fuiste atendido por <br/>  {firstName} {lastName}</p>
                         </div>
                     </div>
                     <div className={"AccountSummary-rating-container"}>
                       <p className={"AccountSummary-rating-p"}>¿Cómo podrías calificar tu experiencia?</p>
                       <div className={"AccountSummary-rating-content"}>
                           <Image src={Rating} width={28} height={26} alt={"rating"} />
                           <Image src={Rating} width={28} height={26} alt={"rating"} />
                           <Image src={Rating} width={28} height={26} alt={"rating"} />
                           <Image src={Rating} width={28} height={26} alt={"rating"} />
                           <Image src={Rating} width={28} height={26} alt={"rating"} />
                       </div>
                       <p className={"AccountSummary-rating-p"}>¿Te gustaría dejar un comentario extra?</p>
                       <div className={"AccountSummary-textarea-container"}>
                           <textarea
                               className={"AccountSummary-textarea"}
                               placeholder={"Escribe un comentario"}
                           />
                       </div>
                     </div>
                  </div>
                  <div className={"AccountSummary-image"}>
                    <div className={"AccountSummary-image-purple"}>
                      <Image src={DogSummaryTagPurple} width={76} height={69} alt={"DogSummaryTagPurple"} />
                    </div>
                      <div className={"AccountSummary-image-DogSummary"}>
                          <Image src={DogSummary} width={597} height={582} alt={"DogSummary"} />
                      </div>
                  </div>
                </div>
                </div>
            </div>
        </main>
    )
};

export default AccountSummary;
