import NavBar from "../components/NavBar";
import Program from "../components/Program"; // TEST
import Copyright from "../components/Copyright";

function Home(props) {
    return (
        <div>
            <NavBar/>
            <Program/>{/* TEST */}
            <Copyright/>
        </div>
    );
};

export default Home;