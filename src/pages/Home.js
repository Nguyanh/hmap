import NavBar from "../components/NavBar";
import Program from "../components/Program";
import SectionWhite from "../components/SectionWhite";
import SectionGray from "../components/SectionGray";
import Copyright from "../components/Copyright";
import TitleScreen from "../components/TitleScreen";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function Home(props) {
    // Main headers
    const aboutHeader = "About Us";
    const programsHeader = "What We Do";
    const alumniHeader = "Alumni Testimonials";

    // Program info
    const hsiIcon = <i class="bi bi-briefcase-fill"></i>;
    const phIcon = <i class="bi bi-briefcase-fill"></i>;
    const fieldIcon = <i class="bi bi-briefcase-fill"></i>;
    const hsiTitle ="Health Service Internship";
    const phTitle = "Public Health 116";
    const fieldTitle = "Field Study Internship";
    const hsiDes = "Become involved in the community! Work directly with public health organizations throughout the Bay Area and attend 2-hour weekly discussion sections.";
    const phDes = "Learn about issues and perspectives directly related to health and medicine. Enroll in a 3-unit, P/NP seminar involving a 2-hour lecture (Monday 4-6pm) from guest speakers and a 1-hour discussion.";
    const fieldDes = "Earn shadowing experience! Observe and interact with physicians in your fields of interest (e.g. pediatrics, urology, obstetrics, cardiology, plastic surgery, etc.).";

    // Content
    const aboutCont = "HMAP was created in 1984 by four UC Berkeley undergraduates with the goal to introduce Berkeley students to ethical issues and philosophical dilemmas related to the fields of health and medicine. The results of their efforts are three subprograms: Health Service Internship (HSI), the class Public Health 116 (PH116), and the Field Study Internship (FSI). An entirely student-run organization, HMAP continues to expose students to a broad spectrum of experiences and opportunities, covering many facets of health and medicine while emphasizing participatory learning.";
    const programsCont = () => 
        <Row xs={1} md={3} className="g-4">
            <Col key={1}><Program icon={hsiIcon} name={hsiTitle} description={hsiDes}/></Col>
            <Col key={2}><Program icon={phIcon} name={phTitle} description={phDes}/></Col>
            <Col key={3}><Program icon={fieldIcon} name={fieldTitle} description={fieldDes}/></Col>
        </Row>
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
                content={programsCont()}
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