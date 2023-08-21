import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"
import Copyright from "../components/Copyright";

function Contact() {
    return (
        <div>
            <NavBar/>
            <SectionTitle img={gradPic} title='Contact Us'/>
            <Copyright/>
        </div>
    );
};

export default Contact;