import {NextPage} from "next";
import RegisterText from "../../components/common/register/register-text";
import ContentButtons from "../../components/common/content-buttons";
import InputPrincipal from "../../components/common/input/input-principal";

const RestorePassword: NextPage = () => {
    return (
        <div className={"register-container"}>
            <RegisterText
                title={"Restablecer contraseña"}
                subTitle={"Creá una nueva contraseña segura para recuperar el acceso a tu cuenta Wagg"}
                imageRegister={false}
                imageArrowYellow={true}
                icon={false}
                padding={"0"}
            />
            <InputPrincipal
                width={326}
                height={40}
                label={"Nueva contraseña"}
                placeholder={"Contraseña"}
                validAccount={false}
            />
            <InputPrincipal
                width={326}
                height={40}
                label={"Repetir contraseña"}
                placeholder={"Contraseña"}
                validAccount={false}
            />
            <ContentButtons
                width={"326px"}
                height={42}
                textConfirm={"Continuar"}
                textCancel={"Atras"}
                question={false}
                questionText={"¿Ya tenés cuenta?"}
                questionLink={"Iniciar Sesión"}
                url={""}
                WhiteButton_url={""}
                PurpleButton_url={""}
                margin={"26px 0 0 0"}
            />
        </div>
    )
}

export default RestorePassword;