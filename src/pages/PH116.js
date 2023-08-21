import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"
import Copyright from "../components/Copyright";

function PH116() {
    return (
        <div>
            <NavBar/>
            <SectionTitle img={gradPic} title='Public Health 116'/>
            <Copyright/>
        </div>
    );
};

export default PH116;