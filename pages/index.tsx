import type { NextPage } from 'next';
import Header from "../components/header/initial";
import Initials from "../components/landing/principal/initials";
import HowDoesItWork from "../components/landing/principal/how-does-it-work";
import WhyUse from "../components/landing/principal/why-use";
import Plan from "../components/landing/principal/plan";
import OurTeam from "../components/landing/principal/our-teams";
import Organizations from "../components/landing/principal/organizations";
import Impact from "../components/landing/principal/Impact";
import Footer from "../components/footer";

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
          <Footer />
        </main>
      </>
  )
}

export default Home