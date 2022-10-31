import type { NextPage } from 'next';
import Header from "../../components/header/initial";
import Footer from "../../components/footer";
import TermsConditionsHeader from "../../components/terms-conditions/header";
import TermsConditionsContent from "../../components/terms-conditions/content/content";


const TermsConditions: NextPage = () => {
    return (
        <>
            <Header />
            <TermsConditionsHeader />
            <TermsConditionsContent />
            <Footer />
        </>
    )
}

export default TermsConditions;