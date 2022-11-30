import InputPrincipal from "../../common/input/input-principal";
import Select from "../../common/selects";
import ContentButtons from "../../common/content-buttons";
import Option from "../../common/option";

export default function EnterYourPetForm() {
    return (
        <div className={"EnterYourPetForm-container"}>
           <div className={"EnterYourPetForm-content"}>
               <p className={"EnterYourPetForm-content-title"}>Ingresá a tu mascota</p>
           </div>
            <div className={"EnterYourPetForm-content-item"}>
            <div className={"EnterYourPetForm-content-subtitle-container"}>
                <p className={"EnterYourPetForm-content-subtitle"}>Mascota 1</p>
            </div>
            <InputPrincipal
                width={"335px"}
                height={40}
                label={"Nombre de tu mascota"}
                placeholder={"Nombre de tu mascota"}
                validAccount={false}
            />
            <Option label={"Tipo de mascota"} />
            <InputPrincipal
                width={"335px"}
                height={40}
                label={"Raza"}
                placeholder={"Raza de tu mascota"}
                validAccount={false}
            />
            <InputPrincipal
                width={"335px"}
                height={40}
                label={"Fecha de nacimiento"}
                placeholder={"DD/MM/AAAA"}
                validAccount={false}
            />
            <Select
                width={"335px"}
                height={40}
                label={"Género"}
                placeholder={"Seleccióna el género"}
                select_data={[]}
            />
            <Select
                width={"335px"}
                height={40}
                label={"Castrado?"}
                placeholder={"Seleccióna el estado"}
                select_data={[]}
            />
            <ContentButtons
                width={"335px"}
                height={42}
                textConfirm={"Continuar"}
                textCancel={"Omitir paso"}
                question={false}
                questionText={""}
                questionLink={""}
                url={""}
                WhiteButton_url={" "}
                PurpleButton_url={""}
                margin={"11px 0 0 0"}
            />
        </div>
        </div>
    )
}