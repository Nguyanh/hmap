import NavBar from "../components/NavBar";
import Program from "../components/Program"; // TEST
import SectionWhite from "../components/SectionWhite";
import SectionGray from "../components/SectionGray";
import Copyright from "../components/Copyright";

function Home(props) {
    return (
        <div>
            <NavBar/>
            <Program/>{/* TEST */}
            <SectionWhite
                header="About Us"
                content="HMAP was created in 1984 by four UC Berkeley undergraduates with the goal to introduce Berkeley students to ethical issues and philosophical dilemmas related to the fields of health and medicine. The results of their efforts are three subprograms: Health Service Internship (HSI), the class Public Health 116 (PH116), and the Field Study Internship (FSI). An entirely student-run organization, HMAP continues to expose students to a broad spectrum of experiences and opportunities, covering many facets of health and medicine while emphasizing participatory learning."
            />
            <SectionGray
                header="What We Do"
                content='PLACEHOLDER'
            />
            <Copyright/>
        </div>
    );
};

export default Home;