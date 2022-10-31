import type { NextPage } from 'next';
import FaqsHeader from "../../components/faqs/header";
import FaqsContent from "../../components/faqs/content";
import Header from "../../components/header/initial";
import Footer from "../../components/footer";


const Faqs: NextPage = () => {
    return (
        <>
         <Header />
         <FaqsHeader />
         <FaqsContent />
         <Footer />
        </>
    )
}

export default Faqs