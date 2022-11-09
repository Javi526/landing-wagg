import Header_LoggedIn from "../../components/header/logged-in";
import BarPlan from "../../components/bar/plan";
import EnterYourPetForm from "../../components/enter-your-pet/form-tsx";

export default function IngresaATuMascota() {
    return (
        <div>
            <Header_LoggedIn name={"Paulina"} image={""} />
            <BarPlan />
            <div className={"IngresaATuMascota-container"}>
                <EnterYourPetForm />
            </div>
        </div>
    )
}