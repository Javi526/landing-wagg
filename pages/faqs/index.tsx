import type { NextPage } from 'next';
import FaqsHeader from "../../components/faqs/header";
import FaqsContent from "../../components/faqs/content";
import Header from "../../components/header/not-logged-in/initial";
import Footer from "../../components/footer";


const Faqs: NextPage = () => {
    return (
        <main>
         <Header />
         <FaqsHeader />
         <FaqsContent />
         <Footer />
        </main>
    )
}

export default Faqs