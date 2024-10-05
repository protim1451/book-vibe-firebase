import About from "../About/About";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import ContactUs from "../Sections/ContactUs";
import HowItWorks from "../Sections/HowItWorks";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
            <HowItWorks></HowItWorks>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;