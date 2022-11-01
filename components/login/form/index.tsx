import Logo from "../../header/initial/logo";
import SelectPrincipal from "../../common/input/input-principal";
import PasswordPrincipal from "../../common/input/password";
import ContentButtons from "../../common/content-buttons";
import { useState } from "react";

export default function LoginForm() {
    const [keyboard, setKeyboard] = useState(false);
    console.log("keyboard", keyboard)
    return (
        <div className={"LoginForm-container"}>
            <div className={"LoginForm-content"}>
              <div className={`LoginForm-logo ${keyboard && "LoginForm-logo-position-mobile"}`}>
                  <Logo />
              </div>
              <div className={`LoginIntro-content-title-container ${keyboard && "LoginForm-content-buttons-position-mobile"}`}>
                  <div className={"LoginIntro-content-title-content"}>
                      <p className={"LoginForm-content-title"}>Iniciá sesión</p>
                  </div>
                  <div className={"LoginForm-content-buttons"}>
                      <SelectPrincipal
                          width={311}
                          height={40}
                          label={"Email"}
                          placeholder={"Ingresá tu email"}
                          setKeyboard={setKeyboard}
                      />
                      <PasswordPrincipal
                          width={311}
                          height={40}
                          label={"Contraseña"}
                          placeholder={"Ingresá tu contraseña"}
                          labelPassword={"Olvidé mi contraseña"}
                          setKeyboard={setKeyboard}
                      />
                      <ContentButtons
                          width={311}
                          height={42}
                          textConfirm={"Iniciar sesión"}
                          textCancel={"Cancelar"}
                      />
                  </div>
              </div>
            </div>
        </div>
    )
}