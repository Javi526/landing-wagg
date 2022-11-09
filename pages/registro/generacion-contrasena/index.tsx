import {NextPage} from "next";
import RegisterText from "../../../components/common/register/register-text";
import InputPrincipal from "../../../components/common/input/input-principal";
import ContentButtons from "../../../components/common/content-buttons";
import {ROUTER} from "../../../constants/router";

const PasswordGeneration: NextPage = () => {
    return (
        <div className={"register-container"}>
            <RegisterText
                title={"Crea una contraseña"}
                subTitle={"Generá una contraseña segura para poder acceder a tu cuenta en el futuro."}
                imageRegister={true}
                imageArrowYellow={false}
                icon={true}
                padding={"0 2.3rem"}
            />
            <InputPrincipal
                width={326}
                height={40}
                label={"Crear nueva contraseña"}
                placeholder={"Nueva contraseña"}
                validAccount={false}
            />
            <InputPrincipal
                width={326}
                height={40}
                label={"Repetir contraseña"}
                placeholder={"Repetir nueva contraseña"}
                validAccount={false}
            />
            <ContentButtons
                width={"326px"}
                height={42}
                textConfirm={"Crear cuenta"}
                textCancel={"Atrás"}
                question={true}
                questionText={"¿Ya tenés cuenta?"}
                questionLink={"Iniciar Sesión"}
                url={ROUTER.login}
                WhiteButton_url={ROUTER.CompanyUserValidation}
                PurpleButton_url={""}
                margin={"11px 0 0 0"}
            />
        </div>
    )
};

export default PasswordGeneration