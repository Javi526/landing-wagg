import type { NextPage } from 'next';
import Header from "../components/header/initial";
import Initials from "../components/landing/principal/initials";

const Home: NextPage = () => {
  return (
      <>
        <main>
          <Header />
          <Initials />
        </main>
      </>
  )
}

export default Home