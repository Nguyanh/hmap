import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"
import SectionWhite from "../components/SectionWhite";
import SectionGray from "../components/SectionGray";
import Copyright from "../components/Copyright";

function PH116() {
    const aboutHeader = "About Us";
    const meetTeamHeader = "Meet the Team";
    const joinUsHeader = "Join Us";
    const testimonialHeader = "Student Testimonials";
    const connectHeader = "Connect With Us";

    const aboutCont = () =>
        <div>
            <p>
                Public Health 116 is a 3-unit course that introduces students to broad ethical issues in public health. This is an introductory course and is open to students across all majors. Many topics in the course are interdisciplinary and assignments often value the input of different academic perspectives.
            </p>
            <p>
                Our class meets Monday from 4-6 PM, and has a 1 hour discussion section each week. Every student that enrolls is guaranteed placement in the class (up to 200). We encourage you to enroll! Thousands of public health students over the past 12 years have taken this course, and have learned how to engage with difficult ethical dilemmas in public health.
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
                Become a PH 116 TA!
            </h5>
            <p>
                Applications for Spring 2022 are now CLOSED! Please check back at the end of the semester for further updates.
            </p>
            <p>
                Requirements:
                <ul>
                    <li>
                        Must have passed Public Health 116 lecture and section.
                    </li>
                    <li>
                        Must submit application. Late applications will not be considered.
                    </li>
                    <li>
                        Applications must include:
                        <ul>
                            <li>
                                Questions: Please complete the questions on the application form and be prepared to dicuss them at your interview.
                            </li>
                            <li>
                                TA Letter of Recommendation: You will need a letter of recommendation from your PH116 TA. Please notify your TA as soon as possible of your intent to apply. The sooner you notify your TA, the more time your TA has to write you a quality letter of recommendation. Your TA will turn in your recommendation directly to our program.
                            </li>
                        </ul>
                    </li>
                    <li>
                        30 minute Interview
                    </li>
                    <li>
                        For more information please read the application.
                    </li>
                </ul>
            </p>
        </div>
    ;
    const testimonialCont = () =>
        <div>
            <p>
                <i>
                    “Topics and section activities are fun and interesting Atmosphere is conductive to learning, and the class is well paced.”
                </i>
            </p>
            <p>
                <i>
                    “My TA prompts students to answer questions and can lead group discussions well. Group-work is also done in a timely manner and she always asks if students want more time or not to discuss. Overall, she encourages students to share experiences, ideas, and opinions in a welcoming, inclusive classroom environment.”
                </i>
            </p>
            <p>
                <i>
                    “Exams are fair and TAs do a great job of preparing students to understand and apply the material academically and to their own lives.”
                </i>
            </p>
            <p>
                <i>
                    “TAs and class coordinators care about students. Very motivational and helps students see different approaches to topics. Presents relevant info, makes discussion interesting, informative, makes discussion seamless. Very good at leading discussion, putting everyone at ease, being inclusive, and conducting intimate group discussions.”
                </i>
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
            <SectionTitle img={gradPic} title='Public Health 116'/>
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
                header={testimonialHeader}
                content={testimonialCont()}
            />
            <SectionWhite
                header={connectHeader}
                content={connectCont()}
            />
            <Copyright/>
        </div>
    );
};

export default PH116;