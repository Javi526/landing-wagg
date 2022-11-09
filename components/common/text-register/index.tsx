import { useRouter } from "next/router";
import {ROUTER} from "../../../constants/router";

export default function TextRegister({ questionText, questionLink, url } : { questionText: string, questionLink: string, url: string }) {
    const router = useRouter();
    const pathLogin = router.pathname === ROUTER.login ? "64px" : "220px";
    return (
        <div className={"TextRegister-container"} style={{ marginBottom: pathLogin }}>
            <p className={"ResponsiveMenu-text"}>
                {questionText}
                <strong className={"ResponsiveMenu-text-login"} onClick={() => {
                  if (url) router.push(url)
                }}>{questionLink}</strong>
            </p>
        </div>
    )
}