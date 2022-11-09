import { NextPage } from "next";
import { Register } from "../../../../interface/register";
import Logo from "../../../header/not-logged-in/initial/logo";
import Image from "next/image";
import register_arrow_yellow from "../../../../assets/register/register-arrow-yellow.svg"
import registerImg from "../../../../assets/register/register.svg"


const RegisterText: NextPage<Register> = ({title, subTitle, imageRegister, imageArrowYellow, icon, padding }) => {
    const IconShow = icon && `🎉`;
    return (
        <>
            <div className={"RegisterText"}>
               <Logo />
            </div>
        <div className={"register-content-text-container"}>
            <p className={"register-content-text-title"}>{title}</p>
            <p className={"register-content-text-subtitle"} style={{ padding }}>{subTitle} {IconShow}</p>
        </div>
            {imageArrowYellow &&
                <div className={"register_arrow_yellow-container"}>
                 <Image src={register_arrow_yellow} width={47} height={69} alt={"register_arrow_yellow"}/>
               </div>}
            {imageRegister &&
                <div className={"register-img-container"}>
                 <Image src={registerImg} width={594} height={290} alt={"registerImg"}/>
               </div>}
        </>
    )
};

export default RegisterText;