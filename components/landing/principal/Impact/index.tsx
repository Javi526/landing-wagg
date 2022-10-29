import Image from "next/image";
import Checkbox_circle_Purple from "../../../../assets/landing/principal/checkbox_circle_purple.svg";
import DogAndCat from "../../../../assets/landing/principal/dog-and-cat.svg";
import Refugee from "../../../../assets/landing/principal/refugee.svg";
import Spiral_yellow from "../../../../assets/landing/principal/spiral_yellow.svg";
import Join from "../../../../assets/landing/principal/join.svg";
import PartYellow from "../../../../assets/landing/principal/part-yellow.svg";
import PartGreen from "../../../../assets/landing/principal/part-green.svg";
import { Impact_Data } from "../../../../constants/landing/principal";
import { Impact_Data_Interface } from "../../../../interface/landing/principal";
import dog_full from "../../../../assets/landing/principal/dog_full.svg";

export default function Impact() {
    return (
        <div className={"Impact-container"}>
          <div className={"Impact-content-container"}>
              <div className={"Impact-content-img-join"}>
                  <Image src={Join} width={292} height={94} alt={"Join"} />
              </div>
              <div className={"Impact-content-part-yellow"}>
                  <Image src={PartYellow} width={191} height={192} alt={"PartYellow"} />
              </div>
              <div className={"Impact-content-img-part-green"}>
                  <Image src={PartGreen} width={175} height={159} alt={"PartGreen"} />
              </div>
              <p className={"Impact-content-title"}>Impacto Wagg</p>
              <div className={"Impact-content-img-spiral-yellow"}>
                  <Image src={Spiral_yellow} width={238} height={95} alt={"Spiral_yellow"} />
              </div>
              <p className={"Impact-content-description"}>Con cada suscripción estas ayudando a un refugio de mascotas. En Wagg queremos sumar nuestro granito de arena para que todos los animales tengan una mejor calidad de vida. Ofrecemos:</p>
              <p className={"Impact-content-description-p2"}>Ofrecemos:</p>
              <div className={"Impact-content-img-DogAndCat"}>
                  <Image src={DogAndCat} width={711} height={512} alt={"DogAndCat"} />
              </div>
              <div className={""}>
                  {Impact_Data.map((data: Impact_Data_Interface) => (
                      <div className={"Impact-content-item-container"} key={data.id}>
                          <Image src={Checkbox_circle_Purple} width={24} height={25} alt={"Checkbox_circle_Purple"} />
                          <p className={"Impact-content-item-title"}>{data.text}</p>
                      </div>
                  ))}
              </div>
              <div className={"Impact-content-img"}>
                  <Image src={Refugee} width={282} height={128} alt={"Refugee"} />
              </div>
              <div className={"Impact-content-input-container"}>
                  <p className={"Impact-content-input-label"}>Email</p>
                  <input className={"Impact-content-input"} placeholder={"Ingresá tu email y te contactamos!"} />
                  <button className={"Impact-content-button"}>Enviar</button>
              </div>
              <div className={"Impact-content-input-container-responsive"}>
                  <Image src={dog_full} width={328} height={332} alt={"dog_full"} />
              </div>
          </div>
        </div>
    )
}