
type routerInterface = {
    terms_conditions: string,
    faqs: string,
    login: string,
    forget_password: string,
    EmailEntryAndValidation: string,
    RestorePassword: string,
    CompanyUserValidation: string,
    PasswordGeneration: string,
    MyPets: string,
    LastConsultation: string,
    Landing: string
}

export const ROUTER: routerInterface = {
    terms_conditions: "/terminos-y-condiciones",
    faqs: "/faqs",
    login: "/login",
    forget_password: "/olvide-contrasena",
    EmailEntryAndValidation: "/registro/ingreso-y-validacion-email",
    RestorePassword: "/restablecer-contrasena",
    CompanyUserValidation: "/registro/validacion-usuario-empresa",
    PasswordGeneration: "/registro/generacion-contrasena",
    MyPets: "/mi-mascotas",
    LastConsultation: "/ultima-consulta",
    Landing: "/"
}