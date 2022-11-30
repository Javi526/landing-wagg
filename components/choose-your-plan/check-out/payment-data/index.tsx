import InputPrincipal from "../../../common/input/input-principal";
import Select from "../../../common/selects";
import InputSeconds from "../../../common/input/input-seconds";
import Image from "next/image";
import Visa from "../../../../assets/card/visa.svg";
import Mastercard from "../../../../assets/card/mastercard.svg";
import Master from "../../../../assets/card/master.svg";
import SSL from "../../../../assets/card/ssl.svg";

export default function PaymentData() {
    return (
        <div className={"PaymentData-container"}>
          <p className={"PaymentData-title"}>Datos de pago</p>
            <InputPrincipal
               width={"335px"}
               height={40}
               label={"Correo electrónico"}
               placeholder={"Ingresá tu correo electrónico"}
               validAccount={false}
            />
            <div className={"CheckOut-content-container"}>
                <Select
                    width={"136px"}
                    height={40}
                    label={"Documento"}
                    placeholder={"Tipo"}
                    select_data={[]}
                />
                <InputPrincipal
                    width={"184px"}
                    height={40}
                    label={"Número de documento"}
                    placeholder={"Número"}
                    validAccount={false}
                />
            </div>
            <div>
                <p className={"PaymentData-title"}>Detalles de la tarjetas</p>
                <InputSeconds
                    width={335}
                    height={48}
                    label={"Nombre en la tarjeta"}
                    placeholder={"Nombre en la tarjeta"}
                    validateCard={false}
                />
                <InputSeconds
                    width={335}
                    height={48}
                    label={"Número de tarjeta"}
                    placeholder={"Número de tarjeta"}
                    validateCard={true}
                />
                <div className={"CheckOut-content-container"}>
                    <InputSeconds
                        width={161}
                        height={48}
                        label={"MM/AA"}
                        placeholder={"MM/AA"}
                        validateCard={false}
                    />
                    <InputSeconds
                        width={161}
                        height={48}
                        label={"CVV"}
                        placeholder={"CVV"}
                        validateCard={false}
                    />
                </div>
            </div>
            <div className={"card-container"}>
                <div className={"card-visa"}>
                    <Image src={Visa} width={25} height={7} alt={"card-visa"} />
                </div>
                <div className={"card-mastercard"}>
                    <Image src={Mastercard} width={19} height={16} alt={"card-mastercard"} />
                </div>
                <div className={"card-mastercard"}>
                    <Image src={Master} width={20} height={16} alt={"card-master"} />
                </div>
                <Image src={SSL} width={52} height={23} alt={"ssl"} />
            </div>
        </div>
    )
}