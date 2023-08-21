import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"

function Contact() {
    return (
        <div>
            <NavBar/>
            <SectionTitle img={gradPic} title='TEST'/>
        </div>
    );
};

export default Contact;