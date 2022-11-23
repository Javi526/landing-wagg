import { ButtonsInterface } from "../../../interface/common";
import PurpleButton from "../buttons/purple-button";
import WhiteButton from "../buttons/white-button";
import TextRegister from "../text-register";
import { useRouter } from "next/router";

export default function ContentButtons({ width, height, textConfirm, textCancel, question, questionText, questionLink, url, PurpleButton_url, WhiteButton_url, margin } : ButtonsInterface) {
    const router = useRouter();
         return (
             <div className={"ContentButtons-container"} style={{ margin }}>
                 <PurpleButton width={width} height={height} text={textConfirm} router={router} PurpleButton_url={PurpleButton_url} disabled={true} />
                 <WhiteButton width={width} height={height} text={textCancel} router={router} WhiteButton_url={WhiteButton_url} />
                 {question && <TextRegister questionText={questionText} questionLink={questionLink} url={url} />}
             </div>
         )
};