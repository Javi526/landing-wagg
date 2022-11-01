import {ROUTER} from "../../../constants/router";

export default function TextRegister({ questionText, questionLink } : { questionText: string, questionLink: string }) {
    return (
        <div className={"TextRegister-container"}>
            <p className={"ResponsiveMenu-text"}>
                {questionText}
                <strong className={"ResponsiveMenu-text-login"}>{questionLink}</strong>
            </p>
        </div>
    )
}