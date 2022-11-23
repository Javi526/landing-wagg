import PurpleButton from "../../../common/buttons/purple-button";
import {useRouter} from "next/router";

const text = `Iniciando la membresía estás aceptando los <a href="https://landing-wagg.vercel.app/terminos-y-condiciones">Términos y Condiciones</a> y <a href="">Política de Privacidad</a> Wagg. Recordá que podés cancelar tu plan en todo momento.`
export default function PaymentPlan() {
    const router = useRouter()
    return (
        <div className={"PaymentPlan-plan-container"}>
          <div className={"PaymentPlan-plan-description"}>
              <p className={"PaymentPlan-plan-description-title"}>Tu plan</p>
              <div className={"PaymentPlan-plan-description-item-container"}>
                  <div className={"PaymentPlan-plan-description-item"}>
                      <p className={"PaymentPlan-plan-description-item-text"}>Plan Base Wagg</p>
                      <p className={"PaymentPlan-plan-description-item-value"}>$800.00</p>
                  </div>
                  <div className={"PaymentPlan-plan-description-item"}>
                      <p className={"PaymentPlan-plan-description-item-text"}>Suscripción</p>
                      <p className={"PaymentPlan-plan-description-item-value"}>Mensual</p>
                  </div>
              </div>
              <div className={"PaymentPlan-line"} />
              <div className={"PaymentPlan-plan-description-total-container"}>
                  <p className={"PaymentPlan-plan-description-total"}>Total $800.00</p>
              </div>
          </div>
          <div className={"PaymentPlan-button-container"}>
              <PurpleButton width={"100%"} height={40} text={"Pagar"} router={router} PurpleButton_url={""} disabled={true} />
          </div>
          <div className={"PaymentPlan-term-container"}>
              <p className={"PaymentPlan-term-text"} dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
    )
}