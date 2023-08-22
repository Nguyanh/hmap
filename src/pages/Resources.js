import SectionTitle from "../components/SectionTitle";
import NavBar from "../components/NavBar";
import gradPic from "../gradPic.png"
import Copyright from "../components/Copyright";
import SectionWhite from "../components/SectionWhite";

function Resources() {
    const resourcesHeader = "Resources for TAs";

    const resourcesCont = () =>
    <div>
        To all of our current members of our HMAP Family,

        <p>To continue to improve and help improve our organization, here are some resources for you all to access. Please reach out to the HMAP Coordinator (hmap@berkeley.edu) if any of the links are broken or if you have any questions.</p>
    </div>
    return (
        <div>
            <NavBar/>
            <SectionTitle img={gradPic} title='TA Resources'/>
            <SectionWhite header = {resourcesHeader} content = {resourcesCont()}/>
            <Copyright/>
        </div>
    );
};

export default Resources;