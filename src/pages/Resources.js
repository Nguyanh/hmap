import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"
import Copyright from "../components/Copyright";

function Resources() {
    return (
        <div>
            <NavBar/>
            <SectionTitle img={gradPic} title='TA Resources'/>
            <Copyright/>
        </div>
    );
};

export default Resources;