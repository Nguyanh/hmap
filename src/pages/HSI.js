import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"
import SectionWhite from "../components/SectionWhite";
import SectionGray from "../components/SectionGray";
import Copyright from "../components/Copyright";

function HSI() {
    const aboutHeader = "About Us";
    const meetTeamHeader = "Meet the Team";
    const joinUsHeader = "Join Us";
    const placementsHeader = "Past HSI Placements"
    const connectHeader = "Connect With Us";

    const aboutCont = () =>
        <div>
            <p>
                The Health Service Internship (HSI) program is dedicated to service and community engagement in underserved populations in the Bay Area. It is a 3-unit, Pass/No Pass semester-long program that places students in internshipswith community and non-profit organizations throughout the Bay, with emphasis on public health.
            </p>
            <p>
                This is not a clinical internship, but instead interns will be involved in non-profit organizations where they will work with administrative staff. Past internships have ranged across a variety of interests, including but not limited to internships with youth mentorship programs, resource centers for cancer patients, food justice organizations, and refugee health centers. Intern duties can also vary and are determined by the organizations and their needs, and interns can gain exposure to methods such as direct service provision, health education campaigns and public policy/advocacy, to name a few. Coupled with the 6-8 hour a week internship, students attend a weekly 2 hour section where they discuss major issues in the field of public health. This class offers the intimacy and confidentiality necessary to approach public health from an unbiased, holistic angle. Participation in the program involves engaging in a dialogue regarding systemic health inequities and encouraging community participation in public health-oriented solutions.
            </p>
        </div>
    ;
    const meetTeamCont = () =>
        <div>
            {/* Air table here */}
        </div>
    ;
    const joinUsCont = () =>
        <div>
            <h5>
                Become a HSI Intern!
            </h5>
            <p>
                Applications to be an intern for Fall 2023 are closed! Please bookmark this page or sign up for our mailing list for more updates to apply for Spring 2024.
            </p>
            <p>
                Watch the Recording of Our Infosession or look over the Infosession Slides for more information!
            </p>
            <h5>
                Become a HSI TA!
            </h5>
            <p>
                Teaching Assistant applications for Fall 2023 are now closed! If you are interested in joining our team, please email hsicoordinator@berkeley.edu for access to the application or reach out to your current TAs.
            </p>
            <p>
                HSI TAs design lesson plans, choose reader materials, and help develop a constructive and welcoming learning environment for interns. It provides an unparalleled opportunity to pass on your valuable public health knowledge and mentor students in the program while building leadership skills and connecting to our broad network of alumni in various fields and stages of our careers!
            </p>
            <p>
                Requirements:
                <ul>
                    <li>
                        Must have been an intern within the last 2 internship cycles (Spring 2023, Fall 2022)
                    </li>
                    <li>
                        Must be an undergraduate student at UC Berkeley during Fall 2023 Semester
                    </li>
                </ul>
            </p>
        </div>
    ;
    const placementCont = () =>
        <div>
            {/* Placement Icons Here */}
        </div>
    ;        
    const connectCont = () =>
        <div>
            {/* Social Media Icons Here */}
        </div>
    ;

    return (
        <div>
            <NavBar/>
            <SectionTitle img={gradPic} title='Health Service Internship'/>
            <SectionWhite
                header={aboutHeader}
                content={aboutCont()}
            />
            <SectionGray
                header={meetTeamHeader}
                content={meetTeamCont()}
            />
            <SectionWhite
                header={joinUsHeader}
                content={joinUsCont()}
            />
            <SectionGray
                header={placementsHeader}
                content={placementCont()}
            />
            <SectionWhite
                header={connectHeader}
                content={connectCont()}
            />
            <Copyright/>
        </div>
    );
};

export default HSI;