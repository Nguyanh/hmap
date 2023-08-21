import NavBar from "../components/NavBar";
import Program from "../components/Program";
import SectionWhite from "../components/SectionWhite";
import SectionGray from "../components/SectionGray";
import Copyright from "../components/Copyright";
import TitleScreen from "../components/TitleScreen";

function Home(props) {
    // Headers
    const aboutHeader = "About Us";
    const programsHeader = "What We Do";
    const alumniHeader = "Alumni Testimonials";


    // Content and descriptions
    const aboutCont = "HMAP was created in 1984 by four UC Berkeley undergraduates with the goal to introduce Berkeley students to ethical issues and philosophical dilemmas related to the fields of health and medicine. The results of their efforts are three subprograms: Health Service Internship (HSI), the class Public Health 116 (PH116), and the Field Study Internship (FSI). An entirely student-run organization, HMAP continues to expose students to a broad spectrum of experiences and opportunities, covering many facets of health and medicine while emphasizing participatory learning.";
    const programsCont = () => 
        <div>
            <Program icon="" name="" description=""/>
            <Program />
        </div>
    ;
    const alumniCont = () =>
        <div>
            {/* Carousel here */}
        </div>
    ;


    return (
        <div>
            <NavBar/>
            <TitleScreen/>
            <SectionWhite
                header={aboutHeader}
                content={aboutCont}
            />
            <SectionGray
                header={programsHeader}
                content={programsCont}
            />
            <SectionWhite
                header={alumniHeader}
                content={alumniCont}
            />
            <Copyright/>
        </div>
    );
};

export default Home;