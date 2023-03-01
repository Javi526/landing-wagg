import Logo from "../../header/not-logged-in/initial/logo";
import InputPrincipal from "../../common/input/input-principal";
import PasswordPrincipal from "../../common/input/password";
import ContentButtons from "../../common/content-buttons";
import { ROUTER } from "../../../constants/router";
import { useFormik } from "formik";
import * as yup from 'yup';


export default function LoginForm() {

    const handleOnSubmit = () => {};

    const FilesDataFormSchema = yup.object().shape({
        username: yup.string().required('Este campo es requerido'),
        password: yup.string().required('Este campo es requerido')
    });

    const { values, setFieldValue, touched, errors, submitForm, resetForm } = useFormik({
        initialValues,
        onSubmit: handleOnSubmit,
        validationSchema: FilesDataFormSchema,
    });

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
                          width={"311px"}
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
                          width={"311px"}
                          height={42}
                          textConfirm={"Iniciar sesión"}
                          textCancel={"Cancelar"}
                          question={true}
                          questionText={"¿No tenés cuenta?"}
                          questionLink={"Registrate"}
                          url={ROUTER.EmailEntryAndValidation}
                          WhiteButton_url={ROUTER.Landing}
                          PurpleButton_url={""}
                          margin={"23.69px 0 0 0"}
                      />
                  </div>
              </div>
            </div>
        </div>
    )
}