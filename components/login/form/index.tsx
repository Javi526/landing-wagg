import Logo from "../../header/initial/logo";
import InputPrincipal from "../../common/input/input-principal";
import PasswordPrincipal from "../../common/input/password";
import ContentButtons from "../../common/content-buttons";


export default function LoginForm() {
    return (
        <div className={"LoginForm-container"}>
            <div className={"LoginForm-content"}>
              <div className={`LoginForm-logo`}>
                  <Logo />
              </div>
              <div className={`LoginIntro-content-title-container`}>
                  <div className={"LoginIntro-content-title-content"}>
                      <p className={"LoginForm-content-title"}>Iniciá sesión</p>
                  </div>
                  <div className={"LoginForm-content-buttons"}>
                      <InputPrincipal
                          width={311}
                          height={40}
                          label={"Email"}
                          placeholder={"Ingresá tu email"}
                          validAccount={false}
                      />
                      <PasswordPrincipal
                          width={311}
                          height={40}
                          label={"Contraseña"}
                          placeholder={"Ingresá tu contraseña"}
                          labelPassword={"Olvidé mi contraseña"}
                      />
                      <ContentButtons
                          width={311}
                          height={42}
                          textConfirm={"Iniciar sesión"}
                          textCancel={"Cancelar"}
                          question={true}
                          questionText={"¿No tenés cuenta?"}
                          questionLink={"Registrate"}
                      />
                  </div>
              </div>
            </div>
        </div>
    )
}