import type { NextPage } from 'next';
import Header from "../components/header/initial";
import Initials from "../components/landing/principal/initials";
import WhyUse from "../components/landing/principal/why-use";
import Plan from "../components/landing/principal/plan";
import HowDoesItWork from "../components/landing/principal/how-does-it-work";
import Organizations from "../components/landing/principal/organizations";
import Impact from "../components/landing/principal/Impact";
import OurTeam from "../components/landing/principal/our-teams";

const Home: NextPage = () => {
  return (
      <>
        <main>
          <Header />
          <Initials />
          <HowDoesItWork />
          <WhyUse />
          <Plan />
          <OurTeam />
          <Organizations />
          <Impact />
        </main>
      </>
  )
}

export default Home