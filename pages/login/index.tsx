import { NextPage } from "next";
import LoginForm from "../../components/login/form";
import LoginIntro from "../../components/login/intro";

const Login: NextPage = () => {
    return (
        <main>
         <div className={"login-container"}>
           <div className={"login-content"}>
             <LoginForm />
             <LoginIntro/>
           </div>
         </div>
        </main>
    )
};

export default Login