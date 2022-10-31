import { termConditionsData } from "../../../constants/term-conditions";
import { termConditionsDataInterface } from "../../../interface/term-conditions";

export default function TermsConditionsContent() {
    return (
        <div className={"TermsConditionsContent-container"}>
        <div className={"TermsConditionsContent-content-container"}>
            <p className={"TermsConditionsContent-title"}>Términos y Condiciones (título de la sección)</p>
            <div className={"TermsConditionsContent-items-container"}>
                {termConditionsData.map((data: termConditionsDataInterface) => (
                    <div className={"TermsConditionsContent-items"} key={data.id}>
                        <p className={"TermsConditionsContent-items-title"}>{data.title}</p>
                        <p className={"TermsConditionsContent-items-text"} dangerouslySetInnerHTML={{ __html: data.text }} />
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}