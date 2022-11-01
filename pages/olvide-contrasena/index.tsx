import { NextPage } from "next";
import ContentButtons from "../../components/common/content-buttons";
import RegisterText from "../../components/common/register/register-text";
import InputPrincipal from "../../components/common/input/input-principal";

const ForgetPassword: NextPage = () => {
    return (
        <div className={"register-container"}>
            <RegisterText
               title={"¿Olvidaste tu contraseña?"}
               subTitle={"Ingresá tu email y te enviaremos todas las instrucciones para que puedas restablecer tu contraseña"}
               imageRegister={false}
               imageArrowYellow={true}
               icon={false}
               padding={"0"}
            />
            <InputPrincipal
                width={326}
                height={40}
                label={"Email"}
                placeholder={"Ingresá tu email asociado a Wagg"}
                validAccount={false}
            />
            <ContentButtons
                width={326}
                height={42}
                textConfirm={"Continuar"}
                textCancel={"Atras"}
                question={false}
                questionText={""}
                questionLink={""}
            />
        </div>
    )
}

export default ForgetPassword;