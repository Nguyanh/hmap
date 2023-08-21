import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"
import Copyright from "../components/Copyright";

function FSI() {
    return (
        <div>
            <NavBar/>
            <SectionTitle img={gradPic} title='Field Study Internship'/>
            <Copyright/>
        </div>
    );
};

export default FSI;