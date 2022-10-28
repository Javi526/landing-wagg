//import Header from "../../components/header/initial";

import Initials from "../../components/landing/principal/initials";
import Header from "../../components/header/initial";
import HowDoesItWork from "../../components/landing/principal/how-does-it-work";
import WhyUse from "../../components/landing/principal/why-use";
import Plan from "../../components/landing/principal/plan";
import OurTeam from "../../components/landing/principal/our-teams";
import Organizations from "../../components/landing/principal/organizations";
import Impact from "../../components/landing/principal/Impact";

export default function TermsConditions() {
    return (
        <div className={""}>
            <Header />
            <Initials />
            <HowDoesItWork />
            <WhyUse />
            <Plan />
            <OurTeam />
            <Organizations />
            <Impact />
        </div>
    )
}