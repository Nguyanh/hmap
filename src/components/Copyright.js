import Container from "react-bootstrap/Container";
import ocf from '../ocf-hosted-penguin-dark.svg';
import {Link} from "react-router-dom";

function Copyright() {
    return (
        <footer className = 'bg-light position-absolute bottom-0 w-100 p-4'>
            <Container className="justify-content-center w-60">
                <Container className="d-flex flex-row text-start">
                    <img src={ocf} className="image-thumbnail pe-3" alt=''/>
                    <p>We are a student group acting independently of the University of California. We take full responsibility for our organization and this website.</p>
                </Container>
<<<<<<< HEAD
                <p className="m-0">Built with love and React by <Link to="https://www.linkedin.com/in/nguyentanh/">Thu Nguyen</Link>, <Link to="https://www.linkedin.com/in/simonhsieh123/">Simon Hsieh</Link>, and <Link to ="https://www.linkedin.com/in/jean-ye/">Jean Ye</Link>.</p>
                <p className="m-0">© 2023 Health and Medical Apprenticeship Program. All Rights Reserved.</p>
=======
                <Container className="text-center">
                    <p className="m-0">Built with love and React by Thu Nguyen and Simon Hseih.</p>
                    <p className="m-0">© 2023 Health and Medical Apprenticeship Program. All Rights Reserved.</p>
                </Container>
>>>>>>> ca8afcd094f17d7458feef5357ff337550f26d56
            </Container>
        </footer>

    );
};

export default Copyright;