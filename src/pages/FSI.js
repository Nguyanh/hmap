import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"
import SectionWhite from "../components/SectionWhite";
import SectionGray from "../components/SectionGray";
import Copyright from "../components/Copyright";

function FSI() {
    const aboutHeader = "About Us";
    const meetTeamHeader = "Meet the Team";
    const joinUsHeader = "Join Us";
    const connectHeader = "Connect With Us";

    const aboutCont = () =>
        <div>
            <p>
                The Field Study Internship is a three-unit class designed to acquaint UC Berkeley undergraduate students with the role of health professionals in the community. We strive to increase the student’s awareness of current social, ethical, and political issues in medicine. In addition to attending weekly discussion sections to address these issues students also are assigned to shadow health professionals and witness the medical setting first hand.
            </p>
            <p>
                During the twelve-week-long placement students are provided with the unique opportunity experience the day-to-day workings of the medical profession and see how physicians interact with their patients, colleagues, nurses, and hospital administration. Interns observe as well as interact with these physicians as they deal with patients, ethical issues, paper work, and problems in their daily practices. Field Study Interns are required to shadow their preceptors for a minimum of 6-8 hours per week and attend a weekly two-hour discussion section. Throughout the semester the intern is required to complete writing assignments, a weekly journal, projects, oral presentations, program evaluations, and events.
            </p>
            <p>
                In its 28 years of operation, the program has gained support from fourteen University of California departments and earned national acclaim by AAMC. The success of the program is owed to the time and knowledge contributed by our preceptors.
            </p>
            <p>
                For more info, contact the FSI coordinator at fsicoordinator@berkeley.edu
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
                Become an FSI Intern!
            </h5>
            <p>
                Applications for the Spring 2024 semester will open beginning of October 2023. Please check back for more information and the application form at a later date!
            </p>
            <h5>
                Become a FSI TA!
            </h5>
            <p>
                Applications to join the Fall 2022 FSI TA team are currently CLOSED! If you would like more information about the new recruitment cycle for FSI TAs, please contact us at fsicoordinator@berkeley.edu.
            </p>
            <p>
                We hope interns continue their involvement and learning in the FSI program by becoming teaching assistants.
            </p>
            <p>
                Requirements:
                <ul>
                    <li>
                        Must be enrolled as a UC Berkeley undergraduate student
                    </li>
                    <li>
                        Must have been previously enrolled in the Field Study Internship program for 1 semester prior to applying
                    </li>
                    <li>
                        Complete written applications
                    </li>
                    <li>
                        Interview signup slots will be emailed. Applicants offered interviews must sign up for an interview.
                    </li>
                    <li>
                        30-minute interviews will be conducted.
                    </li>
                    <li>
                        If you have any additional questions, please contact the FSI coordinator at fsicoordinator@berkeley.edu
                    </li>
                </ul>
            </p>
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
            <SectionTitle img={gradPic} title='Field Study Internship'/>
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
                header={connectHeader}
                content={connectCont()}
            />
            <Copyright/>
        </div>
    );
};

export default FSI;