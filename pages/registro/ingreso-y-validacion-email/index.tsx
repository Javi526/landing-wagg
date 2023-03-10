import {NextPage} from "next";
import RegisterText from "../../../components/common/register/register-text";
import InputPrincipal from "../../../components/common/input/input-principal";
import ContentButtons from "../../../components/common/content-buttons";
import {ROUTER} from "../../../constants/router";

const EmailEntryAndValidation : NextPage = () => {
    return (
        <div className={"register-container"}>
            <RegisterText
                title={"Crea una cuenta"}
                subTitle={"Ingresá tus datos para acceder a tu cuenta Wagg y a hablar con un veterinario"}
                imageRegister={true}
                imageArrowYellow={false}
                icon={true}
                padding={"0 2.3rem"}
            />
            <div className={"register-content"}>
                <InputPrincipal
                    width={"156px"}
                    height={40}
                    label={"Nombre"}
                    placeholder={"Tu nombre"}
                    validAccount={false}
                />
                <InputPrincipal
                    width={"156px"}
                    height={40}
                    label={"Apellido"}
                    placeholder={"Tu apellido"}
                    validAccount={false}
                />
            </div>
            <InputPrincipal
                width={"326px"}
                height={40}
                label={"Email"}
                placeholder={"Ingresá tu email"}
                validAccount={false}
            />
            <ContentButtons
                width={"326px"}
                height={42}
                textConfirm={"Continuar"}
                textCancel={"Atrás"}
                question={true}
                questionText={"¿Ya tenés cuenta?"}
                questionLink={"Iniciar Sesión"}
                url={ROUTER.login}
                WhiteButton_url={ROUTER.login}
                PurpleButton_url={ROUTER.CompanyUserValidation}
                margin={"22px 0 0 0"}
            />
        </div>
    )
};

export default EmailEntryAndValidation