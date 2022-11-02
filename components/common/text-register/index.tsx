import { useRouter } from "next/router";

export default function TextRegister({ questionText, questionLink, url } : { questionText: string, questionLink: string, url: string }) {
    const router = useRouter();
    return (
        <div className={"TextRegister-container"}>
            <p className={"ResponsiveMenu-text"}>
                {questionText}
                <strong className={"ResponsiveMenu-text-login"} onClick={() => {
                  if (url) router.push(url)
                }}>{questionLink}</strong>
            </p>
        </div>
    )
}