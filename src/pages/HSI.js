import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"
import Copyright from "../components/Copyright";

function HSI() {
    return (
        <div>
            <NavBar/>
            <SectionTitle img={gradPic} title='Health Service Internship'/>
            <Copyright/>
        </div>
    );
};

export default HSI;