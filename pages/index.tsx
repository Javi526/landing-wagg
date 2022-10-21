import type { NextPage } from 'next';
import Header from "../components/header/initial";
import Initials from "../components/landing/principal/initials";
import WhyUse from "../components/landing/principal/why-use";

const Home: NextPage = () => {
  return (
      <>
        <main>
          <Header />
          <Initials />
          <WhyUse />
        </main>
      </>
  )
}

export default Home