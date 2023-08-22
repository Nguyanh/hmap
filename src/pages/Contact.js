import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"
import Copyright from "../components/Copyright";
import SectionWhite from "../components/SectionWhite";

function Contact() {
    const connectHeader = "Contact Information";

    const connectCont = () =>
        <div>
            <p>Coordinators: Darpa Anireddy and Angikaar Chana</p>

            <p>General Coordinator of all programs and budgeting</p>

            <li>Email: hmap@berkeley.edu</li>
            <li>Callink: https://callink.berkeley.edu/organization/hmap</li>
        </div>;
    return (
        <div>
            <NavBar/>
            <SectionTitle img={gradPic} title='Contact Us'/>
            <SectionWhite header = {connectHeader} content = {connectCont()}/>
            <Copyright/>
        </div>
    );
};

export default Contact;