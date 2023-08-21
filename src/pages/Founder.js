import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"
import Copyright from "../components/Copyright";

function Founder() {
    return (
        <div>
            <NavBar/>
            <SectionTitle img={gradPic} title='About Our Founder'/>
            <Copyright/>
        </div>
    );
};

export default Founder;