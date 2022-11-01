import { ButtonsInterface } from "../../../interface/common";
import PurpleButton from "../buttons/purple-button";
import WhiteButton from "../buttons/white-button";
import TextRegister from "../text-register";

export default function ContentButtons({ width, height, textConfirm, textCancel, question, questionText, questionLink } : ButtonsInterface) {
         return (
             <div className={"ContentButtons-container"}>
                 <PurpleButton width={width} height={height} text={textConfirm} />
                 <WhiteButton width={width} height={height} text={textCancel} />
                 {question && <TextRegister questionText={questionText} questionLink={questionLink} />}
             </div>
         )
};